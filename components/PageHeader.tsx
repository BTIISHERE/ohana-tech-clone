import Navbar from "@/components/Navbar";

export default function PageHeader({ title }: { title: string }) {
  return (
    <section className="relative flex min-h-[280px] items-center justify-center bg-sage px-6 pb-12 pt-32 text-center sm:min-h-[320px]">
      <Navbar />
      <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
        {title}
      </h1>
    </section>
  );
}
