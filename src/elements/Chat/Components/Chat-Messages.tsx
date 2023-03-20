import {Avatar, Skeleton} from "@mui/material";
import Sear from "../../../img/Chat/Group 117.png";
import React, {useEffect} from "react";
import NoSear from "../../../img/Chat/Group 115.png";
import {Messages} from "../../../Reducers/ChatReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import ButtonFunctional from "../UI-Components/Button-Functional";


export const ChatMessages = (props: ChatMessageType) => {

    //take from Reducer
    //from initialazed
    const MainUserId = useSelector<RootState, number>(state => state.initialazed.mainUserId)
    //from chat
    const currentList = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.currentList)
    const TotalCount = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.TotalCount)
    //from paginator
    const lookMessages = useSelector<RootState, "Yes" | "No">(state => state.paginator.needsNavigate)


    //natch nesesari data for show date
    let objectMessagesMore20length: boolean = false
    let match = currentList * 20
    if (props.Messages.length != 20 || TotalCount % match == 0) objectMessagesMore20length = true


    useEffect(() => {
        const element = document.getElementById('Messages')
        if (element != undefined) {
            element.scrollTop = element.scrollHeight
        }

    })
    return (
        <>
            {/*show loading,need or not*/}
            {lookMessages == "Yes" ?
                <div className={'circular-Navigation'}>
                    <div className={'circular-width'}>
                        <Skeleton variant="circular" width={20} height={20}/>
                        <Skeleton variant="circular" width={20} height={20}/>
                        <Skeleton variant="circular" width={20} height={20}/>
                    </div>
                </div>
                : ''}


            {/*show messages*/}
            {props.Messages.map((el, index) => {
                return (
                    <div key={el.id}>

                        {/*calculated nesesary or not show date*/}
                        {el.addedAt.DDMMYY == props.Messages[index == 0 ? index : index - 1].addedAt.DDMMYY
                            ?
                            index == 0
                                ?
                                objectMessagesMore20length == true
                                    ?
                                    <div className={'circular-Navigation'}>
                                        <p className={"DataOfMessage"}>{el.addedAt.DDMMYY}</p>
                                    </div>
                                    : ""
                                : ""
                            :
                            <div className={'circular-Navigation'}>
                                <p className={"DataOfMessage"}>{el.addedAt.DDMMYY}</p>
                            </div>
                        }

                        {/*show message from me or user*/}
                        {MainUserId != el.senderId
                            ?
                            <div>
                                <div className={'DivMeesage'}>
                                    <Avatar alt="Remy Sharp" src={props.photoUser == null ? "" : props.photoUser}/>
                                    <div className={'DivMessage-content'}>
                                        <p className={'DivMessage-content-p1'}>{el.body}</p>
                                        <p className={'DivMessage-content-p2'}>{el.addedAt.MMHH}<img
                                            src={el.viewed == false ? Sear : NoSear} alt=""/>
                                        </p>
                                    </div>
                                    <ButtonFunctional idUser={props.idUser} idMessage={el.id}/>
                                </div>
                            </div>
                            :
                            <div>
                                <div className={'DivMeesage MyMessage'}>

                                    <div className={'DivMessage-content'}>
                                        <p className={'DivMessage-content-p1'}>{el.body}</p>
                                        <p className={'DivMessage-content-p2'}>{el.addedAt.MMHH}<img
                                            src={el.viewed == false ? Sear : NoSear} alt=""/>
                                        </p>
                                    </div>
                                    <ButtonFunctional idUser={props.idUser} idMessage={el.id}/>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </>
    )
}

//types
type ChatMessageType = {
    Messages: Array<Messages>,
    photoUser: string | null,
    idUser:number
}