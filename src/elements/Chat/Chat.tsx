import "./ChatCSS.css"
import "./ChatModuleCss.css"
import {useAppDispatch} from "../../store/store";
import React, {useEffect} from "react";
import Logo from "../../img/nav-icons/icons-sosial/common.png";
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {StoryWay} from "./Chat-Componets/Story-Way";
import {ChatNavigation} from "./Components/Chat-Navigation";
import {ChatSearchList} from "./Components/Chat-Search-List";
import {GetAllStartedDialogs, IfHaveNewMessageTK} from "../../Reducers/ChatReducer";
import {ChatWind} from "./Components/Chat-Wind";
import {ChatProfile} from "./Components/Chat-Profile";


export const Chat = React.memo(() => {
    console.log("Chat ")
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(GetAllStartedDialogs())
        dispatch( IfHaveNewMessageTK())
    })
    return (
        <div className={'Chat'}>

            {/* Navigation */}
            <ChatNavigation/>

            {/* Main menu */}
            <div className={'TOP-menu-Bar'}>
                <div className="logo">
                    <div className={'Logo-Nav'}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className={'Top-Nav'}>
                        <div className={'ButtonMenu'}>
                            <ButtonMenuNavigation/>
                        </div>
                    </div>
                </div>
                <div className="Information">

                    {/* Search and ListOfUsers */}
                    <div className={'Chats-List'}>
                        <ChatSearchList/>
                    </div>

                    {/* MainChat*/}
                    <div className={'Chat-Sittings'}>
                        <div className={'Paginator-Navigation'}>
                            <div className={'Paginator-Way'}>
                            </div>
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