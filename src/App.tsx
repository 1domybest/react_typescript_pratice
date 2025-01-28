// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./App.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {observer} from "mobx-react";

// 바텀시트 얼랏
import CustomTextAlertObserver from "./components/textAlert/TextAlertObserver.tsx";
import CustomBottomSheetObserver from "./components/bottomSheet/BottomSheetObserver.tsx";

import CustomBottomSheet from "./components/bottomSheet/CustomBottomSheet.tsx";
import CustomTextAlert from "./components/textAlert/CustomTextAlert.tsx";

// View
import LoginView from "./routes/Login/View/LoginView.tsx";
import OAuth2SucceedView from "./components/bottomSheet/login/View/OAuth2SucceedView.tsx";
import MainView from "./routes/Main/View/MainView.tsx";
import ENV from "./routes/docker/ENV.tsx";

const App = observer(() => {
    return (
        <>
            <div className={"App"}>
                <Router>
                    {/* 여러 개의 바텀 시트와 얼럿을 상태에 맞춰 표시 */}
                    {CustomBottomSheetObserver.isBottomSheetVisible && CustomBottomSheetObserver.bottomSheetList.map((content, index) => (
                        <CustomBottomSheet child={content} key={index} index={index}/>
                    ))}

                    {CustomTextAlertObserver.isTextAlertVisible && CustomTextAlertObserver.textAlertList.map((content, index) => (
                        <CustomTextAlert child={content} key={index} index={index}/>
                    ))}

                    <Routes>
                        <Route path="/" element={<LoginView />} />
                        <Route path="/oauth2/succeed" element={<OAuth2SucceedView />} />
                        <Route path="/main" element={<MainView someData={""} />} />
                        <Route path="/healthcheck/env" element={<ENV/>} />
                    </Routes>
                </Router>
            </div>
        </>
    );
});

export default App;
