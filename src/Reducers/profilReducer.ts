

const initialState:initialStateType={
    aboutMe: "aboutMe",
    contacts: {
        facebook: "facebook",
        github: "github",
        instagram: "instagram",
        mainLink: "mainLink",
        twitter: "twitter",
        vk: "vk",
        website: "website",
        youtube: "youtube"
    },
    lookingForAJob: true,
    lookingForAJobDescription: "lookingForAJobDescription",
    fullName: "fullName"
}
export const profilReducer = (state:initialStateType=initialState,action:actionType):initialStateType => {
    switch (action.type) {
        case "GET-PROFILE":{
            return {...state,...action.value}
        }
        default:
            return state
    }
}



//thunk

//action
export const getProfile = (value:initialStateType) => ({type: "GET-PROFILE",value}) as const

//types
type actionType=ReturnType<typeof getProfile>

type ContaksType={
    facebook: string | null,
    github: string | null,
    instagram:string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null
}
type initialStateType={
    aboutMe: string,
    contacts: ContaksType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
}