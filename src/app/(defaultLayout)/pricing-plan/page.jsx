"use client"
import React from 'react';
import Section from '../../ui/Section';
import BannerSectionStyle3 from '../../ui/Section/BannerSection/BannerSectionStyle3';
import PricingSection from '../../ui/Section/PricingSection';
import bannerImg from '../../../../public/images/pricing_plan/pricing.png'

export const pricingData = [
  {
    title: 'Full Support Services',
    subTitle:
      'Comprehensive care including mobility assistance, stress management, and healthcare coordination for complete support.',
    price: 'GHc 5,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Stress, Anxiety and Depression Management',
      'Coordination with Healthcare Providers',
      '24/7 Support Available',
    ],
    btnText: 'Get Started',
    btnUrl: '#',
    popular: true,
  },
  {
    title: 'Elderly Support Care',
    subTitle:
      'Specialized care for seniors including mobility support, medication reminders, and personal care assistance.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Medication Reminders',
      'Assistance with Medical Appointments',
      'Personal Care Support (Bathing)',
      'Stress & Depression Management',
    ],
    btnText: 'Get Started',
    btnUrl: '#',
    popular: false,
  },
  {
    title: 'Baby and Child Care',
    subTitle:
      'Dedicated childcare services including bathing, feeding support, and educational assistance for growing children.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Bathing & Personal Care',
      'Meal Preparation & Feeding Support',
      'Educational Assistance',
      'Oral Care & Grooming',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Autism Care',
    subTitle:
      'Specialized autism support with mobility exercises, speech therapy, and cognitive improvement activities.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Mobility Strengthening Exercises',
      'Speech Therapy',
      'Concentration & Memory Activities',
      'Personal Care Assistance',
      'Stress & Anxiety Management',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Dementia Care',
    subTitle:
      'Compassionate dementia care focused on creating safe environments and cognitive support activities.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      'Safe & Familiar Environment Setup',
      'Memory & Concentration Activities',
      'Stress & Depression Management',
      'Specialized Dementia Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Live-In Care',
    subTitle:
      'Round-the-clock care with a dedicated caregiver residing in your home for constant support and supervision.',
    price: 'GHc 4,000',
    period: '/month',
    featureList: [
      '24/7 In-Home Caregiver',
      'Round-the-Clock Support',
      'Constant Care & Supervision',
      'Personalized Care Plan',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Post-Surgical Care',
    subTitle:
      'Specialized recovery support including mobility assistance, hygiene maintenance, and rehabilitation exercises.',
    price: 'GHc 3,000',
    period: '/month',
    featureList: [
      'Mobility Assistance',
      'Personal Hygiene Maintenance',
      'Minimal Exercise Support',
      'Feeding Support When Necessary',
      'Stress & Anxiety Management',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Neurological Care',
    subTitle:
      'Specialized care for neurological conditions with focused rehabilitation and support services.',
    price: 'GHc 2,000',
    period: '/month',
    featureList: [
      'Specialized Neurological Support',
      'Rehabilitation Assistance',
      'Customized Care Plans',
      'Professional Medical Coordination',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Home Visits/Assessments',
    subTitle:
      'Professional home assessments and visits to evaluate care needs and provide targeted support services.',
    price: 'GHc 2,000',
    period: '/month',
    featureList: [
      'Professional Home Assessments',
      'Care Need Evaluations',
      'Customized Care Recommendations',
      'Follow-up Visits',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Physiotherapy',
    subTitle:
      'Professional in-house physiotherapy sessions designed to improve mobility, strength, and overall physical wellbeing.',
    price: 'GHc 300',
    period: '/session',
    featureList: [
      'In-House Physiotherapy Sessions',
      'Mobility Improvement',
      'Strength Building Exercises',
      'Pain Management',
      'Recovery Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
];

const faqData = [
  {
    title: 'What services does ND Healthcare offer?',
    content:
      'ND Healthcare offers comprehensive care services including elderly care, autism care, dementia care, baby and child care, post-surgical care, neurological care, live-in care, physiotherapy, and full support services. All services can be customized based on your specific health condition and demands.',
  },
  {
    title: 'How do I schedule an appointment with ND Healthcare?',
    content:
      'You can schedule an appointment by contacting us through our contact page or calling our office directly. We offer initial assessments for GHc 200 to evaluate your care needs and develop a personalized care plan.',
  },
  {
    title: 'What is included in the initial assessment?',
    content:
      'Our initial assessment includes a comprehensive evaluation of your care needs, health condition review, and development of a customized care plan. This assessment costs GHc 200 and helps us determine the most appropriate services for your situation.',
  },
  {
    title: 'Can services be customized based on my needs?',
    content:
      'Yes, absolutely! All our services can be customized based on your specific health condition and care demands. Our pricing rates can also be adjusted based on the complexity and specific requirements of your care needs.',
  },
  {
    title: 'Do you offer live-in care services?',
    content:
      'Yes, we offer live-in care services where a dedicated caregiver resides in your home to provide round-the-clock support, constant care, and supervision. This arrangement ensures continuous care and peace of mind for families.',
  },
];

export default function PricingPlan() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/hero_bg.png"
        imgUrl={bannerImg}
        title="Find the Right Care Plan <br>for You"
        subTitle="Explore Our Comprehensive Healthcare Services and Start Your Journey to Better Health"
        // btnText="Get Starter"
        // btnUrl="/contact"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <PricingSection
          sectionTitle="Choose Your ND Healthcare <br />Service Plan"
          data={pricingData}
        />
      </Section>
    </>
  );
}