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

type TableUsersType = {
    userName: string,
    photos: photosType,
    lastDialogActivityDate: string,
    idUser: number
}
export default function TableUsers(props: TableUsersType) {
    console.log("TableUser ++++")
    const dispatch = useAppDispatch()
    const users = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)
    const TakeMessage = (idUser: number) => {
        dispatch(GetMessage(idUser, props.photos, props.userName, props.lastDialogActivityDate))
    }
    let list=users.find(e=>e.id==props.idUser)
    let v:string|null=''
    if (list !=undefined){
       v = list.lastMesasage
    }

    useEffect(() => {
        if (props.idUser!=0) dispatch(GetLastMessage(props.idUser))
    },[props.idUser])
    return (
        <List
            onClick={() => TakeMessage(props.idUser)}
            sx={{
                width: '100%',
                maxWidth: 360
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={props.photos.small == null ? "" : props.photos.small}>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.userName} secondary={v}/>
            </ListItem>
        </List>
    );
}