import VectopCloseEditWindow from "../../../img/Vector-close-Edit-profil.png";
import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import website from "../../../img/nav-icons/icons-sosial/www.png";
import React, {useState} from "react";
import {useFormik} from "formik";
import {loginIn} from "../../../Reducers/LoginReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import {ContaksType, photosType, UserProfilType} from "../../../API/api";
import {useSelector} from "react-redux";


type EditModeProfilWindType={
    EditModeProfil:boolean,
    changeSetEditModeProfil:()=>void

}


export const EditModeProfilWind = React.memo((props: EditModeProfilWindType) => {
    const dispatch = useAppDispatch()
    const ProfilData = useSelector<RootState, UserProfilType>(state => state.profil)
    type typeIcons = "none" | typeof github | typeof vk | typeof facebook | typeof instagram | typeof twiter | typeof website | typeof youtube;

    //state URL social
    const [objectIconsState, SetObjectIconsState] = useState<{value:typeIcons,stingName:"facebook"|"github" | "instagram"|"mainLink" |"twitter"|"vk"| "website"|"youtube"}>({value:"none",stingName:"twitter"})
    const changeSetObjectIconsState = (value: typeIcons,stingName:"facebook"|"github" | "instagram"|"mainLink" |"twitter"|"vk"| "website"|"youtube") => {
        SetObjectIconsState({value,stingName:stingName})
    }


    //formik
    type initialValues= {
            EditModeName?: string,
            JobSearch?: string,
            ProfessionalSkills?: string,
            URLSOCIALS?: string,
            About?:string
    }
    const formik = useFormik({
        initialValues: {
            EditModeName: ProfilData.fullName,
            JobSearch: ProfilData.lookingForAJob,
            ProfessionalSkills: ProfilData.lookingForAJobDescription,

                facebook: ProfilData.contacts.facebook==null?"https://":ProfilData.contacts.facebook,
                github: ProfilData.contacts.github==null?"https://":ProfilData.contacts.github,
                instagram: ProfilData.contacts.instagram==null?"https://":ProfilData.contacts.instagram,
                mainLink: ProfilData.contacts.mainLink==null?"https://":ProfilData.contacts.mainLink,
                twitter: ProfilData.contacts.twitter==null?"https://":ProfilData.contacts.twitter,
                vk: ProfilData.contacts.vk==null?"https://":ProfilData.contacts.vk,
                website: ProfilData.contacts.website==null?"https://":ProfilData.contacts.website,
                youtube: ProfilData.contacts.youtube==null?"https://":ProfilData.contacts.youtube,

            About:ProfilData.aboutMe
        },
        // validate: (values) => {
        //     const errors:initialValues = {};
        //
        //     // if (!values.EditModeName) {
        //     //     errors.EditModeName = "Required";
        //     // } else if (values.EditModeName.length > 30) {
        //     //     errors.EditModeName = 'Must be 30 characters or less';
        //     // }
        //     // if (values.About.length > 200) {
        //     //     errors.About = 'Must be 200 characters or less';
        //     // }
        //     // if (values.ProfessionalSkills.length > 100) {
        //     //     errors.About = 'Must be 100 characters or less';
        //     // }
        //     if (values.EditModeName.length > 100) {
        //         errors.EditModeName = 'Must be 100 characters or less';
        //     }
        //
        //     return errors;
        // },
        onSubmit: values => {
            alert("ddsfs  "+ProfilData.fullName)
        }
    })
    return (
        <div className={props.EditModeProfil == true ? "Edit-profil-menu" : "Edit-profil-menu-none"}>

            <img onClick={props.changeSetEditModeProfil} className={"VectopCloseEditWindow"}
                 src={VectopCloseEditWindow} alt="VectopCloseEditWindow"/>
            {/*Edit Menu start*/}
            <div className="Edit-mode-Frofil">


                <form onSubmit={formik.handleSubmit}>
                    <p>Edit profile</p>
                    <div className="EditMode-classfotoFrofel-gradient"><img src={testForo} alt="testForo"/></div>

                    <div className="Edit-mode-Inputs">

                        <p>Name:</p>
                        <input
                            name={"EditModeName"}
                            id={"EditModeName"}
                            onChange={formik.handleChange}
                            value={formik.values.EditModeName}
                            type="text"/>


                        <p className={"Edit-mode-looking-for-job"}>Job search:
                            <input
                                onChange={formik.handleChange}
                                checked={formik.values.JobSearch}
                                id={"JobSearch"}
                                type="checkbox"/>
                        </p>
                        <p>Professional skills:</p>
                        <input
                            onChange={formik.handleChange}
                            value={formik.values.ProfessionalSkills}
                            id={"ProfessionalSkills"}
                            type="text"/>
                        <p>About:</p>
                        <textarea id={"About"}
                                  onChange={formik.handleChange}
                                  value={formik.values.About}>
                        </textarea>
                        <p>Choose:</p>
                        <div className={"Edit-mode-sosial"}>
                            <img onClick={() => changeSetObjectIconsState(twiter,"twitter")} src={twiter} alt="twiter"/>
                            <img onClick={() => changeSetObjectIconsState(facebook,"facebook")} src={facebook} alt="facebook"/>
                            <img onClick={() => changeSetObjectIconsState(vk,"vk")} src={vk} alt="vk"/>
                            <img onClick={() => changeSetObjectIconsState(instagram,"instagram")} src={instagram}
                                 alt="instagram"/>
                            <img onClick={() => changeSetObjectIconsState(youtube,"youtube")} src={youtube} alt="youtube"/>
                            <img onClick={() => changeSetObjectIconsState(github,"github")} src={github} alt="github"/>
                            <img onClick={() => changeSetObjectIconsState(website,"website")} src={website} alt="website"/>
                        </div>
                        <div className={"Edit-mode-social-inputs"}>
                            {/**/}
                            <input
                                onChange={formik.handleChange}
                                value={formik.values[objectIconsState.stingName]}
                                id={"URLSOCIALS"}
                                type="text"/>
                            <img src={objectIconsState.value} alt=""/>
                        </div>

                    </div>
                    <input className={"SpecialClassButton"}  type={"submit"} value={"Save"}/>

                </form>
            </div>

        </div>
    )
})