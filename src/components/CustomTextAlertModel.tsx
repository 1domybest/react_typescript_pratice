import { makeAutoObservable } from "mobx";

export class CustomTextAlertModel {
    pk: string = "";
    show: boolean = true;
    backgroundTouchClose: boolean = true;
    backgroundColor: string = 'rgba(0, 0, 0, 0.5)';
    contentBackgroundColor: string = 'rgba(0, 0, 0, 0.5)';
    title: string = "'";
    description: string = "";
    leftButtonText: string = "";
    rightButtonText: string = "";

    leftButtonAction: (bool: boolean) => void;
    rightButtonAction: (bool: boolean) => void;
    backgroundTouchAction: () => void;

    constructor(pk: string) {
        this.pk = pk
        this.leftButtonAction = () => {};
        this.rightButtonAction = () => {};
        this.backgroundTouchAction = () => {};

        makeAutoObservable(this); // 상태를 자동으로 감지하고 관찰 가능하게 만듦
    }



    closeTextAlert() {
        this.show = false
    }
}