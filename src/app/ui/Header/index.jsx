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
                      <Link
                        href="/"
                        onClick={() => setMobileToggle(false)}
                        style={{ color: "${accent}" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                        style={{ color: "${accent}"  }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        onClick={() => setMobileToggle(false)}
                        style={{ color: "${accent}"  }}
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing-plan"
                        onClick={() => setMobileToggle(false)}
                        style={{ color: "${accent}"  }}
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                        style={{ color: "${accent}"  }}
                      >
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

              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
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
    
      <h3 className="cs_fs_24 cs_semibold mb-0">
        Your Partner in Health and Wellness
      </h3>
    </div>
    <Spacing md="35" lg="35" xl="35" />
    <hr />
    <Spacing md="35" lg="50" xl="35" />
    
    {/* Become a Caregiver Section */}
    <div className="cs_caregiver_section">
      <h4 className="cs_fs_20 cs_semibold mb-3">Become a Caregiver</h4>
      <p className="cs_fs_16 mb-3">Join our team of dedicated caregivers and make a difference in people`&apos;`s lives.</p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSfLpXtFUleXIhim8iQD266M46eirAoOCqWC9nVw1FBUiCplwA/alreadyresponded?pli=1&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className="cs_btn cs_style_1">
        Apply Now
      </a>
    </div>

  
    
    <Spacing md="30" lg="30" xl="30" />
    
    {/* Become a Partner Section */}
    <div className="cs_partner_section">
      <h4 className="cs_fs_20 cs_semibold mb-3">Become a Partner</h4>
      <p className="cs_fs_16 mb-3">Partner with us to expand healthcare services in your community.</p>
      <button 
        onClick={() => {
          // Close sidenav and scroll to partner section
          setSideNav(false);
          // Add smooth scroll to partner section
          const partnerSection = document.getElementById('partner-section');
          if (partnerSection) {
            partnerSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="cs_btn cs_style_1"
      >
        Learn More
      </button>
    </div>
    
    <Spacing md="70" lg="50" xl="50" />
    <hr />
    <Spacing md="70" lg="50" xl="50" />
    <SocialWidget />
  </div>
</div>
    </>
  );
}
