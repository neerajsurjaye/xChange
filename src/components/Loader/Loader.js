import CircularProgress from '@material-ui/core/CircularProgress';

let Loader = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
            }}
        >
            <CircularProgress />
        </div>
    )
}

export default Loader