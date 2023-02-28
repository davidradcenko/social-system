import {ChatMessages} from "./Chat-Messages";
import FullWidthTextField from "../UI-Components/Send-SMS";
import React, {useEffect, useRef} from "react";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {Messages} from "../../../Reducers/ChatReducer";
import TableUsers from "../UI-Components/Table-Users";

export const ChatWind = () => {
    const dispatch = useAppDispatch()
    const Messages = useSelector<RootState, Array<Messages>>(state => state.chat.MessageCurrentUser.Message)
    const photoUser = useSelector<RootState, string | null>(state => state.chat.MessageCurrentUser.photos.small)
    const IdUser = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.idUser)
    const lastDialogActivityDate = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.lastDialogActivityDate)
    const userName = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.userName)

    const inputRef = useRef();

    return (
        <div className={'Chat-List'}>

            <div className={'Active-Chatting-User'}>
                <TableUsers idUser={IdUser} photos={{small: photoUser, large: null}} userName={userName}
                            lastDialogActivityDate={lastDialogActivityDate}/>
                <p>Yesterday</p>
            </div>

            <div className={'Chatting'}>

                <div id={"Messages"} className={'Messages'}>
                    <ChatMessages Messages={Messages}/>
                </div>

                <div className={'Send-SMS'}>
                    <FullWidthTextField IdUser={IdUser}/>
                </div>

            </div>
        </div>
    )
}