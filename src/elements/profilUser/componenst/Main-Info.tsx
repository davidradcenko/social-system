import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import React from "react";
import {ContaksType, photosType} from "../../../API/api";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import website from "../../../img/nav-icons/icons-sosial/www.png";

type MainInfoType = {
    FullName: string
    ProfesionSkils: string
    AboutUser: string
    lokingForAJab: boolean
    contacts: ContaksType
    photos:photosType
}
export const MainInfo = React.memo((props: MainInfoType) => {
    console.log("+++++++++++++MainInfo  ")
    let facebookP = props.contacts.facebook
    let githubP = props.contacts.github
    let instagramP = props.contacts.instagram
    let mainLinkP = props.contacts.mainLink
    let twitterP = props.contacts.twitter
    let vkP = props.contacts.vk
    let websiteP = props.contacts.website
    let youtubeP = props.contacts.youtube
    return (
        <div className="main-info">
            <div className={"lardge-foto"}>
                <div className="Foto-classfotoFrofel-gradient"><img src={props.photos.small} alt="large img"/></div>
            </div>
            <div className={"info-profil"}>
                <p className="Name-InfoProfil">{props.FullName}</p>
                {/*Status-InfoProfil*/}
                <p className="JobSearch-InfoProfil">Job search: <input className={"Checkbox-InfoProfil"}
                                                                       type={"checkbox"} checked={props.lokingForAJab}/>
                </p>

                <p className="ProfessionSkils-InfoProfil">Frofessional skills:</p>
                <p className="ProfessionsSkils-text-InfoProfil">{props.ProfesionSkils}</p>

                <p className="About-InfoProfil">About:</p>
                <p className="About-text-InfoProfil">{props.AboutUser}</p>

                <div className="social-InfoProffil">

                    <a className={props.contacts.twitter != null ? "" : "ImgProfilNone"}
                       href={typeof twitterP == "string" ? twitterP : ""}>
                        <img src={twiter} alt="twiter"/>
                    </a>

                    <a className={facebookP != null ? "" : "ImgProfilNone"}
                       href={typeof facebookP == "string" ? facebookP : ""}>
                        <img src={facebook} alt="facebook"/>
                    </a>

                    <a className={vkP != null ? "" : "ImgProfilNone"} href={typeof vkP == "string" ? vkP : ""}>
                        <img src={vk} alt="vk"/>
                    </a>
                    <a className={instagramP != null ? "" : "ImgProfilNone"}
                       href={typeof instagramP == "string" ? instagramP : ""}>
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a className={youtubeP != null ? "" : "ImgProfilNone"}
                       href={typeof youtubeP == "string" ? youtubeP : ""}>
                        <img src={youtube} alt="youtube"/>
                    </a>
                    <a className={githubP != null ? "" : "ImgProfilNone"} href={typeof githubP == "string" ? githubP : ""}>
                        <img src={github} alt="github"/>
                    </a>
                    <a className={websiteP != null ? "" : "ImgProfilNone"}
                       href={typeof websiteP == "string" ? websiteP : ""}>
                        <img src={website} alt="website"/>
                    </a>
                </div>

            </div>

            <div className={'mobule-DdivFoto'}>
                <div className="Foto-classfotoFrofel-gradient mobule-Foto-classfotoFrofel-gradient"><img src={testForo}
                                                                                                         alt="large img"/>
                </div>
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

                <a className={props.contacts.twitter != null ? "" : "ImgProfilNone"}
                   href={typeof twitterP == "string" ? twitterP : ""}>
                    <img src={twiter} alt="twiter"/>
                </a>

                <a className={facebookP != null ? "" : "ImgProfilNone"}
                   href={typeof facebookP == "string" ? facebookP : ""}>
                    <img src={facebook} alt="facebook"/>
                </a>

                <a className={vkP != null ? "" : "ImgProfilNone"} href={typeof vkP == "string" ? vkP : ""}>
                    <img src={vk} alt="vk"/>
                </a>
                <a className={instagramP != null ? "" : "ImgProfilNone"}
                   href={typeof instagramP == "string" ? instagramP : ""}>
                    <img src={instagram} alt="instagram"/>
                </a>
                <a className={youtubeP != null ? "" : "ImgProfilNone"}
                   href={typeof youtubeP == "string" ? youtubeP : ""}>
                    <img src={youtube} alt="youtube"/>
                </a>
                <a className={githubP != null ? "" : "ImgProfilNone"} href={typeof githubP == "string" ? githubP : ""}>
                    <img src={github} alt="github"/>
                </a>
                <a className={websiteP != null ? "" : "ImgProfilNone"}
                   href={typeof websiteP == "string" ? websiteP : ""}>
                    <img src={website} alt="website"/>
                </a>
            </div>
        </div>
    )
})