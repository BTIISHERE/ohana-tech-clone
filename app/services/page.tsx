import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
