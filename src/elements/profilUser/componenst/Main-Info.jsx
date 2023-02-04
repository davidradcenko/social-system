import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import React from "react";

export const MainInfo = () => {
    return (
        <div className="main-info">
            <div className={"lardge-foto"}>
                <div className="Foto-classfotoFrofel-gradient"><img src={testForo} alt="large img"/></div>
            </div>
            <div className={"info-profil"}>
                <p className="Name-InfoProfil">DAVID RADCHENKO</p>
                {/*Status-InfoProfil*/}
                <p className="JobSearch-InfoProfil">Job search: <input className={"Checkbox-InfoProfil"}
                                                                       type={"checkbox"}/></p>

                <p className="ProfessionSkils-InfoProfil">Frofessional skills:</p>
                <p className="ProfessionsSkils-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases,
                    JavaEE,Java Spring</p>

                <p className="About-InfoProfil">About:</p>
                <p className="About-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java
                    Spring React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java Spring React, Redux,CSS,
                    My Sql,Oracle Databases, JavaEE,Java Spring</p>

                <div className="social-InfoProffil">
                    <img src={twiter} alt="twiter"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={vk} alt="vk"/>
                    <img src={github} alt="vaiber"/>
                </div>

            </div>

            <div className={'mobule-DdivFoto'}>
                <div className="Foto-classfotoFrofel-gradient mobule-Foto-classfotoFrofel-gradient"><img src={testForo} alt="large img"/></div>
                <div className={'mobule-infoblock-Name-Status'}>
                    <p className="Name-InfoProfil">DAVID RADCHENKO</p>
                    {/*Status-InfoProfil*/}
                    <p className="JobSearch-InfoProfil">Job search: <input className={"Checkbox-InfoProfil"}
                                                                           type={"checkbox"}/></p>
                </div>
            </div>


            <div className="mobule-StyleInfoBlock-MainWind">
                    <div className={'Mobule-ferst-Teg-Info'}>
                          <p className="mobule-ProfessionSkils-InfoProfil">Frofessional skills:</p>
                            <p className="mobule-ProfessionsSkils-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases,
                        JavaEE,Java Spring</p>
                    </div>
                    <div className={'Mobule-next-Teg-Info'}>
                        <p className="mobule-About-InfoProfil">About:</p>
                        <p className="mobule-About-text-InfoProfil">React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java
                        Spring React, Redux,CSS, My Sql,Oracle Databases, JavaEE,Java Spring React, Redux,CSS,
                        My Sql,Oracle Databases, JavaEE,Java Spring</p>
                    </div>
            </div>


            <div className="mobule-social-InfoProffil">
                <img src={twiter} alt="twiter"/>
                <img src={facebook} alt="facebook"/>
                <img src={vk} alt="vk"/>
                <img src={github} alt="vaiber"/>
            </div>
        </div>
    )
}