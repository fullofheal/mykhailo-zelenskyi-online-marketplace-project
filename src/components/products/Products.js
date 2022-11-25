import { Component } from "react";
import ProductsActions from '../../actions/ProductsActions';
import { connect } from 'react-redux';

class Products extends Component{

	componentDidMount() {
		this.props.getProducts();
	}

	componentDidUpdate() {
		console.log(this.props);
	}

	render() {
		return (
				<div>
					{this.props.products.map(category => {
						return <div key={category.name}>
							{category.name}
							{category.products.map(product => {
								return <div key={product.id}>
									{product.name}
								</div>
							})}
						</div>
					})}
				</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.products
  });
  
  
  export default connect(mapStateToProps, {
	getProducts: ProductsActions.GetProducts
  })(Products);