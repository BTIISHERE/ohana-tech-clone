import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function InformationPage() {
  return (
    <>
      <PageHeader title="Information" />
      <main className="bg-white py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <p className="text-base leading-relaxed text-charcoal/80">
            Ohana Tech Inc is a tech consulting corporation based out of New
            York focused on optimizing routine workflows into automated web
            apps to reduce organizational demands, allowing our clients to
            more efficiently allocate their time and assets.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
