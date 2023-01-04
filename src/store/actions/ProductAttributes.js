import { 
	SET_PRODUCT_ATTRIBUTES,
	RESET_PRODUCT_ATTRIBUTES
} from "./types.js";

const ProductAttributesActions = {
	setProductAttributes: (productAttributes) => {
		return {
			type: SET_PRODUCT_ATTRIBUTES,
			payload: productAttributes
		}
	},
	resetProductAttributes: () => {
		return {
			type: RESET_PRODUCT_ATTRIBUTES,
		}
	}
}

export default ProductAttributesActions;