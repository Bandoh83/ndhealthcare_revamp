"use client"
import React from 'react';
import BreadcrumbStyle2 from '@/app/ui/Breadcrumb/BreadcrumbStyle2';
import Section from '@/app/ui/Section';
import AboutSectionStyle2 from '@/app/ui/Section/AboutSection/AboutSectionStyle2';
import AppointmentSection from '@/app/ui/Section/AppointmentSection';
import BannerSectionStyle7 from '@/app/ui/Section/BannerSection/BannerSectionStyle7';
import appointmentImg from '../../../../../public/images/home_1/appointment.jpeg'
import aboutImg from '../../../../../public/images/departments/department_img_1.png'
import bannerImg from '../../../../../public/images/departments/banner_img_3.png'


export default function DepartmentDetails() {
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Pediatric Department"
          subTitle="This department specializes in the care of infants, children, adolescents, and provides a range of services including preventive care, developmental screenings, and treatment of childhood illnesses and conditions."
          imgUrl={aboutImg}
        />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointmentImg}
        />
      </Section>
      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl={bannerImg}
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
