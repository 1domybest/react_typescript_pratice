// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./App.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginView from "./routes/Login/View/LoginView.tsx";
import LoginModalView from "./routes/Login/View/LoginModalView.tsx";

function App() {
    return (
        <>
            <div className={"App"}>
                <Router>
                    {/*<HeaderView/>*/}
                    <Routes>
                        <Route path="/" element={
                            <LoginView/>
                        }>
                        </Route>

                        <Route path="/login" element={
                            <LoginModalView/>
                        }>
                        </Route>


                    </Routes>
                </Router>
            </div>
        </>

    )
}

export default App
