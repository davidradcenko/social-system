import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '865054b3-8839-41aa-aa3c-1dce403daa1b'
    },
    withCredentials: true,
})

export const social={
    authMe(){
        return instance.get("/auth/me")
    },
    loginMe(data:dataType){
        return instance.post("/auth/login",data)
    }
}


//types
export type dataType={
    email:string,
    password:string,
    rememberMe:boolean,
    captcha?:boolean
}