import {LoginApi} from "../API/api";
import {Dispatch} from "redux";
import {setIsLogin, SetIsLoginActionCreater} from "./LoginReducer";

const Initial: InitialazedType = {
    initialazUser: false,
    error: null,
    status: 'idle',
    mainUserId: 16939,
    name: '',
    foto: '' || null
}
export const initialazedReducer = (state: InitialazedType = Initial, action: actionTypes): InitialazedType => {
    switch (action.type) {
        case 'INITIALAZED-USER':
            return {...state, initialazUser: action.value}

        case 'ERROR-USER':
            return {...state, error: action.value}

        case 'STATUS-USER':
            return {...state, status: action.value}
        case 'SET-MAIN-USER-ID':
            return {...state, mainUserId: action.idMainUser, name: action.name}
        case "SET-ADMIN-FOTO": {
            return {...state, foto: action.foto}
        }
        default:
            return state
    }
}

//thunks
export const initializeAppTC = () => {
    return (dispatch: Dispatch<actionTypes | SetIsLoginActionCreater>) => {
        dispatch(statusUserAC("loading"))
        LoginApi.authMe().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(initializedUserAC(true))
                dispatch(mainUserIDAC(res.data.data.id, res.data.data.login))
                dispatch(setIsLogin(true))

                LoginApi.getFotoAdmin(res.data.data.id).then(resA => {
                        dispatch(setAdminFotoAC(resA.data.photos.small))
                        dispatch(statusUserAC("succeeded"))

                }).catch((error) => {
                    dispatch(errorUserAC(error))
                    console.error(error, dispatch)
                })
                dispatch(statusUserAC("succeeded"))
            } else {
                console.error(res.data, dispatch)
                dispatch(errorUserAC(res.data))
                dispatch(statusUserAC("succeeded"))
            }
        }).catch((error) => {
            dispatch(errorUserAC(error))
            console.error(error, dispatch)
        })
    }
}

//actions
export const initializedUserAC = (value: boolean) => ({type: "INITIALAZED-USER", value}) as const
export const errorUserAC = (value: string | null) => ({type: "ERROR-USER", value}) as const
export const statusUserAC = (value: statusType) => ({type: "STATUS-USER", value}) as const
export const mainUserIDAC = (idMainUser: number, name: string) => ({
    type: "SET-MAIN-USER-ID",
    idMainUser,
    name
}) as const
export const setAdminFotoAC = (foto: any) => ({
    type: "SET-ADMIN-FOTO",
    foto
}) as const

//types
export type InitialazedType = {
    initialazUser: boolean,
    error: string | null,
    status: statusType,
    mainUserId: number,
    name: string,
    foto: string | null
}
export type StatusUserActionType = ReturnType<typeof statusUserAC>
export type setErrorAC = ReturnType<typeof errorUserAC>
export type statusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type actionTypes =
    | ReturnType<typeof mainUserIDAC>
    | ReturnType<typeof initializedUserAC>
    | ReturnType<typeof errorUserAC>
    | ReturnType<typeof statusUserAC>
    | ReturnType<typeof setAdminFotoAC>
