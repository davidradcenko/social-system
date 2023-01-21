import React, {useEffect, useRef, useState} from "react";
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

import VectopCloseEditWindow from "../../img/Vector-close-Edit-profil.png";

import customization from "../../img/icons-profel/customizachen.png";

import testInfoBlockImg from "../../img/icons-profel/Ellipse 17.png";
import {isBooleanObject} from "util/types";

export const ProfileUser = () => {
    const [TextPapap, SetTextPapap] = useState(false)
    const [Vector, SetVector] = useState(true)
    const changeSettextPapap = () => {
        SetTextPapap(!TextPapap)
        SetVector(!Vector)
    }


    const [PapapSelection, SetPapapSelection] = useState(false)
    const [CheckboxStat, SetCheckboxStat] = useState<boolean>()
    const [PapapSelection2, SetPapapSelection2] = useState(false)
    const [CheckboxStat2, SetCheckboxStat2] = useState<boolean>()

    const changeSetCheckboxStat2=(valer:boolean)=>{
        SetCheckboxStat2(valer)
    }
    const changeSetPapapSelection2= ()=>{
        SetPapapSelection2(!PapapSelection2)
    }
    const changeSetCheckboxStat=(valer:boolean)=>{
        SetCheckboxStat(valer)
    }
    const changeSetPapapSelection= ()=>{
        SetPapapSelection(!PapapSelection)
    }

    const [EditModeProfil, SetEditModeProfil] = useState<boolean>(false)
    const changeSetEditModeProfil=()=>{
        SetEditModeProfil(!EditModeProfil)
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
                                {TextPapap == true ? <p onClick={changeSetEditModeProfil} className={EditModeProfil==true?"ProfileIcpn-Test-p-true BlackOnCliked":"ProfileIcpn-Test-p-true"}>Edit profile</p> :
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
                <div className={EditModeProfil==true?"Edit-profil-menu":"Edit-profil-menu-none"}>
                    <img onClick={changeSetEditModeProfil} className={"VectopCloseEditWindow"} src={VectopCloseEditWindow} alt="VectopCloseEditWindow"/>
                    <div className="Edit-mode-Frofil">
                        <p>Edit profile</p>
                        <div className="EditMode-classfotoFrofel-gradient"><img src={testForo} alt="testForo"/></div>

                        <div className="Edit-mode-Inputs">
                            <p></p>
                        </div>
                    </div>


                </div>
                <div className={EditModeProfil==true?"boground-Shadow":"boground-Shadow-none" }></div>
                <div className="mainChaend">
                    <div className="main-info">
                        <div className={"lardge-foto"}>
                            <div className="Foto-classfotoFrofel-gradient"><img src={testForo} alt="large img"/></div>
                        </div>
                        <div className={"info-profil"}>
                            <p className="Name-InfoProfil">DAVID RADCHENKO</p>
                            {/*Status-InfoProfil*/}
                            <p className="JobSearch-InfoProfil">Job search: <input className={"Checkbox-InfoProfil"}
                                                                                   type={"checkbox"}/></p>

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
                            <input className={"seatch-menu"} type="text" placeholder={"Seach"}/>
                            <img onClick={changeSetPapapSelection} src={customization} alt="customization"/>
                            {/*className={"one-pass-customisazia"}*/}

                             <div className={PapapSelection== true? "one-pass-customisazia" : "one-pass-customisazia-none"} >
                                <p className={"name-custom"}>Sort by:</p>
                                <div onBlur={changeSetPapapSelection} className="change-customizat">
                                    <p className={CheckboxStat==true? "Customizasia-Status":"Customizasia-Status-NoCheked"}>Status   <input className={"Status-button"} checked={CheckboxStat==true} onChange={()=>changeSetCheckboxStat(true)} name={"radio-customez"}  type="radio"/></p>
                                    <p className={CheckboxStat==false?"Customizasia-Profesion-Skills-Cheked":"Customizasia-Profesion-Skills"}>Professional skills<input className={"Profesion-Skils-button"} checked={CheckboxStat==false} onChange={()=>changeSetCheckboxStat(false)} name={"radio-customez"}   type="radio"/></p>
                                </div>
                            </div>
                        </div>
                        <div className={"two-pas"}>
                            <img onClick={changeSetPapapSelection2} src={customization} alt="customization"/>
                            <p className="recomend-menu"> Recommendations</p>

                            <div className={PapapSelection2== true? "two-pass-customisazia" : "two-pass-customisazia-none"} >
                                <p className={"name-custom"}>Sort by:</p>
                                <div onBlur={changeSetPapapSelection2} className="change-customizat">
                                    <p className={CheckboxStat2==true? "Customizasia-Status":"Customizasia-Status-NoCheked"}>Status   <input className={"Status-button"} checked={CheckboxStat2==true} onChange={()=>changeSetCheckboxStat2(true)} name={"radio-customez2"}  type="radio"/></p>
                                    <p className={CheckboxStat2==false?"Customizasia-Profesion-Skills-Cheked":"Customizasia-Profesion-Skills"}>Professional skills<input className={"Profesion-Skils-button"} checked={CheckboxStat2==false} onChange={()=>changeSetCheckboxStat2(false)} name={"radio-customez2"}   type="radio"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"content-functional"}>
                    {/*one-pass*/}
                    <div className={"one-pass-block-content"}>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                    </div>
                    {/*two pass*/}
                    <div className={"two-pas-block-content"}>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                        <div className="two-pass-info-block">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={testInfoBlockImg} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>Amanda Dius
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"two-pas-function"}>
                                <input type="button" value={"Subscribe"}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}