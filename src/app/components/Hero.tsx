'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo('#text',
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, delay: 1.5, stagger: 0.1 }
		);
	}, []);

	return (
		<div className="w-full flex relative">
			<video
				src="/videos/crane.mp4"
				className="object-cover mx-auto max-h-screen"
				autoPlay
				loop
				muted
			/>
			<div className="content" id="text">
				<h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-6xl text-white pl-[64px] xl:pl-[240px]">
					An Expert Construction <br />
					Services &nbsp;you can &nbsp;Trust
				</h1>
				<p className="text-sm w-[360px] mt-4 md:w-full text-gray-100 pl-[72px] md:text-lg xl:pl-[240px]">
					You want it, We will do best to Build on Creative
					Architectural & Solution
				</p>
			</div>
		</div>
	);
};

export default Hero;
