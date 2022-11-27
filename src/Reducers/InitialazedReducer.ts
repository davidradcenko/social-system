import {LoginApi} from "../API/api";
import {Dispatch} from "redux";
import {setIsLogin, SetIsLoginActionCreater} from "./LoginReducer";

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
    return (dispatch: Dispatch<actionTypes | SetIsLoginActionCreater>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.authMe().then(res => {
            if (res.data.resultCode===0){
                dispatch(initializedUserAC(true))
                dispatch(setIsLogin(true))
                dispatch(statusUserAC("succeeded"))
            }
           else {
                console.error(res.data,dispatch)
                dispatch(statusUserAC("succeeded"))
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

//types
type InitialazedType = {
    initialazUser: boolean,
    error: string | null,
    status: statusType
}
export type StatusUserActionType = ReturnType<typeof statusUserAC>
export type statusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type actionTypes =
    | ReturnType<typeof initializedUserAC>
    | ReturnType<typeof errorUserAC>
    | ReturnType<typeof statusUserAC>
