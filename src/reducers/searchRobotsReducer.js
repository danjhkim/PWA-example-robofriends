import { CHANGE_SEARCH_FIELD } from '../actions/types';

const INITAL_STATE_SEARCH = {
	searchField: '',
};

const searchRobots = (state = INITAL_STATE_SEARCH, action) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};

export default searchRobots;
