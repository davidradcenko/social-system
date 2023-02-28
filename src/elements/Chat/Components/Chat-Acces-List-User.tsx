import TableUsers from "../UI-Components/Table-Users";
import {StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React from "react";

type ChatListUsersType={
    UsersStartedDialogs:Array<StartedUsersChatType>
}
export const ChatAccesListUser=React.memo((props:ChatListUsersType)=>{
    return(
        <div className={'Chat-List-of-Users'}>
            {props.UsersStartedDialogs.map(el=>{
                return <TableUsers idUser={el.id} key={el.id} userName={el.userName} photos={el.photos} lastDialogActivityDate={el.lastDialogActivityDate} />
            })}

        </div>
    )
})