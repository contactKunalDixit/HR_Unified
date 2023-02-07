import React from 'react';
import LoginPage from './pages/LoginPage';
import LogOutPage from './pages/LogOutPage';
import styled from './myApp.module.css';
const MyApp = () => {
	return (
		<React.Fragment>
			<div className={styled.myAppContainer}>
				<LoginPage></LoginPage>
				{/* <LogOutPage></LogOutPage> */}
			</div>
		</React.Fragment>
	);
};

export default MyApp;
