import "./ChatCSS.css"
import "./ChatModuleCss.css"
import {useAppDispatch} from "../../store/store";
import React, {useEffect} from "react";
import Logo from "../../img/nav-icons/icons-sosial/common.png";
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {StoryWay} from "./Chat-Componets/Story-Way";
import Paginator from "./UI-Components/Paginator";
import {Avatar, Checkbox} from "@mui/material";
import Sear from "../../img/Chat/Group 117.png";
import NoSear from "../../img/Chat/Group 115.png";
import FullWidthTextField from "./UI-Components/Send-SMS";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImageAvatars from "../profilUser/componenst/Main-Info-Social";
import {ChatNavigation} from "./Components/Chat-Navigation";
import {ChatSearchList} from "./Components/Chat-Search-List";
import {GetAllStartedDialogs} from "../../Reducers/ChatReducer";
import {ChatMessages} from "./Components/Chat-Messages";
import {ChatWind} from "./Components/Chat-Wind";
import {ChatProfile} from "./Components/Chat-Profile";


//material UL
export const Chat = React.memo(() => {
    console.log("Chat ")
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetAllStartedDialogs())

        // dispatch(ChatMS(24522,{body:'Hello'}))
        //dispatch(StartDialogs(24522))
    })
    return (
        <div className={'Chat'}>

            <ChatNavigation/>

            <div className={'TOP-menu-Bar'}>
                <div className="logo">
                    <div className={'Logo-Nav'}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className={'Top-Nav'}>
                        <div className={'ButtonMenu'}>
                            <ButtonMenuNavigation/>
                        </div>
                        <StoryWay/>
                    </div>
                </div>
                <div className="Information">

                    <div className={'Chats-List'}>
                        <ChatSearchList/>
                    </div>

                    <div className={'Chat-Sittings'}>

                        <div className={'Paginator-Navigation'}>
                            <div className={'Paginator-Way'}>
                                <StoryWay/>
                            </div>
                            <Paginator/>
                        </div>

                        <div className={'Chat-Profile'}>
                            <ChatWind/>
                            <ChatProfile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})