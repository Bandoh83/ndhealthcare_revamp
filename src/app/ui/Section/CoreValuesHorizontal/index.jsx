import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';

export default function CoreValuesHorizontal({
  sectionTitle = "Our Core Values",
  sectionTitleUp,
}) {
  const coreValues = [
    "Confidentiality",
    "Comfort", 
    "Patience",
    "Diligence",
    "Respect",
    "Compassion",
    "Safety"
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="72" lg="50" />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="cs_core_values_horizontal cs_white_bg cs_radius_20 cs_shadow_1">
            <div className="cs_values_list">
              {coreValues.map((value, index) => (
                <div className="cs_value_item" key={index}>
                  <div className="cs_value_dot cs_accent_bg"></div>
                  <span className="cs_value_name">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}