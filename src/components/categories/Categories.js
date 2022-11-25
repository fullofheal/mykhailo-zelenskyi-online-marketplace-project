import { Component } from "react";
import CategoriesActions from '../../actions/CategoriesActions';
import { connect } from 'react-redux';
import './Categories.scss';

class Categories extends Component{


	componentDidMount() {
		this.props.getCategories();
	}
	
	componentDidUpdate() {
		console.log(this.props);
	}


	render() {


	return (
			<div className="categories__btns">
			{this.props.categories.map(category => {
				return <button 
				key={category.name}
				href="#"
				className="button button__main">
				<div className="inner">
				{category.name}
				</div>
				</button>
			})}
			</div>
	);
	}
}

const mapStateToProps = state => ({
	categories: state.categories.categories
  });
  
  
  export default connect(mapStateToProps, {
	getCategories: CategoriesActions.GetCategories
  })(Categories);