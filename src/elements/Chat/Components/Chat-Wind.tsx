import {ChatMessages} from "./Chat-Messages";
import FullWidthTextField from "../UI-Components/Send-SMS";
import React from "react";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {GetNextPageMessage, Messages} from "../../../Reducers/ChatReducer";
import TableUsers from "../UI-Components/Table-Users";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

export const ChatWind = () => {
    const dispatch = useAppDispatch()

    //take data from chat reducer
    const Messages = useSelector<RootState, Array<Messages>>(state => state.chat.MessageCurrentUser.Message)
    const photoUser = useSelector<RootState, string | null>(state => state.chat.MessageCurrentUser.photos.small)
    const IdUser = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.idUser)
    const lastDialogActivityDate = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.lastDialogActivityDate)
    const userName = useSelector<RootState, string>(state => state.chat.MessageCurrentUser.userName)
    let currentListMessage = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.currentList)
    let totalCount = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.TotalCount)

    //take data from paginator reducer
    const lookMessages = useSelector<RootState, "Yes" | "No">(state => state.paginator.needsNavigate)

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

    return (
        <div className={'Chat-List'}>
            <div className={'Active-Chatting-User'}>
                <TableUsers idUser={IdUser} photos={{small: photoUser, large: null}} userName={userName}
                            lastDialogActivityDate={lastDialogActivityDate}/>
                <p>Yesterday</p>
            </div>
            <div className={'Chatting'}>

                {/*table messages*/}
                <div id={"Messages"} className={'Messages'} onScroll={ScrollMetod}>
                    <ChatMessages photoUser={photoUser} Messages={Messages}/>
                </div>

                {/*input send message*/}
                <div className={'Send-SMS'}>
                    <FullWidthTextField lastDialogActivityDate={lastDialogActivityDate} userName={userName}
                                        photoUser={{small: photoUser, large: null}} IdUser={IdUser}/>
                    <div className={'Navigate-to-botton'}>
                        <IconButton  color={"primary"}
                                    aria-label="Go-to-bott" size="large">
                            <KeyboardDoubleArrowDownOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    )
}