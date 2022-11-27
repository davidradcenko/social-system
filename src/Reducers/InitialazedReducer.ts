import React from 'react';
import {LoginApi, LoginParamType} from "../API/api";
import {Dispatch} from "redux";

const Initial: InitialazedType = {
    initialazUser: false,
    error: null,
    status: 'idle'

}
export const initialazedReducer = (state: InitialazedType = Initial, action: actionTypes): InitialazedType => {
    switch (action.type) {
        case 'INITIALAZED-USER':
            return {...state, initialazUser: action.value}

        case 'ERROR-USER':
            return {...state, error: action.value}

        case 'STATUS-USER':
            return {...state, status: action.value}

        default: return state
    }
}

//thunks
export const initializeAppTC = () => {
    return (dispatch: Dispatch<actionTypes>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.authMe().then(res => {
            if (res.data.resultCode===0){
                dispatch(initializedUserAC(true))
                dispatch(statusUserAC("succeeded"))
            }
           else {
                console.error(res.data,dispatch)
            }
        }).catch((error) => {
           console.error(error, dispatch)
        })
    }
}


//actions
export const initializedUserAC = (value: boolean) => ({type: "INITIALAZED-USER", value}) as const
export const errorUserAC = (value: string | null) => ({type: "ERROR-USER", value}) as const
export const statusUserAC = (value: statusType) => ({type: "STATUS-USER", value}) as const

export type StatusUserActionType=ReturnType<typeof statusUserAC>

//types
type InitialazedType = {
    initialazUser: boolean,
    error: string | null,
    status: statusType
}
type statusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type actionTypes =
    ReturnType<typeof initializedUserAC>
    | ReturnType<typeof errorUserAC>
    | ReturnType<typeof statusUserAC>
