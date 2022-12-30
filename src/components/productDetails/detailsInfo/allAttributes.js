import { PureComponent } from "react";
import Attribute from "./attribute";

class Attributes extends PureComponent {

	render() {

		const sortedAttributes = this.props.attributes ? [...this.props.attributes].sort((a, b) => a.id === "Color" ? 1 : -1) : [];

		const setAttribute = () => {
			return this.props.attributes ? (
				sortedAttributes.map(attributeSet => {
					return <Attribute 
					isOverlay={this.props.isOverlay}
					key={attributeSet.id} 
					attributeSet={attributeSet}
					setProductAttributes={this.props.setProductAttributes}
					selectedProduct={this.props.selectedProduct ? this.props.selectedProduct: null}/>
				})
			) : ''
		};

		return (
			<div className="details__attributes">
				{setAttribute()}
			</div>
		)
	}
}

export default Attributes;