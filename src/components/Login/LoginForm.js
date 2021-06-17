import TextField from '@material-ui/core/TextField'
import './Login.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useRouteMatch, Link } from "react-router-dom"
import { useState } from 'react'
import Loader from '../Loader/Loader'
import { Alert, AlertTitle } from '@material-ui/lab';
import fire from '../../scripts/fire'


let LoginForm = () => {
    let match = useRouteMatch()

    let [mail, setMail] = useState("")
    let [pass, setPass] = useState("")

    let [load, setLoad] = useState(0)
    let [succ, setSucc] = useState({ pass: -1 })

    let logIn = () => {
        setLoad(1)
        fire.signIn(mail, pass)
            .then((result) => {
                setLoad(0)
                setSucc({ pass: 1, res: result })
            })
            .catch((err) => {
                setLoad(0)
                setSucc({ pass: 0, err: err })
            })
    }



    if (succ.pass === 1) {
        return <div className="signUpOut">
            <Alert severity='success'>
                <AlertTitle>Success</AlertTitle>
                You have signed up
            </Alert>
            <Link to='/'>
                <Button variant='contained' color='secondary'>
                    To home
                </Button>
            </Link>
        </div>
    }

    if (succ.pass === 0) {
        return <div className="signUpOut">
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                {succ.err && succ.err.message}
            </Alert>
            <Button
                variant='outlined'
                color='secondary'
                onClick={() => {
                    setSucc({ pass: -1 })
                }}
            >Try again</Button>
        </div>
    }

    if (load) {
        return (
            <Loader></Loader>
        )
    }


    return (
        <form className='login-form'>
            <Typography variant='h3' className='login-header' >Login</Typography>
            <div className='login-inputs'>
                <TextField
                    error={false}
                    className='login-inp-size'
                    label='UserName'
                    value={mail}
                    onChange={(e) => { setMail(e.target.value) }}
                    type='email'
                ></TextField>

                <TextField
                    className='login-inp-size'
                    label='Password'
                    value={pass}
                    onChange={(e) => { setPass(e.target.value) }}
                    type='password'
                ></TextField>

                <div className='input-buttons'>
                    <Button color='primary' variant='contained' onClick={logIn}>Login</Button>
                    <div className='input-signUp-text'>
                        <Typography variant='body2' color='textSecondary'>Dont have an account? Sign up</Typography>
                    </div>
                    <Link to={match.path + "signup"}>
                        <Button color='secondary' variant='outlined' fullWidth>Sign-up</Button>
                    </Link>
                </div>

            </div>
        </form>
    )
}

export default LoginForm