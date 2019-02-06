import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import { reducer } from 'react-redux-sweetalert';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  sweetalert: reducer,
});

export default rootReducer;
