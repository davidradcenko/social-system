import "./ChatCSS.css"
import Logo from '../../img/nav-icons/icons-sosial/common.png'
import FotoTest from '../../img/nav-icons/icons-sosial/vk.png'

//material UL
import BasicBreadcrumbs from "./UI-Components/Story-Navigation";
import MainNavigation from "./UI-Components/Main-Navigation";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SettingsIcon from '@mui/icons-material/Settings';
import {Avatar, Badge} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {useAppDispatch} from "../../store/store";
import {useEffect} from "react";
import {ChatMS, StartDialogs} from "../../Reducers/ChatReducer";



export const Chat = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        // dispatch(ChatMS(27945,{body:'Hello'}))
        // dispatch(StartDialogs(27945))
    })
    return (
        <div className={'Chat'}>
            <div className={'Chat-Navigation'}>
                <div className="Icons-Navigation">
                    <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }}  src="/static/images/avatar/1.jpg" />

                    <IconButton sx={{marginTop:20}} aria-label="delete">
                        <HomeIcon color="primary" sx={{fontSize: 40}}/>
                    </IconButton>
                    <IconButton sx={{marginTop:10}} aria-label="delete">
                        <PersonIcon color="primary" sx={{fontSize: 40}}/>
                    </IconButton>

                    <IconButton sx={{marginTop:10}} aria-label="delete">
                        <Badge color="secondary" variant="dot">
                            <FavoriteBorderIcon color="primary" sx={{fontSize: 40}}/>
                        </Badge>
                    </IconButton>

                    <IconButton sx={{marginTop:10}} aria-label="delete">
                        <PersonSearchIcon color="primary" sx={{fontSize: 40}}/>
                    </IconButton>
                    <IconButton sx={{marginTop:10}} aria-label="delete">
                        <SettingsIcon color="primary" sx={{fontSize: 40}}/>
                    </IconButton>


                </div>
            </div>
            <div className={'TOP-menu-Bar'}>
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                    <BasicBreadcrumbs/>
                </div>
                <div className="Information">
                    <div className={'Chats-List'}></div>
                    <div className={'Chat-Sittings'}>
                        <div className={'Chat-List'}></div>
                        <div className={'Profile-Chat-Component'}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
