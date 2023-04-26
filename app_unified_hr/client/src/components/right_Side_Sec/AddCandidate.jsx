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
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			age: '',
			yrsExperienceTotal: '',
			yrsExperienceCurrent: '',
			fieldOfWork: '',
			skill: '',
			skillLevel: '',
			educationLevel: '',
			lastAssessment: '',
			addressUnit: '',
			addressCity: '',
			addressZipCode: '',
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
							<Typography variant='h3'>Add a New Candidate Record</Typography>
						</PageTitle>

						<Box
							component='form'
							onSubmit={formik.handleSubmit}
							sx={{
								// '& .MuiTextField-root': { m: 1, width: '25ch' },
								margin: '1rem 0',
								width: '90%',
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
								<Grid
									container
									spacing={2}
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='First Name'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='firstName'
											value={formik.values.firstName}
											onChange={formik.handleChange}
											error={
												formik.touched.firstName &&
												Boolean(formik.errors.firstName)
											}
											helperText={
												formik.touched.firstName && formik.errors.firstName
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Last Name'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='lastName'
											value={formik.values.agencyName}
											onChange={formik.handleChange}
											error={
												formik.touched.agencyName &&
												Boolean(formik.errors.lastName)
											}
											helperText={
												formik.touched.agencyName && formik.errors.lastName
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Phone'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='phone'
											value={formik.values.Phone}
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
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Email'
											variant='outlined'
											margin='normal'
											fullWidth
											type='email'
											name='Email'
											value={formik.values.Email}
											onChange={formik.handleChange}
											error={
												formik.touched.Email && Boolean(formik.errors.Email)
											}
											helperText={formik.touched.Email && formik.errors.Email}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Age'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='age'
											value={formik.values.age}
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
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Total Yrs of Experience'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='yrsExperienceTotal'
											value={formik.values.yrsExperienceTotal}
											onChange={formik.handleChange}
											// error={
											// 	formik.touched.yrsExperienceTotal &&
											// 	Boolean(formik.errors.yrsExperienceTotal)
											// }
											// helperText={
											// 	formik.touched.yrsExperienceTotal && formik.errors.yrsExperienceTotal
											// }
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Current Job Yrs of Experience'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='yrsExperienceCurrent'
											value={formik.values.yrsExperienceCurrent}
											onChange={formik.handleChange}
											// error={
											// 	formik.touched.yrsExperienceCurrent &&
											// 	Boolean(formik.errors.yrsExperienceCurrent)
											// }
											// helperText={
											// 	formik.touched.yrsExperienceCurrent && formik.errors.yrsExperienceCurrent
											// }
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Field of Work'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='fieldOfWork'
											value={formik.values.fieldOfWork}
											onChange={formik.handleChange}
											error={
												formik.touched.fieldOfWork &&
												Boolean(formik.errors.fieldOfWork)
											}
											helperText={
												formik.touched.fieldOfWork && formik.errors.fieldOfWork
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Skill'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='skill'
											value={formik.values.skill}
											onChange={formik.handleChange}
											error={
												formik.touched.skill && Boolean(formik.errors.skill)
											}
											helperText={formik.touched.skill && formik.errors.skill}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Skill Level'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='skillLevel'
											value={formik.values.skillLevel}
											onChange={formik.handleChange}
											error={
												formik.touched.skillLevel &&
												Boolean(formik.errors.skillLevel)
											}
											helperText={
												formik.touched.skillLevel && formik.errors.skillLevel
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Education Level'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='educationLevel'
											value={formik.values.educationLevel}
											onChange={formik.handleChange}
											error={
												formik.touched.educationLevel &&
												Boolean(formik.errors.educationLevel)
											}
											helperText={
												formik.touched.educationLevel &&
												formik.errors.educationLevel
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Last Assessment'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='lastAssessment'
											value={formik.values.lastAssessment}
											onChange={formik.handleChange}
											error={
												formik.touched.lastAssessment &&
												Boolean(formik.errors.lastAssessment)
											}
											helperText={
												formik.touched.lastAssessment &&
												formik.errors.lastAssessment
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='Unit'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='addressUnit'
											value={formik.values.addressUnit}
											onChange={formik.handleChange}
											error={
												formik.touched.addressUnit &&
												Boolean(formik.errors.addressUnit)
											}
											helperText={
												formik.touched.addressUnit && formik.errors.addressUnit
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											id='outlined-basic'
											label='City'
											variant='outlined'
											margin='normal'
											fullWidth
											required
											type='text'
											name='addressCity'
											value={formik.values.addressCity}
											onChange={formik.handleChange}
											error={
												formik.touched.addressCity &&
												Boolean(formik.errors.addressCity)
											}
											helperText={
												formik.touched.addressCity && formik.errors.addressCity
											}
										/>
									</Grid>

									<Grid item sm={6} sx={{ width: '90%' }}>
										<TextField
											required
											id='outlined-basic'
											label='Zip Code'
											variant='outlined'
											margin='normal'
											fullWidth
											type='text'
											name='addressZipCode'
											value={formik.values.addressZipCode}
											onChange={formik.handleChange}
											error={
												formik.touched.addressZipCode &&
												Boolean(formik.errors.addressZipCode)
											}
											helperText={
												formik.touched.addressZipCode &&
												formik.errors.addressZipCode
											}
										/>
									</Grid>
									<Grid item sm={6} sx={{ width: '90%' }}>
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
									<Grid item sm={6} sx={{ width: '90%' }}>
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
