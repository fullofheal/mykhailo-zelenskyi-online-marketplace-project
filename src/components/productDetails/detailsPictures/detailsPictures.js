import { PureComponent } from "react";
import Slider from "./slider";
import './detailsPictures.scss';

class DetailsPictures extends PureComponent {

	state = {
		mainUrl: "",
	}

	setMainPicture = (pictureUrl) => {
		this.setState({
			mainUrl: pictureUrl
		})
	}

	

	render() {

		const inStock = this.props.inStock ? '' : 'out-of-stock'

		return (
			<div className="pictures">
				<Slider pictures={this.props.pictures} setMainPicture={this.setMainPicture}/>
				<div className={`pictures__main ${inStock}`}>
					<img src={this.state.mainUrl ? this.state.mainUrl : this.props.pictures[0]} alt={this.state.mainUrl} />
				</div>
			</div>
		)
	}
}

export default DetailsPictures;