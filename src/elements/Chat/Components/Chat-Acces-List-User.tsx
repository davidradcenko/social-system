import TableUsers from "../UI-Components/Table-Users";
import {Currenst_Page_DialogsAC, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React, {useEffect} from "react";
import {Chip} from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../store/store";

//Take list of all started dialogs users
export const ChatAccesListUser = React.memo((props) => {
    const dispatch = useAppDispatch()

    const UsersStartedDialogs = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)
    const typeOfDialogs = useSelector<RootState, "Friends" | "Others" | "Groups">(state => state.chat.SearchUsers.Cage_StardetDialogs)


    const ChangePage = (type: "Friends" | "Others" | "Groups") => {
        dispatch(Currenst_Page_DialogsAC(type))
    }

        let typeDialogsNEw = ""
        if (typeOfDialogs == "Others") typeDialogsNEw = "Other"
        if (typeOfDialogs == "Friends") typeDialogsNEw = "Friend"

        let FiltredArray = UsersStartedDialogs.filter(el => el.typeUser == typeDialogsNEw)


    return (
        <div className={'Chat-List-of-Users'}>
            <div className={"ListOfUsersAbsolute"}>
                <Chip onClick={() => {
                    ChangePage("Friends")
                }} label="Friends" variant={typeOfDialogs == "Friends" ? "filled" : "outlined"} color="success"
                      icon={<Diversity1SharpIcon/>}/>
                <Chip onClick={() => {
                    ChangePage("Others")
                }} label="Others" variant={typeOfDialogs == "Others" ? "filled" : "outlined"} color="warning"
                      icon={<GroupIcon/>}/>
                <Chip onClick={() => {
                    ChangePage("Groups")
                }} label="Group" variant={typeOfDialogs == "Groups" ? "filled" : "outlined"}
                      avatar={<Diversity2SharpIcon>F</Diversity2SharpIcon>}/>
            </div>
            <br/>
            {FiltredArray.map((el, index) => {
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

