
import { Typography, Button, MenuItem, Menu, IconButton, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react"
import './SearchBar.css'

let SearchBar = () => {
    let useStyles = makeStyles(() => ({
        root: {
            // border: '1px solid rgba(0,0,0,0.3)',
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            width: '100%',
            position: 'sticky',
            top: '65px',
            height: '45px',
            backgroundColor: '#FFF',
            zIndex: '20',
            alignItems: 'center'
            // boxShadow: '0 10px 10px -10px rgba(0 ,0 ,0 ,0.2)'
        },
        input: {
            height: '100%'
        },
        Typo: {
            display: 'inline-flex'
        },
        inLine: {
            display: 'inline-flex',
            alignItems: 'center',
            paddingLeft: '30px'
        },
        select: {
            minWidth: '100px'
        }
    }))

    let classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.root}>


            <div className={classes.inLine}>
                <Typography
                    variant='body1'
                    color='textSecondary'
                    className={classes.Typo}
                >
                    Sort:
                </Typography>

                <Button onClick={handleClick}>
                    None
                </Button>


                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Ascending</MenuItem>
                    <MenuItem onClick={handleClose}>Desc</MenuItem>
                    <MenuItem onClick={handleClose}>By popularity</MenuItem>
                </Menu>

            </div>




            <form className='searchBox'>
                <input
                    placeholder='search - not implemented - dont use'
                    className='searchInput'
                >
                </input>


                <IconButton
                    type='submit'
                    onClick={(e) => { e.preventDefault() }}
                >
                    <SearchIcon></SearchIcon>
                </IconButton>

            </form>




        </div >
    )
}

export default SearchBar