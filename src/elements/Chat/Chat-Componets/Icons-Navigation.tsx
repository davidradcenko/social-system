import {Avatar, Badge} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {Link} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
export const IconsNavigation=()=>{
    const NewMessasges = useSelector<RootState, number>(state => state.paginator.NewMessageInformate)
    const foto = useSelector<RootState, string | null>(state => state.initialazed.foto)
    return(
        <div className="Icons-Navigation">

            <Link  to="/Account">
            <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }}  src={foto==null?"/static/images/avatar/1.jpg":foto} />
            </Link>

            <Link  to="/">
            <IconButton  sx={{marginTop:20}} aria-label="delete">
                <HomeIcon color="primary" sx={{fontSize: 40}}/>
            </IconButton>
            </Link>


            <IconButton sx={{marginTop:10}} aria-label="delete">
                <Badge color="secondary" variant={NewMessasges==0?"standard":"dot"}>
                    <EmailIcon color="primary" sx={{fontSize: 40}}/>
                </Badge>
            </IconButton>

        </div>
    )
}