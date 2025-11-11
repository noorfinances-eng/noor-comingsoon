export default function Home() {
  return (
    <main style={styles.wrap}>
      <h1 style={styles.title}>NOOR</h1>

      <style jsx>{`
        main::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(50% 40% at 50% 30%, rgba(245,196,66,0.15), transparent 60%);
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
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
    position: "relative",
    margin: 0,
  },
  title: {
    fontSize: "6rem",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    textShadow: "0 0 12px rgba(245,196,66,0.25)",
  },
};
