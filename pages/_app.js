import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-night text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            NOOR <span className="text-gold">/ NUR</span>
          </h1>
          <nav className="flex gap-5 text-sm text-white/80">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <a href="mailto:info@noortoken.com" className="hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <Component {...pageProps} />
      </main>

      <footer className="mt-10 border-t border-white/10 py-6 text-center text-sm text-white/60">
        © 2025 NOOR Project — Proof of Light
      </footer>
    </div>
  );
}
