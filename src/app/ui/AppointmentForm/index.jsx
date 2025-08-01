"use client"
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Name</label>
        <input type="text" className="cs_form_field" placeholder="David John" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="(123) 456 - 789"
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
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Preferred Date
        </label>

        <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
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
          />
          <i>
            <Icon icon="fa6-regular:clock" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>

      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Service</label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="pediatric"
              defaultValue="pediatric"
            />
            <label className="cs_radio_label" htmlFor="pediatric">
              Full Support Services 
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="obstetricsGynecology"
              defaultValue="obstetricsGynecology"
              defaultChecked=""
            />
            <label className="cs_radio_label" htmlFor="obstetricsGynecology">
              Baby and Child Care
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="cardiology"
              defaultValue="cardiology"
            />
            <label className="cs_radio_label" htmlFor="cardiology">
              Home Visits/ Assessments 
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Post - Surgical Care 
            </label>
          </div>
           <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Neurological Care
            </label>
          </div>
           <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Autism Care
            </label>
          </div>
           <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Dementia Care  
            </label>
          </div>
           <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Elderly Support Care  
            </label>
          </div>
                     <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Bedridden Care  
            </label>
          </div>
                     <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Live - in Care  
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1">
          <span>Submit</span>
          <i>
            <Image src="/images/icons/arrow_white.svg" alt="Icon" height={11} width={15} />
            <Image src="/images/icons/arrow_white.svg" alt="Icon" height={11} width={15} />
          </i>
        </button>
      </div>
    </form>
  );
}
