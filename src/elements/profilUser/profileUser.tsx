import React, {useState} from "react";
import "./profileUser.css";
import "./profileUserModile.css";
import {NavigationBlock} from "./componenst/Navigation-Block";
import {MainInfo} from "./componenst/Main-Info";
import {MainBlockFilters} from "./componenst/Main-Block-filters";
import {MainBlockUsersInfo} from "./componenst/Main-Block-UsersInfo";
import {MainBlockFilterFun} from "./componenst/Main-Block-Seatch-Funk/Main-Block-FilterFun";

export const ProfileUser = () => {

    const [EditModeProfil, SetEditModeProfil] = useState<boolean>(false)
    const [SeatchFormActivated, SetSeatchFormActivated] = useState<boolean>(false)


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


    return (
        <div className={"Main-block"}>

            <NavigationBlock
                SeatchFormActivated={SeatchFormActivated}
                changesActivatedSeatch={changesActivatedSeatch}
                EditModeProfil={EditModeProfil}
                changeSetEditModeProfil={changeSetEditModeProfil}
            />

            <div className={"Main-content"}>

                <MainBlockFilterFun
                    EditModeProfil={EditModeProfil}
                    changeSetEditModeProfil={changeSetEditModeProfil}
                    SeatchFormActivated={SeatchFormActivated}
                    changesActivatedSeatch={changesActivatedSeatch}
                />

                <div className="mainChaend">
                    <MainInfo/>
                    <MainBlockFilters/>
                </div>
                    <MainBlockUsersInfo/>
            </div>
        </div>
    )
}