import {RootState, useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {GetActivePageNoFriendTC, SetCurrentPageNoFriends} from "../../../../Reducers/UsersReducer";
import endAnfStart from "../../../../img/imgNavigationPleer/end-button.png";
import nextAndLast from "../../../../img/imgNavigationPleer/next.png";

type CounterUserType={
    UsersCount:number
}
export const CounterNoFriendUser = React.memo((props:CounterUserType) => {
    console.log("+++++++++++++CounterFriendsUser  ")
    const dispatch = useAppDispatch()
    let CurrentPage = useSelector<RootState, number>(state => state.users.CurrentPageNoFriends)




    const [LookMaxAndMinPage, SetLookMaxAndMinPage] = useState<"Min" | "Max" | "Ok">("Min")

    let maxTable = (props.UsersCount / 10) | 0
    let StartTable = 1

    const CurrerntTableInStart = () => {
        dispatch(SetCurrentPageNoFriends(1))
        dispatch(GetActivePageNoFriendTC(1))
        SetLookMaxAndMinPage("Min")
    }
    const CurrentTableMinus = () => {
        if (CurrentPage == 1) {
            return SetLookMaxAndMinPage("Min")
        }
        dispatch(SetCurrentPageNoFriends(--CurrentPage))
        // dispatch(GetActivePageUsersTC(CurrentPage))
        SetLookMaxAndMinPage(CurrentPage == 1 ? "Min" : "Ok")

    }

    const CurrentTablePlus = () => {
        if (CurrentPage == maxTable) {
            return SetLookMaxAndMinPage("Max")
        }
        dispatch(SetCurrentPageNoFriends(++CurrentPage))
        dispatch(GetActivePageNoFriendTC(CurrentPage))
        SetLookMaxAndMinPage(CurrentPage == maxTable ? "Max" : "Ok")

    }
    const CurrerntTableInEnd = () => {
        dispatch(SetCurrentPageNoFriends(maxTable))
        dispatch(GetActivePageNoFriendTC(maxTable))
        SetLookMaxAndMinPage("Max")
    }


    const ChangeMaxMin = (value: "Min" | "Max" | "Ok") => {
        return SetLookMaxAndMinPage(value)
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
                        className={LookMaxAndMinPage == "Min" ? "ChangeCurrentTable1 navigatPlaeerDisable" : "ChangeCurrentTable1"}
                        onClick={CurrerntTableInStart} type="button"/>

                    <input
                        className={LookMaxAndMinPage == "Min" ? "ChangeCurrentTable2 abbMardjen navigatPlaeerDisable" : "ChangeCurrentTable2 abbMardjen"}
                        onClick={CurrentTableMinus} type="button"/>

                    <input
                        className={LookMaxAndMinPage == "Max" ? "ChangeCurrentTable3 navigatPlaeerDisable" : "ChangeCurrentTable3"}
                        onClick={CurrentTablePlus} type="button"/>

                    <input
                        className={LookMaxAndMinPage == "Max" ? "ChangeCurrentTable4 navigatPlaeerDisable" : "ChangeCurrentTable4"}
                        onClick={CurrerntTableInEnd} type="button"/>


                </div>
            </div>
        </div>
    </>
})