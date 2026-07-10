import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PrescriptionForm } from "@/app/prescription/PrescriptionForm";

export function PrescriptionSection() {
  return (
    <section id="prescription" className="bg-white py-20 dark:bg-navy-900 sm:py-28">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Digital Prescription Pad"
          title="Write & download a prescription"
          description="Used during in-chamber consultations. Fill in patient details and medicines below, then export a clean, print-ready A4 PDF."
          align="center"
        />
        <div className="mt-8">
          <PrescriptionForm />
        </div>
      </Container>
    </section>
  );
}
