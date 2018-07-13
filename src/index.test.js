import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import VimeoVideo from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<VimeoVideo {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('VimeoVideo component', () => {

	it('should render the component', () => {
		const { container } = setup({ src: 'https://vimeo.com/30281976' })
		expect(container.exists()).toBe(true);
	});

	it('should not render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(false);
	});

	it('should has dangerouslySetInnerHTML property', () => {
		const { container } = setup({ src: 'https://vimeo.com/30281976' })
		expect(container.find('.vimeo_video').children().props()).toHaveProperty('dangerouslySetInnerHTML');
	});

});
