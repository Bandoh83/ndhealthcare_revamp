import React from 'react';

export default function IconBoxStyle4({ title, IconComponent }) {
  return (
    <div className="cs_iconbox cs_style_4 cs_core_values">
      <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center text-white">
        {IconComponent && <IconComponent />}
      </div>
      <h2 className="cs_iconbox_title cs_fs_32 text-center">{title}</h2>
    </div>
  );
}