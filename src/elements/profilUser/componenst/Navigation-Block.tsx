import HomeIcon from "../../../img/nav-icons/home.png";
import DialogsIcon from "../../../img/nav-icons/Frame.png";
import MesengerIcon from "../../../img/nav-icons/heart.png";
import SetingsIcon from "../../../img/nav-icons/settings.png";
import React, {useCallback, useState} from "react";
import {GetMyProfilTK} from "../../../Reducers/profilReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import {useSelector} from "react-redux";
import {InitialazedType} from "../../../Reducers/InitialazedReducer";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {LoginOut} from "../../../Reducers/LoginReducer";
import EditProfileFormUI from "./UI-components/Edit-ProfileFormUI";
import EditProfileImg from "./UI-components/Edit-ProfileImg";

type NavigationBlockTypes = {
    EditModeProfil: boolean,
    changeSetEditModeProfil: () => void,
}
export const NavigationBlock = React.memo(() => {
    console.log("+++++++++++++NavigationBlock  ")
    const dispatch = useAppDispatch()

    const AdminData = useSelector<RootState, InitialazedType>(state => state.initialazed)
    const [Vector, SetVector] = useState(true)

    const [TextPapap, SetTextPapap] = useState(false)

    const [OpenEdit, CloseEdit] = useState<boolean>(false)

    const changeSettextPapap = () => {
        CloseEdit(!TextPapap)
    }
    const GoToProfil = () => {
        dispatch(GetMyProfilTK(Number(AdminData.mainUserId)))
    }
    const logoutHandler = useCallback(() => {
        dispatch(LoginOut())
    }, [])
    return (
        <div className={"Navigation-block"}>
            <div className="all-elements-nav">


                <div className="logo-profil">
                    <div className="profile">
                        <img onClick={GoToProfil} src={AdminData.foto == null ? testInfoBlockImg : AdminData.foto}
                             alt="User img"/>
                        <div>
                            <p onClick={GoToProfil}>{AdminData.name}</p>
                        </div>

                    </div>
                </div>
                <Button onClick={logoutHandler} className={"BattonLogoutd"} variant="contained">Out</Button>
                <Button onClick={logoutHandler} className={"BattonLogout"} variant="contained">Sign Out</Button>

                <div className="main-navi">

                    <EditProfileImg/>


                    <div className={"AlseIcons"}>
                        <Link to={'/Chat'}>
                        <img src={MesengerIcon} alt="MesengerIcon"/>
                        {/*<Link to={'/Chat'}>*/}
                            <p>Message</p>
                        </Link>
                    </div>

                    <div className={"MobuleNavigation"}>
                        <img onClick={GoToProfil} src={AdminData.foto == null ? testInfoBlockImg : AdminData.foto}
                             alt="User img"/>
                        <div className={'NavigatedSeledNameMobule'}>
                            <EditProfileFormUI OpenCloseWindEdit={TextPapap}/>
                            <Link to={'/Chat'}>
                                <p>Chat</p>
                            </Link>
                            <p onClick={logoutHandler}>Login-out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})