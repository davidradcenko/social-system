import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {CounterUser} from "./UsersInfo-Couts/CounterUser";
import {RootState, useAppDispatch} from "../../../store/store";
import {GetActivePageUsersTC, GetUsersProfilTK} from "../../../Reducers/UsersReducer";
import {useSelector} from "react-redux";
import {UserType} from "../../../API/api";
import {Await} from "react-router-dom";

type ResultFilterType = {
    StateResultTable: "Followers" | "Recommendations"
}
export const MainBlockUsersInfo = React.memo((props: ResultFilterType) => {
    console.log("+++++++++++++MainBlockUsersInfo  ")
    const ActivePageUsers = useSelector<RootState, Array<UserType>>(state => state.users.items)

    return (
        <div className={"content-functional"}>
            {/*one-pass*/}
            <div
                className={props.StateResultTable == "Followers" ? "one-pass-block-content" : "one-pass-block-content ClassDisplayNone"}>
                <CounterUser/>
                <div className={"one-pass-scroll"}>

                    {ActivePageUsers.map(tl => {
                        console.log("+++++++++++++  ",++m)
                        return <MmmReas key={tl.id} tl={tl}/>
                    })}
                </div>
            </div>
            {/*two pass*/}
            <div
                className={props.StateResultTable == "Recommendations" ? "two-pas-block-content" : " two-pas-block-content ClassDisplayNone"}>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
                <div className="two-pass-info-block">
                    <div className={"one-pas-info"}>
                        <div className={"one-pass-info-img"}>
                            <img src={testInfoBlockImg} alt="My followers litle img"/>
                        </div>
                        <div className={"one-pas-info-text"}>
                            <p className={"one-pas-info-text-name"}>Amanda Dius
                                <input type={"checkbox"}/></p>
                            <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                        </div>
                    </div>
                    <div className={"two-pas-function"}>
                        <input type="button" value={"Subscribe"}/>
                    </div>
                </div>
            </div>
        </div>
    )
})


type ttt = {
    tl: any
}
let m=0
let n=0

export const MmmReas = React.memo((props: ttt) => {
    console.log("+++++++++++++MmmReas  ")
    // const dispatch = useAppDispatch()


    // const value=useMemo(()=>{
    //
    //     console.log("+++++++++++++++++++++++++  ",++m)
    //    const test= dispatch(GetUsersProfilTK(props.tl.id))
    //
    // },[props.tl.id])


    // useEffect(() => {
    //     console.log("+++++++++++++++++++++++++  ",++m)
    //     debugger
    //     dispatch(GetUsersProfilTK(props.tl.id))
    // }, [])
    console.log("-------------------  ",++n)
    return (
        <div key={props.tl.id} className="one-pass-info-black">
            <div className={"one-pas-info"}>
                <div className={"one-pass-info-img"}>
                    <img src={props.tl.photos.small == null ? testInfoBlockImg : props.tl.photos.small}
                         alt="My followers litle img"/>
                </div>
                <div className={"one-pas-info-text"}>
                    <p className={"one-pas-info-text-name"}>{props.tl.name}
                        <input type={"checkbox"}/></p>
                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                </div>
            </div>
            <div className={"one-pas-function"}>
                <input type="button" value={"Delete"}/>
            </div>
        </div>
    )
})