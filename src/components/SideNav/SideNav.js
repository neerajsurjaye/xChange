import { makeStyles } from "@material-ui/core"
import NavList from "../NavList/NavList"
// import Toolbar from '@material-ui/core/Toolbar'

let SideNav = (props) => {
    let useStyles = makeStyles((theme) => ({
        root: {

            position: 'sticky',
            top: '65px'
            // position: '-webkit-sticky
        },
        cont: {
            borderRight: '1px solid rgba(0,0,0,0.2)',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
            backgroundColor: '#fff'
        }
    }))

    let classes = useStyles()

    return (
        <div className={classes.cont}>

            <NavList {...props}></NavList>

        </div >
    )
}

export default SideNav