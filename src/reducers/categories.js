import { 
	GET_CATEGORIES_SUCCESS, 
	GET_CATEGORIES_FAILED 
} from "../actions/types";

const initialState = {
	categories: [],
	loading: false,
	error: null
};

function categoriesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORIES_SUCCESS: 
			return {
				...state,
				categories: action.payload,
				loading: false,
				error: null
			};
		case GET_CATEGORIES_FAILED: 
			return {
				...state,
				categories: [],
				loading: false,
				error: action.payload
			};
		default: return state;
	}
}

export default categoriesReducer;