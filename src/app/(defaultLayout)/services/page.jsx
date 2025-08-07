import React from 'react';
import Section from '../../ui/Section';
import BannerSectionStyle5 from '../../ui/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle6 from '../../ui/Section/BannerSection/BannerSectionStyle6';
import DepartmentSectionStyle3 from '../../ui/Section/DepartmentSection/DepartmentSectionStyle3';
import { departmentData } from './departmentData';
import bannerImg from '../../../../public/images/departments/nurse.png';
import bannerImg2 from '../../../../public/images/departments/banner_img_2.png';

export default function Services() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/hero_bg.png"
        imgUrl={bannerImg}
        title="Discover the <br>Services at ND Healthcare"
        subTitle="At Nd healthcare, we provide a comprehensive selection of medical and healthcare services tailored to your unique needs, supporting you on your journey to optimal well-being."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>

      {/* <Section className="cs_footer_margin_0" bottomMd={140} bottomLg={100} bottomXl={60}>
        <BannerSectionStyle6
          imgUrl={bannerImg2}
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment and <br />experienced the best healthcare"
        />
      </Section> */}
    </>
  );
}
