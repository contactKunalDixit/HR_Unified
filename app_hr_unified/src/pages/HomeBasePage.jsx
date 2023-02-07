import React from 'react';
import styled from './homeBasePage.module.css';
import Navbar from '../components/Navbar';

const HomePage = () => {
	return (
		<div className={styled.homeContainer}>
			<div className={styled.navbarSec}>
				<Navbar></Navbar>
			</div>
			<div className={styled.mainSection}>
				<div className={styled.left_topic_Sec}>
					<div className={styled.leftStaticPanel}>Left_Static_Panel</div>
				</div>
				<div className={styled.right_panel_Sec}>
					<div className={styled.rightVariableSection}>RightVariablePanel</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
