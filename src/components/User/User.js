import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import './User.css'
import Paper from '@material-ui/core/Paper'
import fire from '../../scripts/fire'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'
import Alert from '@material-ui/lab/Alert'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

let UserData = (props) => {
    let user = props.user

    if (!user) {
        return <Loader></Loader>
    }

    return (
        <>
            <Typography variant='h4'>XChange</Typography>

            <div className="UserMargin">
                <Typography variant='h5' color='textSecondary'>Name : {user.name} </Typography>
                <UploadProd user={user}></UploadProd>
            </div>
        </>
    )
}

let UploadProd = (props) => {
    let user = props.user

    if (user && user.sell === 0) {
        return <>
            <Alert severity="warning">You dont have permission to sell.</Alert>
            <Button variant="contained" color='secondary'>Request permission</Button>
            <nav></nav>
            <Typography variant='caption' color='textSecondary'>Click here to request seller access</Typography>
        </>
    }
    return <>
        <div className="formMargin">
            <Typography variant='h5'>Sell Product</Typography>
            <Link to='/sell'>
                <Button variant='outlined' color='secondary'>Add Product</Button>
            </Link>
        </div>
        <div className="formMargin">

            <Typography variant='h5'>Your Products</Typography>
            <UserProducts></UserProducts>
        </div >
    </>
}

let UserProducts = () => {
    return <div>Not Implemented</div>
}

let User = () => {

    let [user, setUser] = useState("")


    useEffect(() => {

        let unsub = firebase.auth().onAuthStateChanged((data) => {
            // console.log(data.uid);
            fire.getUser(data.uid)
                .then((data) => {
                    setUser(data)
                })
        })

        return () => { unsub() }

    }, [])

    return (
        <div className='UserBack'>
            <Navbar user='1'></Navbar>
            <Container maxWidth='md'>
                <Paper elevation={3} className='UserPaper'>
                    <UserData user={user}></UserData>
                </Paper>
            </Container>
        </div >
    )
}



export default User