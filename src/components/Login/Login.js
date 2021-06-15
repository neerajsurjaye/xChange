import Footer from "../Footer/Footer"
import TextField from '@material-ui/core/TextField'
import './Login.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, Route, Switch, useRouteMatch, Link } from "react-router-dom"


let Login = () => {
    let history = useHistory()
    let match = useRouteMatch()
    console.log(match);
    return (
        <>
            <div className='login-root'>
                <div className='login-title'>
                    xChange
                </div>

                <div className='login-form'>

                    <Switch>
                        <Route exact path={match.path + "/"}>
                            <Typography variant='h3' className='login-header' >Login</Typography>
                            <div className='login-inputs'>
                                <TextField
                                    error={false}
                                    className='login-inp-size'
                                    label='UserName'
                                    helperText="Enter an email"
                                ></TextField>

                                <TextField
                                    className='login-inp-size'
                                    label='Password'
                                ></TextField>

                                <div className='input-buttons'>
                                    <Button color='primary' variant='contained'>Login</Button>
                                    <div className='input-signUp-text'>
                                        <Typography variant='body-2' color='textSecondary'>Dont have an account? Sign up</Typography>
                                    </div>
                                    <Link to={match.path + "/signup"}>
                                        <Button color='secondary' variant='outlined'>Sign-up</Button>
                                    </Link>
                                </div>

                            </div>
                        </Route>


                        <Route exact path='/login/signup'>
                            <Typography variant='h3' className='login-header' >Sign-up</Typography>
                            <div className='login-inputs'>
                                <TextField
                                    error={false}
                                    className='login-inp-size'
                                    label='UserName'
                                    helperText="Enter an email"
                                ></TextField>

                                <TextField
                                    className='login-inp-size'
                                    label='Password'
                                ></TextField>

                                <div className='input-buttons'>
                                    <Button color='secondary' variant='outlined'>Sign-up</Button>
                                </div>

                            </div>
                        </Route>
                    </Switch>

                </div>


            </div>

            <Link className='goBack' to='/'>

                <ArrowBackIosIcon></ArrowBackIosIcon>

            </Link>

            <Footer></Footer>
        </>
    )
}

export default Login;