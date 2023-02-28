import {ChatApi, messageType, photosType, UserProfilType} from "../API/api";
import {Dispatch} from "redux";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";


const initialState: UsersStartedDialogsType = {
    StartedUsersChat: [
        {
            id: 24522,
            userName: "Renegan",
            hasNewMessages: true,
            lastDialogActivityDate: "2023-02-26T16:08:15.657",
            lastUserActivityDate: "2023-02-26T19:37:48.857",
            newMessagesCount: 10,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/24522/user-small.jpg?v=1",
                large: "https://social-network.samuraijs.com/activecontent/images/users/24522/user.jpg?v=1"
            }
        }
    ],
    MessageCurrentUser: {
        Message: [],
        TotalCount: 0,
        photos:{
            small:null,
            large:null
        },
        idUser:0,
        userName:'',
        lastDialogActivityDate:''
    },

}

export const ChatReducer = (state: UsersStartedDialogsType = initialState, action: ActionTypes): UsersStartedDialogsType => {
    switch (action.type) {
        case 'SET-ALL-STARTED-DIALOGS': {
            return {...state, StartedUsersChat: [...action.value]}
        }
        case "SET-MESSAGE": {
            return {...state, MessageCurrentUser: {Message: [...action.Messages], TotalCount: action.totalCount,photos:{...action.photos},idUser:action.IdUser,userName:action.userName,lastDialogActivityDate:action.lastDialogActivityDate}}
        }
        default:
            return state
    }
}


//thunks
export const GetMessage = (idUser: number,photos:photosType,UserName:string,lastDialogActivityDate:string) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser).then(res => {
            if (res.data.error == null) {
                dispatch(SetMessages(res.data.items, res.data.totalCount,photos,idUser,UserName,lastDialogActivityDate))
            } else {
                dispatch(errorUserAC(res.data.error))
                dispatch(statusUserAC("succeeded"))
            }
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const GetAllStartedDialogs = () => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetAllStartedDialogs().then(res => {
            dispatch(SetAllStartedDialogs(res.data))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const StartDialogs = (idUser: number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.StartDialogs(idUser).then(res => {
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const WriteSMS = (idUser: number, message: messageType) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.WriteMS(idUser, message).then(res => {
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}


//action
export const SetAllStartedDialogs = (value: Array<StartedUsersChatType>) => ({
    type: "SET-ALL-STARTED-DIALOGS",
    value
}) as const
export const SetMessages = (Messages: Array<Messages>, totalCount: number,photos:photosType,IdUser:number,userName:string,lastDialogActivityDate:string) => ({
    type: "SET-MESSAGE",
    Messages,
    totalCount,
    photos,
    IdUser,
    userName,
    lastDialogActivityDate
}) as const


//types
export type Messages = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
export type StartedUsersChatType = {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos: photosType
}
export type Messages_AND_DATAofUSER_Type = {
    Message: Array<Messages>,
    TotalCount: number,
    photos:photosType,
    idUser:number,
    userName:string,
    lastDialogActivityDate:string
}
export type UsersStartedDialogsType = {
    StartedUsersChat: Array<StartedUsersChatType>
    MessageCurrentUser: Messages_AND_DATAofUSER_Type
}
type ActionTypes =
    | setErrorAC
    | ReturnType<typeof SetAllStartedDialogs>
    | ReturnType<typeof SetMessages>