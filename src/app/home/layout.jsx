export default function HomeLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        background: "#0f172a", // Next.js default dark background
      }}
    >
      <div
        style={{
          background: "#1e293b", // Dark card background
          padding: "2.5rem 3rem",
          borderRadius: "1.25rem",
          boxShadow: "0 6px 32px rgba(0,0,0,0.25)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#a5b4fc", marginBottom: "1rem", fontWeight: 700 }}>
          Welcome to the Home Page!
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>
          This is a demo home page built with React.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Simple layout
          </li>
          <li style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Easy to customize
          </li>
          <li style={{ color: "#60a5fa" }}>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Ready for your content
          </li>
        </ul>
      </div>
    </div>
  );
}
