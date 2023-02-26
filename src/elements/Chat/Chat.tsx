import "./ChatCSS.css"
import "./ChatModuleCss.css"
import Logo from '../../img/nav-icons/icons-sosial/common.png'
import Sear from '../../img/Chat/Group 117.png'
import NoSear from '../../img/Chat/Group 115.png'
import BagroundIMG from '../../img/Chat/pexels-photo-2531608.jpeg'


//material UL
import {Avatar} from "@mui/material";
import {useAppDispatch} from "../../store/store";
import {useEffect} from "react";
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {IconsNavigation} from "./Chat-Componets/Icons-Navigation";
import {StoryWay} from "./Chat-Componets/Story-Way";
import SearchInput from "./UI-Components/Search-Input";
import TableUsers from "./UI-Components/Table-Users";
import Paginator from "./UI-Components/Paginator";
import FullWidthTextField from "./UI-Components/Send-SMS";


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
                            <div  style={} className={'Chat-List'}>
                                <div className={'Active-Chatting-User'}>
                                    <TableUsers/>
                                    <p>Yesterday</p>
                                </div>
                                <div className={'Chatting'}>


                                    {/*Main bloc info message*/}
                                    <div className={'Messages'}>

                                        <div className={'DivMeesage'}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            <div className={'DivMessage-content'}>
                                                <p className={'DivMessage-content-p1'}>Ok!asdfasfdasfafsaaasdf</p>
                                                <p className={'DivMessage-content-p2'}>20:01 <img src={Sear} alt=""/></p>
                                            </div>
                                        </div>

                                        <div className={'DivMeesage MyMessage'}>
                                            <div className={'DivMessage-content'}>
                                                <p className={'DivMessage-content-p1'}>Ok!asdfasfdasfafsaaasdf</p>
                                                <p className={'DivMessage-content-p2'}>20:01 <img src={NoSear} alt=""/></p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className={'Send-SMS'}>
                                        <FullWidthTextField/>
                                    </div>
                                </div>
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
