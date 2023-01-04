import { PureComponent } from 'react';
import img from './error.gif';

class ErrorMessage extends PureComponent {
	render() {
		return (
			<img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} alt='error' src={img}/>
		)
	}
}

export default ErrorMessage;