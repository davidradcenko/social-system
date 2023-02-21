import {Dispatch} from "redux";
import {statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {UserProfilType, ProfileApi} from "../API/api";


const initialState:UserProfilType={
    aboutMe: "",
    contacts: {
        facebook: "",
        github: "",
        instagram: "",
        mainLink: "",
        twitter: "",
        vk: "",
        website: "",
        youtube: ""
    },
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "",
    photos:{
        large:'',
        small:''
    },
    userId:1
}
export const profilReducer = (state:UserProfilType=initialState, action:actionType):UserProfilType => {
    switch (action.type) {
        case "GET-PROFILE":{
            return {...state,...action.value}
        }
        case "SET-FOTO-PROFILE":{
          return   {...state,photos:action.value}
        }
        default:
            return state
    }
}



//thunk
export const GetMyProfilTK=(id:number)=>{
    return(dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        ProfileApi.profileGet(id).then(res=>{
            dispatch(getProfileAC(res.data))
            dispatch(statusUserAC("succeeded"))
        }).catch((error)=>{
            console.error(error, dispatch)
        })
    }
}
export const profilChangeTK=(value:profilChangeType)=>{
    return(dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        ProfileApi.profileChenge(value).then(res=>{
            GetMyProfilTK(16939)
            dispatch(statusUserAC("succeeded"))
        }).catch((error)=>{
            console.error(error, dispatch)
        })
    }
}
export const SaveFotoTK=(file:any)=>{
    return(dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        ProfileApi.saveFoto(file).then(res=>{
            dispatch(setFotoAC(res.data.data.photos))
            dispatch(statusUserAC("succeeded"))
        }).catch((error)=>{
            console.error(error, dispatch)
        })
    }
}
//action
export const getProfileAC = (value:UserProfilType) => ({type: "GET-PROFILE",value}) as const
export const setFotoAC = (value:any) => ({type: "SET-FOTO-PROFILE",value}) as const


//types
type actionType=
    | ReturnType<typeof getProfileAC>
    | ReturnType<typeof setFotoAC>
export type profilChangeType={
    // userId: Number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string| null,
        vk: string| null,
        facebook: string| null,
        instagram: string| null,
        twitter: string| null,
        website: string| null,
        youtube: string | null,
        mainLink: string| null
    }
    photos:{
        small: string | null
        large: string | null
    }
}

