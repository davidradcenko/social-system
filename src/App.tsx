import React, {useEffect} from 'react';
import HeaderHtml from "./elements/HeaderHtml";
import Main from "./elements/MainHtml";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./elements/login/Login";
import {Account} from "./elements/Account/Account";
import {RootState, useAppDispatch} from "./store/store";
import {initializeAppTC, statusType} from "./Reducers/InitialazedReducer";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {ProfileUser} from "./elements/profilUser/profileUser";
import {Chat} from "./elements/Chat/Chat";

function Hello() {
    const dispatch = useAppDispatch()
    const status = useSelector<RootState, statusType>(state => state.initialazed.status)
    return (<>
        <HeaderHtml/>
        {status == "loading" ?<LinearProgress /> : ""}
        <Main/>
    </>);
}

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Hello/>}/>*/}
                    <Route path="/" element={<ProfileUser/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Chat" element={<Chat/>}/>


                    <Route path="/404" element={<h1>404. Page not found</h1>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
