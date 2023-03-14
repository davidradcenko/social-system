import axios from "axios";
import {profilChangeType} from "../Reducers/profilReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '865054b3-8839-41aa-aa3c-1dce403daa1b'
    },
    withCredentials: true,
})

export const LoginApi = {
    authMe() {
        return instance.get("/auth/me")
    },
    loginMe(data: LoginParamType) {
        return instance.post("/auth/login", data)
    },
    authMeOut() {
        return instance.delete("/auth/login")
    },
    getFotoAdmin(id:string) {
        return instance.get(`profile/${id}`)
    }
}
export type messageType={
    body:string
}
export const ChatApi={
    GetAllStartedDialogs(){
        return instance.get("dialogs")
    },
    GetMessage(userId:number,count:number=20,page:number=1){
        return instance.get(`dialogs/${userId}/messages?page=${page}&count=${count}`)
    },
    StartDialogs(IdUser:number){
        return instance.put(`dialogs/${IdUser}`)
    },
    WriteMS(idUser:number,data:messageType){
        return instance.post(`/dialogs/${idUser}/messages`,data)
    }
}
export const ProfileApi = {
    profileGet(id: number) {
        return instance.get("/profile/" + id)
    },
    profileChenge(value: profilChangeType) {
        return instance.put("/profile/", value)
    },
    saveFoto(file:any) {
        const fotmData = new FormData();
        fotmData.append("image", file)
        return instance.put(`profile/photo`, fotmData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
export const UsersApi={
    usersFreids(){
        return instance.get("/users?friend=true")
    },
    usersNoFreids(){
        return instance.get("/users?friend=false")
    },
    getCurrentPageFriend(idPage:number){
        return instance.get("/users?friend=true&page="+idPage)
    },
    getCurrentPageNoFriend(idPage:number){
        return instance.get("/users?friend=false&page="+idPage)
    },
    getSearchFriendsUsers(Name:string){
        return instance.get("/users?friend=true&page=1&term="+Name)
    },
    getSearchNoFriendsUsers(Name:string){
        return instance.get("/users?friend=false&page=1&term="+Name)
    },
    getSearchUsers(Name: string, SearchSize: number, TypeOfUsersSearch: string){
        if (TypeOfUsersSearch=="Other") TypeOfUsersSearch=''
        if (TypeOfUsersSearch=="Friends")TypeOfUsersSearch="true"
        if (TypeOfUsersSearch=="No friends")TypeOfUsersSearch="false"
        if (TypeOfUsersSearch=="Other")TypeOfUsersSearch=""
        console.log("SearchSize  "+SearchSize+"    TypeOfUsersSearch"+TypeOfUsersSearch)
        return instance.get(`/users?friend=${TypeOfUsersSearch}&page=1&term=${Name}&count=${SearchSize}`)
    },
    follow(Iduser:number){
        return instance.post(`/follow/`+Iduser)
    },
    unfollow(Iduser:number){
        return instance.delete(`/follow/`+Iduser)
    },
    getResponstFollow(Iduser:number){
        return instance.get(`/follow/`+Iduser)
    }
}



//types
export type LoginParamType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: boolean
}

export type ContaksType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null
}
export type photosType={
    large:string | null,
    small:string | null
}
export type UserProfilType = {
    aboutMe: string,
    contacts: ContaksType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId:number,
    photos:photosType
}
export type UserType={
    name: string ,
    id: number ,
    uniqueUrlName:string | null ,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string |boolean,
    followed: boolean,
    ProfilData:UserProfilType
}
export type initialStateUsersType={
    itemsFriends:Array<UserType>,
    itemsNoFriends:Array<UserType>,
    totalFriendCount:number,
    totalNoFriendCount:number,
    error:string | null,
    CurrentPageFriends:number,
    CurrentPageNoFriends:number

}