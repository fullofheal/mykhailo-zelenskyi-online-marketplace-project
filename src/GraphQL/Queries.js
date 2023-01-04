import {gql} from "@apollo/client";

export const LOAD_PRODUCTS = (categoryType) => gql`
	query GetProducts {
		category (input: {title: "${categoryType}"}) {
			products {
				id
				name
				gallery
				inStock
				attributes {
					id
					name
					type
					items {
					  displayValue
					  value
					  id
					}
				  }
				prices{
					currency{
						label
						symbol
					}
					amount
				}
			}
		}
	}
`

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

export const LOAD_ALL_PRODUCTS = gql`
	query GetTechProducts {
		category (input: {title: "all"}) {
			products {
				id
				name
			}
		}
	}
`

export const LOAD_PRODUCT_DETAILS = (productId) => gql`
	query getProductDetails {
		product (id: "${productId}") {
		id
		name
		inStock
		gallery
		description
		category
		attributes {
			id
			name
			type
			items {
				displayValue
				value
				id
			}
		}
		prices {
			currency {
				label
				symbol
			}
			amount
		}
		brand
		}
	}
`;