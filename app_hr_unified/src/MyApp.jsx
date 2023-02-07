import React from 'react';
import LoginPage from './pages/LoginPage';
import LogOutPage from './pages/LogOutPage';
import styled from './myApp.module.css';
import HomeBasePage from './pages/HomeBasePage';

const MyApp = () => {
	return (
		<React.Fragment>
			<div className={styled.myAppContainer}>
				{/* <LoginPage></LoginPage> */}
				<HomeBasePage></HomeBasePage>
				{/* <LogOutPage></LogOutPage> */}
			</div>
		</React.Fragment>
	);
};

export default MyApp;
