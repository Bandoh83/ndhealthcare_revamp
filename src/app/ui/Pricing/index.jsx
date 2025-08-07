import React from "react";
import Button from "../Button";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Pricing({
  title = "",
  subTitle = "",
  price = "",
  period = "",
  featureList = [],
  btnText = "Get Started",
  btnUrl = "#",
  popular = false,
  href,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`cs_pricing_card_container ${
        isHovered ? "cs_popular_card" : ""
      }`}
    >
      <div className="cs_pricing_card_clean text-center p-4">
        {/* Popular Badge */}
        {popular && (
          <div className="cs_popular_badge mb-3">
            <span className="cs_badge cs_orange_bg cs_white_color cs_fs_14 cs_medium px-4 py-2 cs_radius_25">
              Most Popular
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="cs_heading_color cs_fs_28 cs_semibold mb-3">{title}</h3>

        {/* Subtitle */}
        {subTitle && (
          <p className="cs_gray_color cs_fs_16 mb-4 lh-base">{subTitle}</p>
        )}

        {/* Price */}
        <div className="cs_price_section mb-4">
          <h2 className="cs_orange_color cs_fs_48 cs_bold mb-0">{price}</h2>
          <span className="cs_gray_color cs_fs_16">{period}</span>
        </div>

        {/* Features List */}
        <div className="cs_features_list mb-4">
          <ul className="list-unstyled cs_fs_16 cs_heading_color">
            {featureList?.map((item, index) => (
              <li
                key={index}
                className="d-flex align-items-center mb-3 text-start"
              >
                <div className="cs_check_circle cs_orange_bg cs_white_color me-3 flex-shrink-0">
                  <Icon icon="fa6-solid:check" className="cs_fs_12" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="cs_btn_wrapper">
          <Button
            btnUrl={btnUrl}
            btnText={`${btnText} `}
            variant="cs_btn_orange cs_radius_25 w-100 py-3"
          />
        </div>
      </div>
    </div>
  );
}
