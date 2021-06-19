import Footer from "../Footer/Footer"
import './Login.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Route, Switch, useRouteMatch, Link } from "react-router-dom"
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import logo from '../../img/logo.png'



let Login = () => {
    let match = useRouteMatch()

    return (
        <>
            <div className='login-root'>
                <div className='login-title'>
                    <img src={logo}></img>
                </div>

                <div className='loginSignUp'>
                    <Switch>
                        <Route exact path={match.path + "/"}>
                            <LoginForm></LoginForm>
                        </Route>


                        <Route exact path={match.path + "/signup"}>
                            <SignUpForm></SignUpForm>
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