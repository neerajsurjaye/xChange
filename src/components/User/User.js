import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import { Container } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import './User.css'
import Paper from '@material-ui/core/Paper'
import fire from '../../scripts/fire'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../Loader/Loader'
import Alert from '@material-ui/lab/Alert'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import CatLabel from '../CatLabel/CatLabel'

let genLabels = (cats) => {
    let out = [];
    for (let i = 0; i < cats.length; i++) {
        out.push(
            <CatLabel cat={cats[i]} key={i}></CatLabel>
        )
    }
    return out;
}

let genCard = (data) => {
    let out = []
    let prod;
    for (let i = 0; i < data.length; i++) {
        prod = data[i]
        out.push(
            <Card key={i} className={"ProdCard"}>
                <CardActionArea>

                    <CardMedia
                        className={'Prodmedia'}
                        image={prod.imageUrl || "https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png"}
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {prod.name}
                        </Typography>


                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}

                        <div className="CatCont">
                            {genLabels(prod.cats)}
                        </div>


                        <Typography gutterBottom variant="body2">
                            Price : {prod.price}
                        </Typography>

                        <Typography variant='caption'>
                            {`${'>'} ${prod.userName}`}
                        </Typography>

                    </CardContent>

                </CardActionArea>

            </Card>
        )
    }

    return out;
}

let UserData = (props) => {
    let user = props.user

    console.log(user)
    if (!user) {
        return <Loader></Loader>
    }

    return (
        <>
            <Typography variant='h4'>XChange</Typography>

            <div className="UserMargin">
                <Typography variant='h5' color='textSecondary'>Name : {user.name} </Typography>
                <UploadProd user={user} prods={props.prods}></UploadProd>
            </div>
        </>
    )
}

let UploadProd = (props) => {
    let user = props.user

    if (user && user.sell === 0) {
        return <>
            <Alert severity="warning">You dont have permission to sell.</Alert>
            <Button variant="contained" color='secondary'>Request permission</Button>
            <nav></nav>
            <Typography variant='caption' color='textSecondary'>Click here to request seller access</Typography>
        </>
    }
    return <>
        <div className="formMargin">
            <Typography variant='h5'>Sell Product</Typography>
            <Link to='/sell'>
                <Button variant='outlined' color='secondary'>Add Product</Button>
            </Link>
        </div>
        <div className="formMargin">

            <Typography variant='h5'>Your Products</Typography>
            <UserProducts prods={props.prods}></UserProducts>
        </div >
    </>
}

let UserProducts = (props) => {
    return <div className="UserProducts">
        {genCard(props.prods)}
    </div>
}



let User = () => {

    let [user, setUser] = useState("")
    let [prods, setProds] = useState([])


    useEffect(() => {

        let unsub = firebase.auth().onAuthStateChanged((data) => {
            // console.log(data.uid);
            fire.getUser(data.uid)
                .then((data) => {
                    setUser(data)
                    fire.userProds(data.prods)
                        .then((docs) => {
                            console.log(docs);
                            setProds(docs)
                        })
                })
        })

        return () => { unsub() }

    }, [])

    return (
        <div className='UserBack'>
            <Navbar user='1'></Navbar>
            <Container maxWidth='md'>
                <Paper elevation={3} className='UserPaper'>
                    <UserData user={user} prods={prods}></UserData>
                </Paper>
            </Container>
        </div >
    )
}



export default User