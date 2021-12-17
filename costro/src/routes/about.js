import { Component } from 'costro';
import { h } from 'costro/jsx';
import Navigation from '../components/navigation';

export default class About extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<h2>About</h2>
			</div>
		);
	}
}
