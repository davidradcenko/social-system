import {RootState, useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import {GetActivePageFriendTC, SetCurrentPageFriends} from "../../../../Reducers/UsersReducer";

type CounterUserType={
    UsersCount:number
}
export const CounterFriendsUser = React.memo((props:CounterUserType) => {
    console.log("+++++++++++++CounterFriendsUser  ")
    const dispatch = useAppDispatch()
    let CurrentPage = useSelector<RootState, number>(state => state.users.CurrentPageFriends)


    const [LookMaxAndMinPageFriend, SetLookMaxAndMinPageFriend] = useState<"Min" | "Max" | "Ok">("Min")

    let maxTable = (props.UsersCount / 10) | 0
    let StartTable = 1

    const CurrerntTableInStart = () => {
        dispatch(SetCurrentPageFriends(1))
        dispatch(GetActivePageFriendTC(1))
        SetLookMaxAndMinPageFriend("Min")
    }
    const CurrentTableMinus = () => {
        if (CurrentPage == 1) {
            return SetLookMaxAndMinPageFriend("Min")
        }
        dispatch(SetCurrentPageFriends(--CurrentPage))
        dispatch(GetActivePageFriendTC(CurrentPage))
        SetLookMaxAndMinPageFriend(CurrentPage == 1 ? "Min" : "Ok")
    }

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


    const ChangeMaxMin = (value: "Min" | "Max" | "Ok") => {
        return SetLookMaxAndMinPageFriend(value)
    }


    let ShowCurrentsUsers = CurrentPage * 10
    let ShowMaxCurrentsUsers = (CurrentPage * 10) + 10

    if (CurrentPage == 1) {
        ShowCurrentsUsers = 1
        ShowMaxCurrentsUsers = 10
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