import React from 'react';
import BannerSectionStyle5 from '../../ui/Section/BannerSection/BannerSectionStyle5';
import ContactForm from '../../ui/ContactForm';
import bannerImg from '../../../../public/images/contact/banner_img.png';

export default function Contact() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/hero_bg.png"
        imgUrl={bannerImg}
        title="Contact Us"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section> */}
    </>
  );
}
