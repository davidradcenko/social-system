import React from "react";
import "./profileUser.css";

export  const ProfileUser = ()=>{

    return(
        <div className={"Main-block"}>
            <div className={"Navigation-block"}>
                <div className={'elements-navigation'}>
                    <div className={"Logo"}>
                        <img src="../../img/common.png" alt="common"/>
                    </div>
                    <div className={"Shot-data-user"}>
                        <img src="" alt="img User"/>
                        <p className={'Name-user'}>David Radchenko</p>
                    </div>
                </div>
            </div>
            <div className={"Content-block"}></div>
        </div>
    )
}