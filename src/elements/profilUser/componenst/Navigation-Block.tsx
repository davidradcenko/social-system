import ImgLogo from "../../../img/common.png";
import HomeIcon from "../../../img/nav-icons/home.png";
import imgVector from "../../../img/nav-icons/Vector 1.jpg";
import DialogsIcon from "../../../img/nav-icons/Frame.png";
import MesengerIcon from "../../../img/nav-icons/heart.png";
import SeachIcon from "../../../img/nav-icons/Group 43.png";
import SetingsIcon from "../../../img/nav-icons/settings.png";
import React, {useState} from "react";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import website from "../../../img/nav-icons/icons-sosial/www.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
type NavigationBlockTypes={
    EditModeProfil:boolean,
    changeSetEditModeProfil:()=>void,
    SeatchFormActivated:boolean,
    changesActivatedSeatch:()=>void
}
export const NavigationBlock = (props:NavigationBlockTypes) => {
    const [Vector, SetVector] = useState(true)
    const [TextPapap, SetTextPapap] = useState(false)


    const changeSettextPapap = () => {
        SetTextPapap(!TextPapap)
        SetVector(!Vector)
    }

    return (
        <div className={"Navigation-block"}>
            <div className="all-elements-nav">
                <div className="logo-profil">
                    <img className={'logo-profilLOGO'} src={ImgLogo} alt="common"/>
                    <div className="profile">
                        <img src="" alt="User img"/>
                        <p>David Radchenko</p>
                    </div>
                </div>
                <div className="main-navi">
                    <div className={"ProfilIcon"}>
                        <img src={HomeIcon} alt="HomeIcon"/>
                        <div className={"ProfilIcon-text"}>
                            <p>Profil</p>
                            {Vector == true
                                ?
                                <img className={"VectorTrue"} onClick={changeSettextPapap} src={imgVector}
                                     alt="imgVector"/>
                                :
                                <img className={"VectorFals"} onClick={changeSettextPapap} src={imgVector}
                                     alt="imgVector"/>}

                            {TextPapap == true
                                ?
                                <p onClick={props.changeSetEditModeProfil}
                                   className={props.EditModeProfil == true
                                       ? "ProfileIcpn-Test-p-trueBlackOnCliked"
                                       : "ProfileIcpn-Test-p-true"}>Edit profile</p>
                                :
                                <p className={"ProfileIcpn-Test-p-false"}>Edit profile</p>}
                        </div>
                    </div>

                    <div className={"AlseIcons-HomeIcon AlseIcons"}>
                        <img onClick={props.changeSetEditModeProfil} src={HomeIcon} alt="HomeIcon"/>
                    </div>

                    <div className={"AlseIcons"}>
                        <img src={DialogsIcon} alt="DialogsIcon"/>
                        <p>Dialogs</p>
                    </div>
                    <div className={"AlseIcons"}>
                        <img src={MesengerIcon} alt="MesengerIcon"/>
                        <p>Message</p>
                    </div>
                    <div className={"AlseIcons"}>
                        <img onClick={props.changesActivatedSeatch} src={SeachIcon} alt="SeachIcon"/>
                        <p className={props.SeatchFormActivated == true ? "SeatchFormActive" : ""}
                           onClick={props.changesActivatedSeatch}>Seach</p>
                    </div>
                    <div className={"AlseIcons"}>
                        <img src={SetingsIcon} alt="SetingsIcon"/>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}