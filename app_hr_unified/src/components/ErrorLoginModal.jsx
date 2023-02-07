import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from './errorLoginModal.module.css';

function ErrorLoginModal() {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	return ReactDOM.createPortal(
		<React.Fragment>
			<button onClick={handleShowModal}> Show Modal </button>
			{showModal && (
				<div className={styled.modal_overlay}>
					<div className={styled.modal_content}>
						<button onClick={handleCloseModal}>Close</button>
						<p>Modal Content</p>
					</div>
				</div>
			)}
		</React.Fragment>,
		document.getElementById('modal_overlay')
	);
}

export default ErrorLoginModal;
