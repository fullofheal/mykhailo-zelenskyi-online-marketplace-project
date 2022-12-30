import { put, takeEvery } from 'redux-saga/effects';
import CategoriesActions from '../../actions/CategoriesActions';
import GetProductsActions from '../../actions/GetProducts';
import {LOAD_CATEGORIES} from '../../GraphQL/Queries';
import { client } from '../../services/ApolloClient';
import { GET_CATEGORIES } from '../../actions/types';


function* getCategoriesSaga() {
	yield takeEvery(GET_CATEGORIES, getCategoriesHandler);
}

function* getCategoriesHandler(action) {
	try {
		const result = yield client.query({query: LOAD_CATEGORIES});
		
		yield put(CategoriesActions.GetCategoriesSuccess(result.data.categories))
		yield put(GetProductsActions.GetProducts(result.data.categories[0].name))
	} 
	catch(err) {
		console.log(err);
		// yield put(CategoriesActions.GetCategoriesFailed(err))
	}
}

export default getCategoriesSaga;