import HeaderHtml from "../HeaderHtml";
import {Navigate} from "react-router-dom";
import React, {useCallback} from "react";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import testimg from "../../img/imgTest.jpeg.jpg"
import "./Account.css"
import {profilGetTK} from "../../Reducers/profilReducer";

export const Account = () => {
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const mainUserId = useSelector<RootState, string>(state => state.initialazed.mainUserId)


     const logoutHandler=()=> {
        dispatch(profilGetTK(Number(mainUserId)))
        console.log("eeeeeeeeeewwefwfwefew")
    }

    if (!isLoginIn) {
        return <Navigate to={'/Login'}/>
    }
    return <>
        <HeaderHtml/>
        <div className={"MainBlocCoverAccount"}>
            <div className={"MenuAccount"}>
                <div className="imgFrofil">
                    <img src={testimg} alt="Imadge whis main foto"/>
                </div>
                <div className="InfoUserInMenu">
                    <p className={"NameUserMenu"}>David Radchenko</p>
                    <p className={"StutusWorkUserMenu"}><span className={"status-work"}>Status Work:</span> I looking</p>
                </div>
                <div className="linksMenu">
                    <ul>
                        <li><button onClick={logoutHandler} className={"InSelect"} >My profile</button></li>
                        <li><a href="">Messages</a></li>
                        <li><a href="">Users in app</a></li>
                    </ul>
                </div>
            </div>
            <div className={"MainBlockAccount"}>
                <p>aboutMe:</p>
                <h1>contacts:</h1>
                <ul>
                    <li>facebook:</li>
                    <li>github:</li>
                    <li>instagram:</li>
                    <li>mainLink:</li>
                    <li>twitter:</li>
                    <li>vk:</li>
                    <li>website:</li>
                    <li>youtube:</li>
                </ul>

                <p>lookingForAJob</p>
                <p>lookingForAJobDescription</p>
                <p>fullName</p>
            </div>
            <div className={"Users"}></div>
        </div>
    </>
}