import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {CounterFriendsUser} from "./UsersInfo-Couts/CounterFriendsUser";
import {RootState, useAppDispatch} from "../../../store/store";
import {FollowUserAC, GetActivePageNoFriendTC, GetUsersProfilTK} from "../../../Reducers/UsersReducer";
import {useSelector} from "react-redux";
import {UserType} from "../../../API/api";
import {Await} from "react-router-dom";
import {CounterNoFriendUser} from "./UsersInfo-Couts/CounterNoFriendsUser";

type ResultFilterType = {
    StateResultTable: "Followers" | "Recommendations"
}
export const MainBlockUsersInfo = React.memo((props: ResultFilterType) => {
    console.log("+++++++++++++MainBlockUsersInfo  ")
    const ActivePageFriend = useSelector<RootState, Array<UserType>>(state => state.users.itemsFriends)
    const ActivePageNoFriend = useSelector<RootState, Array<UserType>>(state => state.users.itemsNoFriends)

    const UsersFriendCount = useSelector<RootState, number>(state => state.users.totalFriendCount)
    const UsersNoFriendCount = useSelector<RootState, number>(state => state.users.totalNoFriendCount)

    return (
        <div className={"content-functional"}>
            {/*one-pass*/}
            <div className={props.StateResultTable == "Followers" ? "one-pass-block-content" : "one-pass-block-content ClassDisplayNone"}>
                <CounterFriendsUser UsersCount={UsersFriendCount}/>
                <div className={"one-pass-scroll"}>
                    {ActivePageFriend.map(tl => {

                        return <TableFriend key={tl.id} tl={tl}/>
                        //
                    })}
                </div>
            </div>
            {/*two pass*/}
            <div className={props.StateResultTable == "Recommendations" ? "two-pas-block-content" : " two-pas-block-content ClassDisplayNone"}>
                <CounterNoFriendUser UsersCount={UsersNoFriendCount}/>
                <div className={"one-pass-scroll"}>
                    {ActivePageNoFriend.map(tl => {
                        return <TableNoFriend key={tl.id} tl={tl}/>
                    })}
                </div>
            </div>
        </div>
    )
})


type ttt = {
    tl: any
}
let m=0
let n=0


export const TableFriend = React.memo((props: ttt) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetUsersProfilTK("Friends", props.tl.id))
    }, [])

    return (
        <div key={props.tl.id} className="one-pass-info-black">
            <div className={"one-pas-info"}>
                <div className={"one-pass-info-img"}>
                    <img src={props.tl.photos.small == null ? testInfoBlockImg : props.tl.photos.small}
                         alt="My followers litle img"/>
                </div>
                <div className={"one-pas-info-text"}>
                    <p className={"one-pas-info-text-name"}>{props.tl.name}
                        <input type={"checkbox"} onChange={e=>{}} checked={props.tl.lookingForAJob || false} readOnly/>
                    </p>
                    <p className={"one-pas-info-text-qvalete"}>{props.tl.aboutMe}</p>
                </div>
            </div>
            <div className={"one-pas-function"}>
                <input type="button" value={"Delete"}/>
            </div>
        </div>
    )
})
export const TableNoFriend=React.memo((props:any)=>{
    const dispatch = useAppDispatch()


    const FollowUser=()=>{
        debugger
        dispatch(FollowUserAC(props.tl.id))
    }
    useEffect(() => {
        dispatch(GetUsersProfilTK("NoFriends", props.tl.id))
    }, [])
    return(
        <div className="two-pass-info-block">
            <div className={"one-pas-info"}>
                <div className={"one-pass-info-img"}>
                    <img src={props.tl.photos.small == null ? testInfoBlockImg : props.tl.photos.small} alt="My followers litle img"/>
                </div>
                <div className={"one-pas-info-text"}>
                    <p className={"one-pas-info-text-name"}>{props.tl.name}
                        <input type={"checkbox"}  onChange={e=>{}} checked={props.tl.lookingForAJob || false} readOnly/>
                    </p>
                    <p className={"one-pas-info-text-qvalete"}>{props.tl.aboutMe}</p>
                </div>
            </div>
            <div className={"two-pas-function"}>
                <input type="button" onClick={FollowUser} value={"Subscribe"}/>
            </div>
        </div>
    )
})