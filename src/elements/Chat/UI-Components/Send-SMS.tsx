import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SendIcon from '@mui/icons-material/Send';
import {useAppDispatch} from "../../../store/store";
import {WriteSMS} from "../../../Reducers/ChatReducer";
import {photosType} from "../../../API/api";

export default function FullWidthTextField(props:FullWidthTextField) {

    //take from Reducer
    const dispatch = useAppDispatch()


    //state of value in input
    const [Value,SetValue]=useState<string>("")
    const OnchengeValue=(e:any)=>{
        SetValue(e)
    }


    //function send message
    const SendMEssage=()=>{
        dispatch(WriteSMS(props.IdUser,{body:Value},props.photoUser,props.userName,props.lastDialogActivityDate,props.LastActiveUser))
        SetValue("")
    }

    return (
        <Box
            sx={{
                width: 1,
                maxWidth: '100%',
                bgcolor: 'white'
            }}
        >
            <Paper
                component="form"
                sx={{display: 'flex', alignItems: 'center', padding:1.1}}
            >
             <InputBase disabled={props.IdUser==0?true:false} value={Value} onKeyDown={(evt: any)=>{
                 if (evt.key === 'Enter') SendMEssage();
             }} onChange={(event)=>OnchengeValue(event.target.value)}   placeholder="Enter your message" fullWidth  id="fullWidth" />
                <IconButton disabled={props.IdUser==0?true:false} onClick={SendMEssage} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SendIcon color={props.IdUser==0?"disabled":"primary"} />
                </IconButton>
            </Paper>
        </Box>
    );
}

//types
type FullWidthTextField={
    IdUser:number,
    photoUser: photosType,
    lastDialogActivityDate: string,
    userName: string,
    LastActiveUser:string,
    typeOfUser:"Other" | "Friend"
}