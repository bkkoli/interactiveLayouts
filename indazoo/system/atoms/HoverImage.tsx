import React, { useState, useRef, memo } from 'react';

type HoverImageProps = {
	src: string;
};

HoverImage.defaultProps = {
	src: '',
};

function HoverImage({ src }: HoverImageProps) {
	const [isHovering, setIsHovering] = useState(false);

	const handleHover = () => setIsHovering(!isHovering);

	return (
		<img src={src} onMouseEnter={handleHover} onMouseLeave={handleHover} />
	);
}

export default memo(HoverImage);
