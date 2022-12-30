import { Component } from "react";
import CurrenciesActions from '../../actions/CurrenciesActions';
import { connect } from 'react-redux';
import ArrowSmall from "../../icons/ArrowSmall";
import './Currencies.scss';

class Currencies extends Component{

	state = {
		showMenu: false,
		selectedValue: '$'
	};

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

	componentDidMount() {
		this.props.getCurrencies();

		const hideMenu = () => {
			this.setState({
				showMenu: false
			});
		}
		window.addEventListener('click', hideMenu);

	}
	
	render() {
		return (
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
	currencyType: state.currencies.currencyType
  });
  
  
export default connect(mapStateToProps, {
	getCurrencies: CurrenciesActions.GetCurrencies,
	getCurrencyType: CurrenciesActions.GetCurrencyType
  })(Currencies);