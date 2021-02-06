import React from 'react';
import HoverImage from '../atoms/HoverImage';

type HoverLayout2x3Props = {
	srcs: string[];
	backgroundSrc: string;
	className: string;
};

HoverLayout2x3.defaultProps = {
	className: '',
};

function HoverLayout2x3({
	srcs,
	backgroundSrc,
	className,
}: HoverLayout2x3Props) {
	return (
		<div className={className}>
			<iframe
				className={"absolute w-full h-full"}
                src={backgroundSrc+"?rel=0&autoplay=1"}
				seamless
				allowFullScreen
				allow='autoplay; picture-in-picture'
			/>
			<div className="flex flex-col absolute w-full h-full">
				<div className='flex flex-1'>
					<HoverImage style={{ flex: 1 }} src={srcs[0]} />
					<HoverImage style={{ flex: 1 }} src={srcs[1]} />
					<HoverImage style={{ flex: 1 }} src={srcs[2]} />
				</div>
				<div className='flex flex-1'>
					<HoverImage style={{ flex: 1 }} src={srcs[3]} />
					<HoverImage style={{ flex: 1 }} src={srcs[4]} />
					<HoverImage style={{ flex: 1 }} src={srcs[5]} />
				</div>
			</div>
		</div>
	);
}

export default HoverLayout2x3;
