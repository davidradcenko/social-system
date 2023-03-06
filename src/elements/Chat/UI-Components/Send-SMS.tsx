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

//send message
export default function FullWidthTextField(props:FullWidthTextField) {
    const dispatch = useAppDispatch()

    //state of value in input
    const [Value,SetValue]=useState<string>("")
    const OnchengeValue=(e:any)=>{
        SetValue(e)
    }

    //function send message
    const SendMEssage=()=>{
        dispatch(WriteSMS(props.IdUser,{body:Value},props.photoUser,props.userName,props.lastDialogActivityDate))
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
             <InputBase value={Value} onChange={(event)=>OnchengeValue(event.target.value)}   placeholder="Enter your message" fullWidth  id="fullWidth" />
                <IconButton onClick={SendMEssage} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SendIcon color={"primary"} />
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
}