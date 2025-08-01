"use client"
import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';

const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Our Services', href: '/services' },
  { title: 'Pricing', href: '/doctors' },
  { title: 'Contact Us', href: '/appointments' },

];

export default function Footer() {
  return (
    <footer className="cs_footer cs_heading_color">
      <div className="cs_footer_main cs_gray_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="ND Healthcare"/>
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Want to be part of out Partners?"
                  subTitle="To get the latest news about health from our experts"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2025 ND Healthcare. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
