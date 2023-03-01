import twiter from "../../../img/nav-icons/icons-sosial/twiter.png";
import facebook from "../../../img/nav-icons/icons-sosial/facebook.png";
import vk from "../../../img/nav-icons/icons-sosial/vk.png";
import instagram from "../../../img/nav-icons/icons-sosial/inst.png";
import youtube from "../../../img/nav-icons/icons-sosial/utub.png";
import github from "../../../img/nav-icons/icons-sosial/github.svg";
import website from "../../../img/nav-icons/icons-sosial/www.png";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {ContaksType} from "../../../API/api";

type ImageAvatarsType = {
    Contacs?: ContaksType
}
export default function ImageAvatars(props: ImageAvatarsType) {
    return (
        <Stack sx={{margin: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}
               direction="row" spacing={2}>

            {props.Contacs?.youtube != null
                ?
                <a href={props.Contacs.youtube}>
                    <Avatar alt="Remy Sharp" src={youtube}/>
                </a>
                : ""}

            {props.Contacs?.github != null
                ?
                <a href={props.Contacs.github}>
                    <Avatar alt="Remy Sharp" src={github}/>
                </a>
                : ""}

            {props.Contacs?.website != null
                ?
                <a href={props.Contacs.website}>
                    <Avatar alt="Remy Sharp" src={website}/>
                </a>
                : ""}
            {props.Contacs?.instagram != null
                ?
                <a href={props.Contacs.instagram}>
                    <Avatar alt="Remy Sharp" src={instagram}/>
                </a>
                : ""}
            {props.Contacs?.vk != null
                ?
                <a href={props.Contacs.vk}>
                    <Avatar alt="Remy Sharp" src={vk}/>
                </a>
                : ""}
            {props.Contacs?.facebook != null
                ?
                <a href={props.Contacs.facebook}>
                    <Avatar alt="Remy Sharp" src={facebook}/>
                </a>
                : ""}
            {props.Contacs?.twitter != null
                ?
                <a href={props.Contacs.twitter}>
                    <Avatar alt="Remy Sharp" src={twiter}/>
                </a>
                : ""}
        </Stack>
    );
}