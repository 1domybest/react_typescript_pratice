import { makeAutoObservable } from "mobx";
import {join, login} from "../../../service/MemberAPI.tsx";
import {needToken, snsLogin, getData, tokenTest} from "../../../service/AuthAPI.tsx";

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

    snsLogin = async () => {
        // 여기에서 로딩 UI 시작
        console.log("tokenTest")
        const loginWindow = window.open(
            "http://localhost:5173/login",
            "login",
            "width=400,height=600,top=100,left=100,location=no,resizable=yes,menubar=no,toolbar=no,status=no"
        );

        // 자식 창의 이벤트를 기다리는 함수
        const checkLoginStatus = setInterval(() => {
            if (loginWindow?.closed) {
                console.log("자식 창이 닫혔습니다. 로그인 완료 확인 필요.");
                clearInterval(checkLoginStatus);
                // 서버에서 로그인 완료 여부 확인 로직 작성
            }
            // 매 0.5초마다 자식이 닫혔는지 확인후에
            // 자식이 닫혔으면 현재 일단 쿠키는 보유한 상태로서 [다만 쿠키를 읽을수는 없음]
            // 서버에 로그인요청 -> 서버에서 먼저 쿠키를 확인하고 로그인처리 -> 그리고 받은 헤더에서 토큰 추출후
            // 디폴트 헤더로 등록
            // 여기에서 api 로 호출한후에 헤더에 토큰이없으면 그냥 직접 닫은걸로 판단후 로그인취소처리
            // 커스텀 모달 -> 모달안에서 클릭후 window.open -> 서버에서 http://localhost:5173/loginSuccess 이런 uri로 리다이렉트
            // loginSuccess 는 열리자마자 닫히도록 구현
        }, 500);


    }

    getData = async () => {
        getData()
            .then(data => {
                console.log("tokenTest", data)
            })
    }
}

