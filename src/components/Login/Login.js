import Footer from "../Footer/Footer"
import TextField from '@material-ui/core/TextField'
import './Login.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom"

let Login = () => {
    let history = useHistory()

    return (
        <>
            <div className='login-root'>
                <div className='login-title'>
                    xChange
                </div>

                <div className='login-form'>
                    <Typography variant='h3' className='login-header' >Login/Sign-up</Typography>
                    <div className='login-inputs'>
                        <TextField className='login-inp-size' label='UserName'></TextField>
                        {/* <nav /> */}
                        <TextField className='login-inp-size' label='Password'></TextField>

                        <div className='input-buttons'>
                            <Button color='primary' variant='contained'>Login</Button>
                            <Button color='secondary' variant='outlined'>Sign-up</Button>
                        </div>

                    </div>


                </div>


            </div>

            <div className='goBack' onClick={() => history.goBack()}>
                <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Login;