import React, { useState } from 'react';
import PageBuses from './components/PageBuses.js';
import PageStops from './components/PageStops.js';
import SideBar from './components/SideBar.js';
import PageLines from './components/PageLines.js';
import PagePredictions from './components/PagePredictions.js';
import PageLanes from './components/PageLanes.js';


export default function App() {
	const { fullPage } = styles;

	//Página ativa
	const [activePage, setActivePage] = useState(1);

	const handleButtonClick = (type) => {
		setActivePage(type);
	};

	//2 componentes por página, Sidebar fixa, e outro varia com o valor do estado "activePage"
	return (
		<div style={fullPage}>
			<SideBar activePage={activePage} onButtonClick={handleButtonClick} />
			{activePage === 1 && <PageBuses />}
			{activePage === 2 && <PageStops />}
			{activePage === 3 && <PageLines />}
			{activePage === 4 && <PagePredictions />}
			{activePage === 5 && <PageLanes />}
		</div>
	);
}

const styles = {
	fullPage: {
		width: "100%",
		height: "100%",
		margin: "0",
		padding: "0",
		display: "flex",
		flexDirection: "row"
	}
}