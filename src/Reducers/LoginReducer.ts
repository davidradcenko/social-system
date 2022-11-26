import React from 'react';
import {Dispatch} from "redux";
import {LoginApi, LoginParamType} from "../API/api";


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
const setIsLogin = (value: boolean) => ({type: "login/SET-IS-LOGIN-IN", value}) as const


//thunks
export const loginIn = (data: LoginParamType) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        LoginApi.loginMe(data).then(res => {
            dispatch(setIsLogin(true))
        }).catch((error) => {
            console.error(error, dispatch)
        })
    }
}
export const initializeAppTC = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        LoginApi.authMe().then(res => {
            dispatch(setIsLogin(false))
        }).catch((error) => {
            console.error(error, dispatch)
        })
    }
}
export const LoginOut = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        LoginApi.authMeOut().then(res => {
            dispatch(setIsLogin(false))
        }).catch((error) => {
            console.error(error, dispatch)
        })
    }
}

//types
type ActionTypes =
    ReturnType<typeof setIsLogin>

type InitialStateType = {
        isLoginIn: boolean,
}