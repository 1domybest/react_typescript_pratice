import { makeAutoObservable } from "mobx";
import { HomeModel } from "../../DisneyYoutube/Model/HomeModel.tsx";
import axios from 'axios'
import {TodoModel} from "../Model/TodoModel.tsx";
import {forEach} from "react-bootstrap/ElementChildren";
import {getTodoList, join, login, tokenTest} from "../../../service/services.tsx";
import {JoinRequestDTO} from "../Model/api/request/JoinRequestDTO.ts";

interface Todo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}


export default class LoginViewModel {
    todoModelList: TodoModel[] = []; // TodoModel 객체 배열
    isLoading: boolean = true;

    init() {
        console.log("생성됨")
        // this.fetchTodo()
        //     .then(() => {
        //         this.isLoading = false;
        //     })
    }

    deinit() {
        console.log("VM 메모라 해제됨")
    }

    constructor() {

        makeAutoObservable(this); // 기본적인 설정

        this.init();
    }

    join = async () => {
        console.log("조인")
        const request: JoinRequestDTO = {
            username: "myUsername",
            password: "myPassword",
        };

        join(request)
            .then(data => {
                console.log("가입 성공", data)
            })
    }

    login = async () => {
        console.log("조인")
        const request: JoinRequestDTO = {
            username: "myUsername",
            password: "myPassword",
        };

        login(request)
            .then(data => {
                console.log("가입 성공", data)
            })
    }

    tokenTest = async () => {
        console.log("tokenTest")
        tokenTest()
            .then(data => {
                console.log("tokenTest", data)
            })
    }
}

// export default LoginViewModel = new LoginViewModel();
