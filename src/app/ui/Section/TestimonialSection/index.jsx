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
      name: "Dorcas Ntiamoah",
      location: "Koforidua",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "I’ve had an amazing experience with ND Healthcare. The staff are not only professional but also incredibly warm and attentive. From the front desk to the clinical team, everyone made me feel heard and cared for. It's clear that patient well-being is their top priority. Highly recommend!",
      rating: 5,
    },
    {
      name: "Chirag Patel",
      location: "Accra",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "Finding a trustworthy nanny can be difficult, but ND Healthcare made the process smooth and reassuring. The nanny assigned to our family was punctual, loving, and highly trained in child care and safety.",
      rating: 4.5,
    },
    {
      name: "Afi Quarshie",
      location: "Kumasi",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "The staff are knowledgeable, empathetic, and always willing to go the extra mile. If you’re looking for a healthcare partner that treats you like family, this is it.",
      rating: 4.5,
    },
    {
      name: "Lina AbiRafeh",
      location: "Accra",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "The nanny connected with our child immediately and maintained a balance of fun and discipline. It gave us peace of mind knowing our child was in good hands while we worked. I highly recommend NDH’s nanny services to any parent looking for reliable and professional care at home..",
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
        style={{ textAlign: "right", float: "right" }}
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
