import React, { useEffect } from 'react';

import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import PageTitle from '../pageTitle/PageTitle';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormControl } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	agencyName: yup
		.string()
		.min(8, 'Must be at least 8 characters')
		.max(20, 'Must be less  than 20 characters')
		.required('Username is required')
		.matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces'),
	phoneNumber: yup.string().required('Required'),
	// .matches(/^[0-9]*$/, 'Phone number is not valid')
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),

	streetAddress: yup.string().required('Required'),
	zipCode: yup.string().required('Required'),
	state: yup.string().required('Required'),
	country: yup.string().required('Required'),
});

const AddHRAgency = () => {
	const formik = useFormik({
		initialValues: {
			agencyName: '',
			agencyPhone: '',
			agencyEmail: '',
			streetAddress: '',
			zipCode: '',
			state: '',
			country: '',
		},

		// validationSchema: validationSchema,

		onSubmit: (values) => {
			console.log(JSON.stringify(values, null, 2));
			// useEffect;
		},
	});

	return (
		<React.Fragment>
			<Box
				sx={{
					margin: '1rem',
					padding: '1rem',
					background:
						'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,203,217,1) 76%)',
				}}
			>
				<Paper
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						alignItems: 'center',
						height: '100%',
						background:
							'linear-gradient(4deg, rgba(255,255,255,1) 0%, rgba(214,221,232,1) 81%)',
					}}
					variant='outlined'
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'space-evenly',
							justifyContent: 'space-evenly',
							flexWrap: 'wrap',
							gap: '1.5rem',
							marginTop: '1rem',
							// position: 'relative',
						}}
					>
						<PageTitle>
							<Typography variant='h3' sx={{}}>
								Add a New HR Agency Record
							</Typography>
						</PageTitle>

						<Box
							component='form'
							onSubmit={formik.handleSubmit}
							sx={{
								// '& .MuiTextField-root': { m: 1, width: '25ch' },
								margin: '1rem 0',
								width: '80%',
							}}
						>
							<FormControl
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											required
											id='outlined-basic'
											label='Agency Name'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='agencyName'
											value={formik.values.agencyName}
											onChange={formik.handleChange}
											error={
												formik.touched.agencyName &&
												Boolean(formik.errors.agencyName)
											}
											helperText={
												formik.touched.agencyName && formik.errors.agencyName
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id='outlined-basic'
											label='Agency Phone'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='agencyPhone'
											value={formik.values.agencyPhone}
											onChange={formik.handleChange}
											// error={
											// 	formik.touched.agencyPhone &&
											// 	Boolean(formik.errors.agencyPhone)
											// }
											// helperText={
											// 	formik.touched.agencyPhone && formik.errors.agencyPhone
											// }
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id='outlined-basic'
											label='Agency Email'
											variant='outlined'
											margin='normal'
											fullWidth
											type='email'
											name='agencyEmail'
											value={formik.values.agencyEmail}
											onChange={formik.handleChange}
											error={
												formik.touched.agencyEmail &&
												Boolean(formik.errors.agencyEmail)
											}
											helperText={
												formik.touched.agencyEmail && formik.errors.agencyEmail
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='outlined-basic'
											label='Street Address'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='streetAddress'
											value={formik.values.streetAddress}
											onChange={formik.handleChange}
											error={
												formik.touched.streetAddress &&
												Boolean(formik.errors.streetAddress)
											}
											helperText={
												formik.touched.streetAddress &&
												formik.errors.streetAddress
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id='outlined-basic'
											label='Zip code'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='zipCode'
											value={formik.values.zipCode}
											onChange={formik.handleChange}
											error={
												formik.touched.zipCode && Boolean(formik.errors.zipCode)
											}
											helperText={
												formik.touched.zipCode && formik.errors.zipCode
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='outlined-basic'
											label='State'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='state'
											value={formik.values.state}
											onChange={formik.handleChange}
											error={
												formik.touched.state && Boolean(formik.errors.state)
											}
											helperText={
												formik.touched.zipCode && formik.errors.zipCode
											}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='outlined-basic'
											label='Country'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='country'
											value={formik.values.country}
											onChange={formik.handleChange}
											error={
												formik.touched.country && Boolean(formik.errors.country)
											}
											helperText={
												formik.touched.country && formik.errors.country
											}
										/>
									</Grid>
								</Grid>

								<Button
									sx={{
										marginTop: '2rem;',
										width: '25%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									variant='contained'
									type='submit'
								>
									Submit
								</Button>
							</FormControl>
						</Box>
						{/* </form> */}
						<Button
							variant='contained'
							component={NavLink}
							to='/hragencies'
							sx={{
								// marginTop: '2rem;',
								width: '20%',
								minWidth: '180px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								padding: '0.5rem 1.5rem',
								marginBottom: '1.5rem',
							}}
						>
							<ArrowBackIcon sx={{ marginRight: '1rem' }} /> HR Agency
						</Button>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default AddHRAgency;
