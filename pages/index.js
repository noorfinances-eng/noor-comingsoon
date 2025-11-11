// pages/index.js
export default function Home() {
  return (
    <main style={styles.wrap}>
      <div style={styles.card}>
        <h1 style={styles.title}>NOOR <span style={{color:'#f5c542'}}>/ NUR</span></h1>
        <p style={styles.tagline}>The Light of Transparency in Crypto</p>

        <div style={styles.box}>
          <h2 style={styles.h2}>🌙 Arrive bientôt / Coming Soon</h2>
          <p style={styles.p}>
            Le site officiel du projet NOOR (NUR) est en préparation.<br/>
            The official website of the NOOR (NUR) project is coming soon.
          </p>
          <div style={styles.actions}>
            <a href="mailto:info@noortoken.com" style={styles.btn}>Contact</a>
            <a href="/docs" style={styles.link}>Docs</a>
          </div>
        </div>

        <p style={styles.meta}>
          Token V2: 0xA20212290866C8A804a89218c8572F28C507b401 • BSC Mainnet (56)
        </p>
        <p style={styles.copy}>© 2025 NOOR Project — Proof of Light</p>
      </div>

      <style jsx>{`
        main::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(60% 40% at 50% 25%, rgba(245,196,66,0.14), transparent 60%);
          pointer-events: none;
        }
      `}</style>
    </main>
  );
}

const styles = {
  wrap: {
    minHeight: '100vh',
    margin: 0,
    background: '#0b0d12',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    padding: '48px 24px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial'
  },
  card: { maxWidth: 720, textAlign: 'center' },
  title: { fontSize: 44, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' },
  tagline: { margin: '8px 0 28px', color: 'rgba(255,255,255,0.75)' },
  box: {
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(0,0,0,0.35)',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 0 0 1px rgba(245,196,66,0.15), 0 12px 48px rgba(245,196,66,0.08)'
  },
  h2: { margin: 0, marginBottom: 8, color: '#f5c542', fontSize: 22, fontWeight: 700 },
  p: { margin: 0, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, fontSize: 14 },
  actions: { marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center' },
  btn: {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: 12,
    color: '#f5c542',
    border: '1px solid rgba(245,196,66,0.45)',
    background: 'rgba(245,196,66,0.12)',
    textDecoration: 'none'
  },
  link: {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: 12,
    color: 'rgba(255,255,255,0.9)',
    border: '1px solid rgba(255,255,255,0.12)',
    textDecoration: 'none'
  },
  meta: { marginTop: 16, color: 'rgba(255,255,255,0.55)', fontSize: 12 },
  copy: { marginTop: 8, color: 'rgba(255,255,255,0.35)', fontSize: 11 }
};
