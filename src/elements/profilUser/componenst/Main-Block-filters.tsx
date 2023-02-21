import search from "../../../img/nav-icons/people.png";
import React, {InputHTMLAttributes, useState} from "react";
import {SearchTK} from "../../../Reducers/UsersReducer";
import {useAppDispatch} from "../../../store/store";

type ResultFilterType = {
    chengeStateResultTable: () => void,
    StateResultTable: "Followers" | "Recommendations"
}
export const MainBlockFilters = React.memo((props: ResultFilterType) => {
    console.log("++++++MainBlockFilters")
    const dispatch = useAppDispatch()
    const [Search, SetSearch] = useState<string>("")
    const changeInput=(value:any)=>{
        SetSearch(value)
    }
    const SeachUsers = () => {
        dispatch(SearchTK(Search))
    }

    return (
        <div className="Menu-recomen">
            <div className={"one-pas"}>
                <input className={"seatch-menu"}  onChange={e=>changeInput(e.target.value)} type="text" placeholder={"Seach"}/>
                <img onClick={SeachUsers} src={search} alt="customization"/>
            </div>
            <p onClick={props.chengeStateResultTable}
               className={'ChangeReSalt'}>{props.StateResultTable == "Recommendations" ? "Followers" : "Recommendations"}</p>
        </div>
    )
})