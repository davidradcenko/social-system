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
import {GetMyProfilTK} from "../../../Reducers/profilReducer";
import {useAppDispatch} from "../../../store/store";
import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";

type NavigationBlockTypes = {
    EditModeProfil: boolean,
    changeSetEditModeProfil: () => void,
    // SeatchFormActivated: boolean,
    // changesActivatedSeatch: () => void,
    FullName:string

    fotoUser:string | null
}
export const NavigationBlock = React.memo((props: NavigationBlockTypes) => {
    console.log("+++++++++++++NavigationBlock  ")
    const dispatch = useAppDispatch()
    const [Vector, SetVector] = useState(true)
    const [TextPapap, SetTextPapap] = useState(false)


    const changeSettextPapap = () => {
        SetTextPapap(!TextPapap)
        SetVector(!Vector)
    }
    const GoToProfil=()=>{
        dispatch(GetMyProfilTK(16939))
    }

    return (
        <div className={"Navigation-block"}>
            <div className="all-elements-nav">
                <div className="logo-profil">
                    <div className="profile">
                        <img onClick={GoToProfil} src={props.fotoUser==null? testInfoBlockImg :props.fotoUser} alt="User img"/>
                        <p onClick={GoToProfil} >{props.FullName}</p>
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
                            <p onClick={props.changeSetEditModeProfil}>Edit profile</p>
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
                    {/*<div className={"AlseIcons"}>*/}
                    {/*    <img onClick={props.changesActivatedSeatch} src={SeachIcon} alt="SeachIcon"/>*/}
                    {/*    <p className={props.SeatchFormActivated == true ? "SeatchFormActive" : ""}*/}
                    {/*       onClick={props.changesActivatedSeatch}>Seach</p>*/}
                    {/*</div>*/}
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
})