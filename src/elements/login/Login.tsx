import React, {useCallback} from 'react';
import HeaderHtml from "../HeaderHtml";
import "./LoginCss.css"

function Login() {
    return (<>
        <HeaderHtml/>


        <div className={"MainLoginForm"}>
            <div className={"ButtonNav"}>
                <input className={"SelectMetodINSIGIN"} type={"button"} value={"LOGIN"}/>
                <input type={"button"} value={"REGISTER"}/>
            </div>
            <div className={"FormLog"}>
                <form>
                    <div className={"LoginMetad"}>
                        <div>
                            <p>Sign in with:</p>
                            <p>or:</p>
                        </div>
                    </div>
                    <div className={"ButtionsLogin"}>
                        <input type="text" placeholder={"Email or username"}/>
                        <input type="text" placeholder={"Password"}/>
                        <input type={"button"} value={"SIGN IN"}/>
                    </div>
                    <p className={"LinkForRegist"}>Not a member? <a href="#">Register</a></p>
                </form>
            </div>
        </div>
    </>)
}

export default Login;