"use client";
import React, { useState } from 'react';
import Rating from '../Rating';
import Image from 'next/image';

export default function Testimonial({ reviews }) {
  const [activeTab, setActiveTab] = useState(0); // Start with first review as active

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        {reviews?.map((review, index) => (
          <li key={index} className={activeTab === index ? 'active' : ''}>
            <div 
              className="cs_tab_link_in" 
              onClick={() => handleTabClick(index)}
            >
              <div className="cs_testimonial_1_avatar">
                <Image 
                  src={review.imgSrc} 
                  alt="Avatar" 
                  height={125} 
                  width={125} 
                />
                <div className="cs_testimonial_1_avatar_right">
                  <h3 className="cs_fs_24 cs_semibold mb-0">{review.name}</h3>
                  <p className="cs_heading_color mb-0">{review.location}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="cs_tab_body">
        {reviews.map((review, index) => (
          activeTab === index && (
            <div key={index} className="cs_testimonial cs_style_1">
              <Image 
                src="/images/icons/quote.svg" 
                alt="Icon" 
                height={38} 
                width={50} 
              />
              <p>{review.testimonial}</p>
              <Rating ratingNumber={review.rating} />
            </div>
          )
        ))}
      </div>
    </div>
  );
}