import React from 'react';
import { Box, styled } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import HubIcon from '@mui/icons-material/Hub';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HandymanIcon from '@mui/icons-material/Handyman';
import Divider from '@mui/material/Divider';

const BoxSec = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '90%',
});

const LeftSideBar = () => {
	return (
		<React.Fragment>
			<BoxSec>
				<List>
					<Divider></Divider>
					<ListItem disablePadding sx={{ margin: '1.5rem 0' }}>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>

							<ListItemText
								primary='Dashboard'
								sx={{ fontSize: '1.3rem' }}
								disableTypography
							/>
						</ListItemButton>
					</ListItem>
					<Divider></Divider>
					<ListItem disablePadding sx={{ margin: '1.5rem 0' }}>
						<ListItemButton component='a' href='#hrAgencies'>
							<ListItemIcon>
								<Diversity3Icon />
							</ListItemIcon>
							<ListItemText
								primary='HR_Agencies'
								sx={{ fontSize: '1.3rem' }}
								disableTypography
							/>
						</ListItemButton>
					</ListItem>
					<Divider></Divider>
					<ListItem disablePadding sx={{ margin: '1.5rem 0' }}>
						<ListItemButton component='a' href='#candidates'>
							<ListItemIcon>
								<EmojiPeopleIcon />
							</ListItemIcon>
							<ListItemText
								primary='Candidates'
								sx={{ fontSize: '1.3rem' }}
								disableTypography
							/>
						</ListItemButton>
					</ListItem>
					<Divider></Divider>
					<ListItem disablePadding sx={{ margin: '1.5rem 0' }}>
						<ListItemButton component='a' href='#applications'>
							<ListItemIcon>
								<HubIcon />
							</ListItemIcon>
							<ListItemText
								primary='Applications'
								sx={{ fontSize: '1.3rem' }}
								disableTypography
							/>
						</ListItemButton>
					</ListItem>
					<Divider></Divider>
					<ListItem disablePadding sx={{ margin: '1.5rem 0' }}>
						<ListItemButton component='a' href='#skills'>
							<ListItemIcon>
								<HandymanIcon />
							</ListItemIcon>
							<ListItemText
								primary='Skills'
								sx={{ fontSize: '1.3rem' }}
								disableTypography
							/>
						</ListItemButton>
					</ListItem>
					<Divider></Divider>
				</List>
			</BoxSec>
		</React.Fragment>
	);
};

export default LeftSideBar;
