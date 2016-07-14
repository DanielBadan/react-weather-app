import React from 'react';
import { home } from '../styles';
import GetForm from './getForm';

const Home = () => (
	<div className="bg-el" style={home.bg}>
		<h1 className="home-title">Enter a City and State</h1>
		<GetForm styles={home.form} />
	</div>
);

export default Home