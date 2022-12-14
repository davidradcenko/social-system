import axios from "axios";

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
    }
}

type profileChengeType = {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
        facebook: "facebook.com",
        github: "github.com",
        instagram: "instagra.com/sds",
        mainLink: null,
        twitter: "https://twitter.com/@sdf",
        vk: "vk.com/dimych",
        website: null,
        youtube: null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": 'не ищу',
    "fullName": "samurai d"

}

export const ProfileApi = {
    profileGet(id: number) {
        return instance.get("/profile/" + id)
    },
    profileChenge(value: initialStateProfileType) {
        return instance.put("/profile"+value)
    }
}
//types
export type LoginParamType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: boolean
}

type ContaksType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null
}
export type initialStateProfileType = {
    aboutMe: string,
    contacts: ContaksType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
}