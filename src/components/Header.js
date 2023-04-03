import React from 'react';
import SignIn_btn from "./Sign_in_button";
import SignUp_btn from "./Sign_up_button";
import Links from "./Links";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="header">
					<Links/>
					<div className="buttons">
						<SignIn_btn/>
						<SignUp_btn/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;