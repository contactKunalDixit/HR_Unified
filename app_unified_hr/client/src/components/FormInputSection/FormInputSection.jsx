import React from 'react';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { Stack, Box, TextField, Button } from '@mui/material';

const FormInputSection = () => {
	return (
		<React.Fragment>
			<Box
				component='form'
				sx={{
					width: '80vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '0',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<Stack spacing={'4rem'} sx={{ marginBottom: '1rem' }}>
					<TextField
						required
						label='Email'
						variant='outlined'
						sx={{ width: '70vw' }}
					></TextField>
					<TextField
						required
						label='Password'
						type='password'
						autoComplete='current-password'
						variant='outlined'
						sx={{ width: '70vw' }}
					></TextField>
				</Stack>
				<Stack>
					<Button
						variant='contained'
						color='primary'
						sx={{
							margin: '2rem',
						}}
					>
						Login
					</Button>
					<Button
						variant='text'
						sx={{ marginTop: '1rem', marginBottom: '1rem' }}
					>
						Forgot password ?{' '}
					</Button>
					<Button
						variant='text'
						sx={{ marginTop: '1rem', marginBottom: '1rem' }}
					>
						Sign Up
					</Button>
				</Stack>
			</Box>
		</React.Fragment>
	);
};

export default FormInputSection;
