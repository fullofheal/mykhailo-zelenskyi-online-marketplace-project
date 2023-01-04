import { put, takeEvery } from 'redux-saga/effects';
import GetProductsActions from '../actions/GetProducts';
import { client } from '../../services/ApolloClient';
import { GET_PRODUCTS } from '../actions/types';
import { LOAD_PRODUCTS } from '../../GraphQL/Queries';

function* getProductsSaga() {
	yield takeEvery(GET_PRODUCTS, getProductsHandler);
}

function* getProductsHandler(action) {
	try {
		const productQuery = LOAD_PRODUCTS(action.payload);
		const result = yield client.query({query: productQuery, fetchPolicy: 'no-cache'});
		yield put(GetProductsActions.GetProductsSuccess(result.data.category.products))
	} 
	catch(err) {
		console.log(err);
		yield put(GetProductsActions.GetCategoriesFailed(err));
	}
}

export default getProductsSaga;