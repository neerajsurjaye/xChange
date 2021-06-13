import { makeStyles } from "@material-ui/core"
import SideNav from '../SideNav/SideNav'

let Content = () => {
    let useStyles = makeStyles(() => ({
        root: {
            display: 'grid',
            gridTemplateColumns: '2fr 8fr'
        }
    }))

    let classes = useStyles()

    return (
        <>
            <div
                style={{ height: '150vh' }}
                className={classes.root}
            >

                <SideNav></SideNav>

                <div>
                    content
                </div>

            </div>
        </>
    )
}

export default Content