import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import './User.css'
import Paper from '@material-ui/core/Paper'
import fire from '../../scripts/fire'
import firebase from 'firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'

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

                    {
                        user ?
                            (
                                <>
                                    <Typography variant='h4'>XChange</Typography>

                                    <div className="UserMargin">
                                        <Typography variant='h5'>Name : {user.name} </Typography>
                                    </div>
                                </>
                            )
                            :
                            <Loader></Loader>
                    }
                </Paper>
            </Container>
        </div>
    )
}

export default User