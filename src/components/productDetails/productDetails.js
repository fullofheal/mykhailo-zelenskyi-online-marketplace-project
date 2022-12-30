import { Component } from "react";
import ProductDetailsActions from "../../actions/ProductDetailsActions";
import ProductAttributesActions from "../../actions/ProductAttributes";
import ProductCartActions from "../../actions/ProductCartActions";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsPictures from "./detailsPictures/detailsPictures";
import DetailsInfo from "./detailsInfo/detailsInfo";
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
		return <div className="details">
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
	}
}


const mapStateToProps = state => ({
	productId: state.productDetails.productId,
	productDetails: state.productDetails.productDetails,
	productAttributes: state.productDetails.productAttributes,
	currencyType: state.currencies.currencyType
  });

export default connect(mapStateToProps, {
	getProductDetails: ProductDetailsActions.GetProductDetails,
	setProductAttributes: ProductAttributesActions.setProductAttributes,
	resetProductAttributes: ProductAttributesActions.resetProductAttributes,
	addCartProduct: ProductCartActions.addCartProduct
})(withParams(ProductDetails))