import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export default function BannerSectionStyle6({ imgUrl, title, subTitle }) {
  return (
    <div className="container">
      <div className="cs_banner cs_style_6 cs_white_bg cs_radius_30 mb-20 ">
        <div className="cs_banner_img mr-5">
          <Image src={imgUrl} alt="Banner" placeholder="blur" />
        </div>
        <div className="d-inline-block">
          <h2 className="cs_banner_title cs_fs_72">{parse(title)}</h2>
          <p className="cs_banner_subtitle cs_heading_color cs_fs_20 m-0 cs_medium">
            {parse(subTitle)}
          </p>
        </div>
      </div>
    </div>
  );
}
