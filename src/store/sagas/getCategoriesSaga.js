import { put, takeEvery } from 'redux-saga/effects';
import CategoriesActions from '../../actions/CategoriesActions';
import {LOAD_CATEGORIES} from '../../GraphQL/Queries';
import { client } from '../../services/ApolloClient';
import { GET_CATEGORIES } from '../../actions/types';


function* getCategoriesSaga() {
	yield takeEvery(GET_CATEGORIES, getCategoriesHandler);
}

function* getCategoriesHandler(action) {
	try {
		// const result = yield call(client.query, {query: LOAD_CATEGORIES});
		const result = yield client.query({query: LOAD_CATEGORIES});
		
		console.log(result);
		// const categories = 'test';
		yield put(CategoriesActions.GetCategoriesSuccess(result.data.categories))
	} 
	catch(err) {
		console.log(err);
		// yield put(CategoriesActions.GetCategoriesFailed(err))
	}
}

export default getCategoriesSaga;