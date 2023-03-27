import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TuneIcon from '@mui/icons-material/Tune';
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../../store/store";
import {UserProfilType} from "../../../../API/api";
import {useEffect, useState} from "react";
import twiter from "../../../../img/nav-icons/icons-sosial/twiter.png";
import {profilChangeTK, SaveFotoTK} from "../../../../Reducers/profilReducer";
import {useFormik} from "formik";
import {CustomizedInputBase, typeIcons} from "../Edit-mode-profil-wind";
import testInfoBlockImg from "../../../../img/icons-profel/Ellipse 17.png";
import facebook from "../../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../../img/nav-icons/icons-sosial/vk.png";
import instagram from "../../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../../img/nav-icons/icons-sosial/utub.png";
import github from "../../../../img/nav-icons/icons-sosial/github.svg";
import website from "../../../../img/nav-icons/icons-sosial/www.png";
import HomeIcon from "../../../../img/nav-icons/home.png";


export default function EditProfileImg() {

    //take from Reducer
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

    //===================================================UI
    //local state
    // const [open, setOpen] = React.useState(props.OpenCloseWindEdit);
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    //change state
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>





            <div className={"ProfilIcon"}>
                <img  onClick={handleClickOpen} src={HomeIcon} alt="HomeIcon"/>
                <div  onClick={handleClickOpen} className={"ProfilIcon-text"}>
                    <p onClick={handleClickOpen}>Edit profile</p>
                </div>
            </div>

            <div className={"AlseIcons-HomeIcon AlseIcons"}>
                <img onClick={handleClickOpen} src={HomeIcon} alt="HomeIcon"/>
            </div>






            <Dialog
                fullWidth={true}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Search Settings</DialogTitle>

                <DialogContent>

                    <DialogContentText>
                        Choose the optimal user search and start chatting. Good luck
                    </DialogContentText>

                    <Box  component="div" sx={{
                        padding: 2,
                        display: 'flex',
                        m: 'auto',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>





                        <div className="Edit-mode-Frofil">
                            <form onSubmit={formik.handleSubmit}>
                                <div className={"IMGCenter"}>
                                    <div className="EditMode-classfotoFrofel-gradient">
                                        <img className={"HovwrImgDounload"}
                                             src={ProfilData.photos.small == null ? testInfoBlockImg : ProfilData.photos.small}
                                             alt="testForo"/>

                                        <input onChange={onMainFotoSelection} id={"downloadImg"} type="file"/>
                                    </div>
                                </div>
                                <div className="Edit-mode-Inputs">
                                    <p>Name:</p>
                                    <input
                                        name={"EditModeName"}
                                        id={"EditModeName"}
                                        onChange={formik.handleChange}
                                        value={formik.values.EditModeName}
                                        type="text"
                                    />
                                    <p className={"Edit-mode-looking-for-job"}>Job search:
                                        <input
                                            onChange={formik.handleChange}
                                            checked={formik.values.JobSearch}
                                            id={"JobSearch"}
                                            type="checkbox"
                                        />
                                    </p>
                                    <p>Professional skills:</p>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.ProfessionalSkills}
                                        id={"ProfessionalSkills"}
                                        type="text"
                                    />
                                    <p>About:</p>
                                    <textarea
                                        id={"About"}
                                        onChange={formik.handleChange}
                                        value={formik.values.About}>
                        </textarea>
                                    <p>Choose:</p>
                                    <div className={"Edit-mode-sosial"}>
                                        <img onClick={() => changeSetObjectIconsState(twiter, "twitter")} src={twiter}
                                             alt="twiter"/>
                                        <img onClick={() => changeSetObjectIconsState(facebook, "facebook")} src={facebook}
                                             alt="facebook"/>
                                        <img onClick={() => changeSetObjectIconsState(vk, "vk")} src={vk} alt="vk"/>
                                        <img onClick={() => changeSetObjectIconsState(instagram, "instagram")} src={instagram}
                                             alt="instagram"/>
                                        <img onClick={() => changeSetObjectIconsState(youtube, "youtube")} src={youtube}
                                             alt="youtube"/>
                                        <img onClick={() => changeSetObjectIconsState(github, "github")} src={github} alt="github"/>
                                        <img onClick={() => changeSetObjectIconsState(website, "website")} src={website}
                                             alt="website"/>
                                    </div>
                                    <div id={"Edit-mode-social-inputs"} className={"Edit-mode-social-inputs"}>
                                        <CustomizedInputBase
                                            id={objectIconsState.stingName}
                                            onChange={formik.handleChange}
                                            value={formik.values[objectIconsState.stingName]}
                                            img={objectIconsState.value}
                                            error={formik.errors[objectIconsState.stingName]}
                                        />
                                    </div>
                                </div>
                                <input className={"SpecialClassButton"} type={"submit"} value={"Save"}/>


                            </form>
</div>






                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>

            </Dialog>
        </React.Fragment>
    );
}