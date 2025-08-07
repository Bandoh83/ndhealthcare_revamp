"use client";
import React from "react";
import Hero from "../ui/Hero";
import Section from "../ui/Section";
import FeaturesSectionStyle4 from "../ui/Section/FeaturesSection/FeaturesSectionStyle4";
import AboutSection from "../ui/Section/AboutSection";
import TestimonialSection from "../ui/Section/TestimonialSection";
import AppointmentSection from "../ui/Section/AppointmentSection";
import FaqSection from "../ui/Section/FaqSection";
import BrandsSection from "../ui/Section/BrandsSection";
import WorkingProcess from "../ui/Section/WorkingProcess";
import PartnerFormSection from "../ui/Section/partnerFormSection";
// Large Images for blur placeholder
import heroImage from "../../../public/images/home_1/hero_img.png";
import aboutImage from "../../../public/images/home_1/about.png";
import appointmentImg from "../../../public/images/home_1/appointment.jpg";

import {
  pricingData,
  brandData,
  faqData,
  featureListData,
  workingProcessData,
} from "@/app/data/pricingData";
import SectionHeading from "../ui/SectionHeading";
import Spacing from "../ui/Spacing";
import Pricing from "../ui/Pricing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        title="Comprehensive Home Healthcare and medical services You Can Trust"
        subTitle="From infant care to elderly support, we provide personalized, compassionate services right where you need them."
        bgUrl="/images/home_1/hero_bg.png"
        imgUrl={heroImage}
        infoList={[
          {
            title: "Hotline",
            subTitle: "024 823 3368",
            iconUrl: "/images/contact/icon_1.svg",
          },
          // {
          //   title: 'Ambulance',
          //   subTitle: '876-256-876',
          //   iconUrl: '/images/icons/ambulance.svg',
          // },
          {
            title: "Email",
            subTitle: "info@ndhealthcare.net",
            iconUrl: "/images/icons/envlope.svg",
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />

      {/* Start Feature Section */}
      <Section topMd={200} topLg={150} topXl={110}>
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
              featureListTitle: "We are dedicated to providing compassionate,",
              featureListSubTitle:
                "personalized homecare and medical services that support the well-being and independence of individuals in the comfort of their own homes. We understand that every person has unique needs, and we tailor our services to ensure that our clients receive the highest quality care that promotes their health, dignity, and overall quality of life.",
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
        bottomXl={110}
      >
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
        topMd={90}
        topLg={50}
        topXl={70}
        bottomMd={180}
        bottomLg={130}
        bottomXl={90}
      >
        {/* <PricingSection
    sectionTitle="Service Pricing"
    data={pricingData.slice(0, 3)}
  /> */}

        <div className="container">
          <SectionHeading title="Service Pricing" center />
          <Spacing md="72" lg="50" />

    {/* Clean Grid Layout */}
    <div className="cs_pricing_clean_grid">
      <div className="row g-4">
        {pricingData.slice(0, 3).map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="h-100">
              <Link href={`${item.btnUrl}`} className="col-lg-4 col-md-6">
                <Pricing {...item} />
              </Link>
            </div>
          </div>
        ))}
        </div>
        </div>

          <div className="text-center mt-4">
            <Link href="/pricing-plan" className="cs_link cs_color_orange">
              View More Pricing Plans
            </Link>
          </div>
        </div>
      </Section>

      {/* End Departments Section */}

      {/* Start Testimonial */}
      <Section
        topMd={165}
        topLg={10}
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
      <Section topMd={190} topLg={145} topXl={105} bottomMd={50} bottomLg={30} bottomXl={40} id="appointment">
        <AppointmentSection
          sectionTitle="Assessment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointmentImg}
        />
      </Section>
      {/* End Appointment Section */}

      {/* Start Brand Section */}
      <Section
        topMd={15}
        topLg={10}
        topXl={10}
        bottomMd={20}
        bottomLg={25}
        bottomXl={30}
        className="cs_gray_bg_1"
      >
        <PartnerFormSection sectionTitle="Become a Partner" />
      </Section>

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

      <Section
        topMd={10}
        topLg={15}
        topXl={15}
        bottomMd={80}
        bottomLg={130}
        bottomXl={90}
      >
        <FaqSection
          data={faqData}
          sectionTitle="Usually Ask"
          sectionTitleUp="What People"
        />
      </Section>
    </>
  );
}
