import { PureComponent } from "react";

import Attributes from "./allAttributes";
import './detailsInfo.scss';

class DetailsInfo extends PureComponent {

	state = {
		inStock: true,
		allAttributesSelected: false,
		showSelectAttributes: false
	}

	componentDidUpdate() {
		let selectedAttrNum = Object.keys(this.props.productAttributes).length
		return selectedAttrNum === this.props.productDetails.attributes.length ? this.setState({
			allAttributesSelected: true,
			showSelectAttributes: false
		}) : this.setState({
			allAttributesSelected: false
		})
	}
	

	render() {
		const price = this.props.productDetails.prices ? this.props.productDetails.prices.find(obj => obj.currency.symbol === this.props.currencyType) : {currency: {label: '', symbol: ''}, amount: ''};

		const addDescription = () => {
			return {__html: this.props.productDetails.description}
		}

		return (
			<div className="details__info">
				<div className="details__title">
					<div className="details__brand">{this.props.productDetails.brand}</div>
					<div className="details__name">{this.props.productDetails.name}</div>
				</div>
				<Attributes 
				attributes={this.props.productDetails.attributes}
				setProductAttributes={this.props.setProductAttributes} />
				<div className="details__price">
					<div className="details__header">Price:</div>
					<div className="details__price-value">{price.currency.symbol}
					{price.amount}</div>
				</div>
				<div className="details__cart">
					<button 
					className="details__btn"
					onClick={this.props.inStock && this.state.allAttributesSelected ? () => this.props.addCartProduct({
						id: this.props.productDetails.id,
						selectedAttributes: this.props.productAttributes,
						quantity: 1,
						productDetails: this.props.productDetails
					}) : this.props.inStock && !this.state.allAttributesSelected ? () => {
						this.setState({
							showSelectAttributes: true
						})
					} : () => {
						this.setState({
							inStock: false
						})
					}}>
						ADD TO CART
					</button>
					{this.state.inStock ? '' : <div className="details__out-of-stock">
					This product is not available.</div>}
					{this.state.showSelectAttributes && <div className="details__out-of-stock">
					Please select available attributes.</div>}
				</div>
				
				<div className="details__description">
					{this.props.productDetails.description && <div dangerouslySetInnerHTML={addDescription()}/>}
				</div>
			</div>
		)
	}
}

export default DetailsInfo;

