'use client';
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../ui/Section';
import FeaturesSectionStyle4 from '../ui/Section/FeaturesSection/FeaturesSectionStyle4';
import AboutSection from '../ui/Section/AboutSection';
import AwardSection from '../ui/Section/AwardSection';
import TestimonialSection from '../ui/Section/TestimonialSection';
import AppointmentSection from '../ui/Section/AppointmentSection';
import FaqSection from '../ui/Section/FaqSection';
import BrandsSection from '../ui/Section/BrandsSection';
import WorkingProcess from '../ui/Section/WorkingProcess';
import FeaturesSectionStyle5 from '../ui/Section/FeaturesSection/FeaturesSectionStyle5';
import PartnerFormSection from '../ui/Section/partnerFormSection';
// Large Images for blur placeholder
import heroImage from '../../../public/images/home_1/hero_img.png';
import aboutImage from '../../../public/images/home_1/about.png';
import appointmentImg from '../../../public/images/home_1/appointment.jpg';
import { HiHeart, HiUserGroup, HiShieldCheck } from 'react-icons/hi2';
import {
  FaHandsHelping,
  FaBaby,
  FaHome,
  FaUserInjured,
  FaPuzzlePiece,
  FaBrain,
  FaBlind,
  FaBed,
  FaUserNurse
} from 'react-icons/fa';

const featureListData = [
  {
    iconUrl: <HiHeart size={40} color="#E9722B" />,
    title: 'Compassion',
    subTitle:
      'We believe in providing care with empathy, understanding, and kindness. We treat every individual as a member of our own family, offering not just assistance, but companionship and emotional support.',
  },
  {
    iconUrl: <HiUserGroup size={40} color="#E9722B" />,
    title: 'Respect',
    subTitle:
      'We respect the dignity, preferences, and privacy of every person we serve. We honor each individual’s unique needs and work with them and their families to ensure they receive personalized, respectful care.',
  },
  {
    iconUrl: <HiShieldCheck size={40} color="#E9722B" />,
    title: 'Integrity',
    subTitle: `We are committed to acting with honesty and transparency in all our dealings. We maintain high ethical standards and ensure that our clients, their families, and our caregivers can always trust us to act in their best interests.`,
  },
];

const helpData = [
  {
    iconUrl: '/images/home_4/compassion.svg',
    title: 'Personal care',
    subTitle:
      'All of our carers are trained to provide discreet, sensitive support with areas of personal care such as bathing, dressing, toileting, and continence care.',
  },
  {
    iconUrl: '/images/home_4/excellence.svg',
    title: 'Housework',
    subTitle:
      'If you’re struggling to find the time or energy to stay on top of the housework, your carer can help out around the house with just about anything.',
  },
  {
    iconUrl: '/images/home_4/integrity.svg',
    title: 'Mobility support',
    subTitle: `Your carer will be able to help you get into and out of bed and move around your home, as well as assisting with physiotherapy exercises.`,
  },
  {
    iconUrl: '/images/home_4/respect.svg',
    title: 'Medication Assistance',
    subTitle:
      'From collecting it on your behalf to helping you organise and administer it, our carers are expertly trained to help you with your medication management.',
  },
  {
    iconUrl: '/images/home_4/teamwork.svg',
    title: 'Looking after pets',
    subTitle:
      'With home care, you won’t need to worry about being parted from your furry friend(s) – your carer can exercise them, and generally spoil them rotten.',
  },
  {
    iconUrl: '/images/home_4/teamwork.svg',
    title: 'Getting out of the house',
    subTitle:
      'A carer can accompany you out and about – whether that’s to the shops, to visit loved ones, or helping you attend social clubs and hobbies.',
  },
];

const brandData = [
  { imgUrl: '/images/nationwide.png', imgAlt: 'Brand' },
  { imgUrl: '/images/nhis.png', imgAlt: 'Brand' },
  { imgUrl: '/images/redshot.png', imgAlt: 'Brand' },
  { imgUrl: '/images/hefra.png', imgAlt: 'Brand' },
  { imgUrl: '/images/healthnet.png', imgAlt: 'Brand' },

];


const workingProcessData = [
  {
    title: 'Book Appointment',
    subTitle:
      'You can schedule an appointment with us by calling our office, completing our online form, or using our mobile application.',
    iconUrl: '/images/home_2/wording_process_icon_1.svg',
    number: '01',
  },
  {
    title: 'Visit Our Facility',
    subTitle:
      'On the day of your visit, please arrive at our facility at your scheduled time. Our team will welcome you and assist with the check-in process.',
    iconUrl: '/images/home_2/wording_process_icon_2.svg',
    number: '02',
  },
  {
    title: 'Meet with Our Healthcare <br />Professionals',
    subTitle:
      'If needed, we’ll arrange any follow-up visits, tests, or procedures to make sure you receive the highest quality care.',
    iconUrl: '/images/home_2/wording_process_icon_3.svg',
    number: '03',
  },
  {
    title: 'Follow-up Care',
    subTitle:
      'We will schedule any necessary follow-up <br />appointments, tests, or procedures to ensure <br />that you receive the best possible care.',
    iconUrl: '/images/home_2/wording_process_icon_4.svg',
    number: '04',
  },
  {
    title: 'Billing',
    subTitle:
      'We work with most major insurance providers, and our billing team is available to help you understand your coverage and any personal costs.',
    iconUrl: '/images/home_2/wording_process_icon_5.svg',
    number: '05',
  },
];


const faqData = [
  {
    title: 'What services does ND Healthcare offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];

const awardData = [
  {
    title: 'Mission',
    subTitle:
      'Our mission is to deliver reliable, professional, and compassionate care that enhances the lives of our service users. We strive to build lasting relationships based on trust, respect, and understanding, ensuring that every individual receives care that is both effective and empathetic.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'Vision',
    subTitle:
      'At ND Healthcare, our vision is to be the leading provider of compassionate, high-quality homecare services, empowering individuals to live independently and with dignity in the comfort of their own homes. We strive to create a future where every person receives personalized care that supports their physical, emotional, and social well-being, and where families find peace of mind knowing their loved ones are in the best possible hands.',
    iconUrl: '/images/icons/award.svg',
  },
];
const departmentData = [
  {
    title: 'FULL SUPPORT SERVICES',
    icon: FaHandsHelping,
    href: '/departments/department-details',
  },
  {
    title: 'BABY AND CHILD CARE',
    icon: FaBaby,
    href: '/departments/department-details',
  },
  {
    title: 'HOME VISITS / ASSESSMENTS',
    icon: FaHome,
    href: '/departments/department-details',
  },
  {
    title: 'POST-SURGICAL CARE',
    icon: FaUserInjured,
    href: '/departments/department-details',
  },
  {
    title: 'AUTISM CARE',
    icon: FaPuzzlePiece,
    href: '/departments/department-details',
  },
  {
    title: 'DEMENTIA CARE',
    icon: FaBrain,
    href: '/departments/department-details',
  },
  {
    title: 'ELDERLY SUPPORT CARE',
    icon: FaBlind,
    href: '/departments/department-details',
  },
  {
    title: 'BEDRIDDEN CARE',
    icon: FaBed,
    href: '/departments/department-details',
  },
  {
    title: 'LIVE-IN CARE',
    icon: FaUserNurse,
    href: '/departments/department-details',
  },
];


export default function Home() {
  return (
    <>
      <Hero
        title="Comprehensive Home Healthcare You Can Trust"
        subTitle="From infant care to elderly support, we provide personalized, compassionate services right where you need them."
        bgUrl="/images/home_1/hero_bg.png"
        imgUrl={heroImage}
        infoList={[
          {
            title: 'Hotline',
            subTitle: '024 823 3368',
            iconUrl: '/images/contact/icon_1.svg',
          },
          // {
          //   title: 'Ambulance',
          //   subTitle: '876-256-876',
          //   iconUrl: '/images/icons/ambulance.svg',
          // },
          {
            title: 'Email',
            subTitle: 'info@ndhealthcare.net',
            iconUrl: '/images/icons/envlope.svg',
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />

      {/* Start Feature Section */}
      <Section 
      topMd={200} 
      topLg={150} 
      topXl={110}>
        <FeaturesSectionStyle4
          sectionTitle="Our Values"
          data={featureListData}
        />
      </Section>
     

      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl={aboutImage}
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="ND HEALTHCARE"
          featureList={[
            {
              featureListTitle:
                'We are dedicated to providing compassionate,',
              featureListSubTitle:
                'personalized homecare services that support the well-being and independence of individuals in the comfort of their own homes. We understand that every person has unique needs, and we tailor our services to ensure that our clients receive the highest quality care that promotes their health, dignity, and overall quality of life.',
            },
          ]}
        />
      </Section>
      {/* End About Section */}

            {/* Start Award Section */}
      {/* <Section topMd={165} topLg={120} topXl={80}>
        <AwardSection sectionTitle="" data={awardData} />
      </Section> */}
      {/* End Award Section */}


       <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}>
        <WorkingProcess
          sectionTitle="How it Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>

      {/* Start Departments Section */}
<Section
  topMd={185}
  topLg={140}
  topXl={100}
  bottomMd={200}
  bottomLg={150}
  bottomXl={100}
  className="cs_gray_bg_1"
>
  <PartnerFormSection
    sectionTitle="Become a Partner"
  />
</Section>
      {/* End Departments Section */}



      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}

      {/* Start Banner Section */}
      {/* <Section>
        <Banner
          bgUrl="/images/home_1/cta_bg.svg"
          imgUrl={bannerImg}
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section> */}
      {/* End Banner Section */}



      {/* Start Appointment Section */}
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointmentImg}
        />
      </Section>
      {/* End Appointment Section */}

      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}

      {/* Start Brand Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={80}
        bottomLg={130}
        bottomXl={90}
      >
        <BrandsSection data={brandData} sectionTitle="Our Partners" />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
