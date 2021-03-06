import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import { useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import NavList from '../NavList/NavList'
import { Link } from 'react-router-dom'
import fire from '../../scripts/fire'
import firebase from 'firebase/app'
import 'firebase/auth'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import logo from '../../img/logo.png'


let Navbar = (props) => {
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
        navLogo: {
            maxWidth: '200px',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '100px'
            }
        }


    }))

    let classes = useStyles()
    let [logged, setLogged] = useState(1)
    let [draw, setDraw] = useState(false)
    // let [user, setUser] = useState("")
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // setLogged(false)

    let logOut = () => {
        fire.logOut()
            .then(() => {
                setLogged(0)
            })
    }

    useEffect(() => {
        let unSub = firebase.auth().onAuthStateChanged((user) => {



            if (user) {
                // console.log(user.uid);
                setLogged(1)

            } else {
                setLogged(0)
            }
        })

        return () => {
            unSub()
        }
    }, [])

    let renderDrawer = window.location.pathname
    console.log(renderDrawer);

    return (
        <>
            <AppBar className={classes.root} position='fixed'>
                <Toolbar>
                    {
                        (renderDrawer === '/') && (
                            <IconButton
                                className={classes.menuIcon}
                                onClick={() => setDraw(!draw)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )
                    }
                    {/* <Typography variant='h4' className={`${classes.text} ${classes.autoMargin}`}>
                        xChange
                    </Typography> */}

                    <Link to='/' className={classes.autoMargin}>
                        <img src={logo} className={`${classes.navLogo}`} alt='logo'></img>
                    </Link>

                    <Link to='/'>
                        <Typography variant='body2' color='textSecondary'>Home</Typography>
                    </Link>

                    {
                        // Check logged in or not
                        logged ?
                            <IconButton variant='outlined' onClick={handleClick}>
                                <MenuIcon></MenuIcon>
                            </IconButton>
                            :
                            <Link to='/login'>
                                <Button>
                                    <Typography variant='body2' color='textSecondary'>Login</Typography>
                                </Button>
                            </Link>
                    }



                    <IconButton>
                        <ShoppingCartIcon className={classes.text}></ShoppingCartIcon>
                    </IconButton>



                </Toolbar>
            </AppBar >



            <Drawer anchor='left' open={draw} onClose={() => setDraw(!draw)} >
                <NavList handleCateo={props.handleCateo}></NavList>
            </Drawer>


            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to='/user' className='cleanLink'>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
                <MenuItem
                    onClick={() => {
                        handleClose()
                        logOut()
                    }}
                >Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Navbar