import React, {useCallback, useEffect} from 'react';
import HeaderHtml from "./elements/HeaderHtml";
import Main from "./elements/MainHtml";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./elements/login/Login";
import {Account} from "./elements/Account/Account";
import {LoginApi, LoginParamType} from "./API/api";
import {RootState, useAppDispatch} from "./store/store";
import {useSelector} from "react-redux";


function Hello() {
    return (<>
        <HeaderHtml/>
        <Main/>
    </>);
}

function App() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={  <Hello />}/>
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
