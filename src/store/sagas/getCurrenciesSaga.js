import { put, takeEvery } from 'redux-saga/effects';
import CurrenciesActions from '../../actions/CurrenciesActions';
import { LOAD_CURRENCIES } from '../../GraphQL/Queries';
import { client } from '../../services/ApolloClient';
import { GET_CURRENCIES } from '../../actions/types';


function* getCurrenciesSaga() {
	yield takeEvery(GET_CURRENCIES, getCurrenciesHandler);
}

function* getCurrenciesHandler(action) {
	try {
		const result = yield client.query({query: LOAD_CURRENCIES});
		// const result = yield call(client.query, {query: LOAD_CURRENCIES});
		console.log(result);
			
		yield put(CurrenciesActions.GetCurrenciesSuccess(result.data.currencies))
	} 
	catch(err) {
		console.log(err);
		// yield put(CurrenciesActions.GetCurrenciesFailed(err))
	}
}

export default getCurrenciesSaga;