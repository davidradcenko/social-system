import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import {GetMessage} from "../../../Reducers/ChatReducer";
import {useAppDispatch} from "../../../store/store";
import {photosType} from "../../../API/api";

type TableUsersType={
    userName:string,
    photos:photosType,
    lastDialogActivityDate:string,
    idUser:number
}
export default function TableUsers(props:TableUsersType) {
    console.log("TableUser ++++")
    const dispatch = useAppDispatch()

    const TakeMessage=(idUser:number)=>{
       dispatch( GetMessage(idUser,props.photos,props.userName,props.lastDialogActivityDate))
    }

    return (
        <List
            onClick={()=>TakeMessage(props.idUser)}
            sx={{
                width: '100%',
                maxWidth: 360
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={props.photos.small==null?"":props.photos.small}>
                        <ImageIcon  />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.userName} secondary={"LastSMS"} />
            </ListItem>
        </List>
    );
}