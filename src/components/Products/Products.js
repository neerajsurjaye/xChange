import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CatLabel from '../CatLabel/CatLabel'
import './Products.css'




let Products = () => {


    let genCard = (x) => {
        let out = []
        for (let i = 0; i < x; i++) {
            out.push(
                <Card>
                    <CardActionArea>

                        <CardMedia
                            className={'Prodmedia'}
                            image="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png"
                            title="Contemplative Reptile"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Liddzard
                            </Typography>


                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}

                            <div className="CatCont">
                                <CatLabel cat={1}></CatLabel>
                                <CatLabel cat={2}></CatLabel>
                                <CatLabel cat={3}></CatLabel>
                            </div>


                            <Typography gutterBottom variant="body2">
                                Price : 34
                            </Typography>


                        </CardContent>

                    </CardActionArea>

                </Card>
            )
        }

        return out;
    }


    return (
        <div className='ProductCont'>
            {genCard(18)}
        </div>
    )
}

export default Products;