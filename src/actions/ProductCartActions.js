import { ADD_CART_ITEM, CHANGE_AMOUNT, ADD_CART_PRODUCT_DETAILS, ADD_CART_PRODUCT_DETAILS_SUCCESS, ADD_CART_PRODUCT_DETAILS_FAILED } from "./types";

const ProductCartActions = {
	addCartProduct: (selectedAttributes) => {
		return {
			type: ADD_CART_ITEM,
			payload: selectedAttributes
		}
	},
	addCartProductDetails: (id) => {
		return {
			type: ADD_CART_PRODUCT_DETAILS,
			payload: id
		}
	},
	addCartProductDetailsSuccess: (details) => {
		return {
			type: ADD_CART_PRODUCT_DETAILS_SUCCESS,
			payload: details
		}
	},
	addCartProductDetailsFailed: (error) => {
		return {
			type: ADD_CART_PRODUCT_DETAILS_FAILED,
			payload: error
		}
	},
	changeAmount: (i, cartItemId) => {
		return {
			type: CHANGE_AMOUNT,
			payload: {i, cartItemId}
		}
	}
}

export default ProductCartActions;