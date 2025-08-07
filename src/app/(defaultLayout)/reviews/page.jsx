import Section from "@/app/ui/Section";
import BreadcrumbStyle2 from "@/app/ui/Breadcrumb/BreadcrumbStyle2";
import AllReviews from "./AllReviews";


export default function Reviews() {

  return (
    <>
      <BreadcrumbStyle2 />

      <Section
   
        id="reviews"
      >
        <AllReviews/>

      </Section>
    </>
  );
}
