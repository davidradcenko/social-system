import {Avatar} from "@mui/material";
import Sear from "../../../img/Chat/Group 117.png";
import React, {useEffect} from "react";
import NoSear from "../../../img/Chat/Group 115.png";
import {Messages} from "../../../Reducers/ChatReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";

type ChatMessageType = {
    Messages: Array<Messages>,
    photoUser:string|null
}
export const ChatMessages = (props: ChatMessageType) => {
    const dispatch = useAppDispatch()
    const MainUserId = useSelector<RootState, number>(state => state.initialazed.mainUserId)
    const photo = useSelector<RootState, number>(state => state.initialazed.mainUserId)


    useEffect(() => {

        const element = document.getElementById('Messages')
        debugger
        if (element != undefined) {
            element.scrollTop = element.scrollHeight
            debugger
        }

    })
    return (
        <>
            {props.Messages.map(el => {

                return (
                    <div>
                        {MainUserId != el.senderId
                            ?
                            <div key={el.id} className={'DivMeesage'}>
                                <Avatar alt="Remy Sharp" src={props.photoUser==null?"":props.photoUser}/>
                                <div className={'DivMessage-content'}>
                                    <p className={'DivMessage-content-p1'}>{el.body}</p>
                                    <p className={'DivMessage-content-p2'}>{el.addedAt}<img
                                        src={el.viewed == false ? Sear : NoSear} alt=""/>
                                    </p>
                                </div>
                            </div>
                            :
                            <div key={el.id} className={'DivMeesage MyMessage'}>
                                <div className={'DivMessage-content'}>
                                    <p className={'DivMessage-content-p1'}>{el.body}</p>
                                    <p className={'DivMessage-content-p2'}>{el.addedAt}<img src={NoSear} alt=""/>
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </>
    )
}

//my message
