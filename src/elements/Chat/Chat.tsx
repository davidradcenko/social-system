import "./ChatCSS.css"
import "./ChatModuleCss.css"
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
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {IconsNavigation} from "./Chat-Componets/Icons-Navigation";
import {StoryWay} from "./Chat-Componets/Story-Way";
import SearchInput from "./UI-Components/Search-Input";
import TableUsers from "./UI-Components/Table-Users";
import Paginator from "./UI-Components/Paginator";


export const Chat = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        // dispatch(ChatMS(24522,{body:'Hello'}))
        //dispatch(StartDialogs(24522))
    })
    return (
        <div className={'Chat'}>


            {/* Navigation */}
            <div className={'Chat-Navigation'}>
                <IconsNavigation/>
            </div>


            {/*Main content*/}
            <div className={'TOP-menu-Bar'}>


                {/*logo Top*/}
                <div className="logo">
                    <div className={'Logo-Nav'}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className={'Top-Nav'}>
                        <div className={'ButtonMenu'}>
                            <ButtonMenuNavigation/>
                        </div>
                        <StoryWay/>
                    </div>
                </div>


                {/*Main block*/}
                <div className="Information">


                    {/*Chat list and search button*/}
                    <div className={'Chats-List'}>
                        <div className={'Chat-Search'}>
                            <SearchInput/>
                        </div>
                        <div className={'Chat-List-of-Users'}>
                            <TableUsers/>
                        </div>
                    </div>


                    {/*Paginator / Chat / Profile*/}
                    <div className={'Chat-Sittings'}>


                        {/*Paginator / Navigation Way*/}
                        <div className={'Paginator-Navigation'}>
                            <div className={'Paginator-Way'}>
                                <StoryWay/>
                            </div>
                            <Paginator/>
                        </div>


                        {/*Chat list / Profile User*/}
                        <div className={'Chat-Profile'}>


                            {/*Chat list / SMS*/}
                            <div className={'Chat-List'}>
                                <div className={'Active-Chatting-User'}>
                                    <TableUsers/>
                                    <p>Yesterday</p>
                                </div>
                                <div className={'Chatting'}></div>
                            </div>


                            {/*Profile User*/}
                            <div className={'Profile-Chat-Component'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
