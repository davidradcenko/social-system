import HeaderHtml from "../HeaderHtml";
import {Navigate} from "react-router-dom";
import React, {useCallback, useState} from "react";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import testimg from "../../img/imgTest.jpeg.jpg"
import "./Account.css"
import {initialStateProfileType, profilGetTK} from "../../Reducers/profilReducer";
import {useFormik} from "formik";

export const Account = () => {
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const mainUserId = useSelector<RootState, string>(state => state.initialazed.mainUserId)
    const profileData = useSelector<RootState, initialStateProfileType>(state => state.profil)

    const [stateChenge,setStateChande] = useState(false)





    const formik = useFormik({
        validate: (values) => {
            const errors = {}
            if (values.)
                }
    })

    const logoutHandler = () => {
        dispatch(profilGetTK(Number(mainUserId)))
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
                    <p className={"NameUserMenu"}><span> {profileData.fullName} </span></p>
                    <p className={"StutusWorkUserMenu"}><span
                        className={"status-work"}>Status Work:</span> {profileData.lookingForAJob == true ? "Yes" : "Not"}
                    </p>
                </div>
                <div className="linksMenu">
                    <ul>
                        <li>
                            <button onClick={logoutHandler} className={"InSelect"}>My profile</button>
                        </li>
                        <li><a href="">Messages</a></li>
                        <li><a href="">Users in app</a></li>
                    </ul>
                </div>
            </div>
            <div className={"MainBlockAccount"}>
                <form onSubmit={formik.handleSubmit}>
                    <p>aboutMe: <span onDoubleClick={chengeState}> {profileData.aboutMe} </span></p>
                    <h1>contacts:</h1>
                    <ul>
                        <li>facebook: <span> {profileData.contacts.facebook} </span></li>
                        <li>github: <span> {profileData.contacts.github} </span></li>
                        <li>instagram: <span> {profileData.contacts.instagram} </span></li>
                        <li>mainLink: <span> {profileData.contacts.mainLink} </span></li>
                        <li>twitter: <span> {profileData.contacts.twitter} </span></li>
                        <li>vk: <span> {profileData.contacts.vk} </span></li>
                        <li>website: <span> {profileData.contacts.website} </span></li>
                        <li>youtube: <span> {profileData.contacts.youtube} </span></li>
                    </ul>
                    <p>lookingForAJobDescription: <span> {profileData.lookingForAJobDescription} </span></p>
                </form>
            </div>
            <div className={"Users"}></div>
        </div>
    </>
}