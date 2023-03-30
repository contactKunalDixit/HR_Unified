import React from 'react';
import { Container, Box, styled } from '@mui/material';
import Navbar from './../../components/Navbar/Navbar';
import LeftSideBar from '../../components/left_Side_Bar/LeftSideBar';
const Container1 = styled(Container)({
	height: '100svh',
	width: '100%',
	padding: '0.2rem',
	paddingTop: '0',
	position: 'relative',
});

const TopSec = styled(Box)({
	width: '100%',
	height: '4rem',
	backgroundColor: 'red',
	display: 'flex',
	justifyContent: 'center;',
	alignItems: 'center',
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1000',
});
const BottomSec = styled(Box)({
	width: '100%',
	height: 'calc(100svh - 4rem)',
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'blue',
	position: 'fixed',
	top: '4rem',
	left: '0',
});

const LeftBox = styled(Box)({
	flex: '1',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',

	background:
		'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,203,217,1) 76%)',
});

const RightBox = styled(Box)({
	flex: '4',
	backgroundColor: 'green',
	height: '100%',
});

const HomeBase = () => {
	return (
		<React.Fragment>
			<Container1 maxWidth={false}>
				<TopSec>
					<Navbar></Navbar>
				</TopSec>

				<BottomSec className='bottomSec'>
					<LeftBox
						className='leftBox'
						sx={{ display: { xs: 'none', sm: 'flex' } }}
					>
						<LeftSideBar></LeftSideBar>
					</LeftBox>
					<RightBox className='rightBox'>Right</RightBox>
				</BottomSec>
			</Container1>
		</React.Fragment>
	);
};

export default HomeBase;
