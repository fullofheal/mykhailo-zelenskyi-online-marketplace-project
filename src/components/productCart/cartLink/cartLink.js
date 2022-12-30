import { PureComponent } from "react";
import CartLinkIcon from "../../../icons/cartLinkIcon";
import CartOverlay from "./cartOverlay/cartOverlay";
import Checkout from "../../checkout/checkout";
import { connect } from 'react-redux';
import ProductCartActions from "../../../actions/ProductCartActions";
import './cartLink.scss';


class CartLink extends PureComponent {

	state = {
		showOverlay: false,
		showCheckout: false,
		totalAmount: 0,
		totalQuantity: null
	};

	onCartClicked = (e) => {
		e.stopPropagation();
		
		this.setState({
			showOverlay: !this.state.showOverlay
		})
	}

	onCheckoutClicked = () => {
		this.setState({
			showCheckout: true,
			showOverlay: false
		})
	}

	closeCheckoutModal = (e) => {
		if (e.target.classList.contains("checkout")) {
			this.setState({
				showOverlay: false
			})
		}
	}

	closeOverlay = (e) => {
		if (e.target.classList.contains("cart-overlay__bg")) {
			this.setState({
				showOverlay: false
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

	componentDidMount() {

		this.setState({
			totalAmount: this.totalAmount(),
			totalQuantity: this.totalQuantity()
		})

	}

	componentDidUpdate() {
		this.setState({
			totalAmount: this.totalAmount(),
			totalQuantity: this.totalQuantity()
		})
	}

	render() {

		this.state.showOverlay ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');

		return (
			<div className="cart-overlay" >
				<div className="cart-overlay__icon" onClick={this.onCartClicked}>
					<CartLinkIcon />
					{this.state.totalQuantity !== 0 ? <div className="cart-overlay__quantity">{this.state.totalQuantity}</div> : ''}
				</div>				
				{this.state.showOverlay && <CartOverlay
					selectedProducts={this.props.selectedProducts}
					currencyType={this.props.currencyType}
					totalAmount={this.state.totalAmount}
					totalQuantity={this.state.totalQuantity}
					changeAmount={this.props.changeAmount}
					onCartClicked={this.onCartClicked}
					onCheckoutClicked={this.onCheckoutClicked}
					closeOverlay={this.closeOverlay}/>}
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
})(CartLink);