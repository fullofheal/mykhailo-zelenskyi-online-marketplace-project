import { 
	GET_CATEGORIES,
	GET_CATEGORIES_SUCCESS, 
	GET_CATEGORIES_FAILED 
} from "./types";

const CategoriesActions = {
	GetCategories: () => {
		return {
			type: GET_CATEGORIES
		}
	},
	GetCategoriesSuccess: (categories) => {
		return {
			type: GET_CATEGORIES_SUCCESS,
			payload: categories
		}
	},
	GetCategoriesFailed: (error) => {
		return {
			type: GET_CATEGORIES_FAILED,
			payload: error
		}
	}
}

export default CategoriesActions;