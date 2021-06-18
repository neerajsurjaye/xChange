import Navbar from '../Navbar/Navbar'
import { Container, Paper, Typography, TextField, Button, } from '@material-ui/core'
import './Sell.css'
import CheckBox from '@material-ui/core/Checkbox'
import { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import fire from '../../scripts/fire'
import Loader from '../Loader/Loader'


let Sell = () => {

    let [load, setLoad] = useState(0)
    let [cats, setCats] = useState({
        Testing: {
            name: 'Testing',
            code: '00',
            selected: true

        },
        Electronics: {
            name: 'Electronics',
            code: '01',
            selected: false
        },
        Clothes: {
            name: 'Clothes',
            code: '02',
            selected: false
        },
        Mobiles: {
            name: 'Mobiles',
            code: '03',
            selected: false
        },
        Software: {
            name: 'Software',
            code: '04',
            selected: false
        },
        Furniture: {
            name: 'Furniture',
            code: '05',
            selected: false
        },
    }
    )

    let handleCats = (e) => {
        setCats({
            ...cats,
            [e.target.name]: {
                ...cats[e.target.name], selected: e.target.checked
            }
        })
    }


    let genCheckBox = (cats) => {
        let out = []
        for (let keys in cats) {
            let cateo = cats[keys]


            out.push(
                <FormControlLabel
                    key={cateo.code}
                    control={<CheckBox
                        name={cateo.name}
                        checked={cateo.selected}
                        color='primary'
                        onClick={handleCats}
                    />}
                    label={cateo.name}
                >

                </FormControlLabel>
            )
        }
        return out
    }

    let genCatOut = () => {
        let out = []
        for (let keys in cats) {
            if (cats[keys].selected) {
                out.push(cats[keys].code)
            }
        }
        return out
    }


    let submitForm = (e) => {
        setLoad(1)
        fire.uploadProd(name, desc, price, file, phone, mail, genCatOut())
            .then((obj) => {
                console.log("object : ", obj);
                setLoad(0)
            })
    }

    let [name, setName] = useState("")
    let [desc, setDesc] = useState("")
    let [price, setPrice] = useState("")
    let [file, setFile] = useState("")
    let [phone, setPhone] = useState("")
    let [mail, setMail] = useState("")


    return (
        <div className='UserBack'>
            <Navbar user='1'></Navbar>
            <Container maxWidth='md'>
                <Paper elevation={3} className='UserPaper'>
                    {load ?
                        <>
                            <Loader></Loader>
                        </>
                        :
                        <form>
                            <Typography variant='h5'>Sell Product</Typography>

                            <div className='sellRow'>

                                <TextField
                                    label='Name'
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </TextField>
                            </div>

                            <div className='sellRow'>

                                <TextField
                                    label='Description'
                                    fullWidth
                                    multiline
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                >
                                </TextField>
                            </div>

                            <div className='sellRow'>

                                <TextField
                                    label='Price'
                                    fullWidth
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </TextField>
                            </div>

                            <div>
                                <Typography variant='h5' color='textSecondary'>Select Cateogaries</Typography>
                                {genCheckBox(cats)}
                            </div>

                            <div>
                                <Typography variant='h5' color='textSecondary'>Upload Image</Typography>
                                <Button variant='outlined' color='secondary' component='label'>
                                    Select Image
                                    <input type="file" accept="image/png, image/jpeg" hidden
                                        onChange={(e) => setFile(e.target.files[0])}
                                    ></input>
                                </Button>
                            </div>

                            <div>
                                <Typography variant='h5' color='textSecondary'>Contact Info</Typography>
                                <TextField
                                    label='Phone No'
                                    fullWidth
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                >
                                </TextField>

                                <TextField
                                    label='Email'
                                    fullWidth
                                    required
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                >
                                </TextField>
                            </div>

                            <Button component='span' variant='contained' type='submit' color='primary' onClick={submitForm}>
                                Submit
                            </Button>

                        </form>

                    }

                </Paper>
            </Container>
        </div >
    )
}

export default Sell