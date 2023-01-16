import React from "react";
import "./profileUser.css";

export  const ProfileUser = ()=>{

    return(
        <div className={"Main-block"}>
            <div className={"Navigation-block"}>
                <div className="all-elements-nav">
                    <div className="logo-profil">
                        <img src="../../img/common.png" alt="common"/>
                        <div className="profile">
                            <div><img src="" alt="User img"/></div>
                            <div><p>David Radchenko</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Main-block"}></div>
        </div>
    )
}