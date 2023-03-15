import TableUsers from "../UI-Components/Table-Users";
import {StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React from "react";
import {Chip} from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';

//Take list of all started dialogs users
export const ChatAccesListUser = React.memo((props: ChatListUsersType) => {
    return (
        <div className={'Chat-List-of-Users'}>
            <div className={"ListOfUsersAbsolute"}>
                <Chip label="Friends" variant="outlined" color="success" icon={<Diversity1SharpIcon />} />
                <Chip label="Others" variant="outlined" color="warning" icon={<GroupIcon />} />
                <Chip label="Group" variant="outlined" avatar={<Diversity2SharpIcon>F</Diversity2SharpIcon>} />
            </div>
            <br/>
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