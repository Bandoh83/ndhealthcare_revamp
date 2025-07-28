import { notFound } from 'next/navigation';
import AboutSectionStyle2 from '@/app/ui/Section/AboutSection/AboutSectionStyle2';
import AppointmentSection from '@/app/ui/Section/AppointmentSection';
import Section from '@/app/ui/Section';
import departmentData from '../departmentData';


export function generateStaticParams() {
  return departmentData.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetails({ params }) {
  const { slug } = params;
  const service = departmentData.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <Section topMd={135}>
        <AboutSectionStyle2
          title={service.title}
          subTitle={service.subTitle}
          imgUrl={service.imgUrl}
        />
      </Section>

      <Section
        topMd={190}
        bottomMd={190}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpg"
          serviceName={service.title}
          servicePrice={service.price}
        />
      </Section>
    </>
  );
}
