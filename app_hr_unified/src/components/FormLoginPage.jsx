import React, { useState } from 'react';
import styled from './formLoginPage.module.css';
import googleIcon from '../images/icons8-google-48.png';

const FormLoginPage = () => {
	let [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((prevState) => {return({ ...prevState, [name]: value })});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
	};

	return (
		<React.Fragment>
			<div className={styled.container}>
				<form onSubmit={handleSubmit}>
					<div className={styled.formSec}>
						<label>Email ID </label>
						<input
							type='text'
							name='username'
							value={inputs.username || ''}
							onChange={handleChange}
							className={styled.inputBox}
						></input>
					</div>
					<div className={styled.formSec}>
						<label>Password</label>
						<input
							type='password'
							name='password'
							value={inputs.password || ''}
							onChange={handleChange}
							className={styled.inputBox}
						></input>
					</div>
					<div className={styled.loginButtons}>
						<button type='submit' className={styled.loginButton}>
							Login
						</button>
						<button type='submit' className={styled.forgotButton}>
							Forgot password?
						</button>
					</div>

					<div className={styled.NextSection}>
						Don't have an Account?{' '}
						<span>
							<button type='submit' className={styled.anchorStyle}>
								Create new
							</button>
						</span>
					</div>
					<div className={styled.lineElement}>
						<hr style={{ width: '25%' }}></hr>
						<div className={styled.textBetween}>or Login with</div>
						<hr style={{ width: '25%' }}></hr>
					</div>
					<div className={styled.GoogleLoginOption}>
						<button type='submit' className={styled.googleSignButton}>
							<img
								src={googleIcon}
								alt='fireSpot'
								className={styled.ImageSignInGoogle}
							/>
							<div className={styled.googleText}>Sign-in with Google</div>
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default FormLoginPage;
