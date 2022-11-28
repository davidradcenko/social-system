import HeaderHtml from "../HeaderHtml";
import {Navigate} from "react-router-dom";
import React from "react";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";

export const Account = () => {
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)

    if (!isLoginIn) {
        return <Navigate to={'/Login'}/>
    }
    return <>
        <HeaderHtml/>
        <div className={"MainBlocCoverAccount"}>
            <div className={"MenuAccount"}>
                <div className="imgFrofil">
                    <img src="../../img/imgTest.jpeg.jpg" alt="Imadge whis main foto"/>
                </div>
                <div className="InfoUserInMenu">
                    <p className={"NameUserMenu"}>David Radchenko</p>
                    <p className={"StutusWorkUserMenu"}>Status Work: I looking</p>
                </div>
                <div className="linksMenu">
                    <ul>
                        <li><a href="">My profile</a></li>
                        <li><a href="">Messages</a></li>
                        <li><a href="">Users in app</a></li>
                    </ul>
                </div>
            </div>
            <div className={"MainBlockAccount"}></div>
            <div className={"Users"}></div>
        </div>
    </>
}