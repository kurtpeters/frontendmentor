import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>frontendmentor.io</h1>

      <nav>
        <Link to="qr-code-component">QR code component</Link>
      </nav>
    </div>
  );
}
