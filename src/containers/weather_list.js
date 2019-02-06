import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressure = cityData.list.map(weather => weather.main.pressure)
		const humidity = cityData.list.map(weather => weather.main.humidity)
		const desc = cityData.list.map(weather => weather.weather[0].description)
		const windspeeds = cityData.list.map(weather => weather.wind.speed)
		const avgspeed = _.round(_.sum(windspeeds)/windspeeds.length)
		const iconurl = `http://openweathermap.org/img/w/${cityData.list[0].weather[0].icon}.png`;
		return (
			<li key={cityData.city.id}>
				<div className="citycard">
					<div className="row" style={{marginBottom: "20px",padding: "20px 50px"}}>
						<div className="col-md-6">
							<h2>{cityData.city.name}, {cityData.city.country.toUpperCase()}</h2>
							<h2>{_.round(temps[0]-273)}<span className="degreecelsius"><sup>o</sup>C</span></h2>
							<h5 className="description"><img src={iconurl} alt="Icon" />{desc[0]}</h5>
							<p>Current Wind Speed : { windspeeds[0] } km/hr</p>
							<p>Average Wind Speed : { avgspeed } km/hr</p>
						</div>
						<div className="col-md-6 floatright">
							<GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} />
						</div>				
					</div>
					<div className="row center-align">
						<div className="col-md-4">
							<Chart data={temps} unit="C" color="blue" name="Temperature" />
						</div>
						<div className="col-md-4">
							<Chart data={pressure} unit="Bar" color="red" name="Pressure" />
						</div>
						<div className="col-md-4">
							<Chart data={humidity} unit="%" color="orange" name="Humidity" />
						</div>					
					</div>
				</div>
			</li>
		);	
	}

	render() {
		return ( 
			<ul>
				{ this.props.weather.map(this.renderWeather) }
			</ul>

		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);