import {makeAutoObservable} from "mobx";
import {join, login} from "../../../service/MemberAPI.tsx";
import {needToken, snsLogin, getData, tokenTest, tokenRefresh} from "../../../service/AuthAPI.tsx";
import {useNavigate} from 'react-router-dom';
import {NavigateFunction} from "react-router";
import {useRef, useState} from "react";
import {CustomBottomSheetModel} from "../../../components/CustomBottomSheetModel.tsx";
import LoginBottomSheet from "../../../utils/LoginBottomSheet.tsx";

import {CustomTextAlertModel} from "../../../components/CustomTextAlertModel.tsx";
import CustomTextAlertObserver from "../../../utils/TextAlertObserver.tsx";
import BottomSheetObserver from "../../../utils/BottomSheetObserver.tsx";

const LoginViewModel = () => {

    const navigate = useRef<NavigateFunction | null>(useNavigate());

    const vm = makeAutoObservable({
        // 초기화 메서드
        init() {
            console.log("생성됨");
        },

        // 메모리 해제 메서드 (실제로는 MobX에서 자동으로 관리하므로 호출은 필요 없음)
        deinit() {
            navigate.current = null;
            console.log("VM 메모리 해제됨");
        },

        // 회원 가입
        async join() {
            const request = {
                username: "myUsername",
                password: "myPassword",
            };

            try {
                const data = await join(request);
                console.log("가입 성공", data);
            } catch (error) {
                console.error("가입 실패", error);
            }
        },

        // 로그인
        async login() {
            const request = {
                username: "myUsername",
                password: "myPassword",
            };

            try {
                const data = await login(request);
                console.log("로그인 성공", data);
            } catch (error) {
                console.error("로그인 실패", error);
            }
        },

        // 토큰 테스트
        async tokenTest() {
            console.log("tokenTest");
            try {
                await tokenTest();
            } catch (error) {
                console.error("토큰 테스트 실패", error);
            }
        },

        // 인증이 필요한 요청
        async needToken() {
            console.log("needToken");
            try {
                const data = await needToken();
                console.log("tokenTest", data);
            } catch (error) {
                console.error("토큰 필요 요청 실패", error);
            }
        },

        // SNS 로그인
        async snsLogin() {
            console.log("SNS 로그인 시작");

            const loginWindow = window.open(
                "http://localhost:5173/login",
                "login",
                "width=400,height=600,top=100,left=100,location=no,resizable=yes,menubar=no,toolbar=no,status=no"
            );

            const checkLoginStatus = setInterval(() => {
                if (loginWindow?.closed) {
                    console.log("자식 창이 닫혔습니다. 로그인 완료 확인 필요.");
                    clearInterval(checkLoginStatus);
                    vm.succeedSNSLogin();
                }
            }, 500);
        },

        // SNS 로그인 성공 처리
        async succeedSNSLogin() {
            try {
                await tokenRefresh()
                 navigate.current?.("/main");
                // 쿠키 제거
                console.log("로그인 성공 메인페이지로 이동 필요");

            } catch (error) {
                console.error("SNS 로그인 실패", error);
            }
        },

        // 데이터 가져오기
        async getData() {
            try {
                const data = await getData();
                console.log("데이터 가져오기 성공", data);
            } catch (error) {
                console.error("데이터 가져오기 실패", error);
            }
        },

        showBottomSheet() {
            const pk:string = crypto.randomUUID();
            const bottomSheetModel:CustomBottomSheetModel = new CustomBottomSheetModel(<LoginBottomSheet pk={pk}/>);
            bottomSheetModel.backgroundColor = "rgb(0, 0, 0, 0.7)"
            bottomSheetModel.pk = pk;
            bottomSheetModel.backgroundTouchClose = true
            BottomSheetObserver.showBottomSheet(bottomSheetModel);
        },

        showTextAlert() {
        const pk:string = crypto.randomUUID();
        const textAlertModel:CustomTextAlertModel = new CustomTextAlertModel(pk);

        textAlertModel.backgroundColor = "rgb(0, 0, 0, 0.7)"
        textAlertModel.contentBackgroundColor = "white"
        textAlertModel.pk = pk;
        textAlertModel.title = "첫번째 창"
        textAlertModel.description = "첫번쨰 내용"
        textAlertModel.backgroundTouchClose = true
        textAlertModel.leftButtonText = "왼쪽 버튼";
        textAlertModel.rightButtonText = "오른쪽 버튼";

        textAlertModel.leftButtonAction = (bool: boolean) => {
            const newPk:string = crypto.randomUUID() + "asdasd";
            console.log("왼쪽 버튼 클릭" , newPk)
            const newTextAlertModel:CustomTextAlertModel = new CustomTextAlertModel(newPk);
            newTextAlertModel.backgroundColor = "rgb(0, 0, 0, 0.7)"
            newTextAlertModel.contentBackgroundColor = "white"
            newTextAlertModel.title = "두번째 창"
            newTextAlertModel.description = "두번째 내용"
            newTextAlertModel.pk = newPk;
            newTextAlertModel.backgroundTouchClose = true
            newTextAlertModel.leftButtonText = "왼쪽 버튼";
            newTextAlertModel.rightButtonText = "오른쪽 버튼";
            CustomTextAlertObserver.showTextAlert(newTextAlertModel);
        }

        textAlertModel.rightButtonAction = (bool: boolean) => {
        }

        CustomTextAlertObserver.showTextAlert(textAlertModel);
    }
    });

    return vm;
};

export default LoginViewModel;

