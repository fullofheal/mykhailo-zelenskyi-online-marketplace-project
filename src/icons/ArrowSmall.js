import { PureComponent } from "react";

class ArrowSmall extends PureComponent {

	render() {
		return <svg width="10" height="5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" transform={this.props.isUp ? "rotate(180)" : ''}>
		<path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	}
	
}

export default ArrowSmall;