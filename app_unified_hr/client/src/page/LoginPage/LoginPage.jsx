import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormInputSection from '../../components/FormInputSection/FormInputSection';

// ! Use Ref hook to login with ID and Password throughout : Refer devLama Video

const LoginPage = () => {
	return (
		<React.Fragment>
			<Container
				maxWidth={false}
				sx={{
					height: '100svh',
					paddingTop: '2rem',
					paddingBottom: '2rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<Typography variant='h2' component='h1'>
						HR_Unified
					</Typography>
					<FormInputSection></FormInputSection>
				</Box>
			</Container>
		</React.Fragment>
	);
};

export default LoginPage;
