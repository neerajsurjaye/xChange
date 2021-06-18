import TextField from '@material-ui/core/TextField'
import './Login.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import fire from '../../scripts/fire'
import Loader from '../Loader/Loader'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'

let SignUpForm = () => {
    let [mail, setMail] = useState("")
    let [pass, setPass] = useState("")
    let [name, setName] = useState("")
    let [load, setLoad] = useState(0)
    let [succ, setSucc] = useState({ pass: -1 })

    let handleMail = (e) => {
        setMail(e.target.value)
    }

    let handlePass = (e) => {
        setPass(e.target.value)
    }

    let handleName = (e) => {
        setName(e.target.value)
    }


    let signUp = () => {
        setLoad(1)
        fire.signUp(mail, pass)
            .then((result) => {

                let user = firebase.auth().currentUser;

                if (user) {
                    fire.genUser(user.uid, name)
                        .then(() => {
                            setLoad(0)
                            setSucc({ pass: 1, res: result })
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                }
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

            <Typography variant='h3' className='login-header' >Sign-up</Typography>

            <div className='login-inputs'>
                <TextField
                    error={false}
                    className='login-inp-size'
                    label='UserName'
                    value={name}
                    onChange={handleName}
                ></TextField>

                <TextField
                    error={false}
                    className='login-inp-size'
                    label='Email'
                    value={mail}
                    onChange={handleMail}
                ></TextField>

                <TextField
                    className='login-inp-size'
                    label='Password'
                    type='password'
                    value={pass}
                    onChange={handlePass}
                ></TextField>

                <div className='input-buttons' >

                    <Button
                        color='secondary'
                        variant='outlined'
                        onClick={signUp}
                    >
                        Sign-up
                    </Button>

                </div>

            </div>

        </form>
    )
}

export default SignUpForm