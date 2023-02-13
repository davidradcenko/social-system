import {RootState, useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {GetActivePageFriendTC, SetCurrentPageFriends} from "../../../../Reducers/UsersReducer";

type CounterUserType={
    UsersCount:number
}
export const CounterFriendsUser = React.memo((props:CounterUserType) => {
    const dispatch = useAppDispatch()

    //take current page users
    let CurrentPage = useSelector<RootState, number>(state => state.users.CurrentPageFriends)

    // state for save min,max
    const [LookMaxAndMinPageFriend, SetLookMaxAndMinPageFriend] = useState<"Min" | "Max" | "Ok">("Min")
    const ChangeMaxMin = (value: "Min" | "Max" | "Ok") => {
        return SetLookMaxAndMinPageFriend(value)
    }



    //set and count min max
    let maxTable = (props.UsersCount / 10) | 0
    let checkMaxSidth =props.UsersCount % 10
    if (checkMaxSidth !==0){
        ++maxTable
    }

    let StartTable = 1


    //menus and go to start
    const CurrentTableMinus = () => {
        if (CurrentPage == 1) {
            return SetLookMaxAndMinPageFriend("Min")
        }
        dispatch(SetCurrentPageFriends(--CurrentPage))
        dispatch(GetActivePageFriendTC(CurrentPage))
        SetLookMaxAndMinPageFriend(CurrentPage == 1 ? "Min" : "Ok")
    }
    const CurrerntTableInStart = () => {
        dispatch(SetCurrentPageFriends(1))
        dispatch(GetActivePageFriendTC(1))
        SetLookMaxAndMinPageFriend("Min")
    }

    //plus and go to end
    const CurrentTablePlus = () => {
        if (CurrentPage == maxTable) {
            return SetLookMaxAndMinPageFriend("Max")
        }
        dispatch(SetCurrentPageFriends(++CurrentPage))
        dispatch(GetActivePageFriendTC(CurrentPage))
        SetLookMaxAndMinPageFriend(CurrentPage == maxTable ? "Max" : "Ok")

    }
    const CurrerntTableInEnd = () => {
        dispatch(SetCurrentPageFriends(maxTable))
        dispatch(GetActivePageFriendTC(maxTable))
        SetLookMaxAndMinPageFriend("Max")
    }



    //count current table
    let ShowCurrentsUsers = (CurrentPage-1) * 10
    let ShowMaxCurrentsUsers = (CurrentPage * 10)


    if (CurrentPage == 1) {
        ShowCurrentsUsers = 1
        ShowMaxCurrentsUsers = 10
    }
    if (props.UsersCount<10){
        ShowMaxCurrentsUsers=props.UsersCount
    }
    if (CurrentPage == maxTable) {
        ShowCurrentsUsers = ShowCurrentsUsers
        ShowMaxCurrentsUsers = props.UsersCount
    }

    return <>
        <div className={"CounterUser"}>
            <div className={'MainblockCouter'}>
                <div className={'CountFigers'}>
                    <p>{ShowCurrentsUsers}–{ShowMaxCurrentsUsers} of {props.UsersCount}</p>
                </div>
                <div className={"ChangeCurrentTable"}>

                    <input
                        className={LookMaxAndMinPageFriend == "Min" ? "ChangeCurrentTable1 navigatPlaeerDisable" : "ChangeCurrentTable1"}
                        onClick={CurrerntTableInStart} type="button"/>

                    <input
                        className={LookMaxAndMinPageFriend == "Min" ? "ChangeCurrentTable2 abbMardjen navigatPlaeerDisable" : "ChangeCurrentTable2 abbMardjen"}
                        onClick={CurrentTableMinus} type="button"/>

                    <input
                        className={LookMaxAndMinPageFriend == "Max" ? "ChangeCurrentTable3 navigatPlaeerDisable" : "ChangeCurrentTable3"}
                        onClick={CurrentTablePlus} type="button"/>

                    <input
                        className={LookMaxAndMinPageFriend == "Max" ? "ChangeCurrentTable4 navigatPlaeerDisable" : "ChangeCurrentTable4"}
                        onClick={CurrerntTableInEnd} type="button"/>


                </div>
            </div>
        </div>
    </>
})