import {makeAutoObservable} from "mobx";
import {NavigateFunction} from "react-router";


class DefaultViewModel {
    navigate: NavigateFunction | null = null;

    constructor() {
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

}

export default DefaultViewModel;