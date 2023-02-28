import {Avatar} from "@mui/material";
import Sear from "../../../img/Chat/Group 117.png";
import React, {useEffect} from "react";
import NoSear from "../../../img/Chat/Group 115.png";
import {Messages} from "../../../Reducers/ChatReducer";
type ChatMessageType={
    Messages:Array<Messages>
}
export const ChatMessages = (props:ChatMessageType) => {
    useEffect(() => {
            const element = document.getElementById('Messages')
        debugger
            if (element != undefined) {
                element.scrollTop = element.scrollHeight
                debugger
            }
        }
        , [])
    return (
        <>
            {props.Messages.map(el => {
                return (
                    <div key={el.id} className={'DivMeesage'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        <div className={'DivMessage-content'}>
                            <p className={'DivMessage-content-p1'}>{el.body}</p>
                            <p className={'DivMessage-content-p2'}>{el.addedAt}<img src={el.viewed==false?Sear:NoSear} alt=""/>
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

//my message
// <div className={'DivMeesage MyMessage'}>
//     <div className={'DivMessage-content'}>
//         <p className={'DivMessage-content-p1'}>Ok!asdfasfdasfafsaaasdf</p>
//         <p className={'DivMessage-content-p2'}>20:01 <img src={NoSear} alt=""/>
//         </p>
//     </div>
// </div>