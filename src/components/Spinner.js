import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner() {
    const { page } = styles;
    return (
        <div style={page}>
            <CircularProgress />
        </div>
    )
}
const styles = {
    page: {
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        height: "100%",
        width: "calc(100%-260px)",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}