import React from 'react';
import { Box, Button, Container, Typography, styled } from '@mui/material';

const BgImageBox = styled(Box)({
	backgroundImage: `url(${process.env.PUBLIC_URL}/logOut_Background.jpg)`,
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	opacity: '0.09',
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100vw',
	height: '100svh',
});

const OutwardBox = styled(Box)({
	width: '90%',
	height: '80%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	position: 'relative',
	backgroundColor: 'transparent',
});

const LogOutPage = () => {
	return (
		<React.Fragment>
			<Container
				maxWidth={false}
				sx={{
					height: '100svh',
					paddingTop: '2rem',
					paddingBottom: '2rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<BgImageBox className='BoxBackground'></BgImageBox>
				<OutwardBox>
					<Box className='logOutMsg'>
						<Typography variant='h3'>
							You have successfully Logged Out !
						</Typography>
					</Box>
					<Box>
						<Button variant='contained' sx={{ margin: '4rem' }}>
							Login again
						</Button>
					</Box>
				</OutwardBox>
			</Container>
		</React.Fragment>
	);
};

export default LogOutPage;
