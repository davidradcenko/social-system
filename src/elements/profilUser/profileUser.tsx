import React, {useEffect, useState} from "react";
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
import {profilGetTK} from "../../Reducers/profilReducer";
import {initialStateProfileType} from "../../API/api";
import {GetCountUsers} from "../../Reducers/UsersReducer";

export const ProfileUser = () => {

    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const ProfilData = useSelector<RootState, initialStateProfileType >(state => state.profil)


    //FormStates
    const [EditModeProfil, SetEditModeProfil] = useState<boolean>(false)
    const [SeatchFormActivated, SetSeatchFormActivated] = useState<boolean>(false)
    const [StateResultTable, SetStateResultTable] = useState<"Followers" | "Recommendations">("Followers")
    const chengeStateResultTable = () => {
        SetStateResultTable(StateResultTable == "Followers" ? "Recommendations" : "Followers")
    }
    const changeSetEditModeProfil = () => {
        SetEditModeProfil(!EditModeProfil)
        if (!EditModeProfil == true) {
            SetSeatchFormActivated(false)
        }
    }
    const changesActivatedSeatch = () => {
        SetSeatchFormActivated(!SeatchFormActivated)
        if (!SeatchFormActivated == true) {
            SetEditModeProfil(false)
        }
    }




    useEffect(()=>{
        dispatch(profilGetTK(16939))
        dispatch(GetCountUsers())
    },[])


    if (!isLoginIn) {
        return <Navigate to={'/Login'}/>
    }

    return (
        <div className={"Main-block"}>

            <NavigationBlock
                SeatchFormActivated={SeatchFormActivated}
                changesActivatedSeatch={changesActivatedSeatch}
                EditModeProfil={EditModeProfil}
                changeSetEditModeProfil={changeSetEditModeProfil}
                // fotoUser={ProfilData.photos.small}
            />

            <div className={"Main-content"}>

                <MainBlockFilterFun
                    EditModeProfil={EditModeProfil}
                    changeSetEditModeProfil={changeSetEditModeProfil}
                    SeatchFormActivated={SeatchFormActivated}
                    changesActivatedSeatch={changesActivatedSeatch}
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
                    <MainBlockFilters  chengeStateResultTable={chengeStateResultTable} StateResultTable={StateResultTable}/>
                </div>
                    <MainBlockUsersInfo  StateResultTable={StateResultTable}/>
            </div>
        </div>
    )
}