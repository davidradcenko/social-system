import {ChatSearchButton} from "./Chat-Search-Button";
import {ChatAccesListUser} from "./Chat-Acces-List-User";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {
    GetAllStartedDialogs,
    SetAllStartedDialogs,
    StartedUsersChatType,
    UsersStartedDialogsType
} from "../../../Reducers/ChatReducer";
import {useEffect} from "react";

export const ChatSearchList = () => {
    const dispatch = useAppDispatch()
    const UsersStartedDialogs = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)

    useEffect(() => {
        dispatch(GetAllStartedDialogs())
    })
    return (
        <>
            <ChatSearchButton />
            <ChatAccesListUser UsersStartedDialogs={UsersStartedDialogs}/>
        </>
    )
}