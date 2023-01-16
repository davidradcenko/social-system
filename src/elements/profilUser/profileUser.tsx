import React from "react";
import "./profileUser.css";
import ImgLogo from "../../img/common.png";

import HomeIcon from "../../img/nav-icons/home.png";
import DialogsIcon from "../../img/nav-icons/Frame.png";
import MesengerIcon from "../../img/nav-icons/heart.png";
import SeachIcon from "../../img/nav-icons/Group 43.png";
import SetingsIcon from "../../img/nav-icons/settings.png.png";

export const ProfileUser = () => {

    return (
        <div className={"Main-block"}>
            <div className={"Navigation-block"}>
                <div className="all-elements-nav">
                    <div className="logo-profil">
                        <img src={ImgLogo} alt="common"/>
                        <div className="profile">
                            <img src="" alt="User img"/>
                            <p>David Radchenko</p>
                        </div>
                    </div>
                    <div className="main-navi">
                        <div className={"ProfilIcon"}>
                            <img src={HomeIcon} alt="HomeIcon"/>
                            <div className={"ProfilIcon-text"}>
                                <p>Profil</p>
                                <p>Edit profile</p>
                            </div>
                        </div>


                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={"Main-content"}></div>
        </div>
    )
}