
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle6 from '@/app/ui/Section/BannerSection/BannerSectionStyle6';
import DepartmentSectionStyle3 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3';

import bannerImg from '../../../../public/images/departments/banner_img.png'
import bannerImg2 from '../../../../public/images/departments/banner_img_2.png'


const departmentData = [
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Full Support Services',
    subTitle:
      'Comprehensive care for individuals needing assistance with daily activities, medical needs, and emotional well-being.',
    href: '/services/services-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Baby and Child Care',
    subTitle:
      'Professional care for infants and children, including feeding, hygiene, supervision, and developmental support.',
    href: '/departments/department-details',
  },
  // {
  //   iconUrl: '/images/departments/icon_1.svg',
  //   title: 'Critical Care',
  //   subTitle:
  //     'Specialized at-home care for patients with life-threatening conditions requiring constant monitoring and medical support.',
  //   href: '/departments/department-details',
  // },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Home Visits/Assessments',
    subTitle:
      'Professional evaluations of patient needs and customized care plans through periodic home visits.',
    href: '/departments/department-details',
  },
  // {
  //   iconUrl: '/images/departments/icon_1.svg',
  //   title: 'Physiotherapy',
  //   subTitle:
  //     'Rehabilitative therapy to improve mobility, strength, and pain relief for injury, surgery, or chronic conditions.',
  //   href: '/departments/department-details',
  // },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Post-Surgical Care',
    subTitle:
      'Support for recovery after surgery, including wound care, mobility assistance, and medication management.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Neurological Care',
    subTitle:
      'Specialized care for neurological conditions like stroke, Parkinson’s, or MS, focusing on recovery and quality of life.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Autism Care',
    subTitle:
      'Tailored support for individuals with autism, including behavioral therapy, social skill-building, and family guidance.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Dementia Care',
    subTitle:
      'Compassionate care for dementia patients, focusing on memory care, safety, and daily living support.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Elderly Support Care',
    subTitle:
      'Assistance for seniors with daily tasks, mobility, medical needs, and companionship for enhanced quality of life.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Bedridden Care',
    subTitle:
      'Focused care for immobile patients, including hygiene, repositioning, and prevention of bedsores.',
    href: '/departments/department-details',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'Live-In Care',
    subTitle:
      '24/7 care provided by a professional caregiver living in the patient’s home to ensure constant support.',
    href: '/departments/department-details',
  },
  // {
  //   iconUrl: '/images/departments/icon_1.svg',
  //   title: 'Postpartum Therapy',
  //   subTitle:
  //     'Training sessions for new mothers, including physical recovery, emotional support, and guidance on baby care.',
  //   href: '/departments/department-details',
  // },
];


export default function Services() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/hero_bg.jpeg"
        imgUrl={bannerImg}
        title="Discover the <br>Services at ND Healthcare"
        subTitle="At ProHealth, we provide a comprehensive selection of medical and healthcare services tailored to your unique needs, supporting you on your journey to optimal well-being."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl={bannerImg2}
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}
