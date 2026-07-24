export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden bg-clay px-6 pt-32 pb-24 text-center sm:min-h-[720px]">
      <div className="container-page flex flex-col items-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-white/80 sm:text-sm">
          New York, NY
        </p>
        <h1 className="font-heading text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
          Ohana Tech Inc
        </h1>
        <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-widest2 text-white/90 sm:text-base">
          Site under development
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Ohana Tech Inc is a tech consulting corporation based out of New York
          focused on optimizing routine workflows into automated web apps to
          reduce organizational demands, allowing our clients to more
          efficiently allocate their time and assets.
        </p>
        <a
          href="/session"
          className="mt-10 rounded-full bg-white px-8 py-3 text-sm font-semibold text-clay-dark shadow-lg transition hover:bg-white/90"
        >
          Book a session
        </a>
      </div>
    </section>
  );
}
