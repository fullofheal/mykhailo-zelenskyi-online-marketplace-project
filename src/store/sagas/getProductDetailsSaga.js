import { put, takeEvery } from 'redux-saga/effects';
import ProductDetailsActions from '../../actions/ProductDetailsActions';
import { client } from '../../services/ApolloClient';
import { GET_PRODUCT_DETAILS } from '../../actions/types';
import { LOAD_PRODUCT_DETAILS } from '../../GraphQL/Queries';



function* getProductDetailsSaga() {
	yield takeEvery(GET_PRODUCT_DETAILS, getProductDetailsHandler);
}

function* getProductDetailsHandler(action) {
	try {
		const productDetailsQuery = LOAD_PRODUCT_DETAILS(action.payload);
		const result = yield client.query({query: productDetailsQuery, fetchPolicy: 'no-cache'});
		yield put(ProductDetailsActions.GetProductDetailsSuccess(result.data.product));
	} 
	catch(err) {
		console.log(err);
		// yield put(CategoriesActions.GetCategoriesFailed(err))
	}
}

export default getProductDetailsSaga;