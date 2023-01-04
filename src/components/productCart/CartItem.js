import { PureComponent } from "react";
import Attributes from "../productDetails/detailsInfo/allAttributes";
import CartSlider from "./cartSlider";

class CartItem extends PureComponent {

	constructor() {
		super();
		this.state = {
			productDetails: {
				attributes: [],
				brand: '',
				prices: null,
				name: '',
				gallery: []
			}
		}
	}

	componentDidMount() {
		this.setState({
			productDetails: this.props.selectedProduct.productDetails
		})
	}

	render() {
		const price = this.state.productDetails.prices ? this.state.productDetails.prices.find(obj => obj.currency.symbol === this.props.currencyType) : {currency: {label: '', symbol: ''}, amount: ''};

		return (
			<div className="cart-item">
				<div className="cart-item__info">
					<div className="details__title">
						<div className="details__brand">{this.state.productDetails.brand}</div>
						<div className="details__name">{this.state.productDetails.name}</div>
					</div>
					<div className="details__price">
						<div className="details__price-value">{price.currency.symbol}
						{price.amount}</div>
					</div>
					<Attributes 
					isOverlay={this.props.isOverlay}
					attributes={this.state.productDetails.attributes}
					setProductAttributes={null}
					selectedProduct={this.props.selectedProduct}/>
				</div>
				<div className="cart-item__gallery">
					<div className="cart-item__quantity">
						<div 
						className="cart-item__quantity-plus"
						onClick={() => this.props.changeAmount(1, this.props.selectedProduct.cartItemId)}>
						</div>
						<div className="cart-item__quantity-num">{this.props.selectedProduct.quantity}
						</div>
						<div 
						className="cart-item__quantity-minus"
						onClick={() => this.props.changeAmount(-1, this.props.selectedProduct.cartItemId)}>
						</div>
					</div>
					<CartSlider 
					isSlider={this.props.isSlider}
					gallery={this.state.productDetails.gallery}/>
				</div>
			</div>
		)
		
	}
}

export default CartItem;