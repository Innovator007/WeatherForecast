import axios from 'axios';
import { API_KEY, ROOT_URL } from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_COORD = 'FETCH_WEATHER_COORD';

export function fetchWeather(city,country) {
	const url = `${ROOT_URL}&q=${city},${country}`;
	const request = axios.get(url)
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

export function fetchWeatherCoords(lat,lon) {
	const url = `${ROOT_URL}&lat=${lat}&lon=${lon}`;
	const request = axios.get(url)
	return {
		type: FETCH_WEATHER_COORD,
		payload: request
	};
}