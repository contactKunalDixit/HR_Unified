import React from 'react';
import styled from './homeBasePage.module.css';
import Navbar from '../components/Navbar';
import LeftStaticPanel from '../components/LeftStaticPanel';
import RightVariablePanel from '../components/RightVariablePanel';
const HomePage = () => {
	return (
		<div className={styled.homeContainer}>
			<div className={styled.LeftSection}>
				<LeftStaticPanel></LeftStaticPanel>
			</div>

			<div className={styled.RightSection}>
				<Navbar></Navbar>
				{/* <div className={styled.homeContainer}></div> */}
			</div>
		</div>
	);
};

export default HomePage;
