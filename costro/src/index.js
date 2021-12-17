import { App } from 'costro';
import Home from './routes/home';
import About from './routes/about';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	}
];

const app = new App({
	target: document.querySelector('#app'),
	routes,
	mode: 'history'
});
