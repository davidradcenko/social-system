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
import {useAppDispatch} from "../../../store/store";





export const EditModeProfilWind = React.memo((props: any) => {
    const dispatch = useAppDispatch()
    type typeIcons = "none" | typeof github | typeof vk | typeof facebook | typeof instagram | typeof twiter | typeof website | typeof youtube;

    //state URL social
    const [objectIconsState, SetObjectIconsState] = useState<{value:typeIcons,stingName: string}>({value:"none",stingName:""})
    const changeSetObjectIconsState = (value: typeIcons,stingName:string) => {
        SetObjectIconsState({value,stingName})
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
        validate: (values) => {
            const errors:initialValues = {};

            // if (!values.EditModeName) {
            //     errors.EditModeName = "Required";
            // } else if (values.EditModeName.length > 30) {
            //     errors.EditModeName = 'Must be 30 characters or less';
            // }
            // if (values.About.length > 200) {
            //     errors.About = 'Must be 200 characters or less';
            // }
            // if (values.ProfessionalSkills.length > 100) {
            //     errors.About = 'Must be 100 characters or less';
            // }
            if (values.URLSOCIALS.length > 100) {
                errors.URLSOCIALS = 'Must be 100 characters or less';
            }

            return errors;
        },
        initialValues: {
            EditModeName: props.FullName,
            JobSearch: '',
            ProfessionalSkills: '',
            URLSOCIALS: '',
            About:''
        },
        onSubmit: values => {
            alert("ddsfs  "+values.EditModeName)
            debugger
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
                            {...formik.getFieldProps("EditModeName")}
                            name={"EditModeName"}
                            // value={props.FullName}
                            type="text"/>


                        <p className={"Edit-mode-looking-for-job"}>Job search:
                            <input
                                {...formik.getFieldProps("JobSearch")}
                                checked={props.lokingForAJab}
                                type="checkbox"/>
                        </p>
                        <p>Professional skills:</p>
                        <input
                            {...formik.getFieldProps("ProfessionalSkills")}
                            value={props.ProfesionSkils}
                            type="text"/>
                        <p>About:</p>
                        <textarea  {...formik.getFieldProps("About")} value={props.AboutUser} ></textarea>
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
                                {...formik.getFieldProps("URLSOCIALS")}
                                value={props.contacts[objectIconsState.stingName] || "https://" }
                                onChange={e => {}}
                                id={"Edit-mode-input-types"}
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