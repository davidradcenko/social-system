import {ChatMessages} from "./Chat-Messages";
import FullWidthTextField from "../UI-Components/Send-SMS";
import React, {useEffect, useState} from "react";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {GetNextPageMessage, GetMessageBottomTS, Messages, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import TableUsers from "../UI-Components/Table-Users";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
export const ChatWind = () => {

    //take data from chat reducer
    const dispatch = useAppDispatch()
    //from chat
    const Messages = useSelector<RootState, Array<Messages>>(state => state.chat.MessageCurrentUser.Message)
    const photoUser = useSelector<RootState, string | null>(state => state.chat.MessageCurrentUser.photos.small)
    const IdUser = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.idUser)
    const lastDialogActivityDate = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.lastDialogActivityDate)
    const userName = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.userName)
    let currentListMessage = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.currentList)
    let totalCount = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.TotalCount)
    let LastActiveUser = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.lastUserActivityDate)
    const UsersStartedDialogs = useSelector<RootState, Array<StartedUsersChatType>>(state => state.chat.StartedUsersChat)
    //from paginator
    const lookMessages = useSelector<RootState, "Yes" | "No">(state => state.paginator.needsNavigate)
    const currentPage = useSelector<RootState, number>(state => state.paginator.CurrentPage)


    //function when end scroll div, give next table
    const element = document.getElementById('Messages')
    const ScrollMetod = () => {
        if (element != null) {
            if (lookMessages == "Yes") {
                if (element.scrollTop === 0) {
                    dispatch(GetNextPageMessage(IdUser, {
                        small: photoUser,
                        large: null
                    }, userName, lastDialogActivityDate, 10, ++currentListMessage))
                }
            }
        }
    }

    //function go to bottom
    const GotoBottom=()=>{
         dispatch(GetMessageBottomTS(IdUser))
    }


    let type:"Friend" | "Other"="Other"


    useEffect(()=>{
        let userType=UsersStartedDialogs.find(el=>el.id==IdUser)
        if (userType!=undefined){
            type=userType.typeUser
        }

    },[])

    return (
        <div className={'Chat-List'}>
            <div className={'Active-Chatting-User'}>

                <TableUsers idUser={IdUser} photos={{small: photoUser, large: null}} userName={userName}
                            lastDialogActivityDate={lastDialogActivityDate} LastActiveUser={LastActiveUser}
                            versios={"headerChat"}
                            TypeOfUser={type}
                />

                {IdUser==0
                    ?""
                    :<p>Was online :{LastActiveUser}</p>
                }

            </div>

            <div className={'Chatting'}>

                {/*table messages*/}
                <div id={"Messages"} className={'Messages'} onScroll={ScrollMetod}>
                    <ChatMessages idUser={IdUser} photoUser={photoUser} Messages={Messages}/>
                </div>

                {/*input send message*/}
                <div className={'Send-SMS'}>

                    <FullWidthTextField  lastDialogActivityDate={lastDialogActivityDate} userName={userName}
                                        photoUser={{small: photoUser, large: null}} IdUser={IdUser} LastActiveUser={LastActiveUser}/>

                    {/*button go to bottom*/}
                    {currentListMessage>=2
                        ? <div  onClick={GotoBottom} className={'Navigate-to-botton'}>
                            <IconButton  color={"primary"}
                                         aria-label="Go-to-bott" size="large">
                                <KeyboardDoubleArrowDownOutlinedIcon fontSize="large"/>
                            </IconButton>
                        </div>
                        : ""}

                </div>
            </div>
        </div>
    )
}