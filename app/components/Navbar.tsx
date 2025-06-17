import React from "react";

const Navbar = () => (
  <nav style={{ padding: "1rem 2rem", background: "#222", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>ShadowGrow</div>
    <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
      <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
      <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Shop</a></li>
      <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
      <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
