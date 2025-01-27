// UIState.ts
import { makeAutoObservable } from 'mobx';
import React from "react";
import {CustomBottomSheetModel} from "../components/CustomBottomSheetModel.tsx";

class UIState {
    bottomSheets: CustomBottomSheetModel[] = [];
    isBottomSheetVisible = false;
    content: React.ReactNode = null;

    isAlertVisible = false;
    alertMessage = "";

    constructor() {
        makeAutoObservable(this);
    }

    // 바텀 시트 추가 함수
    showBottomSheet(content: CustomBottomSheetModel) {
        console.log("시트 열림 ", content.pk)
        this.bottomSheets.push(content); // 새로운 바텀 시트를 배열에 추가
        this.isBottomSheetVisible = true;
    }

    closeBottomSheet(pk: string) {
        const index = this.findBottomSheetIndexByPk(pk)
        console.log("이벤트 발생", pk , index)
        if (index != null) {
            this.bottomSheets[index].show = false
        }
    }

    // 바텀 시트 삭제 함수
    hideBottomSheet(pk: string) {
        console.log("애니메이션 종료" + pk)
        const index = this.findBottomSheetIndexByPk(pk)
        if (index != null) {
            this.bottomSheets.splice(index, 1);
        }

        if (this.bottomSheets.length === 0) {
            this.isBottomSheetVisible = false;
        }
    }

    // 바텀 시트 삭제 함수
    hideAllBottomSheet() {
        this.bottomSheets = []
        if (this.bottomSheets.length === 0) {
            this.isBottomSheetVisible = false;
        }
    }

    // 얼럿 상태 변경
    showAlert(message: string) {
        this.alertMessage = message;
        this.isAlertVisible = true;
    }

    hideAlert() {
        this.isAlertVisible = false;
        this.alertMessage = "";
    }

    findBottomSheetIndexByPk = (pk: string) => {
        const index = this.bottomSheets.findIndex(sheet => sheet.pk === pk);
        return index !== -1 ? index : null; // 일치하는 항목이 없으면 null 반환
    };
}

const uiState = new UIState();
export default uiState;
