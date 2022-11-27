import {Dispatch} from "redux";
import {LoginApi, LoginParamType} from "../API/api";
import {statusUserAC, StatusUserActionType} from "./InitialazedReducer";

const initialState: InitialStateType = {
    isLoginIn: false
};

export const loginReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGIN-IN": {
            return {...state, isLoginIn: action.value}
        }
        default:
            return state
    }
}

//action
export const setIsLogin = (value: boolean) => ({type: "login/SET-IS-LOGIN-IN", value}) as const

//thunks
export const loginIn = (data: LoginParamType) => {
    return (dispatch: Dispatch<ActionTypes| StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.loginMe(data).then(res => {
            dispatch(setIsLogin(true))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            console.error(error, dispatch)
        })
    }
}

export const LoginOut = () => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.authMeOut().then(res => {
            dispatch(setIsLogin(false))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            console.error(error, dispatch)
        })
    }
}

//types
type ActionTypes = SetIsLoginActionCreater
export type SetIsLoginActionCreater = ReturnType<typeof setIsLogin>
type InitialStateType = {
        isLoginIn: boolean,
}