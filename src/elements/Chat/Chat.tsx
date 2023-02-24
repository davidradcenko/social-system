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
import {Avatar} from "@mui/material";


export const Chat = () => {
    return (
        <div className={'Chat'}>
            <div className={'Chat-Navigation'}>
                <div className="Icons-Navigation">
                    <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }}  src="/static/images/avatar/1.jpg" />
                    {/*<img src={FotoTest} alt="" className="admin-foto"/>*/}

                    <HomeIcon/>
                    <PersonIcon/>
                    <FavoriteBorderIcon/>
                    <PersonSearchIcon/>
                    <SettingsIcon/>



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
