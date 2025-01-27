// 예시 사용 컴포넌트
import {CustomBottomSheetModel} from "../components/CustomBottomSheetModel.tsx";
import BottomSheetObserver from "./BottomSheetObserver.tsx";
import {useState} from "react";

const LoginBottomSheet = ({ pk }: { pk: string }) => {
    const [newPk, setNewPk] = useState<string>("")

    const openNewBottomSheet = () => {
        const newPk:string = crypto.randomUUID();
        const bottomSheetModel:CustomBottomSheetModel = new CustomBottomSheetModel(<LoginBottomSheet pk={newPk}/>);
        setNewPk(newPk);
        bottomSheetModel.pk = newPk;
        bottomSheetModel.backgroundColor = "white"
        BottomSheetObserver.showBottomSheet(bottomSheetModel);
    }

    const closeBottomSheet = () => {
        BottomSheetObserver.closeBottomSheet(pk);
    }

    return (
        <div>
            <h1>Main Content</h1>
            <div>
                <h3>Custom Content Inside Bottom Sheet</h3>
                <p>This is some content that can be dynamically passed into the bottom sheet.</p>
            </div>
            <button onClick={(event) => {
                event.preventDefault();
                openNewBottomSheet();
            }}>새로운 바텀 열기
            </button>

            <button onClick={(event) => {
                event.preventDefault();
                closeBottomSheet();
            }}>
                현재 바텀 닫기
            </button>

            <button onClick={(event) => {
                event.preventDefault();
                BottomSheetObserver.hideAllBottomSheet();
            }}>
                모든 바텀 닫기
            </button>
        </div>
    );
};

export default LoginBottomSheet;