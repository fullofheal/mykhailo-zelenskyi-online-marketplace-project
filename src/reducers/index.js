import categoriesReducer from "./categories";
import currenciesReducer from "./currencies";
import productsReducer from './products';

const rootReducer = {
	categories: categoriesReducer,
	currencies: currenciesReducer,
	products: productsReducer
}

export default rootReducer;