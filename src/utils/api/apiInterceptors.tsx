import axios from 'axios';
import {HeaderKeys, ServerConstants} from "./ServerEnum.tsx";

export const jsonPlaceholderRequest = axios.create({
    baseURL: ServerConstants.BASE_URL,
    withCredentials: true,
    timeout: 3000,
});

jsonPlaceholderRequest.interceptors.request.use(
    (config) => {
        console.log('호출 전 수행할 작업!', config.headers[HeaderKeys.Authorization]);
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