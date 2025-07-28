"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spacing from "../Spacing";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import Image from "next/image";

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${variant} ${
          isSticky ? "cs_active_sticky" : ""
        }`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image src={logoSrc} alt="Logo" height={28} width={173} />
                </Link>
                <nav className="cs_nav">
                  <ul
                    className={`${
                      mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                    }`}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}  style={{ color: '#FE4B06' }}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)} style={{ color: '#FE4B06' }}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={() => setMobileToggle(false)}
                     style={{ color: '#FE4B06' }} >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing-plan"
                        onClick={() => setMobileToggle(false)}
                     style={{ color: '#FE4B06' }} >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                    style={{ color: '#FE4B06' }}  >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <span
                    className={
                      mobileToggle
                        ? "cs_menu_toggle cs_teggle_active"
                        : "cs_menu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_sidenav ${sideNav ? "active" : ""}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(!sideNav)}
          >
            <Image
              src="/images/icons/close.svg"
              alt="Close"
              height={28}
              width={28}
            />
          </button>
          <div className="cs_logo_box">
            <Image src={logoSrc} alt="Logo" height={28} width={173} />
            <div className="cs_height_15" />
            <h3 className="cs_fs_24 cs_semibold mb-0">
              Your Partner in Health and Wellness
            </h3>
          </div>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          <Spacing md="35" lg="50" xl="35" />
          <IconBoxStyle11
            title="Phone"
            subTitle="123-456-7890"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="hellocallcenter@gmail.com"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Location"
            subTitle="123 Anywhere St., Any City, 12345"
            iconSrc="/images/contact/icon_3.svg"
          />
          <Spacing md="60" lg="60" xl="60" />
          <Newsletter />
          <Spacing md="70" lg="50" xl="50" />
          <hr />
          <Spacing md="70" lg="50" xl="50" />
          <SocialWidget />
        </div>
      </div>
    </>
  );
}
