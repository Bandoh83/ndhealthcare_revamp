import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="0530610013"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="info@ndhealthcare.net"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle=" City Galleria, 4th Floor opposite the Accra Mall off the Spintex Road"
            iconSrc="/images/contact/icon_3.svg"

          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/place/City+Galleria,+Accra/@5.6214697,-0.1735325,18.38z/data=!4m6!3m5!1s0xfdf9b6909894619:0xbc66311507dbc71c!8m2!3d5.6212921!4d-0.1724782!16s%2Fg%2F11ll9c8434?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
