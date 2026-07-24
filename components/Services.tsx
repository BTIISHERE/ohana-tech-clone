const services = [
  {
    title: "Workflow Automation",
    description:
      "We identify repetitive, manual processes and rebuild them as automated systems, cutting the time your team spends on routine operational work.",
  },
  {
    title: "Custom Web Applications",
    description:
      "From internal tools to client-facing platforms, we design and build web apps tailored to how your organization actually operates.",
  },
  {
    title: "Technology Consulting",
    description:
      "We assess your current stack and workflows, then map a practical path to modernization so your team can allocate time and assets more efficiently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest2 text-clay-dark">
            What we do
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-wide text-charcoal sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Practical automation and software built around the way your
            organization already works.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-charcoal/10 p-8 transition hover:border-clay hover:shadow-lg"
            >
              <div className="mb-5 h-10 w-10 rounded-full bg-clay" aria-hidden="true" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
