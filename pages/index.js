export default function ComingSoon() {
  return (
    <main className="relative isolate min-h-[70vh] grid place-items-center bg-halo">
      <div className="w-full max-w-2xl text-center">
        <h2 className="badge mb-4">Public</h2>

        <h1 className="text-4xl md:text-5xl font-bold">
          NOOR <span className="text-gold">/ NUR</span>
        </h1>
        <p className="mt-3 text-lg text-white/80">
          The Light of Transparency in Crypto
        </p>

        <div className="card mt-8 p-6">
          <h3 className="text-2xl font-semibold text-gold mb-2">
            🌙 Arrive bientôt / Coming Soon
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Le site officiel du projet NOOR (NUR) est en préparation.
            <br />
            The official website of the NOOR (NUR) project is coming soon.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="mailto:info@noortoken.com" className="btn-gold">Contact</a>
            <a href="/docs" className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition-colors">
              Docs
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">
          Token V2: 0xA20212290866C8A804a89218c8572F28C507b401 • BSC Mainnet (56)
        </div>
      </div>
    </main>
  );
}
