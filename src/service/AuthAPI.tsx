import {jsonPlaceholderRequest} from '../utils/api/apiInterceptors.tsx';
import {ApiEnums, HeaderKeys, HTTP_METHOD} from '../utils/api/ServerEnum.tsx';

// 토큰 재발급 api
export const tokenRefresh = async () => {
    try {
        // 리프레시 토큰을 사용하여 엑세스 토큰 갱신 요청
        const response = await jsonPlaceholderRequest({
            url: ApiEnums.TOKEN_REFRESH,
            method: HTTP_METHOD.POST,
        });

        // 서버에서 받은 새로운 엑세스 토큰을 기본 헤더에 설정
        jsonPlaceholderRequest.defaults.headers.common[HeaderKeys.Authorization] = response.headers[HeaderKeys.Authorization].substring(7);

        console.log("엑세스 토큰 리프레쉬", response);
    } catch (error) {
        console.error("리프레쉬 요청 중 오류 발생:", error);
        return Promise.reject(error);
    }
};


// 토큰이 필요한 api 를 토큰없이 보내는 테스트
export const needToken = async () => {
    try {
        await jsonPlaceholderRequest({
            url: ApiEnums.BASE,
            method: HTTP_METHOD.GET,
        });

        // 데이터 변환 (TodoModel 객체 배열로 변환)
    } catch (error) {
        console.error("needToken:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return []; // 에러 발생 시 빈 배열 반환
    }
};

// 토큰이 정상적으로 처리가 되는지 확인하는 테스트
export const tokenTest = async () => {
    try {
        await jsonPlaceholderRequest({
            url: ApiEnums.TOKEN_TEST,
            method: HTTP_METHOD.GET,
        });

    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return []; // 에러 발생 시 빈 배열 반환
    }
};

// 토큰이 정상적으로 처리가 되는지 확인하는 테스트
export const snsLogin = async () => {
    // window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
    window.open(
        "http://localhost:5173/login",
        "login",
        "width=400,height=600,top=100,left=100,location=no,resizable=yes,menubar=no,toolbar=no,status=no"
    );
};

export const getData = async () => {
    try {
        const response = await jsonPlaceholderRequest({
            url: '/my',
            method: HTTP_METHOD.GET,
        });

        console.log(response);

        alert(response.data)
        console.log("sns getData 응답정보", response)
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return []; // 에러 발생 시 빈 배열 반환
    }
};