"use client";
import React, { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Button from "../Button";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import useAxios from "@/app/utils/useAxios";
import swal from "sweetalert2";

export default function ContactForm() {
  const api = useAxios();
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
            We&apos;re here to help Reach out to us and we&apos;ll get back to
            you as soon as possible.
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
          <Formik
            validateOnBlur
            validateOnChange={false}
            initialValues={{
              name: "",
              phoneNumber: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              phoneNumber: Yup.string().required("Required"),
              subject: Yup.string().required("Required"),

              message: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={async (values, { resetForm }) => {
              const { name, email, phoneNumber, subject, message } = values;

              try {
               await api.post("api/contact", {
                  name,
                  email,
                  phoneNumber,
                  subject,
                  message,
                });
                swal.fire({
                  title: "Message Submitted",
                  icon: "success",
                  toast: true,
                  timer: 3000,
                  position: "top-right",
                  timerProgressBar: true,
                  showConfirmButton: false,
                });
                resetForm();
              } catch (error) {
                console.error(error);
                swal.fire({
                  title: "Error",
                  text: "There was an error submitting your message. Please try again later.",
                  icon: "error",
                  toast: true,
                  timer: 3000,
                  position: "top-right",
                  timerProgressBar: true,
                  showConfirmButton: false,
                });
              }
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              isSubmitting,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="cs_form_field"
                            placeholder="David John"
                            value={values.name}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="example@gmail.com"
                            value={values.email}
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
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="cs_form_field"
                            placeholder="0123 456 789"
                            value={values.phoneNumber}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="cs_form_field"
                            placeholder="Your subject"
                            value={values.subject}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            required
                          />
                          <div className="cs_height_42 cs_height_xl_25" />
                        </div>

                        <div className="cs_btn_wrapper">
                          <button
                            disabled={isSubmitting}
                            type="submit"
                            className="cs_btn cs_style_1"
                          >
                            {/* Using isSubmitting to disable the button during submission */}
                            {isSubmitting ? (
                              <span>Submitting...</span>
                            ) : (
                              <span>Submit</span>
                            )}

                            <i>
                              <Image
                                src="/images/icons/arrow_white.svg"
                                alt="Icon"
                                height={11}
                                width={15}
                              />
                              <Image
                                src="/images/icons/arrow_white.svg"
                                alt="Icon"
                                height={11}
                                width={15}
                              />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
