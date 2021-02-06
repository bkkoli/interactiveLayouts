import React from 'react';
import HoverImage from '../system/atoms/HoverImage';
import HoverLayout2x3 from '../system/molecules/HoverLayout2x3';

function TestComponent() {
	return (
		<HoverLayout2x3
            className="flex"
			srcs={[
				'src/img/common/bkkoli.jpeg',
				'src/img/common/circle_c-in.jpeg',
				'src/img/common/profile-c-in.jpeg',
				'src/img/contact/contact_left.jpeg',
				'src/img/common/logo_black.png',
				'src/img/common/bkkoli.jpeg',
            ]}
            backgroundSrc="https://www.youtube.com/embed/ucQVAVu5k9g"
		/>
	);
}

export default TestComponent;
