import React from 'react';
import BannerSectionStyle5 from '../../ui/Section/BannerSection/BannerSectionStyle5';
import ContactForm from '../../ui/ContactForm';
import bannerImg from '../../../../public/images/contact/phone.png';

export default function Contact() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/hero_bg.png"
        imgUrl={bannerImg}
        title="Contact Us"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      <div className="container" style={{ marginBottom: '55px' }}>
  <div className="row">
    <div className="col-lg-10 offset-lg-1">
      <ContactForm />
    </div>
  </div>
</div>
 
    </>
  );
}
