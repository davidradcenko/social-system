import * as React from 'react';
import "./HeaderCSS.css"
import {Navigate} from "react-router-dom";

function HeaderHtml() {

    const ToredirektForLogin=()=>{
        return  <Navigate  to={"/Login"} />
    }

    return (
        <header>
            <div className={"divMain"}>
                <nav className={"LogoAndNav"}>
                        <ul>
                            <li><a href="#">Social-system</a></li>
                            <li><a href="#">Inspritol</a></li>
                            <li><a href="#">Lofmew</a></li>
                            <li><a href="#">Mifosn</a></li>
                            <li><a href="#">Reispvanv</a></li>
                            <li><a href="#">Fmwksd</a></li>
                            <li><a href="#">Dwefwiqfpw</a></li>
                        </ul>
                </nav>

                <div className={"ButtonsNav"}>
                    <img src="" alt=""/>
                    <input onClick={ToredirektForLogin} type={"button"} value={"Sign in"}/>
                    <input type={"button"} value={"Sign up"}/>
                </div>
            </div>
        </header>
    );
}

export default HeaderHtml;