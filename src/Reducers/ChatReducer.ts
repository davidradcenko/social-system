import {ChatApi, messageType, photosType, UserProfilType, UsersApi, UserType} from "../API/api";
import {Dispatch} from "redux";
import {errorUserAC, setErrorAC, statusUserAC, StatusUserActionType} from "./InitialazedReducer";
import {
    ExporsNavigationsType,
    SetConditionNavigation,
    SetNewMessageInformate,
    SetNewMessageInformateAC,
    SetTotalCount
} from "./PaginatorReducer";


const initialState: UsersStartedDialogsType = {
    StartedUsersChat: [],
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
        lastUserActivityDate: '',
        currentList: 1,
        typeOfUser:"Other"
    },
    SearchUsers: {
        users: [],
        TypeOfUsersSearch: "Other",
        SearchSize:10,
        Cage_StardetDialogs:"Others"
    }
}

// function for validate date for nesessary type
export const ChangeTimeYYY = (data: string) => {
    let time = new Date(data)
    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
    let monse = date.toLocaleString("en-US", {
        month: "long",
    })
    let day = date.toLocaleString("en-US", {
        day: "2-digit",
    })
    let hour = date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})
    return String(day + " " + monse + " " + date.getFullYear())

}
export const ChangeTimeMMM = (data: string) => {
    let time = new Date(data)
    let d0 = new Date(); //"now"

    let d1 = new Date(d0.getFullYear(), d0.getMonth(), d0.getDay()); //"now"
    let d2 = new Date(time.getFullYear(), time.getMonth(), time.getDay()); //"now"

    //@ts-ignore
    let result = (d1 - d2) / (60 * 60 * 24 * 1000)


    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds()));
    let monse = date.toLocaleString("en-US", {
        month: "long",
    })
    let day = date.toLocaleString("en-US", {
        day: "2-digit",
    })

    let hour = date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})

    if (result == 1) {
        return String(" Today at " + hour)
    }
    return String(" " + day + " " + monse + " " + date.getFullYear())

}

export const ChangeDialogsDDD = (data: string) => {
    let time = new Date(data)
    const date = new Date(time.getFullYear(), time.getMonth(), time.getDay(), time.getHours(), time.getMinutes(), time.getSeconds());

    let hour = date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})
    return String(hour)
}
export const ChangeDialogsMMM = (data: string) => {
    let time = new Date(data)
    const date = new Date(Date.UTC(time.getFullYear(), time.getMonth(), time.getDay(), time.getHours(), time.getMinutes(), time.getSeconds()));

    let hour = date.toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

    return String(hour)
}


export const ChatReducer = (state: UsersStartedDialogsType = initialState, action: ActionTypes): UsersStartedDialogsType => {
    switch (action.type) {
        case 'SET-ALL-STARTED-DIALOGS': {
            let LastActiveData = action.value
            let newArray = LastActiveData.map(e => {
                return e.lastDialogActivityDate = ChangeTimeYYY(e.lastDialogActivityDate), e.lastUserActivityDate = ChangeTimeMMM(e.lastUserActivityDate),e.typeUser="Other"
            })
            return {...state, StartedUsersChat: [...action.value]}
        }
        case 'SET-ALL-FOLLOW-USERS': {
            let arrayOfStartedDialogs = state.StartedUsersChat
            let newArray = arrayOfStartedDialogs.map(e => {
                if ( e.id==action.id) {
                    let qvalati = e.typeUser = action.typeUser
                    return {...state, StartedUsersChat: {...state.StartedUsersChat, qvalati}}
                }
            })
            return {...state}
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


            let newArray = action.Messages.map(e => {
                let DDMMYY = ChangeDialogsMMM(e.addedAt)
                let MMHH = ChangeDialogsDDD(e.addedAt)
                let n = {
                    id: e.id,
                    body: e.body,
                    translatedBody: e.translatedBody,
                    addedAt: {
                        DDMMYY: DDMMYY,
                        MMHH: MMHH
                    },
                    senderId: e.senderId,
                    senderName: e.senderName,
                    recipientId: e.recipientId,
                    viewed: e.viewed
                }
                return n
            })
            let setType:"Other" | "Friend"="Other"
            let type=state.StartedUsersChat.find(el=>el.id==action.IdUser)
            if (type!=undefined){
                if (type.typeUser=="Friend") setType="Friend"
                if (type.typeUser=="Other") setType="Other"

            }
            return {
                ...state,
                MessageCurrentUser: {
                    Message: [...newArray],
                    TotalCount: action.totalCount,
                    photos: {...action.photos},
                    idUser: action.IdUser,
                    userName: action.userName,
                    lastDialogActivityDate: action.lastDialogActivityDate,
                    lastUserActivityDate: action.lastUserActivityDate,
                    currentList: action.currentList,
                    typeOfUser:setType
                }
            }
        }
        case "SET-NEXT-PAGE-MESSAGE": {
            let newArray = action.Messages.map(e => {
                let DDMMYY = ChangeDialogsMMM(e.addedAt)
                let MMHH = ChangeDialogsDDD(e.addedAt)
                let n = {
                    id: e.id,
                    body: e.body,
                    translatedBody: e.translatedBody,
                    addedAt: {
                        DDMMYY: DDMMYY,
                        MMHH: MMHH
                    },
                    senderId: e.senderId,
                    senderName: e.senderName,
                    recipientId: e.recipientId,
                    viewed: e.viewed
                }
                return n
            })
            return {
                ...state,
                MessageCurrentUser: {
                    ...state.MessageCurrentUser,
                    Message: [...newArray],
                }
            }
        }
        case "SET-CURRENT-LIST": {
            return {...state, MessageCurrentUser: {...state.MessageCurrentUser, currentList: action.CurrentList}}
        }
        case "SET-CHAT-SEARCH-USERS": {
                let mes = action.ListOfUsers.map(el => {
                        let m = {
                            id: el.id,
                            Name: el.name,
                            photos:{
                                small: el.photos.small,
                                large: el.photos.large
                            }
                        }
                    return m
                })
                return {...state, SearchUsers: {...state.SearchUsers,users: [...mes]}}
        }

        case "SET-SEARCH-SETTINGS":{
            return {...state,SearchUsers:{...state.SearchUsers,SearchSize:action.SearchSize}}
        }
        case "SET-SEARCH-SETTINGS-TypeOfUsersSearch":{
            return {...state,SearchUsers:{...state.SearchUsers,TypeOfUsersSearch:action.TypeOfUsersSearch}}
        }

        case "CURRENT-PAGE-DIALOGS":{
            return {...state,SearchUsers:{...state.SearchUsers,Cage_StardetDialogs:action.typePage}}
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
export const GetMessage = (idUser: number, photos: photosType, UserName: string, lastDialogActivityDate: string, lastUserActivityDate: string, count: number = 10) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.GetMessage(idUser).then(res => {
            if (res.data.error == null) {


                       // let respon = UsersApi.getResponstFollow(idUser).then(r => {
                       //     if (r.data == true) {
                       //         dispatch(SetAllFollowIdUsers(idUser,"Friend"))
                       //     }
                       //     if (r.data == false) {
                       //         dispatch(SetAllFollowIdUsers(idUser,"Other"))
                       //         console.log( "false")
                       //     }
                       // }).catch((error) => {
                       //     console.error(error)
                       // })


                dispatch(SetMessages(res.data.items, res.data.totalCount, photos, idUser, UserName, lastDialogActivityDate, lastUserActivityDate, 1))
                if (res.data.totalCount > 20) {
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
        ChatApi.GetMessage(idUser, 20, PageNumber).then(res => {
            if (res.data.error == null) {
                dispatch(SetNextPageMessages(res.data.items))
                dispatch(SetCurrentList(PageNumber))
                if (res.data.items.length == 20) {
                    if (res.data.totalCount % 20 == 0) {
                        dispatch(SetConditionNavigation("No"))
                        dispatch(SetTotalCount(res.data.totalCount))
                    } else {
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

                if (res.data.totalCount > 20) {
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
            let copy:Array<StartedUsersChatType>=res.data
            dispatch(SetAllStartedDialogs(copy))

             let NewCopy=copy.map((el,index)=> {
                 if (index<10){
                    let respon = UsersApi.getResponstFollow(el.id).then(res => {
                        if (res.data == true) {
                            dispatch(SetAllFollowIdUsers(el.id,"Friend"))
                        }
                        if (res.data == false) {
                            dispatch(SetAllFollowIdUsers(el.id,"Other"))
                            console.log( "false")
                        }
                    }).catch((error) => {
                        console.error(error)
                    })
                 }
                })




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
            if (res.data.resultCode==0){
                ChatApi.GetAllStartedDialogs().then(res2 => {
                    dispatch(SetAllStartedDialogs(res2.data))
                    dispatch(statusUserAC("succeeded"))
                }).catch((error) => {
                    dispatch(errorUserAC(error))
                    dispatch(statusUserAC("succeeded"))
                    console.error(error, dispatch)
                })
            }
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//search users
export const getSearchUsersTK = (Name: string, SearchSize: number, TypeOfUsersSearch: string) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        UsersApi.getSearchUsers(Name,SearchSize,TypeOfUsersSearch).then(res => {
            if (res.data.error == null) {
                dispatch(SetChatSearchedUsersAC(res.data.items))
            }
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

//Chek user follow or not
//search users
export const getResponsFollowTK = (idUser: number) => {
    return  (
        UsersApi.getResponstFollow(idUser).then(res => {
            debugger
            if (res.data == true) {
                return true
            }
            if (res.data == false) {
                return false
            }
        return "d"
        }).catch((error) => {
            console.error(error)
        })
    )
}

//chat requests
export const WriteSMS = (idUser: number, message: messageType, photos: photosType, UserName: string, lastDialogActivityDate: string, lastUserActivityDate: string) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.WriteMS(idUser, message).then(res => {
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))

            ChatApi.GetMessage(idUser).then(res1 => {
                if (res1.data.error == null && res1.data.items[0] != undefined) {
                    let lastIndexArray = res1.data.items.length
                    dispatch(SetLastMessage(idUser, res1.data.items[lastIndexArray - 1].body))
                    dispatch(SetMessages(res1.data.items, res1.data.totalCount, photos, idUser, UserName, lastDialogActivityDate, lastUserActivityDate, 1))
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
export const DelMessageTK = (Idmessage: string,IdUser:number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.DeleteMessage(Idmessage).then(res => {
            ChatApi.GetMessage(IdUser).then(res2 => {
                if (res2.data.error == null) {
                    dispatch(SetNextPageMessages(res2.data.items))
                    dispatch(SetCurrentList(1))

                    if (res2.data.totalCount > 20) {
                        dispatch(SetConditionNavigation("Yes"))
                        dispatch(SetTotalCount(res2.data.totalCount))
                    } else {
                        dispatch(SetConditionNavigation("No"))
                    }
                } else {
                    dispatch(errorUserAC(res2.data.error))
                    dispatch(statusUserAC("succeeded"))
                }
            }).catch((error) => {
                dispatch(errorUserAC(error))
                dispatch(statusUserAC("succeeded"))
                console.error(error, dispatch)
            })
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}
export const SpamMessageTK = (Idmessage: string,IdUser:number) => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.SpamMessage(Idmessage).then(res => {
            dispatch(errorUserAC(res.data.error))
            dispatch(statusUserAC("succeeded"))
        }).catch((error) => {
            dispatch(errorUserAC(error))
            dispatch(statusUserAC("succeeded"))
            console.error(error, dispatch)
        })
    }
}

export const IfHaveNewMessageTK = () => {
    return (dispatch: Dispatch<ActionTypes | StatusUserActionType | ExporsNavigationsType | SetNewMessageInformateAC>) => {
        dispatch(statusUserAC("loading"))
        ChatApi.IfHaveNeyMessage().then(res => {
            dispatch(SetNewMessageInformate(res.data))
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
//Actions for table started dialogs
export const SetAllStartedDialogs = (value: Array<StartedUsersChatType>) => ({
    type: "SET-ALL-STARTED-DIALOGS",
    value
}) as const
export const SetAllFollowIdUsers = (id:number,typeUser:"Friend"|"Other") => ({
    type: "SET-ALL-FOLLOW-USERS",
    id,
    typeUser
}) as const
export const SetLastMessage = (idUser: number, LastMessage: string | null) => ({
    type: "SET-LAST-MESSAGE",
    idUser,
    LastMessage
}) as const
//Search user
export const SetChatSearchedUsersAC = (ListOfUsers: Array<UserType>) => ({
    type: "SET-CHAT-SEARCH-USERS",
    ListOfUsers
}) as const

//set messages
export const SetMessages = (Messages: Array<MessagesFromReques>, totalCount: number, photos: photosType, IdUser: number, userName: string, lastDialogActivityDate: string, lastUserActivityDate: string, currentList: number) => ({
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
export const SetNextPageMessages = (Messages: Array<MessagesFromReques>) => ({
    type: "SET-NEXT-PAGE-MESSAGE",
    Messages
}) as const

//set current page list
export const SetCurrentList = (CurrentList: number) => ({type: "SET-CURRENT-LIST", CurrentList}) as const

//settings search
export const SetSettingsSearchSizeAC = (SearchSize: number) => ({
    type: "SET-SEARCH-SETTINGS",
    SearchSize
}) as const
export const SetSettingsTypeOfUsersSearchAC = (TypeOfUsersSearch: string) => ({
    type: "SET-SEARCH-SETTINGS-TypeOfUsersSearch",
    TypeOfUsersSearch
}) as const

//change show page user
export const Currenst_Page_DialogsAC=(typePage:"Friends"|"Others"|"Groups")=>({type:"CURRENT-PAGE-DIALOGS",typePage}) as const

//types
export type Messages = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: {
        DDMMYY: string,
        MMHH: string
    },
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
export type MessagesFromReques = {
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
    photos: photosType,
    lastMesasage: string | null,
    typeUser:"Friend"|"Other"
}
export type Messages_AND_DATAofUSER_Type = {
    Message: Array<Messages>,
    TotalCount: number,
    photos: photosType,
    idUser: number,
    userName: string,
    lastDialogActivityDate: string,
    lastUserActivityDate: string
    currentList: number,
    typeOfUser:"Other" | "Friend"
}
export type SearchUserType = {
    id: number
    Name: string,
    photos:photosType
}
export type SearchUsersType = {
    users: Array<SearchUserType>
    SearchSize: number,
    TypeOfUsersSearch: string,
    Cage_StardetDialogs:"Friends"|"Others"|"Groups"
}

//main type reducer
export type UsersStartedDialogsType = {
    StartedUsersChat: Array<StartedUsersChatType>
    MessageCurrentUser: Messages_AND_DATAofUSER_Type
    SearchUsers: SearchUsersType
}

type ActionTypes =
    | setErrorAC
    | ReturnType<typeof SetAllStartedDialogs>
    | ReturnType<typeof SetMessages>
    | ReturnType<typeof SetNextPageMessages>
    | ReturnType<typeof SetLastMessage>
    | ReturnType<typeof SetCurrentList>
    | ReturnType<typeof SetChatSearchedUsersAC>

    | ReturnType<typeof SetSettingsSearchSizeAC>
    | ReturnType<typeof SetSettingsTypeOfUsersSearchAC>
    | ReturnType<typeof SetAllFollowIdUsers>
    | ReturnType<typeof Currenst_Page_DialogsAC>
