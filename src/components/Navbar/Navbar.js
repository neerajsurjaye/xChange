import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import { useEffect, useState } from 'react'
import { Menu } from '@material-ui/icons'
import NavList from '../NavList/NavList'
import { Link } from 'react-router-dom'
import fire from '../../scripts/fire'
import firebase from 'firebase'

let Navbar = () => {
    let useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: '#FFF',
            boxShadow: '0 0 10px rgba(0 ,0 ,0 ,0.1)',
            // boxShadow:'none'
            height: '65px'
        },
        text: {
            color: 'black'
        },
        autoMargin: {
            marginRight: 'auto'
        },
        menuIcon: {
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },


    }))

    let classes = useStyles()
    let [logged, setLogged] = useState(1)
    let [draw, setDraw] = useState(false)
    let [user, setUser] = useState("asdf")
    // setLogged(false)

    let logOut = () => {
        fire.logOut()
            .then(() => {
                setLogged(0)
            })
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            fire.getUser()
                .then(data => {
                    if (data) { setUser(data[0].Name) }
                })

            if (user) {
                setLogged(1)
            } else {
                setLogged(0)
            }
        })
    }, [])

    return (
        <>
            <AppBar className={classes.root} position='sticky'>
                <Toolbar>
                    <IconButton
                        className={classes.menuIcon}
                        onClick={() => setDraw(!draw)}
                    >
                        <Menu></Menu>
                    </IconButton>

                    <Typography variant='h4' className={`${classes.text} ${classes.autoMargin}`}>
                        xChange
                    </Typography>

                    <Button >
                        <Typography variant='body1' color='textPrimary'>
                            {user}
                        </Typography>
                    </Button>

                    {
                        // Check logged in or not
                        logged ?
                            <Button onClick={logOut}>
                                Logout
                            </Button>
                            :
                            <Link to='/login'>
                                <Button>
                                    Login
                                </Button>
                            </Link>
                    }



                    <IconButton>
                        <ShoppingCartIcon className={classes.text}></ShoppingCartIcon>
                    </IconButton>
                    <Typography variant='body1' className={classes.text}>0</Typography>


                </Toolbar>
            </AppBar >



            <Drawer anchor='left' open={draw} onClose={() => setDraw(!draw)} >
                <NavList></NavList>
            </Drawer>
        </>
    )
}

export default Navbar