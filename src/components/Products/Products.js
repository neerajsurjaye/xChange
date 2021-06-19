import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CatLabel from '../CatLabel/CatLabel'
import './Products.css'
import { useEffect } from 'react';
import fire from '../../scripts/fire'
import { useState } from 'react';

import Loader from '../Loader/Loader'

let Products = () => {

    let [load, setLoad] = useState(1)
    let [data, setData] = useState({})

    useEffect(() => {
        fire.getProducts()
            .then((data) => {
                setLoad(0)
                setData(data)
            })
    }, [])

    let genCard = (x) => {
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

                            {/* <div className="CatCont">
                                <CatLabel cat={1}></CatLabel>
                                <CatLabel cat={2}></CatLabel>
                                <CatLabel cat={3}></CatLabel>
                            </div> */}


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


    return (
        <div className='Products'>
            {load ?
                <Loader></Loader>
                :
                <div className='ProductCont'>
                    {genCard(18)}
                    {console.log(data)}
                </div>
            }
        </div>
    )
}

export default Products;