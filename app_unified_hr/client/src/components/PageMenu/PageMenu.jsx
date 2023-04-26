import React, { useState } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HubIcon from '@mui/icons-material/Hub';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HandymanIcon from '@mui/icons-material/Handyman';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

const PageMenu = () => {
	const [open, setOpen] = useState(false);
	return (
		<React.Fragment>
			<Box>
				<MenuIcon
					sx={{ display: { xs: 'block', sm: 'none' } }}
					onClick={(e) => setOpen(true)}
				></MenuIcon>

				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					// anchorEl={anchorEl}
					open={open}
					onClose={(e) => setOpen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<Divider></Divider>
					<MenuItem
						onClick={(e) => setOpen(false)}
						component={NavLink}
						to='/'
						sx={{
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							margin: '1rem 0',
						}}
					>
						<HomeIcon sx={{ marginRight: '1rem' }} /> Dashboard
					</MenuItem>
					<Divider></Divider>
					<MenuItem
						onClick={(e) => setOpen(false)}
						component={NavLink}
						to='/hragencies'
						sx={{
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							margin: '1rem 0',
						}}
					>
						<Diversity3Icon sx={{ marginRight: '1rem' }} />
						HR_Agencies
					</MenuItem>
					<Divider></Divider>
					<MenuItem
						onClick={(e) => setOpen(false)}
						component={NavLink}
						to='/candidates'
						sx={{
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							margin: '1rem 0',
						}}
					>
						<EmojiPeopleIcon sx={{ marginRight: '1rem' }} />
						Candidates
					</MenuItem>
					<Divider></Divider>
					<MenuItem
						onClick={(e) => setOpen(false)}
						component={NavLink}
						to='/applications'
						sx={{
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							margin: '1rem 0',
						}}
					>
						<HubIcon sx={{ marginRight: '1rem' }} />
						Applications
					</MenuItem>
					<Divider></Divider>
					<MenuItem
						onClick={(e) => setOpen(false)}
						component={NavLink}
						to='/skills'
						sx={{
							fontSize: '1.2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
							margin: '1rem 0',
						}}
					>
						<HandymanIcon sx={{ marginRight: '1rem' }} />
						Skills
					</MenuItem>
					<Divider></Divider>
				</Menu>
			</Box>
		</React.Fragment>
	);
};

export default PageMenu;
