import { Component } from 'costro';
import { h } from 'costro/jsx';
import Navigation from '../components/navigation';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<h2>Home</h2>
			</div>
		);
	}
}
