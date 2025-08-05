import { notFound } from "next/navigation";
import { departmentData } from "../departmentData";
import AboutSectionStyle2 from "../../../ui/Section/AboutSection/AboutSectionStyle2";
import AppointmentSection from "../../../ui/Section/AppointmentSection/AppointmentSectionStyle2";
import Section from "../../../ui/Section";
import appointmentImage from "/public/images/home_1/appointment.jpg";
import BreadcrumbStyle2 from "../../../ui/Breadcrumb/BreadcrumbStyle2";

export async function generateStaticParams() {
  return departmentData.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetails({ params }) {
  const { slug } = params;
  const service = departmentData.find((item) => item.slug === slug);



  if (!service) return notFound();

  
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135}>
        <AboutSectionStyle2
          title={service.title}
          subTitle={service.subTitle}
          imgUrl={service.imgUrl}
          points={service.points}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointmentImage}
          serviceName={service.title}
          servicePrice={service.price}
        />
      </Section>
    </>
  );
}
