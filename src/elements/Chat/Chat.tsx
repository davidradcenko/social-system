import "./ChatCSS.css"
import "./ChatModuleCss.css"
import {useAppDispatch} from "../../store/store";
import React, {useEffect} from "react";
import Logo from "../../img/nav-icons/icons-sosial/common.png";
import ButtonMenuNavigation from "./UI-Components/ButtonMenu";
import {StoryWay} from "./Chat-Componets/Story-Way";
import TableUsers from "./UI-Components/Table-Users";
import Paginator from "./UI-Components/Paginator";
import {Avatar, Checkbox} from "@mui/material";
import Sear from "../../img/Chat/Group 117.png";
import NoSear from "../../img/Chat/Group 115.png";
import FullWidthTextField from "./UI-Components/Send-SMS";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImageAvatars from "../profilUser/componenst/Main-Info-Social";
import {ChatNavigation} from "./Components/Chat-Navigation";
import {ChatSearchList} from "./Components/Chat-Search-List";


//material UL
export const Chat = React.memo(() => {
    console.log("Chat ")
    const dispatch = useAppDispatch()


    useEffect(() => {
        // dispatch(ChatMS(24522,{body:'Hello'}))
        //dispatch(StartDialogs(24522))
    })
    return (
        <div className={'Chat'}>


            {/* Navigation */}
            <ChatNavigation/>


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
                        <ChatSearchList/>
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
                                    {/*<TableUsers/>*/}
                                    <p>Yesterday</p>
                                </div>
                                <div className={'Chatting'}>


                                    {/*Main bloc info message*/}
                                    <div className={'Messages'}>

                                        <div className={'DivMeesage'}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                            <div className={'DivMessage-content'}>
                                                <p className={'DivMessage-content-p1'}>Ok!asdfasfdasfafsaaasdf</p>
                                                <p className={'DivMessage-content-p2'}>20:01 <img src={Sear} alt=""/>
                                                </p>
                                            </div>
                                        </div>

                                        <div className={'DivMeesage MyMessage'}>
                                            <div className={'DivMessage-content'}>
                                                <p className={'DivMessage-content-p1'}>Ok!asdfasfdasfafsaaasdf</p>
                                                <p className={'DivMessage-content-p2'}>20:01 <img src={NoSear} alt=""/>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={'Send-SMS'}>
                                        <FullWidthTextField/>
                                    </div>
                                </div>
                            </div>


                            {/*Profile User*/}
                            <div className={'Profile-Chat-Component'}>
                                <div className={'ProfileChat'}>
                                    <p className={'Profile-Chat-name'}>DAVID RADCHENKO</p>
                                    <Avatar sx={{margin: 3, width: 200, height: 200}} alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"/>
                                    <FormControlLabel label="Job search"
                                                      control={<Checkbox color="success" checked={true} onChange={e => {
                                                      }}/>}/>
                                    <p className={'Profile-Chat-name'}>
                                        <span className={'Profile-Chat-Frofessional'}>Frofessional skills:</span><br/>
                                        React, Redux,CSS, My Sql,Oracle Databases,
                                        JavaEE,JaирммSpring
                                    </p>
                                    <ImageAvatars/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
})