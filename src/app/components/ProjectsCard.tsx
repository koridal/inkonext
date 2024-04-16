'use client';
import React from "react";
import Image from 'next/image';

const ProjectsCard = () => {
	return (
		<section className="service-style-three pb-70">
      <div className="max-w-screen-xl mx-auto sm:mb-10">
        < div className="grid grid-cols-1 sm:grid-cols-4 px-4 sm:gap-4">
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img warehouse">
              </div>
              <div className="service-content">
                <h3>Ware House</h3>
                <p>
                  4,000 Square Meter <br />
                  <br />
                  Main Building <br />
                  <br />
                </p>
                <a href="service-details.html" className="service-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img new-plant">
              </div>
              <div className="service-content">
                <h3>New-Plant</h3>
                <p>
									15,000 Square Meter <br />
                  <br />
									Main Building <br />
                  <br />
                </p>
                <a href="service-details.html" className="service-btn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img dormitory">
              </div>
              <div className="service-content">
                <h3>Dormitory</h3>
                <p>
                  3,888 + 1,386 Square Meter <br />
                  <br />
                  100 rooms 3rd Floor <br />
                  Sports Center <br /> 
                </p>
                <a href="service-details.html" className="service-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
					<div className="col-lg-4 col-sm-6">
            <div className="service-card text-center">
              <div className="service-img hydrant">
              </div>
              <div className="service-content">
                <h3>Hydrant System</h3>
                <p>
                  <br />
                  <br />
                  Chiller System <br /> 
                  Hydrant System                
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

export default ProjectsCard;
