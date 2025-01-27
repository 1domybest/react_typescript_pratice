import { makeAutoObservable } from "mobx";
import React from "react";

export class CustomBottomSheetModel {
    pk: string = "";
    show: boolean = true;
    backgroundTouchClose: boolean = true;
    view: React.ReactNode = null;
    backgroundColor: string = 'rgba(0, 0, 0, 0.5)';

    constructor(view: React.ReactNode) {
        this.view = view;
        makeAutoObservable(this); // 상태를 자동으로 감지하고 관찰 가능하게 만듦
    }

    // 상태 업데이트 메서드 추가
    setBackgroundColor(color: string) {
        this.backgroundColor = color;
    }

    setBackgroundTouchClose(status: boolean) {
        this.backgroundTouchClose = status;
    }

    closeBottomSheet() {
        this.show = false
    }
}