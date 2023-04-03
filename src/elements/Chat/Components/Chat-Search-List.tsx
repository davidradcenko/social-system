import {ChatSearchButton} from "./Chat-Search-Button";
import {ChatAccesListUser} from "./Chat-Acces-List-User";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from '@mui/icons-material/Close';


export  const ChatSearchList=React.memo(()=> {
    const [state, setState] = React.useState({
        left: false
    });
let chandeOpenClose=()=>{
    setState({left: false})
}
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: "auto"  }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <>
                    <div className={"close-module-versior-wind"}>
                        <IconButton onClick={chandeOpenClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </div>
                    <ChatSearchButton />
                    <ChatAccesListUser/>
                </>

            </List>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>

                    <IconButton onClick={toggleDrawer(anchor, true)} aria-label="delete">
                        <ArrowBackIosNewIcon color="primary" sx={{fontSize: 40}}/>
                    </IconButton>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {/*<div className={"clozer-Search-Menu"}>*/}
                        {/*    <IconButton aria-label="Example">*/}
                        {/*        <CloseIcon />*/}
                        {/*    </IconButton>*/}
                        {/*</div>*/}
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
})


// return divs Search and ListUsers
export const ChatSearchListNormal = React.memo(() => {
    return (
        <>
            <ChatSearchButton />
            <ChatAccesListUser/>
        </>
    )
})

// types
type Anchor = 'top' | 'left' | 'bottom' | 'right';