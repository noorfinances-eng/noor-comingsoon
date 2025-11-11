// pages/index.js
// Page d'attente officielle NOOR — Coming Soon / Arrive bientôt

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          NOOR Project
        </h1>
        <p className="text-lg text-neutral-300 mb-8">
          The Light of Transparency in Crypto
        </p>

        <div className="border border-yellow-500/40 rounded-2xl p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">
            🌙 Arrive bientôt / Coming Soon
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Le site officiel du projet NOOR (NUR) est en préparation.
            <br />
            The official website of the NOOR (NUR) project is coming soon.
          </p>
        </div>

        <div className="mt-10 text-sm text-neutral-400">
          <p>
            Contact :{" "}
            <a
              href="mailto:info@noortoken.com"
              className="text-yellow-300 hover:text-yellow-200 underline underline-offset-2"
            >
              info@noortoken.com
            </a>
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            © 2025 NOOR Project — Proof of Light
          </p>
        </div>
      </div>
    </main>
  );
}
