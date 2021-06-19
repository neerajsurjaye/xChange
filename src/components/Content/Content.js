import { makeStyles } from "@material-ui/core"
import SideNav from '../SideNav/SideNav'
import SearchBar from '../SearchBar/SearchBar'
import Products from '../Products/Products'
import { useState } from "react"
import Navbar from '../Navbar/Navbar'

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
    let [cateo, setCateo] = useState("")
    let handleCateo = (cat) => {
        console.log(cat);
        setCateo(cat)
    }

    return (
        <>
            <Navbar handleCateo={handleCateo}></Navbar>
            <div
                style={{ height: '100%' }}
                className={classes.root}
            >

                <SideNav handleCateo={handleCateo}></SideNav>

                <div>
                    <SearchBar></SearchBar>
                    <Products cateo={cateo}></Products>
                </div>

            </div>
        </>
    )
}

export default Content