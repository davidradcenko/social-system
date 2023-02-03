import {EditModeProfilWind} from "../Edit-mode-profil-wind";
import {SeatchUsersComponent} from "../Seatch-usersComponent";
import React, {useState} from "react";

export const MainBlockFilterFun = (props: any) => {

    return (<>

        <EditModeProfilWind
            EditModeProfil={props.EditModeProfil}
            changeSetEditModeProfil={props.changeSetEditModeProfil}/>

        <SeatchUsersComponent
            SeatchFormActivated={props.SeatchFormActivated}
            changesActivatedSeatch={props.changesActivatedSeatch}/>

        <div
            className={props.EditModeProfil || props.SeatchFormActivated == true ? "boground-Shadow" : "boground-Shadow-none"}></div>
    </>)
}