import React, { useState, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

type HoverImageProps = {
	src: string;
	width: number;
	height: number;
};

HoverImage.defaultProps = {
	src: '',
	width: 100,
	height: 100,
};

function HoverImage({ src, width, height }: HoverImageProps) {
	const [isHovering, setIsHovering] = useState(false);
	const { opacityAnim } = useSpring({
		opacityAnim: isHovering ? 1 : 0,
		from: { opacityAnim: 0 },
		config: { duration: 400 },
	});
	const handleHover = () => setIsHovering(!isHovering);

	return (
		<div
			style={{
				width: width,
				height: height,
				// TODO:- 추후 component로 합칠 때 이 backgroundColor 값만 빼줄것
				backgroundColor: '#000000'
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<animated.div
				style={{
					opacity: opacityAnim.interpolate({ range: [0, 1], output: [0.0, 1] }),
				}}
			>
				<img src={src} />
			</animated.div>
		</div>
	);
}

export default memo(HoverImage);
