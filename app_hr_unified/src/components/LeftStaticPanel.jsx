import React from 'react';
import styled from './leftStaticPanel.module.css';
import { MdSpaceDashboard } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { HiUsers } from 'react-icons/hi2';
import { HiDocumentText } from 'react-icons/hi2';
import { HiGlobeAlt } from 'react-icons/hi2';

const LeftStaticPanel = () => {
	return (
		<React.Fragment>
			<div className={styled.leftSection_container}>
				<div className={styled.logo}>HR_Unified</div>

				<div className={styled.upperContainer}>
					<div className={styled.first_Sec}>
						<div className={styled.Dashboard}>
							<div className={styled.iconImage}>
								<MdSpaceDashboard></MdSpaceDashboard>
							</div>
							<div className={styled.iconTitle}>Dashboard</div>
						</div>
					</div>

					<div className={styled.second_Sec}>
						<div className={styled.Partner_Agencies}>
							<div className={styled.iconImage}>
								<HiBuildingOffice2></HiBuildingOffice2>
							</div>
							<div className={styled.iconTitle}>HR Agencies</div>
						</div>
						<div className={styled.Candidates}>
							<div className={styled.iconImage}>
								<HiUsers></HiUsers>
							</div>
							<div className={styled.iconTitle}>Candidates</div>
						</div>
						<div className={styled.Applications}>
							<div className={styled.iconImage}>
								<HiDocumentText></HiDocumentText>
							</div>
							<div className={styled.iconTitle}>Applications</div>
						</div>
					</div>

					<div className={styled.third_Sec}>
						<div className={styled.Support}>
							<div className={styled.iconImage}>
								<HiGlobeAlt></HiGlobeAlt>
							</div>
							<div className={styled.iconTitle}>Support</div>
						</div>
					</div>
				</div>

				<div className={styled.lowerContainer}>
					<div className={styled.VersionStaticInfo}>Version 1.0</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LeftStaticPanel;
