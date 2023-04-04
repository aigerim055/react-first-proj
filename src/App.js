import React from 'react';
import Header from './components/Header'
import ReasonsSection from "./components/Section1";


const App = () => {
	return (
		<div>
			<Header/>
			<main>
				<section>
					<ReasonsSection></ReasonsSection>
				</section>
			</main>
		</div>
	)
}

export default App;