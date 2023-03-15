import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import {blue} from '@mui/material/colors';
import MailIcon from '@mui/icons-material/Mail';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {useEffect, useState} from "react";
import {getResponsFollowTK, StartDialogs} from "../../../Reducers/ChatReducer";
import {useAppDispatch} from "../../../store/store";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import {UsersApi} from "../../../API/api";
import {FollowTK, UnFollowTK} from "../../../Reducers/UsersReducer";


export const emails = ['username@gmail.com', 'user02@gmail.com'];

export type SimpleDialogProps ={
    NameUse:string
    idUser:number,
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
    const dispatch = useAppDispatch()
    const {onClose, selectedValue, open} = props;

    const [StateUser, setStateUser] = useState<boolean>();

    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    const subscribe=()=>{
        dispatch(FollowTK(props.idUser))
        if (props.idUser!=0){
            let m=false
            UsersApi.getResponstFollow(props.idUser).then(res => {
                if (res.data == true) {
                    m=true
                    setStateUser(m)
                }
                if (res.data == false) {
                    m = false
                    setStateUser(m)
                }
                return "d"
            }).catch((error) => {
                console.error(error)
            })
        }
    }
    const UnSubscribe=()=>{
        dispatch(UnFollowTK(props.idUser))
        if (props.idUser!=0){
            let m=false
            UsersApi.getResponstFollow(props.idUser).then(res => {
                if (res.data == true) {
                    m=true
                    setStateUser(m)
                }
                if (res.data == false) {
                    m = false
                    setStateUser(m)
                }
                return "d"
            }).catch((error) => {
                console.error(error)
            })
        }
    }
    const StartChating=()=>{

        dispatch(StartDialogs(props.idUser))
    }



    useEffect(() => {
        if (props.idUser!=0){
            let m=false
            UsersApi.getResponstFollow(props.idUser).then(res => {
                if (res.data == true) {
                    m=true
                    setStateUser(m)
                }
                if (res.data == false) {
                    m = false
                    setStateUser(m)
                }
                return "d"
            }).catch((error) => {
                console.error(error)
            })
        }
        }, [props.idUser])
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>User: {props.NameUse}</DialogTitle>
            <List sx={{pt: 0}}>

                {StateUser==true
                    ?  <ListItem disableGutters>
                        <ListItemButton onClick={UnSubscribe}>
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                    <GroupRemoveIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"Unsubscribe"}/>
                        </ListItemButton>
                    </ListItem>
                    :  <ListItem disableGutters>
                        <ListItemButton onClick={subscribe}>
                            <ListItemAvatar>
                                <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                    <PersonAddAlt1Icon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"Subscribe"}/>
                        </ListItemButton>
                    </ListItem>
                }


                <ListItem disableGutters>
                    <ListItemButton onClick={StartChating}>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Type message"}/>
                    </ListItemButton>
                </ListItem>

            </List>
        </Dialog>
    );
}


