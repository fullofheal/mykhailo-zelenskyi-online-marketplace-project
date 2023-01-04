import { Component } from "react";
import CategoriesActions from "../../store/actions/CategoriesActions";
import GetProductsActions from "../../store/actions/GetProducts";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/errorMessage";
import './Categories.scss';

class Categories extends Component{

	categoryRefs = [];

	componentDidMount() {
		this.props.getCategories();
	}

	componentDidUpdate() {
		this.focusOnCategory(0);
	}

	setRef = (ref) => {
		this.categoryRefs.push(ref);
	}

	focusOnCategory = (i) => {
		this.categoryRefs.forEach(category => category.classList.remove('active'));
		this.categoryRefs[i].classList.add("active");
    }

	onClickCategory(categoryName) {
		this.props.getProductList(categoryName)
	}

	render() {
		return (
				this.props.error ? <ErrorMessage/> : <div className="categories">
				{this.props.categories.map((category, i) => {
					return <Link key={category.name} to="/">
								<button 
								className="categories__btn"
								ref={this.setRef}
								onClick={() => {
									this.focusOnCategory(i);
									this.onClickCategory(category.name);
								}}>
									<div className="categories__name">
									{category.name.toUpperCase()}
									</div>
								</button>
					</Link>
				})}
				</div>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories.categories,
	error: state.categories.error
  });
  
  
  export default connect(mapStateToProps, {
	getCategories: CategoriesActions.GetCategories,
	getProductList: GetProductsActions.GetProducts
  })(Categories);