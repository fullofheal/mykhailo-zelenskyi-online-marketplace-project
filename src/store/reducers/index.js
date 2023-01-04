import categoriesReducer from "./categories";
import currenciesReducer from "./currencies";
import productsReducer from './products';
import productDetailsReducer from './productDetails';
import productCartReducer from "./productCart";

const rootReducer = {
	categories: categoriesReducer,
	currencies: currenciesReducer,
	products: productsReducer,
	productDetails: productDetailsReducer,
	productCart: productCartReducer
}

export default rootReducer;