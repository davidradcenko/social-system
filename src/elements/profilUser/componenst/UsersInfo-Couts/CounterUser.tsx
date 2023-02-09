import {RootState, useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {GetActivePageUsersTC, SetCurrentPageUsers} from "../../../../Reducers/UsersReducer";
import endAnfStart from "../../../../img/imgNavigationPleer/end-button.png";
import nextAndLast from "../../../../img/imgNavigationPleer/next.png";

export const CounterUser = React.memo(() => {
    console.log("+++++++++++++CounterUser  ")
    const dispatch = useAppDispatch()
    const UsersCount = useSelector<RootState, number>(state => state.users.totalCount)
    let CurrentPage = useSelector<RootState, number>(state => state.users.CurrentPage)


    let maxTable = (UsersCount / 10) | 0
    let StartTable = 1

    const CurrerntTableInStart = () => {
        dispatch(SetCurrentPageUsers(1))
        dispatch(GetActivePageUsersTC(1))
        SetLookMaxAndMinPage("Min")
    }
    const CurrentTableMinus = () => {
        if (CurrentPage == 1) {
            return SetLookMaxAndMinPage("Min")
        }
        dispatch(SetCurrentPageUsers(--CurrentPage))
        dispatch(GetActivePageUsersTC(CurrentPage))
        SetLookMaxAndMinPage(CurrentPage == 1 ? "Min" : "Ok")

    }

    const CurrentTablePlus = () => {
        if (CurrentPage == maxTable) {
            return SetLookMaxAndMinPage("Max")
        }
        dispatch(SetCurrentPageUsers(++CurrentPage))
        dispatch(GetActivePageUsersTC(CurrentPage))
        SetLookMaxAndMinPage(CurrentPage == maxTable?"Max":"Ok")

    }
    const CurrerntTableInEnd = () => {
        dispatch(SetCurrentPageUsers(maxTable))
        dispatch(GetActivePageUsersTC(maxTable))
        SetLookMaxAndMinPage("Max")
    }


    const [LookMaxAndMinPage, SetLookMaxAndMinPage] = useState<"Min" | "Max" | "Ok">("Min")
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
        ShowMaxCurrentsUsers = UsersCount
    }

    return <>
        <div className={"CounterUser"}>
            <div className={'MainblockCouter'}>
                <div className={'CountFigers'}>
                    <p>{ShowCurrentsUsers}–{ShowMaxCurrentsUsers} of {UsersCount}</p>
                </div>
                <div className={"ChangeCurrentTable"}>

                    <input className={LookMaxAndMinPage == "Min" ? "ChangeCurrentTable1 navigatPlaeerDisable" : "ChangeCurrentTable1"}
                           onClick={CurrerntTableInStart}  type="button"/>

                    <input className={LookMaxAndMinPage == "Min" ? "ChangeCurrentTable2 abbMardjen navigatPlaeerDisable" : "ChangeCurrentTable2 abbMardjen"}
                           onClick={CurrentTableMinus} type="button"/>

                    <input className={LookMaxAndMinPage == "Max" ? "ChangeCurrentTable3 navigatPlaeerDisable" : "ChangeCurrentTable3"}
                           onClick={CurrentTablePlus} type="button"/>

                    <input className={LookMaxAndMinPage == "Max" ? "ChangeCurrentTable4 navigatPlaeerDisable" : "ChangeCurrentTable4"}
                           onClick={CurrerntTableInEnd} type="button"/>


                </div>
            </div>
        </div>
    </>
})