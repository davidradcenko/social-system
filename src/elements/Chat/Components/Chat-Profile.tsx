import {Avatar, Checkbox} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImageAvatars from "../../profilUser/componenst/Main-Info-Social";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {Messages_AND_DATAofUSER_Type} from "../../../Reducers/ChatReducer";
import {GetMyProfilTK} from "../../../Reducers/profilReducer";
import {UserProfilType} from "../../../API/api";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {IconsNavigation} from "../Chat-Componets/Icons-Navigation";
import {useEffect} from "react";


//Adoptive
export  const ChatProfileAdoptive=React.memo(()=> {
    const [state, setState] = React.useState({
        right: false
    });

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
                    <ChatProfile />
                </>

            </List>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>

                    <IconButton onClick={toggleDrawer(anchor, true)} aria-label="delete">
                        <ArrowForwardIosIcon color="primary" sx={{fontSize: 40}}/>
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


//Profile of user Normale
export const ChatProfile=()=>{

    //take from Reducer
    const dispatch = useAppDispatch()
    //from chat
    const UsersStartedDialogs = useSelector<RootState, Messages_AND_DATAofUSER_Type>(state => state.chat.MessageCurrentUser)
    //from profile
    const UserProfile = useSelector<RootState, UserProfilType>(state => state.profil)


    //take data of user
    useEffect(()=>{
        if (UsersStartedDialogs.idUser!=0){
            dispatch(GetMyProfilTK(UsersStartedDialogs.idUser))
        }
    },[UsersStartedDialogs.idUser])

    return(
        <div className={'Profile-Chat-Component'}>
            {UsersStartedDialogs.idUser!=0
                ? <div className={'ProfileChat'}>
                    <p className={'Profile-Chat-name'}>{UserProfile.fullName}</p>
                    <Avatar sx={{margin: 3, width: 200, height: 200}} alt="Remy Sharp"
                            src={UserProfile.photos.small==null?"/static/images/avatar/1.jpg":UserProfile.photos.small}/>
                    <FormControlLabel label="Job search"
                                      control={<Checkbox color="success" checked={UserProfile.lookingForAJob} onChange={e => {
                                      }}/>}/>
                    <p className={'Profile-Chat-name'}>
                        <span className={'Profile-Chat-Frofessional'}>Frofessional skills:</span><br/>
                        {UserProfile.lookingForAJobDescription}
                    </p>
                    <ImageAvatars Contacs={UserProfile.contacts}/>
                </div>
                : <div className={'ProfileChat'}>
                        <p className={'Profile-Chat-name'}></p>
                        <Avatar sx={{margin: 3, width: 200, height: 200}} alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"/>
                        <FormControlLabel label="Job search"
                                          control={<Checkbox color="success" checked={true} onChange={e => {
                                          }}/>}/>
                        <p className={'Profile-Chat-name'}>
                            <span className={'Profile-Chat-Frofessional'}>Frofessional skills:</span><br/>
                        </p>
                        <ImageAvatars/>
                    </div>

            }
        </div>
    )
}


//types
type Anchor = 'top' | 'left' | 'bottom' | 'right';