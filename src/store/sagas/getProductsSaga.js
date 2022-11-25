import { put, takeEvery } from 'redux-saga/effects';
import ProductsActions from '../../actions/ProductsActions';
import { LOAD_PRODUCTS } from '../../GraphQL/Queries';
import { client } from '../../services/ApolloClient';
import { GET_PRODUCTS } from '../../actions/types';


function* getProductsSaga() {
	yield takeEvery(GET_PRODUCTS, getProductsHandler);
}

function* getProductsHandler(action) {
	try {
		const result = yield client.query({query: LOAD_PRODUCTS});
		
		console.log(result);
		yield put(ProductsActions.GetProductsSuccess(result.data.categories))
	} 
	catch(err) {
		console.log(err);
		// yield put(CategoriesActions.GetCategoriesFailed(err))
	}
}

export default getProductsSaga;