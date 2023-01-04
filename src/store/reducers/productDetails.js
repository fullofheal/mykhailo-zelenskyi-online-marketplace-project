import { 
	GET_PRODUCT_DETAILS_SUCCESS, 
	GET_PRODUCT_DETAILS_FAILED,
	SET_PRODUCT_ATTRIBUTES,
	RESET_PRODUCT_ATTRIBUTES
} from "../actions/types.js";

const initialState = {
	productId: '',
	productDetails: {
		attributes: [],
		gallery: []
	},
	productAttributes: {},
	loading: false,
	error: null
};

function productDetailsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCT_DETAILS_SUCCESS: 
			return {
				...state,
				productDetails: action.payload,
				productId: action.payload.id,
				loading: false,
				error: null
			};
		case GET_PRODUCT_DETAILS_FAILED: 
			return {
				...state,
				productDetails: {
					attributes: [],
					gallery: []
				},
				productAttributes: {},
				loading: false,
				error: action.payload
			};
		case SET_PRODUCT_ATTRIBUTES:
			return {
				...state,
				productAttributes: {
					...state.productAttributes,
					[action.payload.attributeType]: action.payload.value
				}
			};
		case RESET_PRODUCT_ATTRIBUTES: 
			return {
				...state,
				productId: '',
				productDetails: {
					gallery: [],
					attributes: []
				},
				productAttributes: {},
				loading: false,
				error: null
			};
		default: return state;
	}
}

export default productDetailsReducer;