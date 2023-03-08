import TableUsers from "../UI-Components/Table-Users";
import {StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React from "react";

//Take list of all started dialogs users
export const ChatAccesListUser = React.memo((props: ChatListUsersType) => {
    return (
        <div className={'Chat-List-of-Users'}>
            {props.UsersStartedDialogs.map((el, index) => {
                return <TableUsers
                    idUser={el.id}
                    key={el.id}
                    userName={el.userName}
                    photos={el.photos}
                    lastDialogActivityDate={el.lastDialogActivityDate}
                    LastActiveUser={el.lastUserActivityDate}
                    versios={"listOfuser"}
                />
            })}

        </div>
    )
})

// types
type ChatListUsersType = {
    UsersStartedDialogs: Array<StartedUsersChatType>
}