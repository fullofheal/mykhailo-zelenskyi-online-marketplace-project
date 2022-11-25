import { 
	GET_CURRENCIES_SUCCESS, 
	GET_CURRENCIES_FAILED 
} from "../actions/types";

const initialState = {
	currencies: [],
	loading: false,
	error: null
};

function currenciesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CURRENCIES_SUCCESS: 
			return {
				...state,
				currencies: action.payload,
				loading: false,
				error: null
			};
		case GET_CURRENCIES_FAILED: 
			return {
				...state,
				currencies: [],
				loading: false,
				error: action.payload
			};
		default: return state;
	}
}

export default currenciesReducer;