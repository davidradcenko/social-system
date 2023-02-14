import search from "../../../img/nav-icons/people.png";
import React, {InputHTMLAttributes, useState} from "react";
import {SearchTK} from "../../../Reducers/UsersReducer";
import {useAppDispatch} from "../../../store/store";

type ResultFilterType = {
    chengeStateResultTable: () => void,
    StateResultTable: "Followers" | "Recommendations"
}
export const MainBlockFilters = React.memo((props: ResultFilterType) => {
    const dispatch = useAppDispatch()
    // const [PapapSelection, SetPapapSelection] = useState(false)
    // const [CheckboxStat, SetCheckboxStat] = useState<boolean>()
    // const [PapapSelection2, SetPapapSelection2] = useState(false)
    // const [CheckboxStat2, SetCheckboxStat2] = useState<boolean>()
    // const changeSetPapapSelection = () => {
    //     SetPapapSelection(!PapapSelection)
    // }
    // const changeSetCheckboxStat = (valer: boolean) => {
    //     SetCheckboxStat(valer)
    // }
    // const changeSetPapapSelection2 = () => {
    //     SetPapapSelection2(!PapapSelection2)
    // }
    // const changeSetCheckboxStat2 = (valer: boolean) => {
    //     SetCheckboxStat2(valer)
    // }
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
                {/*className={"one-pass-customisazia"}*/}

                {/*<div*/}
                {/*    className={PapapSelection == true ? "one-pass-customisazia" : "one-pass-customisazia-none"}>*/}
                {/*    <p className={"name-custom"}>Sort by:</p>*/}
                {/*    <div onBlur={changeSetPapapSelection} className="change-customizat">*/}
                {/*        <p className={CheckboxStat == true ? "Customizasia-Status" : "Customizasia-Status-NoCheked"}>Status <input*/}
                {/*            className={"Status-button"} checked={CheckboxStat == true}*/}
                {/*            onChange={() => changeSetCheckboxStat(true)} name={"radio-customez"}*/}
                {/*            type="radio" readOnly/></p>*/}
                {/*        <p className={CheckboxStat == false ? "Customizasia-Profesion-Skills-Cheked" : "Customizasia-Profesion-Skills"}>Professional*/}
                {/*            skills<input className={"Profesion-Skils-button"}*/}
                {/*                         checked={CheckboxStat == false}*/}
                {/*                         onChange={() => changeSetCheckboxStat(false)}*/}
                {/*                         name={"radio-customez"} type="radio" readOnly/></p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className={"two-pas"}>
                {/*<img onClick={changeSetPapapSelection2} src={customization} alt="customization"/>*/}
                {/*<p className="recomend-menu"> Recommendations</p>*/}

                {/*<div*/}
                {/*    className={PapapSelection2 == true ? "two-pass-customisazia" : "two-pass-customisazia-none"}>*/}
                {/*    <p className={"name-custom"}>Sort by:</p>*/}
                {/*    <div onBlur={changeSetPapapSelection2} className="change-customizat">*/}
                {/*        <p className={CheckboxStat2 == true ? "Customizasia-Status" : "Customizasia-Status-NoCheked"}>Status <input*/}
                {/*            className={"Status-button"} checked={CheckboxStat2 == true}*/}
                {/*            onChange={() => changeSetCheckboxStat2(true)} name={"radio-customez2"}*/}
                {/*            type="radio" readOnly/></p>*/}
                {/*        <p className={CheckboxStat2 == false ? "Customizasia-Profesion-Skills-Cheked" : "Customizasia-Profesion-Skills"}>Professional*/}
                {/*            skills<input className={"Profesion-Skils-button"}*/}
                {/*                         checked={CheckboxStat2 == false}*/}
                {/*                         onChange={() => changeSetCheckboxStat2(false)}*/}
                {/*                         name={"radio-customez2"} type="radio" readOnly/></p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <p onClick={props.chengeStateResultTable}
               className={'ChangeReSalt'}>{props.StateResultTable == "Recommendations" ? "Followers" : "Recommendations"}</p>
        </div>
    )
})