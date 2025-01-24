import DisneyYoutube from './routes/DisneyYoutube/View/DisneyYoutube.tsx'
import MainView from './routes/Main/View/MainView.tsx'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./App.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderView from "./components/HeaderView.tsx";
import LoginView from "./routes/Login/View/LoginView.tsx";

import View1 from "./routes/View1.tsx";
import View2 from "./routes/View2.tsx";
import View3 from "./routes/View3.tsx";
import View4 from "./routes/View4.tsx";

function App() {
    return (
        <>
            <div className={"App"}>
                <Router>
                    {/*<HeaderView/>*/}
                    <Routes>
                        <Route path="/main" element={
                            <MainView/>
                            // <DisneyYoutube/>
                        }>
                        </Route>
                        <Route path="/home" element={
                            <DisneyYoutube/>
                        }>
                        </Route>
                        <Route path="/" element={
                            <LoginView/>
                        }>
                        </Route>

                        <Route path="/View1" element={
                            <View1/>
                        }>
                        </Route>

                        <Route path="/View2" element={
                            <View2/>
                        }>
                        </Route>

                        <Route path="/View3" element={
                            <View3/>
                        }>
                        </Route>

                        <Route path="/View4" element={
                            <View4/>
                        }>
                        </Route>


                    </Routes>
                </Router>
            </div>
        </>

    )
}

export default App
