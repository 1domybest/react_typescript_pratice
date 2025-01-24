import {jsonPlaceholderRequest} from '../utils/api/apiInterceptors.tsx';
import {ApiEnums, HeaderKeys, HTTP_METHOD} from '../utils/api/ServerEnum.tsx';
import {JoinRequestDTO} from "../routes/Login/Model/api/request/JoinRequestDTO.ts";
import {tokenRefresh} from "./AuthAPI.tsx";


// 가입하기
export const join = async (request: JoinRequestDTO): Promise<number> => {
    try {
        const response = await jsonPlaceholderRequest({
            url: ApiEnums.POST_JOIN,
            method: HTTP_METHOD.POST,
            data: request
        });

        return response.status;
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};

// 로그인
export const login = async (request: JoinRequestDTO): Promise<number> => {
    try {
        delete jsonPlaceholderRequest.defaults.headers.common[HeaderKeys.Authorization]
        const response = await jsonPlaceholderRequest({
            url: ApiEnums.POST_LOGIN,
            method: HTTP_METHOD.POST,
            data: request
        });

        // Bearer 접두사 제거
        jsonPlaceholderRequest.defaults.headers.common[HeaderKeys.Authorization] = response.headers[HeaderKeys.Authorization].substring(7);

        // 서버 토큰 (만료시간 - 1분) 전에 토큰 재발급
        setTimeout(tokenRefresh, 10000);
        return response.status;
    } catch (error) {
        console.error("login 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};