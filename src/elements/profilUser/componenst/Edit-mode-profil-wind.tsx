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
    type typeIcons = {
    {"none"},
    [typeof github,user:]

    }"none" | typeof github | typeof vk | typeof facebook | typeof instagram | typeof twiter | typeof website | typeof youtube;

    //state URL social
    const [objectIconsState, SetObjectIconsState] = useState<Array[{typeIcons}]>(facebook)
    const changeSetObjectIconsState = (value: typeIcons) => {
        SetObjectIconsState(value)
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

            if (!values.EditModeName) {
                errors.EditModeName = "Required";
            } else if (values.EditModeName.length > 30) {
                errors.EditModeName = 'Must be 30 characters or less';
            }
            if (values.About.length > 200) {
                errors.About = 'Must be 200 characters or less';
            }
            if (values.ProfessionalSkills.length > 100) {
                errors.About = 'Must be 100 characters or less';
            }
            if (values.URLSOCIALS.length > 100) {
                errors.URLSOCIALS = 'Must be 100 characters or less';
            }

            return errors;
        },
        initialValues: {
            EditModeName: '',
            JobSearch: '',
            ProfessionalSkills: '',
            URLSOCIALS: '',
            About:''
        },
        onSubmit: values => {
            // dispatch()
        },
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
                            id={"Edit-mode-Name"}
                            name={"EditModeName"}
                            value={props.FullName}
                            type="text"/>


                        <p className={"Edit-mode-looking-for-job"}>Job search:
                            <input
                                checked={props.lokingForAJab}
                                name={"JobSearch"}
                                type="checkbox"/>
                        </p>
                        <p>Professional skills:</p>
                        <input
                            value={props.ProfesionSkils}
                            name={"ProfessionalSkills"}
                            type="text"/>
                        <p>About:</p>
                        <textarea value={props.AboutUser} name={"About"}></textarea>
                        <p>Choose:</p>
                        <div className={"Edit-mode-sosial"}>
                            <img onClick={() => changeSetObjectIconsState(twiter)} src={twiter} alt="twiter"/>
                            <img onClick={() => changeSetObjectIconsState(facebook)} src={facebook} alt="facebook"/>
                            <img onClick={() => changeSetObjectIconsState(vk)} src={vk} alt="vk"/>
                            <img onClick={() => changeSetObjectIconsState(instagram)} src={instagram}
                                 alt="instagram"/>
                            <img onClick={() => changeSetObjectIconsState(youtube)} src={youtube} alt="youtube"/>
                            <img onClick={() => changeSetObjectIconsState(github)} src={github} alt="github"/>
                            <img onClick={() => changeSetObjectIconsState(website)} src={website} alt="website"/>
                        </div>
                        <div className={"Edit-mode-social-inputs"}>
                            <input
                                name={"URLSOCIALS"}
                                value={"https://"}
                                onChange={e => {}} id={"Edit-mode-input-types"}
                                type="text"/>
                            <img src={objectIconsState} alt=""/>
                        </div>

                    </div>
                    <input  type={"submit"} value={"Save"}/>

                </form>
            </div>

        </div>
    )
})