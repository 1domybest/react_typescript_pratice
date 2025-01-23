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

                    </Routes>
                </Router>
            </div>
        </>

    )
}

export default App
