import HomeIcon from "../../../img/nav-icons/home.png";
import DialogsIcon from "../../../img/nav-icons/Frame.png";
import MesengerIcon from "../../../img/nav-icons/heart.png";
import SetingsIcon from "../../../img/nav-icons/settings.png";
import React, {useState} from "react";
import {GetMyProfilTK} from "../../../Reducers/profilReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import {useSelector} from "react-redux";
import {InitialazedType} from "../../../Reducers/InitialazedReducer";
import {Link} from "react-router-dom";

type NavigationBlockTypes = {
    EditModeProfil: boolean,
    changeSetEditModeProfil: () => void,
    FullName: string

    fotoUser: string | null
}
export const NavigationBlock = React.memo((props: NavigationBlockTypes) => {
    console.log("+++++++++++++NavigationBlock  ")
    const dispatch = useAppDispatch()
    const AdminData = useSelector<RootState, InitialazedType>(state => state.initialazed)
    const [Vector, SetVector] = useState(true)
    const [TextPapap, SetTextPapap] = useState(false)


    const changeSettextPapap = () => {
        SetTextPapap(!TextPapap)
        SetVector(!Vector)
    }
    const GoToProfil = () => {
        dispatch(GetMyProfilTK(Number(AdminData.mainUserId)))
    }

    return (
        <div className={"Navigation-block"}>
            <div className="all-elements-nav">
                <div className="logo-profil">
                    <div className="profile">
                        <img onClick={GoToProfil} src={props.fotoUser == null ? testInfoBlockImg : props.fotoUser}
                             alt="User img"/>
                        <p onClick={GoToProfil}>{props.FullName}</p>
                    </div>
                    {/*<div className={'mobuleTypeIconNavigate'}>*/}
                    {/*    <img src={SeachMobule} alt="SeachMobule"/>*/}
                    {/*    <img src={MoonModule} alt="MoonModule"/>*/}
                    {/*    <img src={SelectMobule} alt="SelectMobule"/>*/}
                    {/*</div>*/}
                </div>
                <div className="main-navi">
                    <div className={"ProfilIcon"}>
                        <img src={HomeIcon} alt="HomeIcon"/>
                        <div onClick={GoToProfil} className={"ProfilIcon-text"}>
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
                        <Link to={'/Chat'}>
                            <p>Message</p>
                        </Link>
                    </div>
                    <div className={"AlseIcons"}>
                        <img src={SetingsIcon} alt="SetingsIcon"/>
                        <p>Settings</p>
                    </div>
                    <div className={"MobuleNavigation"}>
                        <img onClick={GoToProfil} src={props.fotoUser == null ? testInfoBlockImg : props.fotoUser}
                             alt="User img"/>
                        <div className={'NavigatedSeledNameMobule'}>
                            <p onClick={props.changeSetEditModeProfil}>Edit Profile</p>
                            <p>Chat</p>
                            <p>Login-out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})