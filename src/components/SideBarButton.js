import { Button } from '@material-ui/core';
import React from 'react';

export default function SideBarButton( {type = 1,onButtonClick,lastClicked = 1} ) {
    const { markedStyle, notMarkedStyle } = styles;

    const handleButtonClick = () => {
        onButtonClick(type);
    };

    //Muda o estilo do botão se ele tiver sido o último clickado ou não.
    const thisButtonStyle = (type === lastClicked) ? markedStyle : notMarkedStyle;

    return (
        //Botão do material-ui
        <Button style={thisButtonStyle} variant="contained" onClick={handleButtonClick}>
            {type === 1 && 'Veículos'}
            {type === 2 && 'Paradas'}
            {type === 3 && 'Linhas'}
            {type === 4 && 'Previsões de Chegada'}
            {type === 5 && 'Corredores'}
        </Button>
    );
}

const styles = {
    markedStyle: {
        margin: "10px 15px 0",
        padding: "10px 15px",
        cursor: "pointer",
        backgroundColor: "#00acc1",
        borderRadius: "3px"
    },
    notMarkedStyle: {
        margin: "10px 15px 0",
        padding: "10px 15px",
        cursor: "pointer",
        backgroundColor: "#111",
        color: "white"
    }
}