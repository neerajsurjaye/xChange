import './CatLabel.css'

let CatLabel = (props) => {

    let cats = {
        '00': {
            name: 'Testing',
            color: '#F33'
        },
        "01": {
            name: 'Electronics',
        },
        '02': {
            name: 'Clothes',
        },
        '03': {
            name: 'Mobiles',
        },
        '04': {
            name: 'Software',
        },
        '05': {
            name: 'Furniture',
        },
    }


    return (
        <div className={`CatLabel`} style={{ backgroundColor: cats[props.cat].color || '#999' }}>
            {cats[props.cat].name}
        </div>
    )
}

export default CatLabel;