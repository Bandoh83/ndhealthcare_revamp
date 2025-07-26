import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IconBoxStyle4({ title, subTitle, IconComponent }) {
  return (
    <div className="cs_iconbox cs_style_4">
      <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center text-white text-5xl">
        {IconComponent && <IconComponent />}
      </div>
      <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
    </div>
  );
}
