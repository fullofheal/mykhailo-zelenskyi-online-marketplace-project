import { PureComponent } from "react";
import './checkout.scss';

class Checkout extends PureComponent {
	
	render() {


		return (<div 
			className="checkout"
			onClick={this.props.closeCheckoutModal}>
					<div className="checkout__content">
						<div className="checkout__header">Thank you for trying out the demo of this marketplace.</div>
						<div className="checkout__text">For a full version please consider hiring me :D</div>
						<div className="checkout__ps">P.S. In any case this was a great experience building a project from scratch and I learnt a lot of new stuff. Thanks!</div>
					</div>
		</div>
		);
	}
}

export default Checkout;