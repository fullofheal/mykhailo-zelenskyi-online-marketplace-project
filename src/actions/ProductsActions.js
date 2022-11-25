import { 
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS, 
	GET_PRODUCTS_FAILED 
} from "./types";

const ProductsActions = {
	GetProducts: () => {
		return {
			type: GET_PRODUCTS
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

export default ProductsActions;