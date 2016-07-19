import React from 'react';
import { home } from '../styles';
import GetCityContainer from '../containers/GetCityContainer';

const Home = () => (
	<div className="bg-el" style={home.bg}>
		<h1 className="home-title">Enter a City and State</h1>
		<GetCityContainer />
	</div>
);

export default Home