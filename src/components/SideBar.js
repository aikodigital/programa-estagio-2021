import React from 'react'
import SideBarButton from './SideBarButton.js'

export default function SideBar({ activePage, onButtonClick }) {
    const { containerStyle, titleStyle, optionsStyle } = styles;

    const handleButtonClick = (type) => {
        onButtonClick(type);
    }
    
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                <strong>Transporte Público de São Paulo</strong>
            </div>
            <div style={optionsStyle}>
                <SideBarButton type={1} onButtonClick={handleButtonClick} lastClicked={activePage} />
                <SideBarButton type={2} onButtonClick={handleButtonClick} lastClicked={activePage} />
                <SideBarButton type={3} onButtonClick={handleButtonClick} lastClicked={activePage} />
                <SideBarButton type={4} onButtonClick={handleButtonClick} lastClicked={activePage} />
                <SideBarButton type={5} onButtonClick={handleButtonClick} lastClicked={activePage} />
            </div>
        </div>
    )
}

const styles = {
    containerStyle: {
        width: "260px",
        height: "100%",
        position: "fixed",
        backgroundColor: "#111"
    },
    titleStyle: {
        padding: "15px 0 15px 0",
        position: "relative",
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        borderBottom: "1px solid #AAA",
        marginLeft: "15px",
        marginRight: "15px"
    },
    optionsStyle: {
        color: "white",
        height: "calc(100vh - 75px)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontSize: "14px",
    }
}