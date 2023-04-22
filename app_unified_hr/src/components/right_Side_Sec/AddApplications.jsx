import React from 'react';

import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import PageTitle from '../pageTitle/PageTitle';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormControl, FormLabel } from '@mui/material';

const AddHRAgency = () => {
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
								Add a New Application Record
							</Typography>
						</PageTitle>
						<Box
							component='form'
							sx={{
								// '& .MuiTextField-root': { m: 1, width: '25ch' },
								margin: '1rem 0',
								width: '80%',
							}}
							noValidate
							autoComplete='off'
						>
							<FormControl
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<TextField
									required
									error
									id='outlined-basic'
									label='Application Initiation Date'
									variant='outlined'
									margin='normal'
									fullWidth
									// !  Make it a CONTROLLED COMPONENT
									// value={name}
									// onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
									// 	setName(event.target.value);
									// }}
									// ! ********
								/>
								<TextField
									required
									error
									id='outlined-basic'
									label='HR Agency'
									variant='outlined'
									margin='normal'
									fullWidth
								/>
								<TextField
									required
									error
									id='outlined-basic'
									label='Street Address'
									variant='outlined'
									margin='normal'
									fullWidth
								/>
								<TextField
									required
									error
									id='outlined-basic'
									label='Zip code'
									variant='outlined'
									margin='normal'
									fullWidth
								/>
								<TextField
									required
									error
									id='outlined-basic'
									label='State'
									variant='outlined'
									margin='normal'
									fullWidth
								/>
								<TextField
									required
									error
									id='outlined-basic'
									label='Country'
									variant='outlined'
									margin='normal'
									fullWidth
								/>
								<Button
									sx={{
										marginTop: '2rem;',
										width: '25%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									variant='contained'
								>
									Submit
								</Button>
							</FormControl>
						</Box>
						<Button
							component={NavLink}
							to='/hragencies'
							sx={{
								// marginTop: '2rem;',
								width: '20%',
								minWidth: '180px',
								display: 'flex',
								justifyContent: 'space-evenly',
								alignItems: 'center',
								padding: '0.5rem 1.5rem',
								marginBottom: '1.5rem',
							}}
							variant='contained'
						>
							<ArrowBackIcon /> HR Agency
						</Button>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default AddHRAgency;
