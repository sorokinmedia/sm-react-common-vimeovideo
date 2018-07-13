import React from 'react';
import { render } from 'react-dom';
import VimeoVideo from '../lib';

function App() {
	return (
		<div>
			<VimeoVideo src="https://vimeo.com/30281976" />
		</div>
	)
}

render(<App />, document.getElementById('root'));
