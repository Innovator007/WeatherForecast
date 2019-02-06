import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather,fetchWeatherCoords } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '',country: '',Lat:'',Long:'' };
		// this.onInputChange = this.onInputChange.bind(this); this binds the onInputChange function with instance of this which is SeacrhBar
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					Lat: position.coords.latitude,
					Long: position.coords.longitude
				});
			 	this.props.fetchWeatherCoords(this.state.Lat,this.state.Long)
			},
			function (error) {
			 	console.log("Error : ",error);
			}
		);
	}

	onInputChangeCity = (event) => {
		this.setState({ term: event.target.value });
	}

	onInputChangeCountry = (event) => {
		this.setState({ country: event.target.value });
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		//Fetching Weather Data
		this.props.fetchWeather(this.state.term,this.state.country);
		this.setState({ term: '',country:'' });
	}

	render() {
		return (
			<form onSubmit={ this.onFormSubmit } className="input-group">
				<input 
				placeholder="Favourite city..."
				className="form-control2"
				value={ this.state.term }
				onChange={ this.onInputChangeCity }
				/>
				<input 
				placeholder="Favourite country..."
				className="form-control2"
				value={ this.state.country }
				onChange={ this.onInputChangeCountry }
				/>
				<span className="input-group-btn">
					<button type="submit" className="search-btn">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather,fetchWeatherCoords }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);