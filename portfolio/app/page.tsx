export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6 inline-block rounded-full border border-canvas-accent/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-canvas-accent">
          Em construção
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Portfólio em construção
        </h1>
        <p className="mt-4 text-lg text-neutral-400">
          Automações inteligentes que transformam operações — em breve.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-canvas-accent to-transparent" />
      </div>
    </main>
  );
}
