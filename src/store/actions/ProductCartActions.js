import { ADD_CART_ITEM, CHANGE_AMOUNT } from "./types";

const ProductCartActions = {
	addCartProduct: (selectedAttributes) => {
		return {
			type: ADD_CART_ITEM,
			payload: selectedAttributes
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