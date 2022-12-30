import { PureComponent } from "react";

class Arrow extends PureComponent {

	render() {
		return <svg className="pictures__arrow-icon" width="14" height="7" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" transform={this.props.isUp ? "rotate(180)" : this.props.isLeft ? "rotate(90)" : this.props.isRight ? "rotate(270)" : ''}>
		<path d="M1 0.5L4 3.5L7 0.5" stroke={this.props.isWhite ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	}
	
}

export default Arrow;