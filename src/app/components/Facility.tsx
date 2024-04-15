import React from "react";
import Image from "next/image";

const Facility = () => {
	return (
		<div className='max-w-screen-xl mx-auto relative text-white rgba mb-10'>
			<div className='sm:p-[120px] px-6 py-6'>
				<h1 className='text-xl font-semibold border-l-[4px] px-2 mb-10' >More Facilities</h1>
				<h1 className='mt-4 text-xl font-bold md:text-2xl'>
					Inko Jaya Konstruksi Services You More
				</h1>
				<p className='font-bold mt-4 max-w-lg'>
					We will provide you with better quality services by further strengthening our core assets that can be utilized continuously
				</p>
				<div className='mt-10 p-4 flex flex-row gap-20 bg-yellow-300 max-w-lg font-semibold rounded-lg text-[#504e4d]'>
					<ul className='flex flex-col'>
						<li>Best Quality Work</li>
						<li>Top Quality Equipment</li>
						<li>Experienced Workers</li>
						<li>Best Engineers</li>
					</ul>
					<ul className='flex flex-col'>
						<li>Budget-Friendly</li>
						<li>Great Understanding</li>
						<li>Emergency Support</li>
						<li>Responsible Reasonable</li>
					</ul>
				</div>
			</div>	
			<Image 
				src='/images/crane.jpg' alt='background-img' fill={true} 
				className='object-cover z-[-5]'
			/>
		</div>
	);
};

export default Facility;
