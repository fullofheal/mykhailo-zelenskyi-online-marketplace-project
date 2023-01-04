import { Component } from "react";
import CurrenciesActions from "../../store/actions/CurrenciesActions";
import { connect } from 'react-redux';
import ArrowSmall from "../../icons/ArrowSmall";
import ErrorMessage from "../errorMessage/errorMessage";
import './Currencies.scss';

class Currencies extends Component{

	state = {
		showMenu: false,
		selectedValue: '$'
	};

	componentDidMount() {
		this.props.getCurrencies();

		window.addEventListener('click', () => {
			this.setState({
				showMenu: false
			});
		});
	}

	componentWillUnmount() {
		window.removeEventListener('click', () => {
			this.setState({
				showMenu: false
			});
		})
	}

	onMenuClicked = (e) => {
		e.stopPropagation();
		this.setState({
			showMenu: !this.state.showMenu
		})
	}

	onCurrencyClicked = (currencySelected) => {
		this.setState({
			selectedValue: currencySelected.symbol
		})
	}
	
	render() {
		return (
			this.props.error ? <ErrorMessage/> : 
			<div className="dropdown">
				<div 
				className="dropdown__input"
				onClick={this.onMenuClicked}>
					<div className="dropdown__selected">{this.state.selectedValue}</div>
					<div className="dropdown__tool">
							<ArrowSmall isUp={this.state.showMenu ? true : false} />
					</div>
				</div>
				{this.state.showMenu && (
					<div className="dropdown__menu">
					{this.props.currencies.map(currency => (
						<div 
						key={currency.label} 
						className="dropdown__item"
						onClick={() => {
							this.onCurrencyClicked(currency);
							this.props.getCurrencyType(currency.symbol);
						}}>
						<span>{currency.symbol} {currency.label}</span>
						</div>
					))}
					</div>
				)}
	</div>	
		);
	}
}

const mapStateToProps = state => ({
	currencies: state.currencies.currencies,
	error: state.currencies.error,
	currencyType: state.currencies.currencyType
  });
  
  
export default connect(mapStateToProps, {
	getCurrencies: CurrenciesActions.GetCurrencies,
	getCurrencyType: CurrenciesActions.GetCurrencyType
  })(Currencies);