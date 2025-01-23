import { makeAutoObservable } from "mobx";
import { HomeModel } from "../../DisneyYoutube/Model/HomeModel.tsx";

export default class LoginViewModel {
    homeData:HomeModel = new HomeModel("", ""); // Model 데이터를 저장
    isLoading: boolean = true;

    init() {
        this.fetchHomeData()
            .then((result) => {
                this.homeData = result;
                console.log("성공:", result); // "성공: 데이터 로드 성공!"
                this.isLoading = false;
            })
            .catch((error) => {
                console.error("실패:", error); // "실패: 데이터 로드 실패!"
            });
    }

    constructor() {

        makeAutoObservable(this); // 기본적인 설정

        this.init();
    }

    // 데이터를 로드하는 메서드
    fetchHomeData = (): Promise<HomeModel> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("???")
                resolve(new HomeModel("이름", "내용"));
                // if (Math.random() < 0.5) {
                //     resolve(new HomeModel("이름", "내용"));
                // } else {
                //     reject("데이터 로드 실패!");
                // }
            }, 1000);
        });
    };
}

// export default LoginViewModel = new LoginViewModel();
