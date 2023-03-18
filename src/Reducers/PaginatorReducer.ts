import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {ChatApi, photosType} from "../API/api";
import {Dispatch} from "redux";
import {SetLastMessage} from "./ChatReducer";


const initialState: NavigationType = {
    needsNavigate: "No",
    CurrentPage: 0,
    totalCount: 0,
    NewMessageInformate:0
}
export const PaginatorReducer = (state: NavigationType = initialState, action: ActionTypes): NavigationType => {
    switch (action.type) {
        case "SET-CONDITION":{
            return {...state,needsNavigate:action.Condition}
        }
        case "SET-TOTAL-COUNT":{
            return {...state,totalCount:action.totalCount}
        }
        case "SET-Count-NewMesage":{
            return {...state,NewMessageInformate:action.totalCount}
        }
        default:
            return state
    }
}


//thunk
export const GetNextListMessages = (idUser:number,NumberPage: number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ReturnType<typeof SetLastMessage>>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser, NumberPage, 10).then(res => {
            if (res.data.error == null && res.data.items[0] != undefined) {
                dispatch(SetLastMessage(idUser, res.data.items[0].body))
            } else {
                dispatch(errorUserAC(res.data.error))
                dispatch(statusUserAC("succeeded"))
            }
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}


//actions
export const SetConditionNavigation = (Condition: "Yes" | "No") => ({
    type: "SET-CONDITION",
    Condition,
}) as const
export const SetTotalCount = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount,
}) as const

export const SetNewMessageInformate = (totalCount: number) => ({
    type: "SET-Count-NewMesage",
    totalCount,
}) as const

export type SetNewMessageInformateAC= ReturnType<typeof SetNewMessageInformate>

//types
type NavigationType = {
    NewMessageInformate:number
    needsNavigate: "Yes" | "No"
    CurrentPage: number,
    totalCount: number
}
export type ExporsNavigationsType=
    | ReturnType<typeof SetConditionNavigation>
    | ReturnType<typeof SetTotalCount>
type ActionTypes =
    | setErrorAC
    | ReturnType<typeof SetConditionNavigation>
    | ReturnType<typeof SetTotalCount>
    | ReturnType<typeof SetNewMessageInformate>