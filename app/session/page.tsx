import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function SessionPage() {
  return (
    <>
      <PageHeader title="Book a Session" />
      <main className="bg-white py-24">
        <div className="container-page mx-auto max-w-xl text-center">
          <p className="text-base leading-relaxed text-charcoal/80">
            Session booking is coming soon. Reach out via the newsletter
            signup below and we&apos;ll follow up directly.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
