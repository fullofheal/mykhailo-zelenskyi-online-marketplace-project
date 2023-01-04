import { Component } from "react";
import ProductDetailsActions from "../../store/actions/ProductDetailsActions";
import ProductAttributesActions from "../../store/actions/ProductAttributes";
import ProductCartActions from "../../store/actions/ProductCartActions";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsPictures from "./detailsPictures/detailsPictures";
import DetailsInfo from "./detailsInfo/detailsInfo";
import ErrorMessage from '../errorMessage/errorMessage';
import './productDetails.scss';

function withParams(Component) {
	return props => <Component {...props} params={useParams()}/>
}

class ProductDetails extends Component {
	

	componentDidMount() {
		this.props.getProductDetails(this.props.params.id);
	}
	
	componentWillUnmount() {
		this.props.resetProductAttributes();
	}	

	render() {
		return (
			this.props.error ? <ErrorMessage/> : <div className="details">
			{this.props.productDetails && (<DetailsPictures 
			pictures={this.props.productDetails.gallery}
			inStock={this.props.productDetails.inStock}/>)}
			<DetailsInfo 
			inStock={this.props.productDetails.inStock}
			productDetails={this.props.productDetails} 
			currencyType={this.props.currencyType}
			setProductAttributes={this.props.setProductAttributes}
			addCartProduct={this.props.addCartProduct}
			productAttributes={this.props.productAttributes}/>
		</div>
		)
	}
}


const mapStateToProps = state => ({
	productId: state.productDetails.productId,
	productDetails: state.productDetails.productDetails,
	productAttributes: state.productDetails.productAttributes,
	currencyType: state.currencies.currencyType,
	error: state.productDetails.error
  });

export default connect(mapStateToProps, {
	getProductDetails: ProductDetailsActions.GetProductDetails,
	setProductAttributes: ProductAttributesActions.setProductAttributes,
	resetProductAttributes: ProductAttributesActions.resetProductAttributes,
	addCartProduct: ProductCartActions.addCartProduct
})(withParams(ProductDetails))