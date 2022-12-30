import { PureComponent } from "react";
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";
import Currencies from "../currencies/Currencies";
import CartLink from "../productCart/cartLink/cartLink";
import ShopIcon from "../../icons/shopIcon";
import './header.scss';

class Header extends PureComponent {

	render() {
		return <div className="header">
					<div className="header__bar">
					<Categories/>
					<Link to="/" className="header__icon">
						<ShopIcon />
					</Link>
					<div className="header__right">
						<Currencies />
						<CartLink/>
					</div>
				</div>
		</div>
	}
}

export default Header;