import {initialStateUsersType, UsersApi} from "../API/api";
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
    totalCount:0,
    error:"Same error"
}

export const usersReducer = (state: initialStateUsersType = initialState, action: actionType): initialStateUsersType => {
    switch (action.type){
        case "GET-USERS":{
            return {...state,totalCount: action.CountUsers}
        }
        default: return state
        //     const statyCope = {...state}
        //     return action.value.items.map(tl=>{
        //         return{...tl,
        //             name:tl.name,
        //             id:tl.id,
        //             uniqueUrlName:tl.uniqueUrlName,
        //             photos:[{small: tl.photos.small},{la}],
        //            status:tl.status,
        //            followed:tl.followed
        //     })
        // }
    }
}

//thunks
export const GetCountUsers=()=>{
    return (dispatch:Dispatch<actionType | StatusUserActionType>)=>{
        dispatch(statusUserAC("loading"))
        UsersApi.users().then(res => {
            if (res.data.error==null){
                dispatch(GerUsersAC(res.data.totalCount))
                dispatch(statusUserAC("succeeded"))
            }
        }
        ).catch((error) => {
            console.error(error, dispatch)
        })
    }
}
//actions
export const GerUsersAC=(CountUsers:number)=>({type: "GET-USERS",CountUsers}) as const
// types
type actionType=
    | ReturnType<typeof GerUsersAC>