import styled from "styled-components";

import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import LoginBottomSheetViewModel from "../ViewModel/LoginBottomSheetViewModel.tsx";

export interface BottomSheetProps {
    pk: string;
    loginSucceed: (pk: string) => void;
    loginFailed: (pk: string) => void;
}


const LoginBottomSheetView = observer(({ pk, loginSucceed, loginFailed }: BottomSheetProps) => {

    const navigate = useNavigate();
    const vm = useRef<LoginBottomSheetViewModel | null>(new LoginBottomSheetViewModel(pk, loginSucceed, loginFailed));

    useEffect(() => {
        console.log("View 마운트")
        console.log("View 마운트")
        vm.current?.init()
        vm.current?.setNavigate(navigate)
        return () => {
            // ViewModel 정리 (필요할 경우)
            // 메모리 해제
            console.log("View 언마운트")
            vm.current?.deinit();
            vm.current = null;
        };
    }, []);

    return <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            height: "auto",
        }}>
            <button onClick={(event) => {
                event.preventDefault()
                vm.current?.snsLogin("naver")
                // window.location.href = `http://localhost:8080/oauth2/authorization/naver`
            }}>
                네이버 로그인
            </button>
        </div>

    </>
});


export default LoginBottomSheetView;