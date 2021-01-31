import React, { useState, useRef, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

type HoverImageProps = {
	src: string;
	style: React.CSSProperties;
};

HoverImage.defaultProps = {
	src: '',
	style: {},
};

function HoverImage({ src, style }: HoverImageProps) {
	const [isHovering, setIsHovering] = useState(false);
	const { opacityAnim } = useSpring({
		opacityAnim: isHovering ? 1 : 0,
		from: { opacityAnim: 0 },
		config: { duration: 400 },
	});
	const handleHover = () => setIsHovering(!isHovering);

	return (
		<div
			style={style}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<animated.div
				style={{
					opacity: opacityAnim.interpolate({
						range: [0, 1],
						output: [0.0, 1],
					}),
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<img className="object-center object-cover h-full w-full" src={src}/>
			</animated.div>
		</div>
	);
}

export default memo(HoverImage);
