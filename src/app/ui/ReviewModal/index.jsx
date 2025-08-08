"use client";
import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";


const ReviewModal = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setAvatarPreview(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    const previewUrl = URL.createObjectURL(file)
    setAvatarPreview(previewUrl)
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      location,
      testimonial: reviewText,
      rating,
      imgSrc:  avatarPreview || "/images/home_1/avatar_3.jpg",
      avatarFile,
    });
    setName("");
    setLocation("");
    setReviewText("");
    setRating(0);
    onClose();
  };

  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h2 className="cs_section_title cs_ternary_color cs_fs_72 m-0">
            <strong>Add Your Review</strong>
          </h2>
        </div>
        <div className="cs_height_72 cs_height_lg_50" />

        <div className="cs_partner_form_wrap">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <form
                onSubmit={handleSubmit}
                className="cs_partner_form cs_white_bg cs_radius_25 cs_shadow_1"
              >
                {/* Avatar Upload Section */}
                <div className="cs_form_field text-center mb-4">
                  <div
                    className="cs_avatar_upload"
                    onClick={triggerFileInput}
                    style={{ cursor: "pointer" }}
                  >
                    {avatarPreview ? (
                      <Image
                        src={avatarPreview}
                        width={100}
                        height={200}
                        alt="Avatar Preview"
                        className="cs_avatar_preview cs_radius_50"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <div className="cs_avatar_placeholder cs_radius_50">
                        <Icon
                          icon="fa6-solid:user-plus"
                          className="cs_fs_36 cs_orange_color"
                        />
                        <p className="cs_mb-0 cs_fs_14">Add Photo</p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  {avatarPreview && (
                    <div
                      className="cs_avatar_placeholder cs_radius_50"
                      onClick={() => {
                        setAvatarPreview(null);
                        setAvatarFile(null);
                      }}
                    >
                      <Icon
                        icon="fa6-solid:user-minus"
                        className="cs_fs_36 cs_orange_color"
                      />
                      <p className="cs_mb-0 cs_fs_14">Remove Photo</p>
                    </div>
                  )}
                </div>

                <div className="mb-4 cs_form_field">
                  <label htmlFor="name" className="cs_form_label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="cs_form_field_input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="cs_form_field mb-4">
                  <label htmlFor="location" className="cs_form_label">
                    Your Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="cs_form_field_input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    placeholder="California, USA"
                  />
                </div>

                <div className="cs_form_field cs_rating_field mb-4">
                  <label className="cs_form_label">Your Rating</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        <Icon
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          icon={
                            star <= (hoverRating || rating)
                              ? "fa6-solid:star"
                              : "fa6-regular:star"
                          }
                          className="cs_orange_color cs_fs_24 cs_cursor_pointer"
                        />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cs_form_field mb-4">
                  <label htmlFor="review" className="cs_form_label">
                    Your Review
                  </label>
                  <textarea
                    className="cs_form_field_input"
                    rows="4"
                    name="review"
                    id="review"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    placeholder="Write your review here..."
                  ></textarea>
                </div>

                <div className="cs_form_field cs_form_row">
                        <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_radius_5 cs_shadow_1"
                    disabled={isSubmitting}
                  >
                    <span className="cs_btn_icon ">
                      {isSubmitting ? (
                        <Icon icon="svg-spinners:180-ring mr-4" />
                      ) : (
                        <Icon icon="fa6-solid:paper-plane" />
                      )}
                      {isSubmitting ? "Submitting..." : "Submit Review"}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="cs_btn cs_outline_1 cs_radius_5"
                    onClick={onClose}
                  >
                    <span className="cs_btn_icon">
                      <Icon icon="fa6-solid:xmark" /> Cancel
                    </span>
                  </button>
          
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
