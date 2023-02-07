import React from 'react';
import styled from './logOut.module.css';
import backgroundImg from '../images/logOut_Background.jpg';

const LogOutPage = () => {
	return (
		<React.Fragment>
			<div className={styled.containerBackground}>
				<div className={styled.container}>
					<div className={styled.backgroundImg}></div>
					<div className={styled.innerContainer}>
						<h1>You've Succesfully Logged out</h1>
						<button className={styled.Login_button}>Login again</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LogOutPage;
