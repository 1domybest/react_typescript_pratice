import { makeAutoObservable } from "mobx";
import {join, login} from "../../../service/MemberAPI.tsx";
import {needToken, tokenTest} from "../../../service/AuthAPI.tsx";

import {JoinRequestDTO} from "../Model/api/request/JoinRequestDTO.ts";


export default class LoginViewModel {

    init() {
        console.log("생성됨")
    }

    deinit() {
        console.log("VM 메모라 해제됨")
    }

    constructor() {

        makeAutoObservable(this); // 기본적인 설정

        this.init();
    }

    join = async () => {
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
            .then(() => {

            })
    }

    needToken = async () => {
        console.log("tokenTest")
        needToken()
            .then(data => {
                console.log("tokenTest", data)
            })
    }
}

