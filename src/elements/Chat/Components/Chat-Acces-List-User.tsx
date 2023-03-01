import TableUsers from "../UI-Components/Table-Users";
import {GetLastMessage, GetMessage, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React from "react";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";

type ChatListUsersType = {
    UsersStartedDialogs: Array<StartedUsersChatType>
}
export const ChatAccesListUser = React.memo((props: ChatListUsersType) => {
    const dispatch = useAppDispatch()

    return (
        <div className={'Chat-List-of-Users'}>
            {props.UsersStartedDialogs.map((el,index )=> {

                return <TableUsers
                    idUser={el.id}
                    key={el.id}
                    userName={el.userName}
                    photos={el.photos}
                    lastDialogActivityDate={el.lastDialogActivityDate}/>
            })}

        </div>
    )
})