"use client"
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle10 from '@/app/ui/Section/BannerSection/BannerSectionStyle10';
import BannerSectionStyle3 from '@/app/ui/Section/BannerSection/BannerSectionStyle3';
import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import PricingSection from '@/app/ui/Section/PricingSection';

import bannerImg from '../../../../public/images/pricing_plan/pricing.png'
import bannerImgBtm from '../../../../public//images/pricing_plan/banner_img_2.png'
import faqImg from '../../../../public/images/home_4/faq_img.jpeg'


const pricingData = [
  {
    title: 'Family Health Plan',
    subTitle:
      'Nunc a convallis augue. Morbi imperdiet bibendum ultricies. Etiam eu congue est. Mauris sed nunc enim',
    price: 'GHc 249',
    period: '/month',
    featureList: [
      'Unlimited Consultations',
      'Free Health Screenings',
      '24/7 Medical Advice',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Wellness Plan',
    subTitle:
      'Nunc a convallis augue. Morbi imperdiet bibendum ultricies. Etiam eu congue est. Mauris sed nunc enim.',
    price: 'GHc 99',
    period: '/month',
    featureList: [
      'Unlimited Check-ups',
      'Discounts on Treatments',
      'Annual Health Assessment',
      'Wellness Workshops',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'Senior Wellness Plan',
    subTitle:
      'Nunc a convallis augue. Morbi imperdiet bibendum ultricies. Etiam eu congue est. Mauris sed nunc enim.',
    price: '$149',
    period: '/month',
    featureList: [
      'Unlimited Check-ups',
      'Discounts on Treatments',
      'Annual Health Assessment',
      'Wellness Workshops',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },

  {
    title: 'Sports & Fitness Plan',
    subTitle:
      'Optimized for athletes. Access sports injury assessments, physiotherapy, and expert advice for peak performance and recovery.',
    price: '$119',
    period: '/month',
    featureList: [
      'Sports Injury Assessments',
      'Physiotherapy Sessions',
      'Sports Medicine Experts',
      'Fitness Support',
    ],
    btnText: 'Get Started',
    btnUrl: '/contact',
    popular: false,
  },
];
const faqData = [
  {
    title: 'What services does ProHealth offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with ProHealth?',
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
export default function PricingPlan() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/hero_bg.jpeg"
        imgUrl={bannerImg}
        title="Find the Right Plan <br>for You"
        subTitle="Explore Our Membership Options and Start Your Journey to Better Health"
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
          sectionTitle="Choose Your ProHealth <br />Membership Plan"
          data={pricingData}
        />
      </Section>
     
      {/* <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl={bannerImgBtm}
          title="Choose Your Plan and Invest in Your Health Today!"
        />
      </Section> */}
    </>
  );
}
