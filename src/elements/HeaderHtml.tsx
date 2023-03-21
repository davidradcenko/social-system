import * as React from 'react';
import {useCallback} from 'react';
import "./HeaderCSS.css"
import {Link, Navigate} from "react-router-dom";
import {RootState, useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {LoginOut} from "../Reducers/LoginReducer";

type HeaderType ={
    isLoginIn?:boolean
}

function HeaderHtml(props:HeaderType) {
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)



    const logoutHandler = useCallback(() => {
        dispatch(LoginOut())
    }, [])

    const ToredirektForLogin = () => {
        <Navigate to={"/Login"}/>
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

                    {isLoginIn && <input onClick={logoutHandler} type={"button"} value={"Sign Out"}/>}
                    {!isLoginIn && <Link to={"/Login"} >Sign in</Link>}
                </div>
            </div>
        </header>
    );
}

export default HeaderHtml;