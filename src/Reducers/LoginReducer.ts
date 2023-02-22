import {Dispatch} from "redux";
import {LoginApi, LoginParamType} from "../API/api";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";

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


//thunks
export const loginIn = (data: LoginParamType) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.loginMe(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLogin(true))
                dispatch(statusUserAC("succeeded"))
            }else {
                dispatch(errorUserAC(res.data.messages))
                dispatch(statusUserAC("succeeded"))
            }
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const LoginOut = () => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.authMeOut().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLogin(false))
                dispatch(statusUserAC("succeeded"))
            }else{
                dispatch(errorUserAC(res.data.messages))
                dispatch(statusUserAC("succeeded"))
            }
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//action
export const setIsLogin = (value: boolean) => ({type: "login/SET-IS-LOGIN-IN", value}) as const

//types
export type SetIsLoginActionCreater = ReturnType<typeof setIsLogin>
type InitialStateType = {
    isLoginIn: boolean,
}
type ActionTypes =
    | SetIsLoginActionCreater
    | setErrorAC

