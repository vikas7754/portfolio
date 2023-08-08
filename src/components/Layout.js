import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ nav, footer, children }) {
  return (
    <>
      {!nav && <Navbar />}
      <main style={{ padding: nav ? "auto" : "60px 2vw 10px 2vw" }}>
        {children}
      </main>
      {!footer && <Footer />}
    </>
  );
}

export default Layout;
