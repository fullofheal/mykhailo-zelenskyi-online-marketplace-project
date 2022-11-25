import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ 
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
	}
);

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(getCurrenciesSaga);
// sagaMiddleware.run(getProductsSaga);

export default store;