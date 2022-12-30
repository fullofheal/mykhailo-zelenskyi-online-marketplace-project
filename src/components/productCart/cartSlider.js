import { PureComponent } from "react";
import Arrow from '../../icons/ArrowBig';

class CartSlider extends PureComponent {

	state = {
		currentIndex: 1,
		offset: 0
	}

	changeSlide = (i, gallery) => {
		if (i === 1) {
			this.state.offset === gallery.length * 200 - 200 ? 
			this.setState({
				offset: 0
			}) : 
			this.setState({
				offset: this.state.offset + 200
			})
		} else {
			this.state.offset === 0 ? 
			this.setState({
				offset: gallery.length * 200 - 200
			}) : 
			this.setState({
				offset: this.state.offset - 200
			})
		}
	}

	render() {

		const picturesFieldWidth = {
			width: `${this.props.gallery.length * 200}px`,
			transform: `translateX(-${this.state.offset}px)`
		}

		return this.props.isSlider ? (
			<div className="cart-item__slider">
			<div className="cart-item__wrapper">
				<div className="cart-item__field" style={picturesFieldWidth}>
					{this.props.gallery && this.props.gallery.map((pictureUrl, i) => {
						return <li 
						className="cart-item__picture"
						key={`picture ${i}`}>
						<img src={pictureUrl} alt={`product pic${i + 1}`} />
					</li>
				})}
				</div>
				<div className="cart-item__arrows">
					<div 
					className="cart-item__arrow"
					onClick={() => this.changeSlide(-1, this.props.gallery)}>
						<Arrow isWhite={true} isLeft={true}/>
					</div>
					<div 
					className="cart-item__arrow"
					onClick={() => this.changeSlide(1, this.props.gallery)}>
						<Arrow isWhite={true} isRight={true}/>
					</div>
				</div>
			</div>
		</div>
		) : (<div className="cart-item__slider">
		<div className="cart-item__wrapper">
			<div className="cart-item__field">
				{this.props.gallery && <div 
					className="cart-item__picture"
					key={this.props.gallery[0]}>
					<img src={this.props.gallery[0]} alt={this.props.gallery[0]} />
				</div>}
			</div>
		</div>
	</div>)
	}
}

export default CartSlider;