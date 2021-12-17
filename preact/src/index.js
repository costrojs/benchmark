import { h } from 'preact';
import { Router } from 'preact-router';

import Navigation from './components/navigation';
import Home from './routes/home';
import About from './routes/about';

const App = () => (
	<div id="app">
		<Navigation />
		<Router>
			<Home path="/" />
			<About path="/about" />
		</Router>
	</div>
);

export default App;
