import {gql} from "@apollo/client";

export const LOAD_PRODUCTS = gql`
	query {
		categories{
			name
			products {
				name
				id
			}
		}
	}
`;

export const LOAD_ALL_PRODUCT_INFO = gql`
	query {
		category {
		name
		products {
			id
			name
			inStock
			gallery
			description
			category
			attributes {
			name
			items{
				value
				displayValue
			}
			id
			type
			}
			prices {
			amount
			currency{
				symbol
			}
			}
			brand
		}
		}
	}
`;

export const LOAD_CATEGORIES = gql`
query {
	categories{
	name
	}
}`;

export const LOAD_CURRENCIES = gql`
query{
	currencies{
	  label
	  symbol
	}
  }
`