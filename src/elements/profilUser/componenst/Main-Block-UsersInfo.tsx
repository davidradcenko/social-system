import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import React, {useEffect} from "react";
import {CounterUser} from "./UsersInfo-Couts/CounterUser";
import {RootState, useAppDispatch} from "../../../store/store";
import {GetActivePageUsersTC} from "../../../Reducers/UsersReducer";
import {useSelector} from "react-redux";
import {UserType} from "../../../API/api";

type ResultFilterType = {
    StateResultTable: "Followers" | "Recommendations"
}
export const MainBlockUsersInfo = (props: ResultFilterType) => {
    const dispatch = useAppDispatch()

    const ActivePageUsers = useSelector<RootState,Array<UserType>>(state => state.users.items)


    return (
        <div className={"content-functional"}>
            {/*one-pass*/}
            <div
                className={props.StateResultTable == "Followers" ? "one-pass-block-content" : "one-pass-block-content ClassDisplayNone"}>
                <CounterUser/>
                {ActivePageUsers.map(tl=>{
                    return(
                        <div className="one-pass-info-black">
                            <div className={"one-pas-info"}>
                                <div className={"one-pass-info-img"}>
                                    <img src={tl.photos.small==null?testInfoBlockImg:tl.photos.small} alt="My followers litle img"/>
                                </div>
                                <div className={"one-pas-info-text"}>
                                    <p className={"one-pas-info-text-name"}>{tl.name}
                                        <input type={"checkbox"}/></p>
                                    <p className={"one-pas-info-text-qvalete"}>React, Redux,CSS</p>
                                </div>
                            </div>
                            <div className={"one-pas-function"}>
                                <input type="button" value={"Delete"}/>
                            </div>
                        </div>
                    )
                })}
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
}