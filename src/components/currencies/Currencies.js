import { Component } from "react";
import CurrenciesActions from '../../actions/CurrenciesActions';
import { connect } from 'react-redux';

class Currencies extends Component{


	componentDidMount() {
		this.props.getCurrencies();
	  }
	
	componentDidUpdate() {
		console.log(this.props);
	  }


	render() {
		return (
				<div>
				{this.props.currencies.map(currency => {
					return <div key={currency.label}>
					{currency.label}
					</div>
				})}
				</div>
		);
	}
}

const mapStateToProps = state => ({
	currencies: state.currencies.currencies,
  });
  
  
export default connect(mapStateToProps, {
	getCurrencies: CurrenciesActions.GetCurrencies
  })(Currencies);