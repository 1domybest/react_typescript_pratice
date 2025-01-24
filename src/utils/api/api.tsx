import axios from 'axios';
import {tokenRefresh} from "../../service/services.tsx";
import { getEndpointByValue } from "./endpoints.tsx";
import { useNavigate } from 'react-router-dom';
let isRefreshing = false;  // 리프레시 토큰 요청 중인지 여부를 나타내는 플래그
let failedQueue: any[] = [];  // 실패한 요청을 큐에 저장

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((cb) => cb(error, token));  // 큐에 있는 모든 실패한 요청을 처리
    failedQueue = [];
};

export const jsonPlaceholderRequest = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    timeout: 3000,
});

jsonPlaceholderRequest.interceptors.request.use(
    (config) => {
        console.log('호출 전 수행할 작업!', config.headers["access"]);
        /*config.headers.Authorization = `Bearer ${localStorage.getItem(
                          'accessToken'
                        )}`;*/

        return config;
    },
    (error) => {
        console.log("에러발생", error.response)
        return Promise.reject(error);
    }
);

jsonPlaceholderRequest.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401 && error.response.data === "need access token") {
            // 토큰이 필요한 순간에 토큰이 없음
            console.log("토큰발급이 필요합니다")
            // window.location.href = "/View1";  // 로그인 페이지로 리다이렉트 혹은 로그인 모달창 띄우기
        }
        return Promise.reject(error);
    }
);