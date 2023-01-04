import { 
	GET_PRODUCT_DETAILS,
	GET_PRODUCT_DETAILS_SUCCESS, 
	GET_PRODUCT_DETAILS_FAILED 
} from "./types";

const ProductDetailsActions = {
	GetProductDetails: (productId) => {
		return {
			type: GET_PRODUCT_DETAILS,
			payload: productId
		}
	},
	GetProductDetailsSuccess: (productDetails) => {
		return {
			type: GET_PRODUCT_DETAILS_SUCCESS,
			payload: productDetails
		}
	},
	GetProductDetailsFailed: (error) => {
		return {
			type: GET_PRODUCT_DETAILS_FAILED,
			payload: error
		}
	}
}

export default ProductDetailsActions;