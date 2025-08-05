import Image from 'next/image';
import React from 'react';

export default function AboutSectionStyle2({ title, subTitle, imgUrl, points = [] }) {
  return (
    <section className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_5" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="cs_section_heading cs_style_1">
              <h2 className="cs_section_title cs_fs_72 m-0">{title}</h2>
              <div className="cs_height_54 cs_height_xl_30" />
              <p className="m-0">{subTitle}</p>
              
              {/* Points Section - Debugging first */}
              <div className="mt-4">
                <h4>Key Features:</h4>
                <ul className="list-unstyled">
                  {points.map((point, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <span className="me-2 text-accent">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs_height_120 cs_height_xl_60" />
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="cs_service_detail_img">
              <Image 
                src={imgUrl} 
                alt={title} 
                width={800} 
                height={600}
                className="cs_radius_15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}