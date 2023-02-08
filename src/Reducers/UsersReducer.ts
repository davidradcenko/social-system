import {initialStateProfileType, initialStateUsersType, UsersApi, UserType} from "../API/api";
import {statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {Dispatch} from "redux";


const initialState:initialStateUsersType={
    items:[
        // {name: "mahaha",
        //     id: 12,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: "https://social-network.samuraijs.com/activecontent/images/users/12/user-small.jpg?v=1",
        //         large: "https://social-network.samuraijs.com/activecontent/images/users/12/user.jpg?v=1"
        //     },
        //     status: "jjjhggggggg",
        //     followed: false},
        // {
        //     name: "Дмитрий Долидов",
        //     id: 10,
        //     uniqueUrlName: null,
        //     photos: {
        //         small: "https://social-network.samuraijs.com/activecontent/images/users/10/user-small.jpg?v=1",
        //         "large": "https://social-network.samuraijs.com/activecontent/images/users/10/user.jpg?v=1"
        //     },
        //     status: "frontend разработчик",
        //     followed: false
        // }
    ],
    UsersProfil:[],
    totalCount:0,
    error:null,
    CurrentPage:1
}

export const usersReducer = (state: initialStateUsersType = initialState, action: actionType): initialStateUsersType => {
    switch (action.type){
        case "GET-TOTAL-COUNT-USERS":{
            return {...state,totalCount: action.CountUsers}
        }
        case "SET-CURRENT-PAGE-USERS":{
            return {...state,CurrentPage:action.IdPage}
        }
        case "GET-ACTIVE-PAGE-USERS":{
            return {...state,...action.ActivePageUsers}
        }
        case "GET-ACTIVE-PAGE-USERS-PROFILE-DATA":{
            return {...state,UsersProfil[...action.ActivePageUsers]}
        }
        default: return state

    }
}

//thunks
export const GetTotalCountUsersTC=()=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.users().then(res => {
            if (res.data.error==null){
                dispatch(GetTotatCountUsersAC(res.data.totalCount))
                dispatch(statusUserAC("succeeded"))
            }
        }
        ).catch((error) => {
            console.error(error, dispatch)
        })
    }
}

export const GetActivePageUsersTC=(IdPage:number)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.getCurrentPageUsers(IdPage).then(res => {
                if (res.data.error==null){
                    dispatch(GetActivePageUsersAC(res.data))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            console.error(error, dispatch)
        })
    }
}

//actions
export const SetCurrentPageUsers=(IdPage:number)=>({type:"SET-CURRENT-PAGE-USERS",IdPage}) as const
export const GetTotatCountUsersAC=(CountUsers:number)=>({type: "GET-TOTAL-COUNT-USERS",CountUsers}) as const
export const GetActivePageUsersAC=(ActivePageUsers:Array<UserType>)=>({type: "GET-ACTIVE-PAGE-USERS",ActivePageUsers}) as const
export const SetActivePageUsersProfileDataAC=(ActivePageUsers:Array<initialStateProfileType>)=>({type: "GET-ACTIVE-PAGE-USERS-PROFILE-DATA",ActivePageUsers}) as const
// types
type actionType=
    | ReturnType<typeof SetCurrentPageUsers>
    | ReturnType<typeof GetActivePageUsersAC>
    | ReturnType<typeof GetTotatCountUsersAC>
    | ReturnType<typeof SetActivePageUsersProfileDataAC>