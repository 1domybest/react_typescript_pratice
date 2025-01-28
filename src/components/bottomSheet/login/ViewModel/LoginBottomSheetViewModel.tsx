import {makeAutoObservable} from "mobx";
import {NavigateFunction} from "react-router";
import {tokenRefresh} from "../../../../service/AuthAPI.tsx";


class LoginBottomSheetViewModel {
    navigate: NavigateFunction | null = null;
    pk: string
    loginSucceed: (pk: string) => void;
    loginFailed: (pk: string) => void;
    constructor(pk: string, loginSucceed: (pk: string) => void, loginFailed: (pk: string) => void) {
        this.pk = pk;
        this.loginSucceed = loginSucceed;
        this.loginFailed = loginFailed;

        console.log("pk", pk)
        makeAutoObservable(this);
    }

    init() {

    }

    deinit() {

    }

    // 네비게이터 설정
    setNavigate(navigate: NavigateFunction) {
        this.navigate = navigate;
    }

    snsLogin(provider: string) {
        const loginWindow = window.open(
            `http://localhost:8080/oauth2/authorization/${provider}`,
            "login",
            "width=auto,height=auto,top=100,left=100,location=no,resizable=yes,menubar=no,toolbar=no,status=no"
        );

        const checkLoginStatus = setInterval(async () => {
            if (loginWindow?.closed) {
                console.log("자식 창이 닫혔습니다. 로그인 완료 확인 필요.");
                clearInterval(checkLoginStatus);
                await this.succeedSNSLogin();
            }
        }, 500);
    }

    // SNS 로그인 성공 처리
    async succeedSNSLogin() {
        await tokenRefresh()
            .then(() => {
                this.loginSucceed(this.pk)
            })
            .catch(error => {
                this.loginFailed(this.pk)
                console.log(error)
            })
    }

}

export default LoginBottomSheetViewModel;