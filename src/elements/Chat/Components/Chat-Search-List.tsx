import {ChatSearchButton} from "./Chat-Search-Button";
import {ChatAccesListUser} from "./Chat-Acces-List-User";
import {RootState} from "../../../store/store";
import {useSelector} from "react-redux";
import {StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React from "react";


//return divs Search and ListUsers
export const ChatSearchList = React.memo(() => {
    const UsersStartedDialogs = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)
    return (
        <>
            <ChatSearchButton />
            <ChatAccesListUser UsersStartedDialogs={UsersStartedDialogs}/>
        </>
    )
})