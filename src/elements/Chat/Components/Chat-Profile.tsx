import {Avatar, Checkbox} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImageAvatars from "../../profilUser/componenst/Main-Info-Social";
import React, {useEffect} from "react";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {Messages_AND_DATAofUSER_Type, StartedUsersChatType} from "../../../Reducers/ChatReducer";
import {GetUsersProfilTK} from "../../../Reducers/UsersReducer";
import {GetMyProfilTK} from "../../../Reducers/profilReducer";
import {UserProfilType} from "../../../API/api";

export const ChatProfile=()=>{
    const dispatch = useAppDispatch()
    const UsersStartedDialogs = useSelector<RootState, Messages_AND_DATAofUSER_Type>(state => state.chat.MessageCurrentUser)
    const UserProfile = useSelector<RootState, UserProfilType>(state => state.profil)

    useEffect(()=>{
        if (UsersStartedDialogs.idUser!=0){
            dispatch(GetMyProfilTK(UsersStartedDialogs.idUser))
        }
    },[UsersStartedDialogs.idUser])
    return(
        <div className={'Profile-Chat-Component'}>
            {UsersStartedDialogs.idUser!=0?
                <div className={'ProfileChat'}>
                    <p className={'Profile-Chat-name'}>{UserProfile.fullName}</p>
                    <Avatar sx={{margin: 3, width: 200, height: 200}} alt="Remy Sharp"
                            src={UserProfile.photos.small==null?"/static/images/avatar/1.jpg":UserProfile.photos.small}/>
                    <FormControlLabel label="Job search"
                                      control={<Checkbox color="success" checked={UserProfile.lookingForAJob} onChange={e => {
                                      }}/>}/>
                    <p className={'Profile-Chat-name'}>
                        <span className={'Profile-Chat-Frofessional'}>Frofessional skills:</span><br/>
                        {UserProfile.lookingForAJobDescription}
                    </p>
                    <ImageAvatars Contacs={UserProfile.contacts}/>
                </div>
                :
                <div className={'ProfileChat'}>
                        <p className={'Profile-Chat-name'}></p>
                        <Avatar sx={{margin: 3, width: 200, height: 200}} alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"/>
                        <FormControlLabel label="Job search"
                                          control={<Checkbox color="success" checked={true} onChange={e => {
                                          }}/>}/>
                        <p className={'Profile-Chat-name'}>
                            <span className={'Profile-Chat-Frofessional'}>Frofessional skills:</span><br/>
                        </p>
                        <ImageAvatars/>
                    </div>

            }
        </div>
    )
}