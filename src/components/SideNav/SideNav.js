import { makeStyles, Typography } from "@material-ui/core"
import { ListItem } from "@material-ui/core"
import { List } from "@material-ui/core"
import Toolbar from '@material-ui/core/Toolbar'

let SideNav = () => {
    let useStyles = makeStyles((theme) => ({
        root: {

            position: 'sticky',
            top: '60px'
            // position: '-webkit-sticky
        },
        cont: {
            borderRight: '1px solid rgba(0,0,0,0.3)',
            position: 'relative'
        }
    }))

    let classes = useStyles()

    return (
        <div className={classes.cont}>
            <List component='nav' className={classes.root}>

                <ListItem>
                    <Typography variant='h6'>
                        Cateogaries
                    </Typography>

                </ListItem>

                <ListItem button >
                    <Typography variant='body2' color='textSecondary' >
                        Electronics
                    </Typography>
                </ListItem>

                <ListItem button>
                    <Typography variant='body2' color='textSecondary'>
                        Clothes
                    </Typography>
                </ListItem>

            </List>

        </div >
    )
}

export default SideNav