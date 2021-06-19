import { makeStyles, Typography } from "@material-ui/core"
import { ListItem } from "@material-ui/core"
import { List } from "@material-ui/core"
import Divider from '@material-ui/core/Divider'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

let NavList = (props) => {

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
            borderRight: '1px solid rgba(0,0,0,0.1)',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        marginRight: {
            marginRight: 'auto'
        }
    }))

    let classes = useStyles()

    let cats = [
        ['All', null],
        ['Testing', '00'],
        ['Electronics', '01'],
        ['Clothes', '02'],
        ['Mobiles', '03'],
        ['Software', '04'],
        ['Furniture', '05'],
    ]

    let genList = () => {
        let out = []
        for (let i = 0; i < cats.length; i++) {
            out.push(
                <ListItem button key={i} onClick={() => props.handleCateo(cats[i][1])}>
                    <Typography variant='body2' color='textSecondary' className={classes.marginRight}>
                        {cats[i][0]}
                    </Typography>

                    <Typography variant='caption' color='textSecondary' >
                        <ArrowForwardIosIcon style={{ fontSize: '0.7rem' }}></ArrowForwardIosIcon>
                    </Typography>


                </ListItem>
            )
        }


        return out;
    }

    return (
        <List component='nav' className={classes.root}>

            <ListItem>
                <Typography variant='h5' color='textSecondary'>
                    Cateogaries
                </Typography>

            </ListItem>
            <Divider />


            {genList()}

        </List>
    )
}

export default NavList;


