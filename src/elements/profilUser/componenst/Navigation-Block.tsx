import ImgLogo from "../../../img/module-IMG/common.svg";
import HomeIcon from "../../../img/nav-icons/home.png";
import imgVector from "../../../img/nav-icons/Vector 1.jpg";
import DialogsIcon from "../../../img/nav-icons/Frame.png";
import MesengerIcon from "../../../img/nav-icons/heart.png";
import SeachIcon from "../../../img/nav-icons/Group 43.png";
import SetingsIcon from "../../../img/nav-icons/settings.png";
import React, {useState} from "react";
import SeachMobule from "../../../img/module-IMG/Group 72.png";
import MoonModule from "../../../img/module-IMG/Moon.png";
import SelectMobule from "../../../img/module-IMG/MeatballMenu.png";
import moduleFotoTest from "../../../img/nav-icons/foroTest.png";

type NavigationBlockTypes = {
    EditModeProfil: boolean,
    changeSetEditModeProfil: () => void,
    SeatchFormActivated: boolean,
    changesActivatedSeatch: () => void,

    // fotoUser:string
}
export const NavigationBlock = (props: NavigationBlockTypes) => {
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
                        <img src={''} alt="User img"/>
                        <p>David Radchenko</p>
                    </div>
                    <div className={'mobuleTypeIconNavigate'}>
                        <img src={SeachMobule} alt="SeachMobule"/>
                        <img src={MoonModule} alt="MoonModule"/>
                        <img src={SelectMobule} alt="SelectMobule"/>
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
                    <div className={"MobuleNavigation"}>
                        <img src={moduleFotoTest} alt="moduleFotoTest"/>
                        <div className={'NavigatedSeledNameMobule'}>
                            <p>Advise</p>
                            <p>Chat</p>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}