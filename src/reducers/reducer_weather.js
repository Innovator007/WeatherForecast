import { FETCH_WEATHER , FETCH_WEATHER_COORD} from '../actions/index';

export default function(state=[],action) {
	switch(action.type) {
		case FETCH_WEATHER:
			if(action.payload.status === 200){
				return [action.payload.data,...state];	
			} else {
				return alert("Sorry, no search results available!");
			}
			
		case FETCH_WEATHER_COORD:
			return [action.payload.data,...state];
	}
	return state;
}