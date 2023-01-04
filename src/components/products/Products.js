import { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ProductCartActions from "../../store/actions/ProductCartActions";
import CartIcon from "../../icons/cartIcon";
import ErrorMessage from "../errorMessage/errorMessage";
import './products.scss';

class Products extends Component{

	setDefaultAttributes = (product) => {
		let selectedAttributes = {};
		if (product.attributes.length) {
			product.attributes.map(attribute => {
				return selectedAttributes[attribute.name] = attribute.items[0].value					
			})
		}
		return selectedAttributes;
	}
	
	render() {

		const productList = this.props.products.map(product => {

			const inStock = product.inStock ? '' : 'out-of-stock'

			return <li 
				key={product.id}>
				<Link to={`/${product.id}`} className={`product__item ${inStock}`}>
					<div className="product__img">
						<img src={product.gallery[0]} alt={product.name} />
					</div>
					<div className="product__info">
						<div>
							{product.name}
						</div>
						<span>
							{product.prices.find(obj => obj.currency.symbol === this.props.currencyType).currency.symbol}
							{product.prices.find(obj => obj.currency.symbol === this.props.currencyType).amount}
						</span>
					</div>	
					<div 
					className="product__cart-icon"
					onClick={product.inStock ? (e) => {
						e.preventDefault();
						this.props.addCartProduct({
							id: product.id,
							selectedAttributes: this.setDefaultAttributes(product),
							quantity: 1,
							productDetails: product
						}) 
					} : () => {}}><CartIcon/></div>						
				</Link>
			</li>
		})

		return (
				this.props.error ? <ErrorMessage/> : <div className="container">
				<div className="product__category">{this.props.selectedCategory.toUpperCase()}</div>
				<ul className="product__wrapper">
					{productList}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.products,
	selectedCategory: state.products.selectedCategory,
	currencyType: state.currencies.currencyType,
	error: state.products.error
  });
  
  
  export default connect(mapStateToProps, {
	addCartProduct: ProductCartActions.addCartProduct
  })(Products);