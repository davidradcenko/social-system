import VectopCloseEditWindow from "../../../img/Vector-close-Edit-profil.png";
import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import website from "../../../img/nav-icons/icons-sosial/www.png";
import React from "react";

export const EditModeProfilWind=(props)=>{
    return(
        <div className={props.EditModeProfil == true ? "Edit-profil-menu" : "Edit-profil-menu-none"}>
            <img onClick={props.changeSetEditModeProfil} className={"VectopCloseEditWindow"}
                 src={VectopCloseEditWindow} alt="VectopCloseEditWindow"/>
            {/*Edit Menu start*/}
            <div className="Edit-mode-Frofil">
                <p>Edit profile</p>
                <div className="EditMode-classfotoFrofel-gradient"><img src={testForo} alt="testForo"/></div>

                <div className="Edit-mode-Inputs">
                    <p>Name:</p>
                    <input id={"Edit-mode-Name"} type="text"/>
                    <p className={"Edit-mode-looking-for-job"}>Job search: <input name={"dd"} type="checkbox"/>
                    </p>
                    <p>Professional skills:</p>
                    <input type="text"/>
                    <p>About:</p>
                    <textarea></textarea>
                    <p>Choose:</p>
                    <div className={"Edit-mode-sosial"}>
                        <img onClick={() => props.changeSetObjectIconsState(twiter)} src={twiter} alt="twiter"/>
                        <img onClick={() => props.changeSetObjectIconsState(facebook)} src={facebook} alt="facebook"/>
                        <img onClick={() => props.changeSetObjectIconsState(vk)} src={vk} alt="vk"/>
                        <img onClick={() => props.changeSetObjectIconsState(instagram)} src={instagram}
                             alt="instagram"/>
                        <img onClick={() => props.changeSetObjectIconsState(youtube)} src={youtube} alt="youtube"/>
                        <img onClick={() => props.changeSetObjectIconsState(github)} src={github} alt="github"/>
                        <img onClick={() => props.changeSetObjectIconsState(website)} src={website} alt="website"/>
                    </div>
                    <div className={"Edit-mode-social-inputs"}>
                        <input value={"https://"} id={"Edit-mode-input-types"} type="text"/>
                        <img src={props.objectIconsState} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    )
}