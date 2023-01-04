import { PureComponent } from "react";
import { connect } from 'react-redux';

import CartItem from "./CartItem";
import Checkout from "../checkout/checkout";
import ProductCartActions from "../../store/actions/ProductCartActions";
import './productCart.scss';

class ProductCart extends PureComponent {

	state = {
		totalAmount: 0,
		totalQuantity: 0,
		totalTax: 0,
		showCheckout: false
	}

	componentDidMount() {
		this.setState({
			totalAmount: this.totalAmount(),
			totalQuantity: this.totalQuantity(),
			totalTax: this.totalTax()
		})
	}

	componentDidUpdate() {
		this.setState({
			totalAmount: this.totalAmount(),
			totalQuantity: this.totalQuantity(),
			totalTax: this.totalTax()
		})
	}

	onCheckoutClicked = () => {
		this.setState({
			showCheckout: true,
		})
	}

	closeCheckoutModal = (e) => {
		if (e.target.classList.contains("checkout")) {
			this.setState({
				showCheckout: false
			})
		}
	}

	changeAmount = (i, id) => {
		this.props.changeAmount(i, id)
	}

	totalAmount = () => this.props.selectedProducts ? 
		this.props.selectedProducts.reduce((sum, current) => {
			return +(sum + current.productDetails.prices.find(obj => obj.currency.symbol === this.props.currencyType).amount * current.quantity).toFixed(2)
		}, 0)  : 0

	totalQuantity = () => this.props.selectedProducts ? 
		this.props.selectedProducts.reduce((sum, current) => {
			return sum + current.quantity
		}, 0) : 0

	totalTax = () => this.state.totalAmount ? (this.state.totalAmount * 0.21).toFixed(2) : 0
		

	render() {
		const productList = () => {
			return (
				this.props.selectedProducts ? this.props.selectedProducts.map(selectedProduct => {

					return <CartItem 
					isOverlay={true}
					isSlider={true}
					key={selectedProduct.cartItemId}
					selectedProduct={selectedProduct}
					currencyType={this.props.currencyType}
					changeAmount={this.changeAmount}/>
				}) : ''
			)
		}

		return (
			<div className="cart">
				<div className="cart__title">CART</div>
				<div>
					{productList()}
				</div>
				<div className="cart__checkout">
					<div className="cart__tax">Tax 21%: <span>{this.props.currencyType}{this.state.totalTax}</span></div>
					<div className="cart__quantity">Quantity: <span>{this.state.totalQuantity}</span></div>
					<div className="cart__total">Total: <span>{this.props.currencyType}{this.state.totalAmount}</span></div>
					<button 
					className="cart__order"
					onClick={this.onCheckoutClicked}>ORDER</button>
				</div>
				{this.state.showCheckout && <Checkout 
					closeCheckoutModal={this.closeCheckoutModal}/>}
			</div>
		)
		
	}
}

const mapStateToProps = (state) => ({
	selectedProducts: state.productCart.selectedProducts,
	currencyType: state.currencies.currencyType
})

export default connect(mapStateToProps, {
	changeAmount: ProductCartActions.changeAmount
})(ProductCart);