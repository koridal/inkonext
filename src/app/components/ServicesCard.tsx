'use client';
import React from "react";
import Image from 'next/image';

const ServicesCard = () => {
	return (
		<section className="service-style-three pb-70">
      <div className="max-w-screen-xl mx-auto mb-10">
        < div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:gap-6">
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img construction">
              </div>
              <div className="service-content">
                <Image alt="city" src="/images/city.svg" width={20} height={20} />
                <h3>Construction</h3>
                <p>
									Construction design and building <br />
									Construction regulation review <br />
									Earthquake-proof and structure calculation <br />
									Maintenance
								</p>
                <a href="service-details.html" className="service-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img fire-fighting">
              </div>
              <div className="service-content">
                <Image alt="fire-fighting" src="/images/fire-fighting.svg" width={20} height={20}/>
                <h3>Fire-fighting Equipment</h3>
                <p>
									Fire fighting facility design and construction <br />
									Fire fighting regulation review <br />
									Evacuation and rescue facilities <br />
									Maintenance
                </p>
                <a href="service-details.html" className="service-btn">Read More</a>
              </div>
            </div>
          </div>
				</div>
				< div className="grid grid-cols-1 sm:grid-cols-2 px-4 gap-6">
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img machinery">
              </div>
              <div className="service-content">
                <Image alt="machine" src="/images/machine.svg" width={20} height={20}/>
                <h3>Machinery</h3>
                <p>
                  Machinery design and construction <br />
                  Machinery regulation review <br />
                  Selecting equipment for manufacturing process <br /> 
                  Maintenance 
                </p>
                <a href="service-details.html" className="service-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
					<div className="col-lg-4 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img electric">
              </div>
              <div className="service-content">
                <Image alt="s1" src="/images/s3.svg" width={20} height={20}/>
                <h3>Electrical Equipment</h3>
                <p>
                  Electrical facility design and construction <br /> 
                  Electrical regulation review <br /> 
                  Energy saving suggestion <br /> 
                  Maintenance 
                </p>
                <a href="service-details.html" className="service-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
			</div>
    </section>
	);
};

export default ServicesCard;
