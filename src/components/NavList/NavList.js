import { makeStyles, Typography } from "@material-ui/core"
import { ListItem } from "@material-ui/core"
import { List } from "@material-ui/core"

let NavList = () => {

    let useStyles = makeStyles((theme) => ({
        root: {

            position: 'sticky',
            top: '65px',
            [theme.breakpoints.down('sm')]: {
                width: '30vw'
            },
            [theme.breakpoints.down('xs')]: {
                width: '60vw'
            }

        },
        cont: {
            borderRight: '1px solid rgba(0,0,0,0.3)',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    }))

    let classes = useStyles()

    return (
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
    )
}

export default NavList;


