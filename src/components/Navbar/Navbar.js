import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@material-ui/core/IconButton'
import { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

let Navbar = () => {
    let useStyles = makeStyles(() => ({
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
        }

    }))

    let classes = useStyles()
    let [logged, setLogged] = useState(false)

    return (
        <>
            <AppBar className={classes.root} position='sticky'>
                <Toolbar>
                    <Typography variant='h4' className={`${classes.text} ${classes.autoMargin}`}>
                        xChange
                    </Typography>

                    {
                        // Check logged in or not
                        logged ?
                            <IconButton >
                                <AccountCircleIcon></AccountCircleIcon>
                            </IconButton>
                            :
                            <Button
                                color='primary'
                                variant='contained'
                                onClick={() => setLogged(!logged)}
                            >
                                Sign in
                            </Button>
                    }


                    <IconButton>
                        <ShoppingCartIcon className={classes.text}></ShoppingCartIcon>
                    </IconButton>
                    <Typography variant='body1' className={classes.text}>0</Typography>


                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar