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

export default function ImageAvatars() {
    return (
        <Stack sx={{margin:3,display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}} direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={youtube} />
            <Avatar alt="Travis Howard" src={github} />
            <Avatar alt="Cindy Baker" src={website} />
            <Avatar alt="Cindy Baker" src={instagram} />
            <Avatar alt="Cindy Baker" src={vk} />
            <Avatar alt="Cindy Baker" src={facebook} />
            <Avatar alt="Cindy Baker" src={twiter} />
        </Stack>
    );
}