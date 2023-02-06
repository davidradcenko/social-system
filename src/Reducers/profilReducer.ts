import {Dispatch} from "redux";
import {statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {initialStateProfileType, ProfileApi} from "../API/api";


const initialState:initialStateProfileType={
    aboutMe: "aboutMe",
    contacts: {
        facebook: "facebook",
        github: "github",
        instagram: "instagram",
        mainLink: "mainLink",
        twitter: "twitter",
        vk: "vk",
        website: "website",
        youtube: "youtube"
    },
    lookingForAJob: true,
    lookingForAJobDescription: "lookingForAJobDescription",
    fullName: "fullName",
    photos:{
        large:'large',
        small:'small'
    }
}
export const profilReducer = (state:initialStateProfileType=initialState, action:actionType):initialStateProfileType => {
    switch (action.type) {
        case "GET-PROFILE":{
            return {...state,...action.value}
        }
        case "PUT-PROFILE-CHANGE":{
            return {...state,...action.value}
        }
        default:
            return state
    }
}



//thunk
export const profilGetTK=(id:number)=>{
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
export const profilChangeTK=(value:initialStateProfileType)=>{
    return(dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        ProfileApi.profileChenge(value).then(res=>{
            dispatch(ProfileChangeAC(value))
            dispatch(statusUserAC("succeeded"))
        }).catch((error)=>{
            console.error(error, dispatch)
        })
    }
}

//action
export const getProfileAC = (value:initialStateProfileType) => ({type: "GET-PROFILE",value}) as const
export const ProfileChangeAC = (value:initialStateProfileType) => ({type: "PUT-PROFILE-CHANGE",value}) as const

//types
type actionType=
    | ReturnType<typeof getProfileAC>
    | ReturnType<typeof ProfileChangeAC>

