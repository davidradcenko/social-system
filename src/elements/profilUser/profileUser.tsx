import React, {useState} from "react";
import "./profileUser.css";
import ImgLogo from "../../img/common.png";

import HomeIcon from "../../img/nav-icons/home.png";
import DialogsIcon from "../../img/nav-icons/Frame.png";
import MesengerIcon from "../../img/nav-icons/heart.png";
import SeachIcon from "../../img/nav-icons/Group 43.png";
import SetingsIcon from "../../img/nav-icons/settings.png";

import imgVector from "../../img/nav-icons/Vector 1.jpg";
import testForo from "../../img/unsplash_ILip77SbmOE.png";

import twiter from "../../img/icons-profel/Social.png";
import facebook from "../../img/icons-profel/Social-3.png";
import vk from "../../img/icons-profel/Social-1.png";
import vaiber from "../../img/icons-profel/Social-2.png";

import customization from "../../img/icons-profel/customizachen.png";

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
                                {Vector == true ?
                                    <img className={"VectorTrue"} onClick={changeSettextPapap} src={imgVector}
                                         alt="imgVector"/> :
                                    <img className={"VectorFals"} onClick={changeSettextPapap} src={imgVector}
                                         alt="imgVector"/>}
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
            <div className={"Main-content"}>
                <div className="mainChaend">
                    <div className="main-info">
                        <div className={"lardge-foto"}>
                            <img src={testForo} alt="large img"/>
                        </div>
                        <div className={"info-profil"}>
                            <p className="Name-InfoProfil">DAVID RADCHENKO</p>
                            {/*Status-InfoProfil*/}
                            <p className="JobSearch-InfoProfil">Job search: <input className={"Checkbox-InfoProfil"} type={"checkbox"}/></p>

                            <p className="ProfessionSkils-InfoProfil">Frofessional skills:</p>
                            <p className="ProfessionsSkils-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases,
                                JavaEE,Java Spring</p>

                            <p className="About-InfoProfil">About:</p>
                            <p className="About-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java
                                Spring React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java Spring React, Redux,CSS,
                                My Sql,Oracle Databases, JavaEE,Java Spring</p>

                            <div className="social-InfoProffil">
                                <img src={twiter} alt="twiter"/>
                                <img src={facebook} alt="facebook"/>
                                <img src={vk} alt="vk"/>
                                <img src={vaiber} alt="vaiber"/>
                            </div>
                        </div>
                    </div>
                    <div className="Menu-recomen">
                        <div className={"one-pas"}>
                            <input className={"seatch-menu"} type="text"/>
                            <img  src={customization} alt="customization"/>
                        </div>
                        <div className={"two-pas"}>
                            <p className="recomend-menu"> <img src={customization} alt="customization"/>Recommendations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}