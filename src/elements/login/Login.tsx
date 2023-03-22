import React from 'react';
import HeaderHtml from "../HeaderHtml";
import "./LoginCss.css"
import {RootState, useAppDispatch} from "../../store/store";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useFormik} from "formik";
import {loginIn} from "../../Reducers/LoginReducer";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Checkbox, FormGroup, Input, InputAdornment} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "@mui/material/Button";


function Login() {

    const dispatch = useAppDispatch()
    const isLoginIn = useSelector<RootState, boolean>(state => state.login.isLoginIn)
    const TypeOfError = useSelector<RootState, string | null>(state => state.initialazed.error)

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
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

    if (isLoginIn) {
        return <Navigate to={'/'}/>
    }
    return (<>

        <div className={"Mainblok"}>


            <div className={"FormLog"}>

                <form onSubmit={formik.handleSubmit}>
                    <p className={"Namefun"}>Test Email and Password</p>
                    <br/>
                    <p>Email: free@samuraijs.com
                        <br/>
                        Password: free</p>
                    <br/>
                    <p style={{textAlign:'center', color:'#57BAD9'}}>or you can registering <span id={"Redist"}><a  href="https://social-network.samuraijs.com/signUp">here</a></span></p>
                    <br/>
                    <TextField
                        {...formik.getFieldProps("email")}
                        helperText={formik.errors.email ? `${formik.errors.email} ` : null}
                        id="demo-helper-text-aligned"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Email"
                    />
                    <br/>
                    <br/>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            {...formik.getFieldProps("password")}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <br/>
                    <br/>

                    <FormGroup>
                        <FormControlLabel
                            {...formik.getFieldProps("rememberMe")}
                            id={"Ckeked"}
                            control={<Checkbox defaultChecked/>} label="Remember?"/>
                    </FormGroup>

                    <br/>

                    <Button className={"button"} type={'submit'} variant="contained" disableElevation>
                        SIGN IN
                    </Button>

                </form>

            </div>
        </div>
    </>)
}

export default Login;