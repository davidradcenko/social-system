import TableUsers from "../UI-Components/Table-Users";
import {Currenst_Page_DialogsAC, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import React, {useEffect} from "react";
import {Chip} from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../store/store";


export const ChatAccesListUser = React.memo((props) => {

    //take from Reducer
    const dispatch = useAppDispatch()
    //from chat
    const UsersStartedDialogs = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)
    const typeOfDialogs = useSelector<RootState, "Friends" | "Others" | "Groups">(state => state.chat.SearchUsers.Cage_StardetDialogs)

    //change Current list of users
    const ChangePage = (type: "Friends" | "Others" | "Groups") => {
        dispatch(Currenst_Page_DialogsAC(type))
    }

    //make nessary type
    let typeDialogsNEw = ""
    if (typeOfDialogs == "Others") typeDialogsNEw = "Other"
    if (typeOfDialogs == "Friends") typeDialogsNEw = "Friend"
    let FiltredArray = UsersStartedDialogs.filter(el => el.typeUser == typeDialogsNEw)

    return (
        <div className={'Chat-List-of-Users'}>
            {FiltredArray.map((el, index) => {
                return <TableUsers
                    idUser={el.id}
                    key={el.id}
                    userName={el.userName}
                    photos={el.photos}
                    lastDialogActivityDate={el.lastDialogActivityDate}
                    LastActiveUser={el.lastUserActivityDate}
                    versios={"listOfuser"}
                    TypeOfUser={el.typeUser}
                />

            })}

        </div>
    )
})

