import {EditModeProfilWind} from "../Edit-mode-profil-wind";
import {SeatchUsersComponent} from "../Seatch-usersComponent";
import React, {useState} from "react";

type MainBlockFilterFunType={
    EditModeProfil:boolean,
    changeSetEditModeProfil:()=>void
}
export const MainBlockFilterFun = React.memo((props: MainBlockFilterFunType) => {
    console.log("+++++++++++++MainBlockFilterFun  ")
    return (<>

        <EditModeProfilWind/>

        <div className={props.EditModeProfil == true ? "boground-Shadow" : "boground-Shadow-none"}></div>
    </>)
})