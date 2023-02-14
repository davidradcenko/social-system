import {EditModeProfilWind} from "../Edit-mode-profil-wind";
import {SeatchUsersComponent} from "../Seatch-usersComponent";
import React, {useState} from "react";

export const MainBlockFilterFun = React.memo((props: any) => {
    console.log("+++++++++++++MainBlockFilterFun  ")
    return (<>

        <EditModeProfilWind
            EditModeProfil={props.EditModeProfil}
            changeSetEditModeProfil={props.changeSetEditModeProfil}

            FullName={props.FullName}
            ProfesionSkils={props.ProfesionSkils}
            AboutUser={props.AboutUser}
            lokingForAJab={props.lokingForAJab}
            contacts={props.contacts}
            photos={props.photos}
        />

        <SeatchUsersComponent
            SeatchFormActivated={props.SeatchFormActivated}
            changesActivatedSeatch={props.changesActivatedSeatch}/>

        <div
            className={props.EditModeProfil || props.SeatchFormActivated == true ? "boground-Shadow" : "boground-Shadow-none"}></div>
    </>)
})