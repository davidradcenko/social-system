import VectopCloseEditWindow from "../../../img/Vector-close-Edit-profil.png";
import testForo from "../../../img/unsplash_ILip77SbmOE.png";
import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import website from "../../../img/nav-icons/icons-sosial/www.png";
import download from "../../../img/icons8-downloaded-25.png";
import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {loginIn} from "../../../Reducers/LoginReducer";
import {RootState, useAppDispatch} from "../../../store/store";
import {ContaksType, photosType, UserProfilType} from "../../../API/api";
import {useSelector} from "react-redux";
import {profilChangeTK, SaveFotoTK} from "../../../Reducers/profilReducer";
import testInfoBlockImg from "../../../img/icons-profel/Ellipse 17.png";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {TextField} from "@mui/material";

type EditModeProfilWindType = {
    EditModeProfil: boolean,
    changeSetEditModeProfil: () => void

}
export type typeIcons =
    "none"
    | typeof github
    | typeof vk
    | typeof facebook
    | typeof instagram
    | typeof twiter
    | typeof website
    | typeof youtube;

export const EditModeProfilWind = React.memo(() => {
    console.log("+++++++++EditModeProfilWind")
    const dispatch = useAppDispatch()
    const ProfilData = useSelector<RootState, UserProfilType>(state => state.profil)


    //state URL social
    const [objectIconsState, SetObjectIconsState] = useState<{ value: typeIcons, stingName: "facebook" | "github" | "instagram" | "mainLink" | "twitter" | "vk" | "website" | "youtube" }>({
        value: twiter,
        stingName: "twitter"
    })
    const changeSetObjectIconsState = (value: typeIcons, stingName: "facebook" | "github" | "instagram" | "mainLink" | "twitter" | "vk" | "website" | "youtube") => {
        SetObjectIconsState({value, stingName: stingName})
    }

    const onMainFotoSelection = (e: any) => {
        if (e.target.files.length) {
            dispatch(SaveFotoTK(e.target.files[0]))
        }
    }

    //formik
    type initialValues = {
        EditModeName?: string | null,
        JobSearch?: string | null,
        ProfessionalSkills?: string | null,
        About?: string | null,
        facebook?: string | null,
        github?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        vk?: string | null,
        website?: string | null,
        youtube?: string | null
    }
    const formik = useFormik({
        validate: (values) => {
            const errors: initialValues = {};

            if (!values.EditModeName) {
                errors.EditModeName = "Required";
            } else if (values.EditModeName.length > 30) {
                errors.EditModeName = 'Must be 30 characters or less';
            }
            if (!values.About == null) {
                if (values.About.length > 100) {
                    errors.About = 'Must be 100 characters or less';
                }
            }
            if (!values.ProfessionalSkills == null) {
                if (values.ProfessionalSkills.length > 100) {
                    errors.About = 'Must be 100 characters or less';
                }
            }
            if (!values.EditModeName == null) {
                if (values.EditModeName.length > 100) {
                    errors.EditModeName = 'Must be 100 characters or less';
                }
            }


            //website
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.website)) {
                errors.website = 'Invalid website';
                if (values.website == "" || values.website == "https://") {
                    delete errors.website
                }
            }

            //youtube
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.youtube)) {
                errors.youtube = 'Invalid youtube';
                if (values.youtube == "" || values.youtube == "https://") {
                    delete  errors.youtube
                }
            }

            //vk
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.vk)) {
                errors.vk = ' Invalid vk ';
                if (values.vk == "" || values.vk == "https://") {
                    delete errors.vk
                }
            }

            //twitter
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.twitter)) {
                errors.twitter = 'Invalid twitter';
                if (values.twitter == "" || values.twitter == "https://") {
                    delete errors.twitter
                }

            }

            //instagram
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.instagram)) {
                errors.instagram = 'Invalid instagram';
                if (values.instagram == "" || values.instagram == "https://") {
                    delete errors.instagram
                }

            }

            //github
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.github)) {
                errors.github = 'Invalid github';
                if (values.github == "" || values.github == "https://") {
                    delete errors.github
                }
            }

            //facebook
            if (!/^[https://]+[A-Z0-9._%+-]+\.[com]{3}$/i.test(values.facebook)) {
                errors.facebook = 'Invalid facebook';
                if (values.facebook == "" || values.facebook == "https://") {
                    delete errors.facebook
                }
            }


            return errors;
        },
        initialValues: {
            EditModeName: "",
            JobSearch: false,
            ProfessionalSkills: "",
            About: "",

            facebook: "",
            github: "",
            instagram: "",
            mainLink: "",
            twitter: "",
            vk: "",
            website: "",
            youtube: ""
        },
        onSubmit: values => {
            let data = {
                userId: ProfilData.userId,
                lookingForAJob: values.JobSearch,
                lookingForAJobDescription: values.ProfessionalSkills,
                fullName: values.EditModeName,
                contacts: {
                    facebook: values.facebook == "https://" || values.facebook == "" ? null : values.facebook,
                    github: values.github == "https://" || values.github == "" ? null : values.github,
                    instagram: values.instagram == "https://" || values.instagram == "" ? null : values.instagram,
                    mainLink: null,
                    twitter: values.twitter == "https://" || values.twitter == "" ? null : values.twitter,
                    vk: values.vk == "https://" || values.vk == "" ? null : values.vk,
                    website: values.website == "https://" || values.website == "" ? null : values.website,
                    youtube: values.youtube == "https://" || values.youtube == "" ? null : values.youtube
                },
                aboutMe: values.About,
                photos: {
                    small: ProfilData.photos.small,
                    large: ProfilData.photos.large
                }
            }
            dispatch(profilChangeTK(data, ProfilData.userId))
        },

    })
    useEffect(() => {
        formik.setValues({
            EditModeName: ProfilData.fullName,
            JobSearch: ProfilData.lookingForAJob,
            ProfessionalSkills: ProfilData.lookingForAJobDescription,
            About: ProfilData.aboutMe,
            facebook: ProfilData.contacts.facebook == null ? "https://" : ProfilData.contacts.facebook,
            github: ProfilData.contacts.github == null ? "https://" : ProfilData.contacts.github,
            instagram: ProfilData.contacts.instagram == null ? "https://" : ProfilData.contacts.instagram,
            mainLink: ProfilData.contacts.mainLink == null ? "https://" : ProfilData.contacts.mainLink,
            twitter: ProfilData.contacts.twitter == null ? "https://" : ProfilData.contacts.twitter,
            vk: ProfilData.contacts.vk == null ? "https://" : ProfilData.contacts.vk,
            website: ProfilData.contacts.website == null ? "https://" : ProfilData.contacts.website,
            youtube: ProfilData.contacts.youtube == null ? "https://" : ProfilData.contacts.youtube
        })
    }, [ProfilData])



    return (
        <></>
    //     <div className={props.EditModeProfil == true ? "Edit-profil-menu" : "Edit-profil-menu-none"}>
    //
    //         <img onClick={props.changeSetEditModeProfil} className={"VectopCloseEditWindow"}
    //              src={VectopCloseEditWindow} alt="VectopCloseEditWindow"/>
    //         {/*Edit Menu start*/}
    //         <div className="Edit-mode-Frofil">
    //
    //
    //
    //
    //             <form onSubmit={formik.handleSubmit}>
    //                 <p>Edit profile</p>
    //                 <div className={"IMGCenter"}>
    //                     <div className="EditMode-classfotoFrofel-gradient">
    //                         <img className={"HovwrImgDounload"}
    //                              src={ProfilData.photos.small == null ? testInfoBlockImg : ProfilData.photos.small}
    //                              alt="testForo"/>
    //                         <input onChange={onMainFotoSelection} id={"downloadImg"} type="file"/>
    //                     </div>
    //                 </div>
    //                 <div className="Edit-mode-Inputs">
    //                     <p>Name:</p>
    //                     <input
    //                         name={"EditModeName"}
    //                         id={"EditModeName"}
    //                         onChange={formik.handleChange}
    //                         value={formik.values.EditModeName}
    //                         type="text"
    //                     />
    //                     <p className={"Edit-mode-looking-for-job"}>Job search:
    //                         <input
    //                             onChange={formik.handleChange}
    //                             checked={formik.values.JobSearch}
    //                             id={"JobSearch"}
    //                             type="checkbox"
    //                         />
    //                     </p>
    //                     <p>Professional skills:</p>
    //                     <input
    //                         onChange={formik.handleChange}
    //                         value={formik.values.ProfessionalSkills}
    //                         id={"ProfessionalSkills"}
    //                         type="text"
    //                     />
    //                     <p>About:</p>
    //                     <textarea
    //                         id={"About"}
    //                         onChange={formik.handleChange}
    //                         value={formik.values.About}>
    //                     </textarea>
    //                     <p>Choose:</p>
    //                     <div className={"Edit-mode-sosial"}>
    //                         <img onClick={() => changeSetObjectIconsState(twiter, "twitter")} src={twiter}
    //                              alt="twiter"/>
    //                         <img onClick={() => changeSetObjectIconsState(facebook, "facebook")} src={facebook}
    //                              alt="facebook"/>
    //                         <img onClick={() => changeSetObjectIconsState(vk, "vk")} src={vk} alt="vk"/>
    //                         <img onClick={() => changeSetObjectIconsState(instagram, "instagram")} src={instagram}
    //                              alt="instagram"/>
    //                         <img onClick={() => changeSetObjectIconsState(youtube, "youtube")} src={youtube}
    //                              alt="youtube"/>
    //                         <img onClick={() => changeSetObjectIconsState(github, "github")} src={github} alt="github"/>
    //                         <img onClick={() => changeSetObjectIconsState(website, "website")} src={website}
    //                              alt="website"/>
    //                     </div>
    //                     <div id={"Edit-mode-social-inputs"} className={"Edit-mode-social-inputs"}>
    //                         <CustomizedInputBase
    //                             id={objectIconsState.stingName}
    //                             onChange={formik.handleChange}
    //                             value={formik.values[objectIconsState.stingName]}
    //                             img={objectIconsState.value}
    //                             error={formik.errors[objectIconsState.stingName]}
    //                         />
    //                     </div>
    //                 </div>
    //                 <input className={"SpecialClassButton"} type={"submit"} value={"Save"}/>
    //
    //
    //             </form>
    //
    //
    //         </div>
    //     </div>
     )
 }
 )


type CustomizedInputBaseType = {
    id: string,
    onChange: any,
    value: string
    img: typeIcons,
    error:string | undefined
}
export const CustomizedInputBase = (props: CustomizedInputBaseType) => {
    return (
        <Paper
            // component="form"
            sx={{p: '0px 0px', display: 'flex', alignItems: 'center', width: 600}}
        >
            <TextField
                error={props.error !== undefined?true:false}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                sx={{ml: 1, flex: 1}}
                label={"For example: https://facebook.com "}
                placeholder="Type a link"
                helperText={props.error}
                inputProps={{'aria-label': 'search google maps'}}
                focused
            />
            <IconButton color="primary"
                        sx={{p: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        aria-label="directions">
                <img src={props.img} alt=""/>
                {/*<DirectionsIcon/>*/}
            </IconButton>
        </Paper>
    );
}