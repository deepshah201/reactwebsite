import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (
      mode ===
      "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
    ) {
      setMode(
        " linear-gradient(to right, #f7ff09, #d6ff00, #afff00, #7fff00, #29ff08)"
      );
      document.body.style.backgroundImage =
        "  linear-gradient(to right, #f7ff09, #d6ff00, #afff00, #7fff00, #29ff08)";
    } else {
      setMode(
        "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
      );
      document.body.style.backgroundImage =
        " linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About Us"
      />

      {/* Default prop   */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyze below" />
      </div>
      <Footer />
    </>
  );
}

export default App;
