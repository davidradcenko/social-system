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

    //take current page users
    let CurrentPage = useSelector<RootState, number>(state => state.users.CurrentPageNoFriends)

    // state for save min,max
    const [LookMaxAndMinPage, SetLookMaxAndMinPage] = useState<"Min" | "Max" | "Ok">("Min")
    const ChangeMaxMin = (value: "Min" | "Max" | "Ok") => {
        return SetLookMaxAndMinPage(value)
    }



    //set and count min max
    let maxTable = (props.UsersCount / 10) | 0
    let StartTable = 1
    let checkMaxSidth =props.UsersCount % 10
    if (checkMaxSidth !==0){
        ++maxTable
    }


    //plus and go to end
    const CurrerntTableInStart = () => {
        dispatch(SetCurrentPageNoFriends(1))
        dispatch(GetActivePageNoFriendTC(1))
        SetLookMaxAndMinPage("Min")
    }
    const CurrerntTableInEnd = () => {
        dispatch(SetCurrentPageNoFriends(maxTable))
        dispatch(GetActivePageNoFriendTC(maxTable))
        SetLookMaxAndMinPage("Max")
    }

    //menus and go to start
    const CurrentTableMinus = () => {
        if (CurrentPage == 1) {
            return SetLookMaxAndMinPage("Min")
        }
        dispatch(SetCurrentPageNoFriends(--CurrentPage))
        dispatch(GetActivePageNoFriendTC(CurrentPage))
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
            <p>Recommendations</p>
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