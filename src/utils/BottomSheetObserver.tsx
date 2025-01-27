// UIState.ts
import { makeAutoObservable } from 'mobx';
import {CustomBottomSheetModel} from "../components/CustomBottomSheetModel.tsx";

class BottomSheetObserver {
    bottomSheetList: CustomBottomSheetModel[] = [];
    isBottomSheetVisible = false;

    isAlertVisible = false;
    alertMessage = "";

    constructor() {
        makeAutoObservable(this);
    }

    // 바텀 시트 추가 함수
    showBottomSheet(content: CustomBottomSheetModel) {
        console.log("시트 열림 ", content.pk)
        this.bottomSheetList.push(content); // 새로운 바텀 시트를 배열에 추가
        this.isBottomSheetVisible = true;
    }

    closeBottomSheet(pk: string) {
        const index = this.findBottomSheetIndexByPk(pk)
        console.log("이벤트 발생", pk , index)
        if (index != null) {
            this.bottomSheetList[index].show = false
        }
    }

    // 바텀 시트 삭제 함수
    hideBottomSheet(pk: string) {
        console.log("애니메이션 종료" + pk)
        const index = this.findBottomSheetIndexByPk(pk)
        if (index != null) {
            this.bottomSheetList.splice(index, 1);
        }

        if (this.bottomSheetList.length === 0) {
            this.isBottomSheetVisible = false;
        }
    }

    // 바텀 시트 삭제 함수
    hideAllBottomSheet() {
        this.bottomSheetList = []
        if (this.bottomSheetList.length === 0) {
            this.isBottomSheetVisible = false;
        }
    }

    findBottomSheetIndexByPk = (pk: string) => {
        const index = this.bottomSheetList.findIndex(sheet => sheet.pk === pk);
        return index !== -1 ? index : null; // 일치하는 항목이 없으면 null 반환
    };
}

const CustomBottomSheetObserver = new BottomSheetObserver();
export default CustomBottomSheetObserver;
