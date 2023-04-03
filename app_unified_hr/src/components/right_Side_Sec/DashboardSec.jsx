import React from 'react';
import { Box, Card, Paper } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PageTitle from '../pageTitle/PageTitle';

const DashboardSec = () => {
	return (
		<React.Fragment>
			<Box
				sx={{
					margin: '1rem',
					padding: '1rem',
					// width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background:
						'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,203,217,1) 76%)',
				}}
			>
				<Paper
					style={{
						width: '100%',

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
						<PageTitle>Dashboard</PageTitle>
						<Card variant='outlined' sx={{ maxWidth: '345px' }}>
							<CardMedia
								component='img'
								alt='green iguana'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Dashboard
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
									Dashboard
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
									Lizard
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
									Dashboard
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
									Dashboard
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
									Lizard
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
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default DashboardSec;
