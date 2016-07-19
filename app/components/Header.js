import React from 'react';
import { main } from '../styles';
import GetCityContainer from '../containers/GetCityContainer';

const Header = () => (
	<div style={main.header}>
		<h2>Clever Title</h2>
		<GetCityContainer direction='row' />
	</div>
);

export default Header