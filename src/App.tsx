import React, {useCallback} from 'react';
import HeaderHtml from "./elements/HeaderHtml";
import Main from "./elements/MainHtml";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./elements/login/Login";
import {Account} from "./elements/Account/Account";
import {LoginApi, LoginParamType} from "./API/api";


function Hello() {
    return (<>
        <HeaderHtml/>
        <Main/>
    </>);
}

function App() {
    const me = () => {
        const data: LoginParamType = {
            email: "davedqwerty1@gmail.com",
            password: "davidqwerty07112001",
            rememberMe: true,
        }
        return LoginApi.authMe()
    }

    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={  <Hello/>}/>
                <Route path="/Login" element={  <Login/>}/>
                <Route path="/Account" element={  <Account/>}/>


                <Route path="/404" element={<h1>404. Page not found</h1> }/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
