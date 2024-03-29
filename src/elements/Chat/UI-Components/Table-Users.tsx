import * as React from 'react';
import {useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import {GetLastMessage, GetMessage, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import {photosType} from "../../../API/api";
import {useSelector} from "react-redux";
import ButtonFunctional from "./Button-Functional";
import FunktionalUser from "./Funktional-User";

export default function TableUsers(props: TableUsersType) {
    //take from Reducer
    const dispatch = useAppDispatch()
    //from chat
    const users = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)


    //function get last message
    const TakeMessage = (idUser: number) => {
        dispatch(GetMessage(idUser, props.photos, props.userName, props.lastDialogActivityDate,props.LastActiveUser))
    }


    //take last message from reducer
    let LastMessage:string|null=''
    let list=users.find(e=>e.id==props.idUser)
    if (list !=undefined){
       LastMessage = list.lastMesasage
    }


    // useEffect get last message
    useEffect(() => {
        if (props.idUser!=0 && props.index<10) dispatch(GetLastMessage(props.idUser))
    },[props.idUser])

    return (
        <List onClick={() => TakeMessage(props.idUser)}
            sx={{
                width: '100%',
                maxWidth: 360
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    {props.idUser==0?"":
                    <Avatar src={props.photos.small == null ? "" : props.photos.small}>
                         <ImageIcon/>
                    </Avatar>}
                </ListItemAvatar>
                <ListItemText primary={props.userName} secondary={LastMessage}/>
                <div className={"Last-Message-date"}>
                    <p className={"Last-message-br"}>
                        <br/>
                        {LastMessage!=undefined?props.versios=="listOfuser"?props.lastDialogActivityDate:"":""}
                    </p>
                </div>
                {props.idUser!=0
                    ?
                    <FunktionalUser idUser={props.idUser} typeOfUser={props.TypeOfUser}/>
                    : ""
                }

            </ListItem>

        </List>
    );
}

// types
type TableUsersType = {
    userName: string,
    photos: photosType,
    index:number,

    lastDialogActivityDate: string,
    idUser: number,
    LastActiveUser:string,
    TypeOfUser:"Friend" | "Other",
    versios:"listOfuser" | "headerChat",
}