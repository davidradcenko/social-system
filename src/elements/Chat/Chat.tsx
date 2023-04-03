import "./ChatCSS.css"
import "./ChatModuleCss.css"
import {useAppDispatch} from "../../store/store";
import React, {useEffect} from "react";
import Logo from "../../img/nav-icons/icons-sosial/common.png";
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {StoryWay} from "./Chat-Componets/Story-Way";
import {ChatNavigation} from "./Components/Chat-Navigation";
import {ChatSearchList, ChatSearchListNormal} from "./Components/Chat-Search-List";
import {GetAllStartedDialogs, IfHaveNewMessageTK} from "../../Reducers/ChatReducer";
import {ChatWind} from "./Components/Chat-Wind";
import {ChatProfile, ChatProfileAdoptive} from "./Components/Chat-Profile";


export const Chat = React.memo(() => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetAllStartedDialogs())

    })

    return (
        <div className={'Chat'}>

            {/*---------------------Div one-------------*/}
            {/* Navigation */}
            <ChatNavigation/>

            {/*---------------------Div next-------------*/}
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
                        <div className={"Menu-Users-Normal"}><ChatSearchListNormal/></div>
                        <div className={"Menu-Users-Display"}> <ChatSearchList/></div>
                    </div>

                    {/* MainChat*/}
                    <div className={'Chat-Sittings'}>
                        <div className={'Paginator-Navigation'}>
                            <div className={'Paginator-Way'}></div>
                        </div>
                        <div className={'Chat-Profile'}>

                            <ChatWind/>

                            {/*profile user*/}
                            <div className={"Viow-Frofile-normale"}>
                                <ChatProfile/>
                            </div>
                            <div className={"Viow-Frofile-adoptive"}>
                                <ChatProfileAdoptive/>

                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
})