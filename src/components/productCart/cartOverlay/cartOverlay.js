import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

class CartOverlay extends PureComponent {

	state = {
		cartQuantity: null
	};
	
	render() {
		const productList = () => {
			return (
				this.props.selectedProducts.length ? this.props.selectedProducts.map(selectedProduct => {

					return <CartItem 
					isOverlay={true}
					key={selectedProduct.cartItemId}
					selectedProduct={selectedProduct}
					currencyType={this.props.currencyType}
					changeAmount={this.props.changeAmount}/>
				}) : 'The cart is empty...'
			)
		}

		return (<div>
				<div className="cart-overlay__bg" onClick={this.props.closeOverlay}></div>
				<div className="cart-overlay__menu">
					<div className="cart-overlay__title"><span>My Bag,</span> {this.props.totalQuantity} items</div>
					<div className='cart-overlay__products'>
						{productList()}
					</div>
					<div className="cart-overlay__summary">
						<div className="cart-overlay__total">
							<div>Total:</div>
							<div className='cart-overlay__price'>{this.props.currencyType}{this.props.totalAmount}</div>
						</div>
						<div className='cart-overlay__btns'>
							<Link to='/cart' onClick={this.props.onCartClicked}><button className="cart-overlay__bag">VIEW BAG</button></Link>
							<button className="cart-overlay__checkout" onClick={this.props.onCheckoutClicked}>CHECK OUT</button>
						</div>
					</div>
			</div>
		</div>
				
		);
	}
}

export default CartOverlay;