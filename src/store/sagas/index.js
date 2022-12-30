import { all } from "redux-saga/effects";

import getCategoriesSaga from "./getCategoriesSaga";
import getCurrenciesSaga from "./getCurrenciesSaga";
import getProductsSaga from './getProductsSaga';
import getProductDetailsSaga from './getProductDetailsSaga';

export default function* rootSaga() {
	yield all([
		getCategoriesSaga(),
		getCurrenciesSaga(),
		getProductsSaga(),
		getProductDetailsSaga()
	]);
  }