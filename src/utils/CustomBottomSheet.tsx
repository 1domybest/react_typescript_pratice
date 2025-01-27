import React, {useState, useEffect, useRef} from 'react';
import { CustomBottomSheetModel } from "../components/CustomBottomSheetModel.tsx";
import {observer} from "mobx-react";
import BottomSheetObserver from "./BottomSheetObserver.tsx";
const CustomBottomSheet = observer(({ child, index }: {child: CustomBottomSheetModel; index: number }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false); // 애니메이션 종료 상태 관리
    const bottomSheetRef = useRef<HTMLDivElement>(null); // 애니메이션 끝나는 시점을 알기 위한 ref

    useEffect(() => {
        console.log("시트 열림")
        return () => {
            console.log("시트 닫힘")
        }
    }, []);


    useEffect(() => {
        console.log("이벤트 발생")
        if (child.show) {
            setIsVisible(true); // 컴포넌트가 나타날 때 애니메이션 시작
        } else {
            setIsExiting(true); // 사라지는 애니메이션을 시작
        }

        console.log("시트 열림")
        return () => {
            console.log("시트 닫힘")
        }
    }, [child.show]);

    // 바텀 시트를 닫을 때 애니메이션을 적용
    const handleClose = () => {
        setIsExiting(true); // 사라지는 애니메이션을 시작
        setTimeout(() => {
            setIsVisible(false); // 애니메이션이 끝난 후 isVisible을 false로 설정
        }, 500); // 0.5초 후 isVisible 상태 변경
    };

    // 외부 클릭 시 바텀 시트 닫기
    const handleOutsideClick = (e: React.MouseEvent) => {
        if (child.backgroundTouchClose) {
            // child.view 내부 클릭은 무시하고 외부 클릭 시만 handleClose 호출
            if (e.target === e.currentTarget) {
                handleClose();
            }
        }
    };

    // 애니메이션 종료 후 상태 업데이트
    const handleAnimationEnd = () => {
        if (isExiting) {
            setIsVisible(false); // 애니메이션이 끝나면 isVisible을 false로 설정
            BottomSheetObserver.hideBottomSheet(child.pk)
        }
    };

    return (
        <>
            <div
                ref={bottomSheetRef}
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    backgroundColor: child.backgroundColor,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    zIndex: 1000 + index, // 각 바텀 시트가 올려지도록 순서대로 z-index 설정
                    opacity: isExiting ? 0 : isVisible ? 1 : 0, // isExiting 상태일 때 opacity를 0으로 설정
                    bottom: isExiting ? "-100vh" : isVisible ? "0" : "-100vh", // isExiting 상태일 때 bottom을 -100vh로 설정
                    transition: "bottom 0.5s ease-out, opacity 0.5s ease-out", // 애니메이션 효과
                }}
                onClick={handleOutsideClick} // 외부 클릭 시 handleClose 호출
                onTransitionEnd={handleAnimationEnd} // 애니메이션 끝났을 때 처리
            >
                <div
                    style={{width: "auto", height: "auto"}}
                    onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 중지
                >
                    {child.view}
                </div>
            </div>
        </>
    );
});

export default CustomBottomSheet;
