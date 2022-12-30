import { PureComponent } from "react";

class Attribute extends PureComponent {

	attributeRefs = [];

	componentWillUnmount() {
		this.attributeRefs = [];
	}

	setRef = (ref) => {
		this.attributeRefs.push(ref);
	}

	focusOnAttribute = (i, isColor) => {

        this.attributeRefs.forEach(attribute => attribute.classList.remove(isColor ? 'details__attribute_color_selected' : 'details__attribute_selected'));
        this.attributeRefs[i].classList.add(isColor ? 'details__attribute_color_selected' : 'details__attribute_selected');
    }

	render() {
		
		const attributeWrapperClass = (attributeSet) => {
			return attributeSet.type === 'swatch' ? "details__wrapper_color" : "details__wrapper"
		}

		const attributeClass = (attribute, attributeSet, isColor) => {
			if (isColor) {
				return this.props.selectedProduct ? (
					this.props.selectedProduct.selectedAttributes.Color === attribute.value ? "details__attribute_color details__attribute_color_selected" : "details__attribute_color"
				) : "details__attribute_color"
			} else {
				if (this.props.selectedProduct) {
					const selectedAttribute = this.props.selectedProduct.selectedAttributes[attributeSet.id];

					return selectedAttribute === attribute.value ? "details__attribute details__attribute_selected" : "details__attribute"
				} else {
					return "details__attribute"
				}
			}
		}

		return (<div>
					<div className="details__header">{this.props.attributeSet.name}:</div>
					<div className={attributeWrapperClass(this.props.attributeSet)}>
						{this.props.attributeSet.items.map((attribute, i) => {
							return this.props.attributeSet.type === 'swatch' ? (
								<div 
								key={attribute.id} 
								className={attributeClass(attribute, this.props.attributeSet, true)}
								ref={this.setRef}
								onClick={this.props.isOverlay ? () => {} : () => {
									this.focusOnAttribute(i, true);
									this.props.setProductAttributes && this.props.setProductAttributes({
										attributeType: this.props.attributeSet.name,
										value: attribute.value
									})
								}}
								>
									<div style={{backgroundColor: `${attribute.value}`}}></div>
								</div>
							) : (
								<div 
								key={attribute.id} 
								className={attributeClass(attribute, this.props.attributeSet)}
								ref={this.setRef}
								onClick={this.props.isOverlay ? () => {} : () => {
									this.focusOnAttribute(i)
									this.props.setProductAttributes({
										attributeType: this.props.attributeSet.name,
										value: attribute.value
									})
								}}
								>{attribute.value}</div>
							)
						})}
					</div>
				</div>)
	}
}

export default Attribute;