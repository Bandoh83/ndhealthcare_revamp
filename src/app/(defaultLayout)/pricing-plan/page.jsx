"use client"
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle3 from '@/app/ui/Section/BannerSection/BannerSectionStyle3';
import PricingSection from '@/app/ui/Section/PricingSection';
import bannerImg from '../../../../public/images/pricing_plan/pricing.png'
import {pricingData} from "@/app/data/pricingData";



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