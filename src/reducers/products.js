import { 
	GET_PRODUCTS_SUCCESS, 
	GET_PRODUCTS_FAILED 
} from "../actions/types";

const initialState = {
	products: [],
	loading: false,
	error: null
};

function productsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS: 
			return {
				...state,
				products: action.payload,
				loading: false,
				error: null
			};
		case GET_PRODUCTS_FAILED: 
			return {
				...state,
				products: [],
				loading: false,
				error: action.payload
			};
		default: return state;
	}
}

export default productsReducer;