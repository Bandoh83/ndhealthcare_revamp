"use client";
import React, { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Button from "../Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToData: false,
  });

  return (
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <div className="cs_contact_form_wrap">
        <div className="cs_section_heading cs_style_1 text-center">
          <h4 className="cs_section_title">
            Have Questions?
            <br />
            Get in touch
          </h4>
          <div className="cs_height_18" />
          <p className="cs_section_subtitle">
            We're here to help Reach out to us and we'll get back to you as soon
            as possible.
          </p>
          <div className="cs_height_55" />
        </div>

        <div className="row">
          {/* Left Side - Contact Information */}
          <div className="col-lg-5">
            <div className="cs_contact_info_wrap">
              <div className="cs_contact_info_item">
                <div className="cs_contact_info_icon">
                  <HiLocationMarker size={20} />
                </div>
                <div className="cs_contact_info_right">
                  <p>
                    City Galleria, 4th Floor opposite the Accra Mall off the
                    Spintex Road,
                  </p>
                </div>
              </div>

              <div className="cs_contact_info_item">
                <div className="cs_contact_info_icon">
                  <HiPhone size={20} />
                </div>
                <div className="cs_contact_info_right">
                  <p>024 823 3368</p>
                </div>
              </div>

              <div className="cs_contact_info_item">
                <div className="cs_contact_info_icon">
                  <HiMail size={20} />
                </div>
                <div className="cs_contact_info_right">
                  <p>info@ndhealthcare.net</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div className="cs_form_wrap">
              <div className="row">
                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="cs_form_field"
                    placeholder="David John"
                    value={formData.name}
                    required
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="cs_form_field"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    required
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="cs_form_field"
                    placeholder="0123 456 789"
                    value={formData.phone}
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>
                <div className="col-lg-6">
                  <label className="cs_input_label cs_heading_color">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="cs_form_field"
                    placeholder="Your subject"
                    value={formData.subject}
                    required
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>
                <div className="col-lg-12">
                  <label className="cs_input_label cs_heading_color">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="cs_form_field cs_textarea"
                    placeholder="Your message"
                    rows="3"
                    value={formData.message}
                    required
                  />
                  <div className="cs_height_42 cs_height_xl_25" />
                </div>

                <div className="cs_btn_wrapper">
                  <Button
                    btnUrl="#"
                    btnText="Submit"
                    variant="cs_btn_orange cs_radius_25 w-100 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
