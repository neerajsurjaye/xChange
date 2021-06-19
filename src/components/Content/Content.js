import { makeStyles } from "@material-ui/core"
import SideNav from '../SideNav/SideNav'
import SearchBar from '../SearchBar/SearchBar'
import Products from '../Products/Products'

let Content = () => {
    let useStyles = makeStyles((theme) => ({
        root: {
            display: 'grid',
            gridTemplateColumns: '2fr 10fr',
            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: '1fr'
            }
        }
    }))

    let classes = useStyles()

    return (
        <>
            <div
                style={{ height: '100%' }}
                className={classes.root}
            >

                <SideNav></SideNav>

                <div>
                    <SearchBar></SearchBar>
                    <Products></Products>
                </div>

            </div>
        </>
    )
}

export default Content