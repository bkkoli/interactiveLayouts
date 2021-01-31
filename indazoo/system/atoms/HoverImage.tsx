import React, { useState, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HoverImageProps = {
	src: string;
	width: number;
	height: number;
};

HoverImage.defaultProps = {
	src: '',
	width: 100,
	height: 100
};

function HoverImage({ src, width, height }: HoverImageProps) {
	const [isHovering, setIsHovering] = useState(false);

	const handleHover = () => setIsHovering(!isHovering);

	return (
		<img src={src} width={isHovering ? width * 2 : width} height={height} onMouseEnter={handleHover} onMouseLeave={handleHover} />
	);
}

export default memo(HoverImage);
