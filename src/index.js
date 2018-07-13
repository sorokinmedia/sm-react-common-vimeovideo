import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function VimeoVideo(props) {
	const { src } = props;

	if (!src) return null;

	const frame = `<iframe
            src="https://player.vimeo.com/video/${src.replace('https://vimeo.com/', '')}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
        />`
	return (
		<div className="vimeo_video form-group embed-container">
			<div dangerouslySetInnerHTML={{ __html: frame }} />
		</div>)
}


VimeoVideo.propTypes = {
	src: PropTypes.string.isRequired
};

export default VimeoVideo
