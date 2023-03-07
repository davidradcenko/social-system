import {ChatApi, messageType, photosType, UserProfilType} from "../API/api";
import {Dispatch} from "redux";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {ExporsNavigationsType, SetConditionNavigation, SetTotalCount} from "./PaginatorReducer";


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
            },
            lastMesasage: null
        }
    ],
    MessageCurrentUser: {
        Message: [],
        TotalCount: 0,
        photos: {
            small: null,
            large: null
        },
        idUser: 0,
        userName: '',
        lastDialogActivityDate: '',
        lastUserActivityDate:'',
        currentList: 1
    },
}

// function for validate date for nesessary type
export const ChangeTimeYYY=(data:string)=>{
    let time=new Date(data)
    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds()));

    let monse=date.toLocaleString("en-US", {
        month: "long",
    })
    let day=date.toLocaleString("en-US", {
        day: "2-digit",
    })

    // return String(time.getDay()+" "+monse+" "+date.getFullYear())
    return String(day+" "+monse+" "+date.getFullYear())
}
export const ChangeTimeMMM=(data:string)=>{
    let time=new Date(data)
    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
    let monse=date.toLocaleString("en-US", {
        month: "long",
    })
    let day=date.toLocaleString("en-US", {
        day: "2-digit",
    })
    return String(day+" "+monse+" "+date.getFullYear())
}


export const ChangeDialogsMMM=(data:string)=>{
    let time=new Date(data)
    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
    let minute=date.toLocaleString("en-US", {
        minute: "2-digit",
    })
    let hour=date.toLocaleString("en-US", {
        hour: "2-digit",
    })
    return String(minute+" "+hour)
}



export const ChatReducer = (state: UsersStartedDialogsType = initialState, action: ActionTypes): UsersStartedDialogsType => {
    switch (action.type) {
        case 'SET-ALL-STARTED-DIALOGS': {
            let LastActiveData=action.value
            let newArray=LastActiveData.map(e=>{
                return e.lastDialogActivityDate=ChangeTimeYYY(e.lastDialogActivityDate),e.lastUserActivityDate=ChangeTimeMMM(e.lastUserActivityDate)
            })
            return {...state, StartedUsersChat: [...action.value]}
        }
        case "SET-LAST-MESSAGE": {
            let statyCopy = {...state}
            statyCopy.StartedUsersChat = state.StartedUsersChat.map(el => el.id == action.idUser ? {
                ...el,
                lastMesasage: action.LastMessage
            } : el)
            return statyCopy
        }
        case "SET-MESSAGE": {
            let LastActiveData=action.Messages
            let newArray=LastActiveData.map(e=>{
                return e.addedAt.MMHH=ChangeTimeYYY(e.addedAt.MMHH)
            })

            return {
                ...state,
                MessageCurrentUser: {
                    Message: [...action.Messages],
                    TotalCount: action.totalCount,
                    photos: {...action.photos},
                    idUser: action.IdUser,
                    userName: action.userName,
                    lastDialogActivityDate: action.lastDialogActivityDate,
                    lastUserActivityDate:action.lastUserActivityDate,
                    currentList: action.currentList
                }
            }
        }
        case "SET-NEXT-PAGE-MESSAGE": {
            return {
                ...state,
                MessageCurrentUser: {
                    ...state.MessageCurrentUser,
                    Message: [...action.Messages],
                }
            }
        }
        case "SET-CURRENT-LIST": {
            debugger
            return {...state, MessageCurrentUser: {...state.MessageCurrentUser, currentList: action.CurrentList}}
        }
        default:
            return state
    }
}


//thunks

//list of users
//tale last message chatting
export const GetLastMessage = (idUser: number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser, 1, 1).then(res => {
            if (res.data.error == null && res.data.items[0] != undefined) {
                dispatch(SetLastMessage(idUser, res.data.items[0].body))
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

//take sms users and set value data from list to chat
export const GetMessage = (idUser: number, photos: photosType, UserName: string, lastDialogActivityDate: string,lastUserActivityDate:string, count: number = 10) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser).then(res => {
            if (res.data.error == null) {
                dispatch(SetMessages(res.data.items, res.data.totalCount, photos, idUser, UserName, lastDialogActivityDate,lastUserActivityDate, 1))
                if (res.data.totalCount > 10) {
                    dispatch(SetConditionNavigation("Yes"))
                    dispatch(SetTotalCount(res.data.totalCount))
                } else {
                    dispatch(SetConditionNavigation("No"))
                }
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
export const GetNextPageMessage = (idUser: number, photos: photosType, UserName: string, lastDialogActivityDate: string, count: number = 10, PageNumber: number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser, 10, PageNumber).then(res => {
            if (res.data.error == null) {
                dispatch(SetNextPageMessages(res.data.items))
                dispatch(SetCurrentList(PageNumber))
                if (res.data.items.length == 10) {
                    if (res.data.totalCount%10==0){
                        dispatch(SetConditionNavigation("No"))
                        dispatch(SetTotalCount(res.data.totalCount))
                    }else {
                        dispatch(SetConditionNavigation("Yes"))
                        dispatch(SetTotalCount(res.data.totalCount))
                    }

                } else {
                    dispatch(SetConditionNavigation("No"))
                    dispatch(SetTotalCount(res.data.totalCount))
                }
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
export const GetMessageBottomTS = (idUser: number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser).then(res => {
            if (res.data.error == null) {
                dispatch(SetNextPageMessages(res.data.items))
                dispatch(SetCurrentList(1))

                if (res.data.totalCount > 10) {
                    dispatch(SetConditionNavigation("Yes"))
                    dispatch(SetTotalCount(res.data.totalCount))
                } else {
                    dispatch(SetConditionNavigation("No"))
                }
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

//chat requests
export const WriteSMS = (idUser: number, message: messageType, photos: photosType, UserName: string, lastDialogActivityDate: string,lastUserActivityDate:string) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.WriteMS(idUser, message).then(res => {
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))

            ChatApi.GetMessage(idUser).then(res1 => {
                if (res1.data.error == null && res1.data.items[0] != undefined) {
                    let lastIndexArray = res1.data.items.length
                    dispatch(SetLastMessage(idUser, res1.data.items[lastIndexArray - 1].body))
                    dispatch(SetMessages(res1.data.items, res1.data.totalCount, photos, idUser, UserName, lastDialogActivityDate,lastUserActivityDate, 1))
                } else {
                    dispatch(errorUserAC(res1.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }).catch((error) => {
                dispatch(errorUserAC(error))
                dispatch(statusUserAC("succeeded"))
                console.error(error, dispatch)
            })
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}


//action
//Actions for table started dialogs
export const SetAllStartedDialogs = (value: Array<StartedUsersChatType>) => ({
    type: "SET-ALL-STARTED-DIALOGS",
    value
}) as const
export const SetLastMessage = (idUser: number, LastMessage: string | null) => ({
    type: "SET-LAST-MESSAGE",
    idUser,
    LastMessage
}) as const

//set messages
export const SetMessages = (Messages: Array<Messages>, totalCount: number, photos: photosType, IdUser: number, userName: string, lastDialogActivityDate: string,lastUserActivityDate:string, currentList: number) => ({
    type: "SET-MESSAGE",
    Messages,
    totalCount,
    photos,
    IdUser,
    userName,
    lastDialogActivityDate,
    lastUserActivityDate,
    currentList
}) as const
export const SetNextPageMessages = (Messages: Array<Messages>) => ({
    type: "SET-NEXT-PAGE-MESSAGE",
    Messages
}) as const

//set current page list
export const SetCurrentList = (CurrentList: number) => ({type: "SET-CURRENT-LIST", CurrentList}) as const


//types
export type Messages = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: {
        DDMMYY:string,
        MMHH:string
    },
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
    photos: photosType,
    lastMesasage: string | null,

}
export type Messages_AND_DATAofUSER_Type = {
    Message: Array<Messages>,
    TotalCount: number,
    photos: photosType,
    idUser: number,
    userName: string,
    lastDialogActivityDate: string,
    lastUserActivityDate:string
    currentList: number
}

//main type reducer
export type UsersStartedDialogsType = {
    StartedUsersChat: Array<StartedUsersChatType>
    MessageCurrentUser: Messages_AND_DATAofUSER_Type
}
type ActionTypes =
    | setErrorAC
    | ReturnType<typeof SetAllStartedDialogs>
    | ReturnType<typeof SetMessages>
    | ReturnType<typeof SetNextPageMessages>
    | ReturnType<typeof SetLastMessage>
    | ReturnType<typeof SetCurrentList>