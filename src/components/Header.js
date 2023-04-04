import React from 'react';
import Links from "./Links";
import MainBtn from "./MainBtn";
import MainFilledBtn from "./MainFilledBtn";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<Links/>
					<div className="buttons">
						<MainBtn title={'Sign In'}/>
						<MainFilledBtn title={'Sign Up'}/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;