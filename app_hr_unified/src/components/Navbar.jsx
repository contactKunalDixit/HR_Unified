import React from 'react';
import styled from './navbar.module.css';
import { MdSearch } from 'react-icons/md';
const Navbar = () => {
	return (
		<React.Fragment>
			<div div className={styled.Navbar_container}>
				<div className={styled.leftSec}>HR_Unified</div>

				<div className={styled.rightSec}>
					<div className={styled.searchSec}>
						<form action='#' className={styled.formSearchSec}>
							<input type='text' className={styled.Search_inputSec} />
							<button className={styled.button_Search_inputSec}>
								<MdSearch
									className={styled.searchButtonIcon}
									// style={{ background: 'white' }}
								></MdSearch>
							</button>
						</form>
					</div>
					<div className={styled.rightIconSec}></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
