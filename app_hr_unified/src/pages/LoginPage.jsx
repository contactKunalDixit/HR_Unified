import React from 'react';
import LoginInputForm from '../components/FormLoginPage';
import styled from './loginpage.module.css';
const LoginPage = () => {
	return (
		<React.Fragment>
			<div className={styled.container}>
				<div className={styled.leftBoxContainer}>
					<div className={styled.leftBox}>Left</div>
				</div>
				<div className={styled.centerSec}>
					<h1>Login</h1>
					<LoginInputForm></LoginInputForm>
				</div>
				<div className={styled.rightBoxContainer}>
					<div className={styled.rightBox}>Right</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginPage;
