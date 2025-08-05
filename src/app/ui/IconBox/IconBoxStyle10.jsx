import Image from 'next/image';
import React from 'react';

export default function IconBoxStyle10({ title, iconUrl, subTitle }) {
  return (
    <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg text-center">
      <div className="cs_iconbox_icon cs_center rounded-circle">
        <div>{iconUrl}</div>
      </div>
      <h2 className="cs_iconbox_title cs_heading_color">{title}</h2>
      <p className="cs_iconbox_subtitle cs_heading_color mb-0">{subTitle}</p>
    </div>
  );
}
