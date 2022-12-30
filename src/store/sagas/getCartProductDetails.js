import { put, takeEvery } from 'redux-saga/effects';
import ProductCartActions from '../../actions/ProductCartActions';
import { client } from '../../services/ApolloClient';
import { ADD_CART_PRODUCT_DETAILS } from '../../actions/types';
import { LOAD_PRODUCT_DETAILS } from '../../GraphQL/Queries';



function* getCartProductDetails() {
	yield takeEvery(ADD_CART_PRODUCT_DETAILS, getProductDetailsHandler);
}

function* getProductDetailsHandler(action) {
	try {
		const productDetailsQuery = LOAD_PRODUCT_DETAILS(action.payload);

		const result = yield client.query({query: productDetailsQuery, fetchPolicy: 'no-cache'});

		yield put(ProductCartActions.addCartProductDetailsSuccess(result.data.product));
	} 
	catch(err) {
		console.log(err);
		// yield put(ProductCartActions.GetCategoriesFailed(err))
	}
}

export default getCartProductDetails;