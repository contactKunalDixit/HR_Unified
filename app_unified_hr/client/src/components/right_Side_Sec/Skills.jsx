import React, { useState } from 'react';
import { Box, Card, Container, Grid } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PageTitle from '../pageTitle/PageTitle';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';

const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	// {
	// 	id: 'Edit/Delete',
	// 	label: 'Edit / Delete',
	// 	minWidth: 170,
	// 	align: 'center',
	// 	format: (value) => value.toLocaleString('en-US'),
	// },
];

const Skills = () => {
	function createData(name, code, population, size) {
		const density = population / size;
		return { name, code, population, size, density };
	}

	const [dataRows, setDataRows] = useState([
		createData('India', 'IN', 1324171354, 3287263),
		createData('China', 'CN', 1403500365, 9596961),
		createData('Italy', 'IT', 60483973, 301340),
		createData('United States', 'US', 327167434, 9833520),
		createData('Canada', 'CA', 37602103, 9984670),
		createData('Australia', 'AU', 25475400, 7692024),
		createData('Germany', 'DE', 83019200, 357578),
		createData('Ireland', 'IE', 4857000, 70273),
		createData('Mexico', 'MX', 126577691, 1972550),
		createData('Japan', 'JP', 126317000, 377973),
		createData('France', 'FR', 67022000, 640679),
		createData('United Kingdom', 'GB', 67545757, 242495),
		createData('Russia', 'RU', 146793744, 17098246),
		createData('Nigeria', 'NG', 200962417, 923768),
		createData('Brazil', 'BR', 210147125, 8515767),
	]);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleDelete = (id) => {
		console.log(`Delete row with id ${id}`);
		setDataRows(
			dataRows.filter((item) => {
				return `${item.code}` !== id;
			})
		);
	};

	const handleEdit = (id) => {
		console.log(`Edit row with id ${id}`);
	};
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
							gap: '2rem',
							marginTop: '1rem',
						}}
					>
						{/* <Container> */}
						<PageTitle>Skills</PageTitle>
						{/* </Container> */}

						<Card variant='outlined' sx={{ maxWidth: '345px' }}>
							<CardMedia
								component='img'
								alt='green iguana'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Skills
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small'>Share</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
						<Card variant='outlined' sx={{ maxWidth: '345px' }}>
							<CardMedia
								component='img'
								alt='green iguana'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Skills
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small'>Share</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
						<Card variant='outlined' sx={{ maxWidth: '345px' }}>
							<CardMedia
								component='img'
								alt='green iguana'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Skills
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small'>Share</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'space-evenly',
							justifyContent: 'flex-start',
							flexWrap: 'wrap',
							gap: '2rem',
							width: '100%',
							marginTop: '8rem',
						}}
					>
						<PageTitle>
							<Typography variant='h4'>Skills List</Typography>{' '}
						</PageTitle>

						{/* <Button
							component={NavLink}
							to='/AddSkills'
							variant='contained'
							color='success'
							onClick={() => console.log('Add Button Clicked')}
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
								margin: '1rem auto 2rem',
							}}
						>
							Add a new Record
						</Button> */}
						<Paper sx={{ width: '100%', overflow: 'hidden' }}>
							<TableContainer sx={{ maxHeight: 440 }}>
								<Table stickyHeader aria-label='sticky table'>
									<TableHead>
										<TableRow>
											{columns.map((column) => (
												<TableCell
													key={column.id}
													align={column.align}
													style={{ minWidth: column.minWidth }}
												>
													{column.label}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody>
										{dataRows
											.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
											.map((row) => {
												return (
													<TableRow
														hover
														role='checkbox'
														tabIndex={-1}
														key={row.code}
													>
														{columns.map((column) => {
															const value = row[column.id];

															return (
																<TableCell key={column.id} align={column.align}>
																	{column.format && typeof value === 'number'
																		? column.format(value)
																		: value}
																</TableCell>
															);
														})}
														<TableCell
															sx={{
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
															}}
														>
															<Button
																variant='contained'
																color='primary'
																onClick={() => handleEdit(row.code)}
																sx={{
																	width: 'auto',
																	margin: '0 1.5rem',
																}}
															>
																Edit
															</Button>

															<Button
																variant='contained'
																color='secondary'
																onClick={() => handleDelete(row.code)}
															>
																Delete
															</Button>
														</TableCell>
													</TableRow>
												);
											})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component='div'
								count={dataRows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</Paper>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default Skills;
