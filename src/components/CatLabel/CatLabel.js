import './CatLabel.css'

let CatLabel = (props) => {

    let cats = [
        ['Electronics', '#999'],
        ['Testing', '#F00'],
        ['Clothes', '#0A4']
    ]

    if (!props.cat || isNaN(props.cat)) {
        return (
            <div className={'CatLabel'}>
                Error
            </div>
        )
    }

    return (
        <div className={`CatLabel`} style={{ backgroundColor: cats[props.cat - 1][1] }}>
            {cats[props.cat - 1][0]}
        </div>
    )
}

export default CatLabel;