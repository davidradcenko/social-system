import {UserProfilType, initialStateUsersType, ProfileApi, UsersApi, UserType} from "../API/api";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {Dispatch} from "redux";
import {getProfileAC} from "./profilReducer";


const initialState:initialStateUsersType={
    itemsFriends:[],
    itemsNoFriends:[],
    totalFriendCount:0,
    totalNoFriendCount:0,
    error:null,
    CurrentPageFriends:1,
    CurrentPageNoFriends:1
}

export const usersReducer = (state: initialStateUsersType = initialState, action: actionType): initialStateUsersType => {
    switch (action.type){
        //get total friend
        case "GET-TOTAL-FRIEND-COUNT":{
            return {...state,totalFriendCount: action.CountUsers}
        }
        case "GET-TOTAL-NO-FRIEND-COUNT":{
            return {...state,totalNoFriendCount: action.CountUsers}
        }

        //set current friend
        case "SET-CURRENT-PAGE-FRIENDS":{
            return {...state,CurrentPageFriends:action.IdPage}
        }
        case "SET-CURRENT-PAGE-NO-FRIENDS":{
            return {...state,CurrentPageNoFriends:action.IdPage}
        }

        //get active page
        case "GET-ACTIVE-PAGE-FRIENDS":{
            return {...state,itemsFriends: [...action.ActivePageUsers]}
        }
        case "GET-ACTIVE-PAGE-NO-FRIENDS":{
            return {...state,itemsNoFriends:[...action.ActivePageUsers]}
        }

        //get users profile data
        case "GET-ACTIVE-PAGE-USERS-PROFILE-DATA":{
            let stateCopy={...state}
            if (action.TypeUsers=='Friends'){
                stateCopy.itemsFriends=stateCopy.itemsFriends.map(tl=>tl.id==action.ActivePageUsers.userId?{...tl,...action.ActivePageUsers}:tl)
            }
            if (action.TypeUsers=='NoFriends'){
                stateCopy.itemsNoFriends=stateCopy.itemsNoFriends.map(tl=>tl.id==action.ActivePageUsers.userId?{...tl,...action.ActivePageUsers}:tl)
            }
            return stateCopy
        }

        //follow user,unFollow
        case "FOLLOW-USER":{
            let statyCopy={...state}
            let deletedId=statyCopy.itemsNoFriends.filter(el=>el.id!= action.IdUser)
            return {...statyCopy,itemsNoFriends:deletedId}
        }
        case "UNFOLLOW-USER":{
            let statyCopy={...state}
            let deletedId=statyCopy.itemsFriends.filter(el=>el.id!= action.IdUser)
            return {...statyCopy,itemsFriends:deletedId}
        }

        default: return state

    }
}

//thunks
//Set total count users
export const GetTotalFriendCountTC=()=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.usersFreids().then(res => {
            if (res.data.error==null){
                dispatch(SetTotalFriendCountAC(res.data.totalCount))
                dispatch(statusUserAC("succeeded"))
            }else {
                dispatch(errorUserAC(res.data.error))
                dispatch(statusUserAC("succeeded"))
            }
        }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const GetTotalNoFriendCountTC=()=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.usersNoFreids().then(res => {
                if (res.data.error==null){
                    dispatch(SetTotalNoFriendCountAC(res.data.totalCount))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//take
export const GetUsersProfilTK=(TypeUsers:"Friends"|"NoFriends",id:number)=>{
    return(dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        ProfileApi.profileGet(id).then(res=>{
            dispatch(SetActivePageUsersProfileDataAC(TypeUsers,res.data))
            dispatch(statusUserAC("succeeded"))

        }).catch((error)=>{
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//Take active page Users
export const GetActivePageFriendTC=(IdPage:number)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.getCurrentPageFriend(IdPage).then(res => {
                if (res.data.error==null){
                    dispatch(GetActivePageFriendsAC(res.data.items))
                    dispatch(SetTotalFriendCountAC(res.data.totalCount))
                    dispatch(statusUserAC("succeeded"))
                } else{
                    dispatch(errorUserAC(res.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const GetActivePageNoFriendTC=(IdPage:number)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.getCurrentPageNoFriend(IdPage).then(res => {
                if (res.data.error==null){
                    dispatch(GetActivePageNoFriendsAC(res.data.items))
                    dispatch(SetTotalNoFriendCountAC(res.data.totalCount))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//follow, unFollow
export const FollowTK=(Iduser:number)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.follow(Iduser).then(res => {
                if (res.data.resultCode === 0){
                    dispatch(FollowUserAC(Iduser))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.messages))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const UnFollowTK=(Iduser:number)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.unfollow(Iduser).then(res => {
                if (res.data.resultCode === 0){
                    dispatch(UnFollowUserAC(Iduser))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.messages))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//Search users
export const SearchTK=(Name:string)=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.getSearchFriendsUsers(Name).then(res => {
                if (res.data.error==null){
                    dispatch(GetActivePageFriendsAC(res.data.items))
                    dispatch(SetTotalFriendCountAC(res.data.totalCount))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
        UsersApi.getSearchNoFriendsUsers(Name).then(res => {
                if (res.data.error==null){
                    dispatch(GetActivePageNoFriendsAC(res.data.items))
                    dispatch(SetTotalNoFriendCountAC(res.data.totalCount))
                    dispatch(statusUserAC("succeeded"))
                }else {
                    dispatch(errorUserAC(res.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }
        ).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//actions
//set current page
export const SetCurrentPageFriends=(IdPage:number)=>({type:"SET-CURRENT-PAGE-FRIENDS",IdPage}) as const
export const SetCurrentPageNoFriends=(IdPage:number)=>({type:"SET-CURRENT-PAGE-NO-FRIENDS",IdPage}) as const

//set total friend
export const SetTotalFriendCountAC=(CountUsers:number)=>({type: "GET-TOTAL-FRIEND-COUNT",CountUsers}) as const
export const SetTotalNoFriendCountAC=(CountUsers:number)=>({type: "GET-TOTAL-NO-FRIEND-COUNT",CountUsers}) as const

//take active page
export const GetActivePageFriendsAC=(ActivePageUsers:Array<UserType>)=>({type: "GET-ACTIVE-PAGE-FRIENDS",ActivePageUsers}) as const
export const GetActivePageNoFriendsAC=(ActivePageUsers:Array<UserType>)=>({type: "GET-ACTIVE-PAGE-NO-FRIENDS",ActivePageUsers}) as const

//take users profile data
export const SetActivePageUsersProfileDataAC=(TypeUsers:"Friends"|"NoFriends",ActivePageUsers:UserProfilType)=>({type: "GET-ACTIVE-PAGE-USERS-PROFILE-DATA",TypeUsers,ActivePageUsers}) as const

//follow user,Unfollow
export const FollowUserAC=(IdUser:number)=>({type:"FOLLOW-USER",IdUser}) as const
export const UnFollowUserAC=(IdUser:number)=>({type:"UNFOLLOW-USER",IdUser}) as const








// types
type actionType=
    |  setErrorAC
    | ReturnType<typeof SetCurrentPageNoFriends>
    | ReturnType<typeof UnFollowUserAC>
    | ReturnType<typeof FollowUserAC>
    | ReturnType<typeof SetCurrentPageFriends>
    | ReturnType<typeof SetTotalNoFriendCountAC>
    | ReturnType<typeof GetActivePageFriendsAC>
    | ReturnType<typeof GetActivePageNoFriendsAC>
    | ReturnType<typeof SetTotalFriendCountAC>
    | ReturnType<typeof SetActivePageUsersProfileDataAC>