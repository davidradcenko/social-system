import {ChatApi, messageType} from "../API/api";
import {Dispatch} from "redux";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";



export const ChatReducer = (state: any = {}, action: any): any => {
    switch (action.type) {
        case "login/SET-IS-LOGIN-IN": {
            return {...state, isLoginIn: action.value}
        }
        default:
            return state
    }
}
//thunks
export const StartDialogs = (idUser:number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.StartDialogs(idUser).then(res => {
            debugger
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const ChatMS = (idUser:number,message:messageType) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.WriteMS(idUser,message).then(res => {
           debugger
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
//action
type ActionTypes =
    | setErrorAC