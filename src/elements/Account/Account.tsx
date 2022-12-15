import HeaderHtml from "../HeaderHtml";
import {Navigate} from "react-router-dom";
import React, {useCallback, useState} from "react";
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import testimg from "../../img/imgTest.jpeg.jpg"
import "./Account.css"
import {profilChangeTK, profilGetTK} from "../../Reducers/profilReducer";
import {useFormik} from "formik";
import {initialStateProfileType} from "../../API/api";
import {loginIn} from "../../Reducers/LoginReducer";

export const Account = () => {
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const mainUserId = useSelector<RootState, string>(state => state.initialazed.mainUserId)
    const profileData = useSelector<RootState, initialStateProfileType>(state => state.profil)

    const [stateChenge,setStateChande] = useState(false)


const chengeState=(value:boolean)=>{
    setStateChande(value)
}

    type FormikErrorType = {
        aboutMe?: string
        lookingForAJob?: boolean,
        lookingForAJobDescription?: string,
        fullName?: string

        facebook?: string | null,
        github?: string | null,
        instagram?: string | null,
        mainLink?: string | null,
        twitter?: string | null,
        vk?: string | null,
        website?: string | null,
        youtube?: string | null
    }
    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (values.aboutMe.length >= 100) {
                errors.aboutMe = 'Invalid aboutMe input, max literal 100';
            }
            if (values.lookingForAJobDescription.length >= 100) {
                errors.lookingForAJobDescription = 'Invalid aboutMe input, max literal 100';
            }
            if (values.fullName.length >= 100) {
                errors.fullName = 'Invalid aboutMe input, max literal 100';
            }
            if (values.facebook.length >= 100) {
                errors.facebook = 'Invalid aboutMe input, ma x literal 100';
            }
            if (values.aboutMe.length >= 100) {
                errors.aboutMe = 'Invalid aboutMe input, max literal 100';
            }





            return errors;
        },

        initialValues: {
            aboutMe: profileData.aboutMe,
            lookingForAJob: profileData.lookingForAJob,
            lookingForAJobDescription: profileData.lookingForAJobDescription,
            fullName: profileData.fullName,

            facebook: profileData.contacts.facebook,
            github:profileData.contacts.github,
            instagram: profileData.contacts.instagram,
            mainLink: profileData.contacts.mainLink,
            twitter: profileData.contacts.twitter,
            vk:profileData.contacts.vk,
            website: profileData.contacts.website,
            youtube: profileData.contacts.youtube
        },
        onSubmit: values => {
            //dispatch(profilChangeTK(values))
        },
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
                    <p>aboutMe:{stateChenge == false? <span> {profileData.aboutMe} </span> : <input {...formik.getFieldProps("aboutMe")} type="text"/>}</p>
                    {formik.errors.aboutMe ? <div>{formik.errors.aboutMe}</div> : null}
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
                {stateChenge == false ? <button type={'submit'}  onClick={()=>chengeState(true)}>Change</button>: <button type={'submit'}  onClick={()=>chengeState(false)}>Save</button>}
            </div>
            <div className={"Users"}></div>
        </div>
    </>
}