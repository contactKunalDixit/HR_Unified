import React from 'react';
import styled from './navbar.module.css';
import { MdSearch } from 'react-icons/md';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { AiOutlinePoweroff } from 'react-icons/ai';
import imgDP from '../images/icons8-google-48.png';
const Navbar = () => {
	return (
		<React.Fragment>
			<div div className={styled.Navbar_container}>
				<div className={styled.leftSec}>HR_Unified</div>

				<div className={styled.rightSec}>
					<div className={styled.searchSec}>
						<form className={styled.formSearchSec}>
							<input type='text' className={styled.Search_inputSec} />
							{/*
                            ! Why this element works without state hook. Ideally should NOT work. CHECK WHY  
                            */}
							<button className={styled.button_Search_inputSec}>
								<MdSearch className={styled.searchButtonIcon}></MdSearch>
							</button>
						</form>
					</div>
					<div className={styled.rightIconSec}>
						<div className={styled.notificationIcon}>
							<button type='button'>
								<MdOutlineNotificationsNone
									className={styled.icon_Notification}
								></MdOutlineNotificationsNone>
							</button>
						</div>

						<div className={styled.userName}>Test_User1</div>
						{/* TEST PROFILE NAME ADDED, change it later */}
						<div className={styled.userProfilePic}>
							<img src={imgDP} alt='' className={styled.img_DP} />
							{/* TEST PROFILE IMAGE ADDED, change it later */}
						</div>
						<div className={styled.userLogOut}>
							<button type='button'>
								<AiOutlinePoweroff
									className={styled.icon_LogOut}
								></AiOutlinePoweroff>
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
