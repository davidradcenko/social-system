import React, {useCallback} from 'react';
import HeaderHtml from "../HeaderHtml";
import "./LoginCss.css"

function Login() {
    return (<>
        <HeaderHtml/>


        <div className={"MainLoginForm"}>
            <div className={"ButtonNav"}>
                <input type={"button"} value={"LOGIN"}/>
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
                    <input type="text"/>
                    <input type="text"/>
                    <input type={"button"}/>
                    <p>Not a member? <a href="#">Register</a></p>
                </form>
            </div>
        </div>
    </>)
}

export default Login;