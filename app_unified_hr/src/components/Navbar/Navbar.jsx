import * as React from 'react';
import { useState } from 'react';
import PageMenu from './../PageMenu/PageMenu';
import {
	AppBar,
	styled,
	Toolbar,
	Typography,
	Box,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const AppBar1 = styled(AppBar)({
	display: 'flex',
	justifyContent: 'space-between',
	// alignItems: 'center',
	// width: '90vw',
	position: 'relative',
});

const NavContainer = styled(Box)({
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const LogoSec = styled(Box)({
	display: 'flex',
	flex: '1',
	justifyContent: 'center',
	alignItems: 'center',
});

const IconSec = styled(Box)({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	gap: '1.5rem',
});
function Navbar(props) {
	const [open, setOpen] = useState(false);

	return (
		<React.Fragment>
			<AppBar1 position='sticky'>
				<StyledToolbar>
					<NavContainer className='NavContainer'>
						<Box
							sx={{
								marginRight: '1.5rem',
								display: { xs: 'block', sm: 'none' },
							}}
						>
							<PageMenu></PageMenu>
						</Box>
						<LogoSec className='LogoSec' sx={{ flex: '1' }}>
							<Typography variant='h4' sx={{ textAlign: 'center' }}>
								HR_Unified
							</Typography>
						</LogoSec>
						<IconSec className='iconSec' sx={{ flex: '4' }}>
							<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
								Todays date - Need to add API
							</Box>
							<Badge color='secondary' badgeContent={0} showZero>
								<MailIcon sx={{ fontSize: '1.5rem' }} />
							</Badge>
							<Badge color='secondary' badgeContent={0} showZero>
								<NotificationsIcon sx={{ fontSize: '1.5rem' }} />
							</Badge>
							<Avatar
								alt='Remy Sharp'
								src='/static/images/avatar/1.jpg'
								sx={{ width: '1.75rem', height: '1.75rem' }}
								onClick={(e) => setOpen(true)}
							/>
						</IconSec>
					</NavContainer>
				</StyledToolbar>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					// anchorEl={anchorEl}
					open={open}
					onClose={(e) => setOpen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem onClick={(e) => setOpen(false)}> Profile</MenuItem>
					<MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
					<MenuItem onClick={(e) => setOpen(false)}>Support</MenuItem>
					<MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
				</Menu>
			</AppBar1>
		</React.Fragment>
	);
}

export default Navbar;
