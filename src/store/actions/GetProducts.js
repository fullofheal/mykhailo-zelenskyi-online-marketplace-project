import { 
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS, 
	GET_PRODUCTS_FAILED 
} from "./types";

const GetProductsActions = {
	GetProducts: (categoryType) => {
		return {
			type: GET_PRODUCTS,
			payload: categoryType
		}
	},
	GetProductsSuccess: (products) => {
		return {
			type: GET_PRODUCTS_SUCCESS,
			payload: products
		}
	},
	GetProductsFailed: (error) => {
		return {
			type: GET_PRODUCTS_FAILED,
			payload: error
		}
	}
}

export default GetProductsActions;