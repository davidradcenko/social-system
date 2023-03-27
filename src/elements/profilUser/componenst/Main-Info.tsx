import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import React from "react";
import {ContaksType, photosType, UserProfilType} from "../../../API/api";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import website from "../../../img/nav-icons/icons-sosial/www.png";
import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

type MainInfoType = {
    FullName: string
    ProfesionSkils: string
    AboutUser: string
    lokingForAJab: boolean
    contacts: ContaksType
    photos:photosType
}
export const MainInfo = React.memo(() => {
    console.log("+++++++++++++MainInfo  ")
    const ProfilData = useSelector<RootState, UserProfilType>(state => state.profil)
    let facebookP = ProfilData.contacts.facebook
    let githubP = ProfilData.contacts.github
    let instagramP = ProfilData.contacts.instagram
    let mainLinkP = ProfilData.contacts.mainLink
    let twitterP = ProfilData.contacts.twitter
    let vkP = ProfilData.contacts.vk
    let websiteP = ProfilData.contacts.website
    let youtubeP = ProfilData.contacts.youtube
    return (
        <div className="main-info">

            {/*--------Main profile img-------------*/}
            <div className={"lardge-foto"}>
                <div className={"Foto-classfotoFrofel-gradient"}>
                    <img className={ProfilData.photos.small == null?"Foto-classfotoFrofel-gradient":""} src={ProfilData.photos.small == null ? testInfoBlockImg : ProfilData.photos.small} alt="large img"/>
                </div>
            </div>
            {/*--------END-------------*/}
            {/*--------Main profile info-------------*/}
            <div className={"info-profil"}>
                <p className="Name-InfoProfil">{ProfilData.fullName==null?"":ProfilData.fullName}</p>
                {/*Status-InfoProfil*/}
                <p className="JobSearch-InfoProfil">Job search:
                    <input className={"Checkbox-InfoProfil"} type={"checkbox"} checked={ProfilData.lookingForAJob==null?false:ProfilData.lookingForAJob} readOnly/>
                </p>

                <p className="ProfessionSkils-InfoProfil">Frofessional skills:</p>
                <p className="ProfessionsSkils-text-InfoProfil">{ProfilData.lookingForAJobDescription==null?"":ProfilData.lookingForAJobDescription}</p>

                <p className="About-InfoProfil">About:</p>
                <p className="About-text-InfoProfil">{ProfilData.aboutMe==null?"":ProfilData.aboutMe}</p>

                <div className="social-InfoProffil">

                    <a className={ProfilData.contacts.twitter != null ? "" : "ImgProfilNone"}
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
            {/*--------END-------------*/}
            {/*--------NAV BAR MODULE-------------*/}
            <div className={'mobule-DdivFoto'}>
                <div className="Foto-classfotoFrofel-gradient mobule-Foto-classfotoFrofel-gradient">
                    <img src={ProfilData.photos.small==null?testInfoBlockImg:ProfilData.photos.small} alt="large img"/>
                </div>
                <div className={'mobule-infoblock-Name-Status'}>
                    <p className="Name-InfoProfil">{ProfilData.fullName==null?"":ProfilData.fullName}</p>
                    <p className="JobSearch-InfoProfil">Job search:
                        <input className={"Checkbox-InfoProfil"} checked={ProfilData.lookingForAJob==null?false:ProfilData.lookingForAJob} type={"checkbox"} readOnly/>
                    </p>
                </div>
            </div>
            {/*--------END-------------*/}
            {/*--------MAIN PROFILE INFO MODULE-------------*/}
            <div className="mobule-StyleInfoBlock-MainWind">
                <div className={'Mobule-ferst-Teg-Info'}>
                    <p className="mobule-ProfessionSkils-InfoProfil">Frofessional skills:</p>
                    <p className="mobule-ProfessionsSkils-text-InfoProfil">
                        {ProfilData.lookingForAJobDescription==null?"":ProfilData.lookingForAJobDescription}
                    </p>
                </div>
                <div className={'Mobule-next-Teg-Info'}>
                    <p className="mobule-About-InfoProfil">About:</p>
                    <p className="mobule-About-text-InfoProfil">
                        {ProfilData.aboutMe==null?"":ProfilData.aboutMe}
                    </p>
                </div>
            </div>
            <div className="mobule-social-InfoProffil">
                <a className={ProfilData.contacts.twitter != null ? "" : "ImgProfilNone"}
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
            {/*--------END-------------*/}
        </div>
    )
})