import React from "react";
import Image from "next/image";
import seniorNurseImage from "/public/images/about/senior_nurse.jpg";
import Spacing from "../../Spacing";

const WhoWeAreSection = () => {
  return (
    <>
<section className="container mx-auto cs_about cs_style_1">
  <div className="container">
    <div className="row align-items-center flex-lg-row flex-column-reverse cs_gap_y_40 justify-content-between">
      <div className="col-lg-5">
        <div className="cs_about_content">
          <div className="cs_section_heading cs_style_1">
            <h2 className="cs_section_title cs_orange_color cs_fs_72 m-0">
              Who We Are
            </h2>
            <div className="cs_height_5" />
            <p className="text-lg md:text-xl cs_heading_color leading-relaxed">
              <span className="font-semibold">ND Healthcare</span> is a
              professional homecare service company dedicated to improving
              health outcomes through personalized and accessible care. We
              are committed to bridging the gap between clinical care and
              the comfort of your home.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="rounded-xl overflow-hidden w-[500px] h-[300px] relative">
          <Image
            src={seniorNurseImage}
            alt="ND Healthcare Team"
            className="object-cover"
            priority
            width={700}
            height={500}
            placeholder="blur"
            style={{
              borderRadius: "12px", 
            }}
          />
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default WhoWeAreSection;
