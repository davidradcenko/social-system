import React from 'react';
import HeaderHtml from "../HeaderHtml";
import "./LoginCss.css"
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useFormik} from "formik";
import {loginIn} from "../../Reducers/LoginReducer";


function Login() {

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)


    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginIn(values))
        },
    })


    if (isLoginIn){
return <Navigate to={'/Account'} />
    }
    return (<>
        <HeaderHtml/>
        <div className={"Mainblok"}>
            <div className={"MainLoginForm"}>
                <div className={"ButtonNav"}>
                    <input className={"SelectMetodINSIGIN"} type={"button"} value={"LOGIN"}/>
                    <input type={"button"} value={"REGISTER"}/>
                </div>
                <div className={"FormLog"}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={"LoginMetad"}>
                            <div>
                                <p>Sign in with:</p>
                                <p>or:</p>
                            </div>
                        </div>
                        <div className={"ButtionsLogin"}>

                            <input  {...formik.getFieldProps("email")}  type="text" placeholder={"Email or username"}/>
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                            <input  {...formik.getFieldProps("password")} type="text" placeholder={"Password"}/>
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}


                            <label form={"Ckeked"}>Remember?</label>
                            <input {...formik.getFieldProps("rememberMe")}  id={"Ckeked"} type={"checkbox"}/>

                            <input type={'submit'}  value={"SIGN IN"}/>
                        </div>
                        <p className={"LinkForRegist"}>Not a member? <a href="#">Register</a></p>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Login;