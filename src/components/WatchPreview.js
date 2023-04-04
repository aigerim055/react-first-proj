import React from "react";
import Img from './images/Preview.png'

const Preview = () => {
	return (
		// <div className={'row'}>
		// 	<div className="col-4">
		// 		<div className="box">
		// 			<img src={Img} alt=""/>
		// 		</div>
		// 	</div>
		// 	<div className="col-8">
		// 		<div className="box preview">
		// 			<h4>The harder you work for something, the greater you’ll feel when you achieve it.</h4>
		// 			<p>Watch preview</p>
		// 		</div>
		// 	</div>
		// </div>
		<div className={'preview'}>
			<div>
				<img src={Img} alt=""/>
			</div>
			<div>
				<h4>The harder you work for something, the greater you’ll feel when you achieve it.</h4>
				<p>Watch preview</p>
			</div>
		</div>
	)
}

export default Preview