import {Avatar, Badge} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";

export const IconsNavigation=()=>{
    return(
        <div className="Icons-Navigation">

            <Avatar alt="Remy Sharp" sx={{ width: 50, height: 50 }}  src="/static/images/avatar/1.jpg" />

            <IconButton sx={{marginTop:20}} aria-label="delete">
                <HomeIcon color="primary" sx={{fontSize: 40}}/>
            </IconButton>
            <IconButton sx={{marginTop:10}} aria-label="delete">
                <PersonIcon color="primary" sx={{fontSize: 40}}/>
            </IconButton>

            <IconButton sx={{marginTop:10}} aria-label="delete">
                <Badge color="secondary" variant="dot">
                    <FavoriteBorderIcon color="primary" sx={{fontSize: 40}}/>
                </Badge>
            </IconButton>

            <IconButton sx={{marginTop:10}} aria-label="delete">
                <PersonSearchIcon color="primary" sx={{fontSize: 40}}/>
            </IconButton>
            <IconButton sx={{marginTop:10}} aria-label="delete">
                <SettingsIcon color="primary" sx={{fontSize: 40}}/>
            </IconButton>

        </div>
    )
}