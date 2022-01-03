import { combineReducers } from 'redux';

import requestRobotsReducer from './requestRobotsReducer';
import searchRobotsReducer from './searchRobotsReducer';

export default combineReducers({
	searchField: searchRobotsReducer,
	robots: requestRobotsReducer,
});
