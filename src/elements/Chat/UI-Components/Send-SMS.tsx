import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import SendIcon from '@mui/icons-material/Send';
export default function FullWidthTextField() {
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
             <InputBase   placeholder="Enter your message" fullWidth  id="fullWidth" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SendIcon color={"primary"} />
                </IconButton>
            </Paper>
        </Box>
    );
}