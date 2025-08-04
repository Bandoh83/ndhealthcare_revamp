import React from 'react';
import AppointmentForm from '../../AppointmentForm';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Image from 'next/image';

export default function AppointmentSectionStyle2({
  //bgUrl,
  imgUrl,
  sectionTitle,
  sectionTitleUp,
  serviceName

}) {
  return (
    <section
      // className="cs_appointment_section_1 cs_bg_filed"
      // style={{
      //   backgroundImage: `url(${bgUrl})`,
      // }}
    >
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <Spacing md="72" lg="50" />
            <AppointmentForm
            serviceType={serviceName}
             />
          </div>
          <div className="col-lg-5 offset-lg-1 text-center">
            <Image src={imgUrl} alt="Appointment" className="cs_radius_30" placeholder='blur'/>
          </div>
        </div>
      </div>
    </section>
  );
}
