// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./App.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {observer} from "mobx-react";

// 바텀시트 얼랏
import CustomTextAlertObserver from "./utils/TextAlertObserver.tsx";
import CustomBottomSheetObserver from "./utils/BottomSheetObserver.tsx";

import CustomBottomSheet from "./utils/CustomBottomSheet.tsx";
import CustomTextAlert from "./utils/CustomTextAlert.tsx";

// View
import LoginModalView from "./routes/Login/View/LoginModalView.tsx";
import LoginView from "./routes/Login/View/LoginView.tsx";
import MainView from "./routes/Main/View/MainView.tsx";
import OAuth2SucceedView from "./routes/Login/View/OAuth2SucceedView.tsx";

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
                        <Route path="/login" element={<LoginModalView />} />
                        <Route path="/oauth2/succeed" element={<OAuth2SucceedView />} />
                        <Route path="/main" element={<MainView />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
});

export default App;
