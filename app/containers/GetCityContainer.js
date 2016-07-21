import React, {PropTypes} from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends React.Component {
	constructor () {
		super()

		this.state = {
			city: ''
		};
  }

	handleSubmitCity() {
		console.log(this.state.city);
	}

	handleUpdateCity(e) {
		this.setState({
			city: e.target.value
		})
	}

	render() { 
		return (
			<GetCity 
				direction={this.props.direction} 
				city={this.state.city} 
				onSubmitCity={(e) => this.handleSubmitCity(e)} 
				onUpdateCity={(e) => this.handleUpdateCity(e)} />
		)
	}
}

GetCityContainer.defaultProps = {
	direction: 'column'
};
GetCityContainer.propTypes = {
	direction: PropTypes.string
};

export default GetCityContainer