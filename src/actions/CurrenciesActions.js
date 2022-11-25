import { 
	GET_CURRENCIES,
	GET_CURRENCIES_SUCCESS, 
	GET_CURRENCIES_FAILED 
} from "./types";

const CurrenciesActions = {
	GetCurrencies: () => {
		return {
			type: GET_CURRENCIES
		}
	},
	GetCurrenciesSuccess: (currencies) => {
		return {
			type: GET_CURRENCIES_SUCCESS,
			payload: currencies
		}
	},
	GetCurrenciesFailed: (error) => {
		return {
			type: GET_CURRENCIES_FAILED,
			payload: error
		}
	}
}

export default CurrenciesActions;