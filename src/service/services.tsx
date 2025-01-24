import {jsonPlaceholderRequest} from '../utils/api/api';
import {ENDPOINTS} from '../utils/api/endpoints';
import {HTTP_METHOD} from '../utils/api/constants';
import {TodoModel} from "../routes/Login/Model/TodoModel.tsx";
import {JoinRequestDTO} from "../routes/Login/Model/api/request/JoinRequestDTO.ts";
import axios from "axios";

export const tokenTest = async (): Promise<TodoModel[]> => {
    try {
        console.log(axios.defaults.headers.common['access']); // 'access' 헤더 값 확인
        const response = await jsonPlaceholderRequest({
            url: ENDPOINTS.GET_TODO_LIST,
            method: HTTP_METHOD.GET,
        });

        console.log("받은 데이터", response)
        // 데이터 변환 (TodoModel 객체 배열로 변환)
        return response.data.map((todoData: TodoModel) => {
            return new TodoModel(todoData);
        });
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return []; // 에러 발생 시 빈 배열 반환
    }
};

export const join = async (request: JoinRequestDTO): Promise<number> => {
    try {
        console.log("보내는 데이터", request)
        const response = await jsonPlaceholderRequest({
            url: ENDPOINTS.POST_JOIN,
            method: HTTP_METHOD.POST,
            data: request
        });
        console.log("받은 데이터", response)
        return response.status;
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};

export const login = async (request: JoinRequestDTO): Promise<number> => {
    try {
        console.log("보내는 데이터", request)
        const response = await jsonPlaceholderRequest({
            url: ENDPOINTS.POST_LOGIN,
            method: HTTP_METHOD.POST,
            data: request
        });
        console.log("받은 데이터", response)


        // Bearer 접두사 제거
        jsonPlaceholderRequest.defaults.headers.common['access'] = response.headers["authorization"].substring(7);



        return response.status;
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
        // 에러 처리 (예: 기본값 반환, 에러 던지기 등)
        return 0;
    }
};