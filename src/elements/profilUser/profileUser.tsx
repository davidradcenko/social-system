import React, {useCallback, useEffect, useState} from "react";
import "./profileUser.css";
import "./profileUserModile.css";
import {NavigationBlock} from "./componenst/Navigation-Block";
import {MainInfo} from "./componenst/Main-Info";
import {MainBlockFilters} from "./componenst/Main-Block-filters";
import {MainBlockUsersInfo} from "./componenst/Main-Block-UsersInfo";
import {MainBlockFilterFun} from "./componenst/Main-Block-Seatch-Funk/Main-Block-FilterFun";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store";
import {GetMyProfilTK} from "../../Reducers/profilReducer";
import {UserProfilType} from "../../API/api";
import {
    GetActivePageFriendTC,
    GetActivePageNoFriendTC,
    GetTotalFriendCountTC,
    GetTotalNoFriendCountTC
} from "../../Reducers/UsersReducer";
import {InitialazedType} from "../../Reducers/InitialazedReducer";
import {CircularProgress} from "@mui/material";

export const ProfileUser = React.memo(() => {
    console.log("__________________________ProfileUser")
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const ProfilData = useSelector<RootState, UserProfilType>(state => state.profil)
    const AdminData = useSelector<RootState, InitialazedType>(state => state.initialazed)


    //FormStates
    const [EditModeProfil, SetEditModeProfil] = useState<boolean>(false)
    const [StateResultTable, SetStateResultTable] = useState<"Followers" | "Recommendations">("Followers")
    const chengeStateResultTable = () => {
        SetStateResultTable(StateResultTable == "Followers" ? "Recommendations" : "Followers")
    }
    const changeSetEditModeProfil = () => {
        SetEditModeProfil(!EditModeProfil)
    }

    useEffect(() => {
        //take my profile
        dispatch(GetMyProfilTK(Number(AdminData.mainUserId)))

        //take active page users
        dispatch(GetActivePageNoFriendTC(1))
        dispatch(GetActivePageFriendTC(1))

        //set total count users
        dispatch(GetTotalFriendCountTC())
        dispatch(GetTotalNoFriendCountTC())
    }, [])


    if (!isLoginIn) {
        debugger
        return <Navigate to={'/Login'}/>
    }
    return (
        <div className={"Main-block"}>

            {AdminData.status=='loading'
                ?
                <div className={"LoagingDIv"}>
                    <CircularProgress size={100} />
                </div>
                :null}



            <NavigationBlock
                EditModeProfil={EditModeProfil}
                changeSetEditModeProfil={changeSetEditModeProfil}
                FullName={AdminData.name}
                fotoUser={AdminData.foto}
            />

            <div className={"Main-content"}>

                <MainBlockFilterFun
                    EditModeProfil={EditModeProfil}
                    changeSetEditModeProfil={changeSetEditModeProfil}
                />

                <div className="mainChaend">
                    <MainInfo
                        FullName={ProfilData.fullName}
                        ProfesionSkils={ProfilData.lookingForAJobDescription}
                        AboutUser={ProfilData.aboutMe}
                        lokingForAJab={ProfilData.lookingForAJob}
                        contacts={ProfilData.contacts}
                        photos={ProfilData.photos}

                    />
                    <MainBlockFilters chengeStateResultTable={chengeStateResultTable}
                                      StateResultTable={StateResultTable}/>
                </div>
                <MainBlockUsersInfo StateResultTable={StateResultTable}/>
            </div>
        </div>
    )
})
