import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import fire from '../../scripts/fire'
import { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import './Buy.css'
import Typography from '@material-ui/core/Typography'
import Loader from '../Loader/Loader'
import CatLabel from '../CatLabel/CatLabel'
import firebase from 'firebase/app'
import Alert from '@material-ui/lab/Alert'
import Divider from '@material-ui/core/Divider'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

let GenLabels = (props) => {
    let cats = props.cats;
    let out = [];
    for (let i = 0; i < cats.length; i++) {
        out.push(
            <CatLabel cat={cats[i]} key={i}></CatLabel>
        )
    }
    return <div className='LabelCards'>{out}</div>;
}

let Buy = () => {
    let { id } = useParams()
    let [prod, setProd] = useState(null)


    useEffect(() => {
        fire.getSingleProd(id)
            .then((data) => {
                setProd(data)
            })
    }, [id])

    return <>
        <Navbar></Navbar>
        <div className='BuyBack'>
            <Paper className='Buy' elevation={3}>
                <ProdPage prod={prod}></ProdPage>
            </Paper>
        </div>
    </>
}

let Contact = (props) => {
    let prod = props.prod
    let user = firebase.auth().currentUser

    return <>
        <Typography variant='h6'>Contact</Typography>
        <div className='ContactCard'>
            <Typography variant='body1' className='BuyContact'>Seller : &nbsp; </Typography>
            <Typography variant='body1' color='textSecondary'>{prod.userName}</Typography>
        </div>
        {user ?
            (
                <>
                    <div className='ContactCard'>
                        <Typography variant='body1' className='BuyContact'>Phone : &nbsp;</Typography>
                        <Typography variant='body1' color='textSecondary'>{prod.phone}</Typography>
                    </div>
                    <div className='ContactCard'>
                        <Typography variant='body1' className='BuyContact'>Email :&nbsp; </Typography>
                        <Typography variant='body1' color='textSecondary'>{prod.mail}</Typography>
                    </div>

                </>
            )
            :
            <Alert severity='warning'>Login to see contact info</Alert>
        }
    </>
}

let ProdPage = (props) => {
    if (!props.prod) {
        return <Loader></Loader>
    }

    let prod = props.prod;
    return (
        <>
            <div className='BuyHeader'>
                <Link to='/'>
                    <IconButton>
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </IconButton>
                </Link>
                <Typography variant='h4' className='BuyHeader'>{prod.name}</Typography>
            </div>
            <Divider></Divider>
            <div className='BuyCont'>

                <div>
                    <img src={prod.imageUrl} alt={prod.name} className='BuyImg'></img>
                    <GenLabels cats={prod.cats}></GenLabels>
                </div>

                <div className='BuyDesc'>
                    <div className='ContactCard'>
                        <Typography variant='h6'>Price : &nbsp;</Typography>
                        <Typography variant='h6' component='p' color='textSecondary'>{prod.price}</Typography>
                    </div>

                    <Typography variant='h6'>Description : </Typography>
                    <Typography variant='body1' component='p' color='textSecondary'>{prod.desc}</Typography>

                    <div className='BuyContactCont'>
                        <Contact prod={prod}></Contact>
                    </div>

                    <div className='ButtonCont'>
                        <Button variant='contained' color='primary'>Buy</Button>
                        <Button variant='outlined' color='secondary'>Add To Cart</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Buy;