import React from 'react';
import { Container, Box, styled, Paper, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './../../components/Navbar/Navbar';
import LeftSideBar from '../../components/left_Side_Bar/LeftSideBar';
import DashboardSec from '../../components/right_Side_Sec/DashboardSec';
import HRAgencies from '../../components/right_Side_Sec/HRAgencies';
import Candidates from '../../components/right_Side_Sec/Candidates';
import Applications from '../../components/right_Side_Sec/Applications';
import Skills from '../../components/right_Side_Sec/Skills';
import AddHRAgency from '../../components/right_Side_Sec/AddHRAgency';
import AddCandidate from '../../components/right_Side_Sec/AddCandidate';
import AddApplications from '../../components/right_Side_Sec/AddApplications';
import AddSkills from '../../components/right_Side_Sec/AddSkills';

const Container1 = styled(Container)({
	height: '100svh',
	width: '100vw',
	padding: '0.2rem',
	paddingTop: '0',
	position: 'relative',
	'-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
	scrollbarWidth: 'none' /* Firefox */,
	'&::-webkit-scrollbar': {
		display: 'none' /* Safari and Chrome */,
	},
});

const TopSec = styled(Box)({
	width: '100%',
	height: '4rem',
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
	justifyContent: 'center',
	background:
		'linear-gradient(4deg, rgba(255,255,255,1) 0%, rgba(214,221,232,1) 81%)',

	position: 'fixed',
	top: '4rem',
	left: '0',
});

const LeftBox = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	background:
		'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,203,217,1) 76%)',
});

const HomeBase = () => {
	return (
		<React.Fragment>
			<Container1 maxWidth={false}>
				<TopSec>
					<Navbar></Navbar>
				</TopSec>

				<BottomSec className='bottomSec'>
					<Box
						sx={{
							flex: '1',
							display: { xs: 'none', sm: 'flex' },
							width: '100%',
						}}
					>
						<LeftBox className='leftBox'>
							<LeftSideBar></LeftSideBar>
						</LeftBox>
					</Box>

					<Box
						className='standardRightSection'
						sx={{
							flex: '5',
							height: '100%',
							width: '100%',
							overflowY: 'scroll',
						}}
					>
						<Routes>
							<Route path='/' element={<DashboardSec />}></Route>
							<Route path='/hragencies' element={<HRAgencies />}></Route>
							<Route path='/candidates' element={<Candidates />}></Route>
							<Route path='/applications' element={<Applications />}></Route>
							<Route path='/skills' element={<Skills />}></Route>
							<Route path='/AddHRAgency' element={<AddHRAgency />}></Route>
							<Route path='/AddCandidate' element={<AddCandidate />}></Route>
							<Route
								path='/AddApplications'
								element={<AddApplications />}
							></Route>
							<Route path='/AddSkills' element={<AddSkills />}></Route>
						</Routes>
					</Box>
				</BottomSec>
			</Container1>
		</React.Fragment>
	);
};

export default HomeBase;
