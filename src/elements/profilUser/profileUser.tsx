import React, {useState} from "react";
import "./profileUser.css";
import ImgLogo from "../../img/common.png";

import HomeIcon from "../../img/nav-icons/home.png";
import DialogsIcon from "../../img/nav-icons/Frame.png";
import MesengerIcon from "../../img/nav-icons/heart.png";
import SeachIcon from "../../img/nav-icons/Group 43.png";
import SetingsIcon from "../../img/nav-icons/settings.png";

import imgVector from "../../img/nav-icons/Vector 1.jpg";

export const ProfileUser = () => {
    const [TextPapap, SetTextPapap] = useState(false)
    const [Vector, SetVector] = useState(true)

    const changeSettextPapap = () => {
        SetTextPapap(!TextPapap)
        SetVector(!Vector)
    }
    return (
        <div className={"Main-block"}>
            <div className={"Navigation-block"}>
                <div className="all-elements-nav">
                    <div className="logo-profil">
                        <img src={ImgLogo} alt="common"/>
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
                                {Vector==true? <img className={"VectorTrue"} onClick={changeSettextPapap} src={imgVector} alt="imgVector"/> : <img className={"VectorFals"} onClick={changeSettextPapap} src={imgVector} alt="imgVector"/> }
                                {TextPapap == true ? <p className={"ProfileIcpn-Test-p-true"}>Edit profile</p> :
                                    <p className={"ProfileIcpn-Test-p-false"}>Edit profile</p>}
                            </div>
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
                            <img src={SeachIcon} alt="SeachIcon"/>
                            <p>Seach</p>
                        </div>
                        <div className={"AlseIcons"}>
                            <img src={SetingsIcon} alt="SetingsIcon"/>
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Main-content"}></div>
        </div>
    )
}