import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<div>
		<Link href="/">Home</Link>
		<Link href="/about">About</Link>
	</div>
);

export default Header;
