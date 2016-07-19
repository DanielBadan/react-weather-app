import React, {PropTypes} from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			city: ''
		};
	}

	handleSubmitCity() {
		console.log(this.state.city);
	}

	handleUpdateCity() {
		console.log('update');
	}

	render() { 
		return (
			<GetCity direction={this.props.direction} city={this.state.city} onSubmitCity={this.handleSubmitCity} onUpdateCity={this.handleUpdateCity} />
		)
	}
}

GetCityContainer.propTypes = {
	direction: PropTypes.string
};

export default GetCityContainer