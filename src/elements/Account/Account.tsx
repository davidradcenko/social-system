import HeaderHtml from "../HeaderHtml";
import {Navigate} from "react-router-dom";
import React from "react";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";

export const Account=()=>{
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)

    if (!isLoginIn){
        return <Navigate to={'/Login'} />
    }
return <>
    <HeaderHtml/>
<p>Heelow in Account</p>
</>
}