import React from 'react';
import Pricing from '../../Pricing';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';

export default function PricingSection({ sectionTitle, data }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} center />
      <Spacing md="72" lg="50" />
      
      {/* Clean Grid Layout */}
      <div className="cs_pricing_clean_grid">
        <div className="row g-4">
          {data?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="h-100">
                <Pricing {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-5 pt-4">
        <p className="cs_gray_color cs_fs_16 mb-2">
          All services can be customized based on your specific health condition and care demands.
        </p>
        <p className="cs_gray_color cs_fs_14">
          Initial assessment fee: <span className="cs_orange_color cs_medium">GHc 200</span>
        </p>
      </div>
    </div>
  );
}