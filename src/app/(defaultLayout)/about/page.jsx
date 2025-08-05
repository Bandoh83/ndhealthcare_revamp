"use client";
import Section from "../../ui/Section";
import DepartmentSectionStyle2 from "../../ui/Section/DepartmentSection/DepartmentSectionStyle2";
import BannerSectionStyle3 from "../../ui/Section/BannerSection/BannerSectionStyle3";
import FeaturesSectionStyle2 from "../../ui/Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../../ui/Section/FunFactSection";
import GallerySection from "../../ui/Section/GallerySection";
import TeamSection from "../../ui/Section/TeamSection";
import CoreValuesHorizontal from "../../ui/Section/CoreValuesHorizontal";
import bannerImg from "../../../../public/images/about/banner_img.png";
import whyChooseUsImg from "../../../../public//images/about/why_choose_us.jpg";
import AwardSection from "../../ui/Section/AwardSection";
import { GiMedicines } from "react-icons/gi";
import { CarOutlined, HeartOutlined } from "@ant-design/icons";
import { PiWheelchair } from "react-icons/pi";
import { TbFriends } from "react-icons/tb";
import coreValuesData from "../../ui/Section/coreValuesData";
import WhoWeAreSection from '../../ui/Section/WhoWeAreSection';

const departmentData = [
  {
    title: "Assisted travel",
    subTitle:
      "Whether you want to pop to the shops, visit loved ones or go on holiday, a carer can help you get out of your home.",
    IconComponent: CarOutlined,
  },
  {
    title: "Personal Care",
    subTitle:
      "All of our carers can help with matters of personal care, such as bathing, toileting and getting dressed.",
    IconComponent: HeartOutlined,
  },
  {
    title: "Mobility support",
    subTitle:
      "If you struggle with mobility, your carer can help you move around your home or get out and about.",
    IconComponent: PiWheelchair,
  },
  {
    title: "Medication assistance",
    subTitle:
      "A carer can ensure you’re taking the right medication at the right times, as well as helping you administer it.",
    IconComponent: GiMedicines,
  },
  {
    title: "Friendly companionship",
    subTitle:
      "Sometimes we just need a friendly, reassuring face to cheer us up, which is something our carers are great at.",
    IconComponent: TbFriends,
  },
];

const featureListData = [
  {
    title: "Compassionate Care",
    subTitle:
      "We treat our clients with the same level of care and respect as we would treat our own family.",
    iconUrl: "/images/icons/professional.svg",
  },
  {
    title: "Experienced Caregivers",
    subTitle:
      "Our team is carefully selected for their skills, qualifications, and compassion. They undergo comprehensive training and background checks to ensure your safety and comfort.",
    iconUrl: "/images/icons/comprehensive.svg",
  },
  {
    title: "Personalized Plans",
    subTitle:
      "We work closely with you and your family to develop a care plan that is tailored to your needs and preferences.",
    iconUrl: "/images/icons/patient.svg",
  },
  {
    title: "Quality and Trust",
    subTitle:
      "We are committed to the highest standards of care, ensuring your loved one is treated with the utmost respect and professionalism.",
    iconUrl: "/images/icons/facilities.svg",
  },
];

// const funFactData = [
//   { number: "20+", title: "Years of experience" },
//   { number: "95%", title: "Patient satisfaction rating" },
//   { number: "5000+", title: "Patients served annually" },
//   { number: "10+", title: "Healthcare providers on staff" },
//   { number: "22+", title: "Convenient locations in the area" },
// ];

const awardData = [
  {
    title: "Mission",
    subTitle:
      "Our mission is to deliver reliable, professional, and compassionate care that enhances the lives of our service users. We strive to build lasting relationships based on trust, respect, and understanding, ensuring that every individual receives care that is both effective and empathetic.",
    iconUrl: "/images/icons/award.svg",
  },
  {
    title: "Vision",
    subTitle:
      "At ND Healthcare, our vision is to be the leading provider of compassionate, high-quality homecare services, empowering individuals to live independently and with dignity in the comfort of their own homes. We strive to create a future where every person receives personalized care that supports their physical, emotional, and social well-being, and where families find peace of mind knowing their loved ones are in the best possible hands.",
    iconUrl: "/images/icons/award.svg",
  },
];
// const teamData = [
//   {
//     imgUrl: "/images/about/director.png",
//     name: "Kofi Nketia",
//     designation: "Director",
//     description:'kofinketia@ndhealthcare.net'
//   },
//   {
//     imgUrl: "/images/about/project_manager.png",
//     name: "Dennis Ntim Banahene",
//     designation: "Project Manager",
//     description: 'dennisntimbanaheneboamah\n@ndhealthcare.net'
//   },
//   {
//     imgUrl: "/images/about/business_dev.png",
//     name: "Harmonica Nyarko",
//     designation: "Business Developer",
//     description:'businessdevelopmentofficer\n@ndhealthcare.net'
//   },
//   {
//     imgUrl: "/images/about/quality.png",
//     name: "Sarah Sarpong",
//     designation: "Quality Assurance Manager",
//     description: "sarahsarpong@ndhealthcare.net",
//   },
//   {
//     imgUrl: "/images/about/senior_nurse.png",
//     name: "Gracemary Arko",
//     designation: "Senior Nurse Consultant",
//     description: "seniornurseconsultant@ndhealthcare.net",
//   },
// ];

const galleryData = [
  { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
  { imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];

// export const metadata = {
//   title: "About"
// }

export default function About() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/hero_bg.png"
        imgUrl={bannerImg}
        title="Welcome to <br /> ND Healthcare"
        subTitle="we provide compassionate, personalized homecare tailored to each individual's needs. Our dedicated team of doctors, nurses, and caregivers delivers high-quality support—from elderly and autism care to post-surgical and daily assistance—helping clients live with dignity and independence in the comfort of their homes."
      />

      <WhoWeAreSection/>
      <Section topMd={200} topLg={150} topXl={110}>
        <CoreValuesHorizontal
          sectionTitle="Our Core Values"
          sectionTitleUp="What Drives Us" // optional
        />
      </Section>

      <Section topMd={165} topLg={120} topXl={80}>
        <AwardSection sectionTitle="" data={awardData} />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={whyChooseUsImg}
          data={featureListData}
        />
      </Section>
      {/* <Section>
        <FunFactSection
          bgUrl="/images/about/fun_fact_bg.jpg"
          data={funFactData}
        />
      </Section> */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection sectionTitleUp="Meet Our Team" data={teamData} />
      </Section> */}
      <Section topMd={170} topLg={120} topXl={80} bottomLg={150}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section> */}
      {/* <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section> */}
    </>
  );
}
