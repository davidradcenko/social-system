import {ChatApi, messageType, photosType, UserProfilType} from "../API/api";
import {Dispatch} from "redux";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";



// [{
//     id: 24522,
//     userName: "Renegan",
//     hasNewMessages: true,
//     lastDialogActivityDate: "2023-02-26T16:08:15.657",
//     lastUserActivityDate: "2023-02-26T19:37:48.857",
//     newMessagesCount: 10,
//     photos: {
//         small: "https://social-network.samuraijs.com/activecontent/images/users/24522/user-small.jpg?v=1",
//         large: "https://social-network.samuraijs.com/activecontent/images/users/24522/user.jpg?v=1"
//     }
// }]
const initialState: UsersStartedDialogsType = {
StartedUsersChat:[
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
]
}

export const ChatReducer = (state: UsersStartedDialogsType = initialState, action: ActionTypes): UsersStartedDialogsType => {
    switch (action.type) {
        case 'SET-ALL-STARTED-DIALOGS': {
            return {...state, StartedUsersChat:[...action.value]}
        }
        default:
            return state
    }
}
//thunks

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
export const ChatMS = (idUser: number, message: messageType) => {
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


//types
export type StartedUsersChatType={
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos: photosType
}
export type UsersStartedDialogsType = {
    StartedUsersChat:Array<StartedUsersChatType>
}
type ActionTypes =
    | setErrorAC
    | ReturnType<typeof SetAllStartedDialogs>