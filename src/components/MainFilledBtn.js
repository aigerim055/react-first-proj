import React from 'react';


const MainFilledBtn = (props) => {
	return (
		<button className={'sign-btn main-btn'}>
			{props.title || 'Learn More'}
		</button>
	)
}

export default MainFilledBtn;