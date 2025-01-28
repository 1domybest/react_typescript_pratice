import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import DefaultViewModel from "../ViewModel/DefaultViewModel.tsx";

export interface DefaultViewProps {
    someData: string;
}


const DefaultView = observer(({ someData }: DefaultViewProps) => {

    const navigate = useNavigate();
    const vm = useRef<DefaultViewModel | null>(new DefaultViewModel());

    useEffect(() => {
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
    </>
});


export default DefaultView;