import useAxios from "@/app/utils/useAxios";
import { subtle } from "crypto";
import React, { useState } from "react";
import swal from "sweetalert";

export default function PartnerFormSection({
  sectionTitle = "Become a Partner",
}) {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    role: "",
    email: "",
    contact: "",
  });

  const api = useAxios();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    if (
      !formData.name ||
      !formData.institution ||
      !formData.role ||
      !formData.email ||
      !formData.contact
    ) {
      swal.fire({
        title: "Error",
        text: "Please fill in all required fields.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
       await api.post("api/partnerships/create", {
        name: formData.name,
        institution: formData.institution,
        role: formData.role,
        email: formData.email,
        phoneNumber: formData.contact,
      });

      swal.fire({
        title: "Partnership Request Submitted",
        subtitle: "Thank you for your interest in partnering with us!",
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setFormData({
        name: "",
        institution: "",
        role: "",
        email: "",
        contact: "",
      });
    } catch (error) {
      swal.fire({
        title: "Error",
        text: "There was an error submitting your request. Please try again later.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cs_shape_wrap">
      <div className="cs_shape_1" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h2 className="cs_section_title cs_ternary_color cs_fs_72 m-0">
            <strong>{sectionTitle}</strong>
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
                {/* First Row - Name & Institution */}
                <div className="cs_form_row">
                  <div className="">
                    <label htmlFor="name" className="cs_form_label">
                      Name <span className="cs_required"></span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="cs_form_field_input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="">
                    <label htmlFor="institution" className="cs_form_label">
                      Institution <span className="cs_required"></span>
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="cs_form_field_input"
                      placeholder="Enter your institution name"
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Role & Email */}
                <div className="cs_form_row">
                  <div className="">
                    <label htmlFor="role" className="cs_form_label">
                      Role <span className="cs_required"></span>
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="cs_form_field_input"
                      placeholder="Enter your role/position"
                      required
                    />
                  </div>

                  <div className="">
                    <label htmlFor="email" className="cs_form_label">
                      Email <span className="cs_required"></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="cs_form_field_input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* Third Row - Contact (full width) */}
                <div className="cs_form_row">
                  <div className=" cs_form_field_full">
                    <label htmlFor="contact" className="cs_form_label">
                      Contact <span className="cs_required"></span>
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="cs_form_field_input"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button Row */}
               <div className=" d-flex justify-content-center">
                  <div className="cs_btn cs_style_1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span>
                        {isSubmitting
                          ? "Submitting..."
                          : "Submit  Request"}
                      </span>
                      {/* {!isSubmitting && (
                        <i>
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path 
                              d="M15.7071 6.20711C16.0976 5.81658 16.0976 5.18342 15.7071 4.79289L10.3431 -0.571054C9.95262 -0.961578 9.31946 -0.961578 8.92893 -0.571054C8.53841 -0.180529 8.53841 0.452635 8.92893 0.843159L13.5858 5.5L8.92893 10.1568C8.53841 10.5474 8.53841 11.1805 8.92893 11.5711C9.31946 11.9616 9.95262 11.9616 10.3431 11.5711L15.7071 6.20711ZM0 6.5H15V4.5H0V6.5Z" 
                              fill="currentColor"
                            />
                          </svg>
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path 
                              d="M15.7071 6.20711C16.0976 5.81658 16.0976 5.18342 15.7071 4.79289L10.3431 -0.571054C9.95262 -0.961578 9.31946 -0.961578 8.92893 -0.571054C8.53841 -0.180529 8.53841 0.452635 8.92893 0.843159L13.5858 5.5L8.92893 10.1568C8.53841 10.5474 8.53841 11.1805 8.92893 11.5711C9.31946 11.9616 9.95262 11.9616 10.3431 11.5711L15.7071 6.20711ZM0 6.5H15V4.5H0V6.5Z" 
                              fill="currentColor"
                            />
                          </svg>
                        </i>
                      )} */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
