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
import {IfHaveNewMessageTK} from "../../Reducers/ChatReducer";

export const ProfileUser = React.memo(() => {
    console.log("__________________________ProfileUser")
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)



    //FormStates
    const [StateResultTable, SetStateResultTable] = useState<"Followers" | "Recommendations">("Followers")
    const chengeStateResultTable = () => {
        SetStateResultTable(StateResultTable == "Followers" ? "Recommendations" : "Followers")
    }

if (isLoginIn) {
    // useEffect(() => {

        //take active page users
        dispatch(IfHaveNewMessageTK())
        dispatch(GetActivePageNoFriendTC(1))
        dispatch(GetActivePageFriendTC(1))

    // }, [])
}

    if (!isLoginIn) {
        return <Navigate to={'/Login'}/>
    }
    return (
        <div className={"Main-block"}>

            {/*{AdminData.status=='loading'*/}
            {/*    ?*/}
            {/*    <div className={"LoagingDIv"}>*/}
            {/*        <CircularProgress size={100} />*/}
            {/*    </div>*/}
            {/*    :null}*/}



            <NavigationBlock/>

            <div className={"Main-content"}>

                {/*<MainBlockFilterFun*/}
                {/*    EditModeProfil={EditModeProfil}*/}
                {/*    changeSetEditModeProfil={changeSetEditModeProfil}*/}
                {/*/>*/}

                <div className="mainChaend">
                    <MainInfo/>
                    <MainBlockFilters chengeStateResultTable={chengeStateResultTable}
                                      StateResultTable={StateResultTable}/>
                </div>
                <MainBlockUsersInfo StateResultTable={StateResultTable}/>
            </div>
        </div>
    )
})
