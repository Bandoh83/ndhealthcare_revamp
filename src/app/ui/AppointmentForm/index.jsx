"use client";
import { Icon } from "@iconify/react";
import { Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

export default function AppointmentForm({serviceType}) {
  const allServiceOptions = [
    {
      id: "fullSupport",
      value: "fullSupport",
      label: "Full Support Services",
      rate: "5,000",
    },
    {
      id: "babyChildCare",
      value: "babyChildCare",
      label: "Baby and Child Care",
      rate: "4,000",
    },
    {
      id: "homeVisits",
      value: "homeVisits",
      label: "Home Visits/Assessments",
      rate: "2,000",
    },
    {
      id: "postSurgical",
      value: "postSurgical",
      label: "Post-Surgical Care",
      rate: "3,000",
    },
    {
      id: "neurological",
      value: "neurological",
      label: "Neurological Care",
      rate: "2,000",
    },
    { id: "autism", value: "autism", label: "Autism Care", rate: "4,000" },
    {
      id: "dementia",
      value: "dementia",
      label: "Dementia Care",
      rate: "4,000",
    },
    {
      id: "elderly",
      value: "elderly",
      label: "Elderly Support Care",
      rate: "4,000",
    },
    {
      id: "bedridden",
      value: "bedridden",
      label: "Bedridden Care",
      rate: "4,000",
    },
    { id: "liveIn", value: "liveIn", label: "Live-in Care", rate: "4,000" },
    {
      id: "physiotherapy",
      value: "physiotherapy",
      label: "Physiotherapy",
      rate: "300 (per session)",
    },
  ];

    const serviceOptions = serviceType
    ? allServiceOptions.filter(option => option.label === serviceType)
    : allServiceOptions;

  console.log(serviceType)

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        description: "",
        date: "",
        time: "",
       service: serviceOptions.length === 1 ? serviceOptions[0].value : "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        date: Yup.date().required("Required"),
        time: Yup.string().required("Required"),
        service: Yup.string().required("Required"),
      })}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => {
        const selectedService = serviceOptions.find(
          (option) => option.value === values.service
        );
        return (
          <form onSubmit={handleSubmit} className="row">
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">Name</label>
              <input
                type="text"
                className="cs_form_field"
                placeholder="David John"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">
                Phone Number
              </label>
              <input
                type="text"
                className="cs_form_field"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="(123) 456 - 789"
                value={values.phone}
                name="phone"
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">
                Description
              </label>
              <input
                type="text"
                className="cs_form_field"
                placeholder="Reason for appointment, etc."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name="description"
              />
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">
                Preferred Date
              </label>

              <div className="cs_with_icon_input">
                <DatePicker
                  selected={values.date ? new Date(values.date) : null}
                  onChange={(date) => {
                    setFieldValue("date", date);
                  }}
                  onBlur={handleBlur}
                  className="cs_form_field cs_datepicker"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  isClearable
                  placeholderText="dd/mm/yyyy"
                  name="date"
                />
                <i>
                  <Icon icon="fa6-solid:calendar-days" />
                </i>
              </div>
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-6">
              <label className="cs_input_label cs_heading_color">
                Preferred Time
              </label>
              <div className="cs_with_icon_input">
                <input
                  type="time"
                  className="cs_form_field cs_timepicker"
                  placeholder="10:00AM"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.time}
                  name="time"
                />
                <i>
                  <Icon icon="fa6-regular:clock" />
                </i>
              </div>
              <div className="cs_height_42 cs_height_xl_25" />
            </div>

            <div className="col-lg-12">
              <label className="cs_input_label cs_heading_color">Service</label>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceOptions.map((option) => (
                  <div className="cs_radio_wrap" key={option.id}>
                    <input
                      className="cs_radio_input"
                      type="radio"
                      id={option.id}
                      value={option.value}
                      checked={values.service === option.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="service"
                    />
                    <label className="cs_radio_label cs_heading_color" htmlFor={option.id}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>

              {selectedService && (
                <div className="mt-2 p-2 bg-gray-50 rounded-lg">
                  <p className="font-medium">
                    Selected Service:{" "}
                    <span className="">{selectedService.label}</span>
                  </p>
                  <p className="font-medium">
                    Monthly Rate:{" "}
                    <span className="">GHC {selectedService.rate}</span>
                  </p>
                </div>
              )}
              <div className="cs_height_42 cs_height_xl_25" />
            </div>
            <div className="col-lg-12">
              <button type="submit" className="cs_btn cs_style_1">
                <span>Submit</span>
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
          </form>
        );
      }}
    </Formik>
  );
}
