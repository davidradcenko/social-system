import React, {useCallback} from 'react';
import {dataType, social} from "./API/api";
import HeaderHtml from "./elements/HeaderHtml";
import Main from "./elements/MainHtml";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./elements/login/Login";


function Hello() {
    return (<>
        <HeaderHtml/>
        <Main/>
    </>);
}

function App() {
    const me = () => {
        const data: dataType = {
            email: "davedqwerty1@gmail.com",
            password: "davidqwerty07112001",
            rememberMe: true,
        }
        return social.authMe()
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={  <Hello/>}/>
                <Route path="/Login" element={  <Login/>}/>

                <Route path="/404" element={<h1>404. Page not found</h1> }/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>

        </div>
    );
}

export default App;
