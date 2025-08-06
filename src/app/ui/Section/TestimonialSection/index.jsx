"use client";
import React, { useState } from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import Testimonial from "../../Testimonial";
import { FaPlus } from "react-icons/fa";
import ReviewModal from "@/app/ui/ReviewModal";

export default function TestimonialSection({ sectionTitle, sectionTitleDown }) {
  const [reviews, setReviews] = useState([
    {
      name: "PAULO HUBERT",
      location: "New York, USA",
      imgSrc: "/images/home_1/avatar_1.png",
      testimonial:
        "I recently had to bring my child to Nd healthcare for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
      rating: 5,
    },
    {
      name: "LAURENCE VENDETTA",
      location: "Florida",
      imgSrc: "/images/home_1/avatar_2.png",
      testimonial:
        "The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. I recently had to bring my child to Nd healthcare for a minor injury, and I was so impressed with the care he received.",
      rating: 4.5,
    },
    {
      name: "CASSANDRA RAUL",
      location: "Florida",
      imgSrc: "/images/home_1/avatar_3.png",
      testimonial:
        "I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. I recently had to bring my child to Nd healthcare for a minor injury, and I was so impressed with the care he received.",
      rating: 4.5,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="container">
      <SectionHeading
        title={sectionTitle}
        titleDown={sectionTitleDown}
        center
      />
      <Spacing md="72" lg="50" />
      <Testimonial reviews={reviews} />
      <Spacing md="72" lg="50" />
      <button 
        className="cs_btn cs_style_1" 
        onClick={() => setIsModalOpen(true)}
      >
        <span>Add Review</span>
        <span className="ml-2 flex items-center justify-center">
          <FaPlus />
        </span>
      </button>
      
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>
  );
}