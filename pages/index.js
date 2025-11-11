export default function Home() {
  return (
    <main style={styles.wrap}>
      <div style={styles.center}>
        <h1 style={styles.title}>NOOR</h1>
        <p style={styles.subtitle}>Coming Soon</p>
      </div>

      <style jsx>{`
        main::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            60% 40% at 50% 30%,
            rgba(245, 196, 66, 0.12),
            transparent 60%
          );
          pointer-events: none;
        }
      `}</style>
    </main>
  );
}

const styles = {
  wrap: {
    minHeight: "100vh",
    background: "#0b0d12",
    color: "#f5c542",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
    margin: 0,
    textAlign: "center",
    position: "relative",
  },
  center: {
    position: "relative",
    zIndex: 10,
  },
  title: {
    fontSize: "6rem",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    textShadow: "0 0 20px rgba(245,196,66,0.25)",
    margin: 0,
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: "1.5rem",
    color: "rgba(245,196,66,0.75)",
    fontWeight: 400,
    letterSpacing: "0.1em",
  },
};
