import React from "react";
import PropTypes from "prop-types";
// import { getByPlaceholderText } from "@testing-library/react";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a
        className="navbar-brand"
        style={{
          fontSize: "xxx-large",
          letterSpacing: "3px",
          // textDecoration: "underline",
          fontWeight: "bold",
          color:
            props.mode ===
            "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
              ? "white"
              : "slategray",
        }}
      >
        {props.title}
      </a>

      <div class="love">
        <input id="switch" onClick={props.toggleMode} type="checkbox" />
        <label class="love-heart" for="switch">
          <i class="left"></i>
          <i class="right"></i>
          <i class="bottom"></i>
          <div class="round"></div>
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here",
// };
