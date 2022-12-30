import { PureComponent } from "react";
import Arrow from "../../../icons/ArrowBig";

class Slider extends PureComponent {

	state = {
		offset: 0,
		isDownDisabled: false,
		isUpDisabled: true
	}

	slideDown = () => {
		if (this.state.offset >= (this.props.pictures.length * 120) - (120*5)) {
			this.setState({offset: this.state.offset + 120, isDownDisabled: true, isUpDisabled: false})
		} else {
			this.setState({offset: this.state.offset + 120, isUpDisabled: false})
		}
	}

	
	slideUp = () => {
		if (this.state.offset <= 120) {this.setState({offset: this.state.offset - 120, isUpDisabled: true, isDownDisabled: false})
		} else {
			this.setState({offset: this.state.offset - 120, isDownDisabled: false})
		}
	}

	render() {
	
		const slider = this.props.pictures.length < 5 ? false : true;

		const picturesFieldHeight = {
			height: `${this.props.pictures.length * 120}px`,
			transform: `translateY(-${this.state.offset}px)`
		}

		const picturesList = this.props.pictures.map((imgUrl, i)=> {
			return <li 
				className="pictures__item"
				key={`picture ${i}`}
				onClick={() => this.props.setMainPicture(imgUrl)}>
				<img src={imgUrl} alt={`product pic${i}`} />
			</li>
		})

		return (
				<div className="pictures__slider">
					<ul className="pictures__list">
						<div className="pictures__field" style={picturesFieldHeight}>
							{picturesList}
						</div>
				</ul>
					{slider && (<button 
									className="pictures__arrow_up" 
									disabled={this.state.isUpDisabled} 
									onClick={this.slideUp}
									style={this.state.isUpDisabled ? {opacity: 0.3} : {opacity: 1}}>
										<Arrow isUp={true}/>
								</button>)}
					{slider && (<button 
									className="pictures__arrow_down" 
									disabled={this.state.isDownDisabled} 
									onClick={this.slideDown}
									style={this.state.isDownDisabled ? {opacity: 0.3} : {opacity: 1}}>
										<Arrow/>
										</button>)} 
				</div>
		)
	}
}

export default Slider;