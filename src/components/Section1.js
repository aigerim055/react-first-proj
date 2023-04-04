import React from 'react';
import Img from './images/Vector.png'
import MainBtn from "./MainBtn";
import MainFilledBtn from "./MainFilledBtn";
import Preview from "./WatchPreview";
import Partners from "./partners";

const ReasonsSection = () => {
	return (
		<div className={'container'}>
			<div className="row">
				<div className="col-5">
					<div className="box title">
						<h1>Many reasons to get up and start to get back in the business</h1>
						<p className={'subtitle'}>The harder you work for something, the greater you’ll feel when you achieve it.</p>
						<div className="buttons">
							<MainFilledBtn title={'Learn more'}/>
							<MainBtn title={'Demo'}/>
						</div>
						<Preview></Preview>
					</div>
				</div>
				<div className="col-7">
					<div className="box">
						<img src={Img} alt=""/>
					</div>
				</div>
			</div>
			{/*<Partners></Partners>*/}
		</div>
	)
}

export default ReasonsSection;