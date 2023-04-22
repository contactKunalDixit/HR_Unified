import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const PageTitle = (props) => {
	return (
		<React.Fragment>
			<Container sx={{ width: '100%' }}>
				<Box sx={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
					<Typography variant='h3' component='h1'>
						{props.children}
					</Typography>
				</Box>
			</Container>
		</React.Fragment>
	);
};

export default PageTitle;
