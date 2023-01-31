import VectopCloseEditWindow from "../../../img/Vector-close-Edit-profil.png";
import TestSeatchForo from "../../../img/nav-icons/foroTest.png";

import React from "react";

export const SeatchUsersComponent = (props) => {
    return (
        <div className={props.SeatchFormActivated == true ? "Seatch-profil-menu" : "Edit-profil-menu-none"}>
            <img onClick={props.changesActivatedSeatch} className={"VectopCloseEditWindow"}
                 src={VectopCloseEditWindow} alt="VectopCloseEditWindow"/>
            {/*Edit Menu start*/}
            <div className="Seatch-div">
                <p className={"Seatch-div-Search"}>Search</p>
                <div className="Search-mode-Inputs">
                    <p>Name:</p>
                    <input className={"Search-mode-name"} type="text"/>
                    <input id={"ButtonForSearch"} value={"Apply"} type="button"/>
                    <p>Professional skills:</p>
                    <input className={"Seatch-div-Professional-skills"} type="text"/>
                    <input id={"ButtonForSearch"} value={"Apply"} type="button"/>
                    <p className={"Seatch-wind-JobSearch"}>Job search:</p>
                    <div className={"Seatch-wind-Status-div"}>
                        <p className={"Seatch-wind-Status"}> Status:
                            <input name="radio-Seatch-status" type="radio"/>
                            <input name="radio-Seatch-status" type="radio"/>
                        </p>
                        <input className={"ButtonForSearchmargin"} value={"Apply"} type="button"/>
                    </div>
                    <div className="Seatch-formAnsve">
                        <p className={"Seatch-Results"}>Results</p>
                        <div className={"Seach-Wind-Answs"}>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                            <div className={"Seatch-wind-ans"}>
                                <img src={TestSeatchForo} alt="testSeatchForo"/>
                                <div className={"Seatch-wind-ans-info"}>
                                    <p>Amanda Dius <input type="radio"/></p>
                                    <p>React, Redux,CSS,</p>
                                </div>
                                <input className={'Setch-answ-wind-button'} value={'Subscribe'} type="button"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}