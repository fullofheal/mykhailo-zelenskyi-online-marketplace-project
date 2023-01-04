import { ADD_CART_ITEM, CHANGE_AMOUNT } from "../actions/types";

const localStorageProducts = JSON.parse(localStorage.getItem("selectedProducts"));

const initialState = {
	selectedProducts: localStorageProducts ? localStorageProducts.selectedProducts : []
};

function productCartReducer(state = initialState, action) {
	switch(action.type) {
		case ADD_CART_ITEM:
			{
				let existingItem = state.selectedProducts.find(item => {
					return item.id === action.payload.id && JSON.stringify(item.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes)
				})
				if (existingItem) {

					let returnValue = {
						...state,
						selectedProducts: state.selectedProducts.map(product => {
							return product.cartItemId !== existingItem.cartItemId ? product : {
								...product,
								quantity: product.quantity + 1
							} 
						}) 
					}

					localStorage.setItem('selectedProducts', JSON.stringify(returnValue))
					
					return returnValue
				} else {
					
					let returnValue = {
						...state,
						selectedProducts: [...state.selectedProducts, {
							...action.payload,
							cartItemId: action.payload.id + Date.now()
						}]
					}

					localStorage.setItem('selectedProducts', JSON.stringify(returnValue))

					return returnValue;
				}		
			}
			case CHANGE_AMOUNT:
				{
					let returnValue;

					if (action.payload.i === 1) {
						returnValue = {
							...state,
							selectedProducts: state.selectedProducts.map(product => {
								return product.cartItemId !== action.payload.cartItemId ? product : {
									...product,
									quantity: product.quantity + 1
								}
							})
						}
						localStorage.setItem('selectedProducts', JSON.stringify(returnValue))
						return returnValue;
					} else {
						returnValue = {
							...state,
							selectedProducts: state.selectedProducts.map(product => {
								return product.cartItemId !== action.payload.cartItemId ? product : {
									...product,
									quantity: product.quantity - 1
								}
							}).filter(product => {
								return product.quantity > 0
							})
						}
						localStorage.setItem('selectedProducts', JSON.stringify(returnValue))
						return returnValue
					}
				}
			default: return state;
			}
}

export default productCartReducer;
