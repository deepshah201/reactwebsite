import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Click");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on Changed");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    // console.log("Click");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclrClick = () => {
    // console.log("Click");
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");

  return (
    <div className="h3">
      <div className="form-group">
        <h3
          style={{
            color:
              props.mode ===
              "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
                ? "slategray"
                : "steelblue",
          }}
        >
          <label htmlfor="myBox">{props.heading}</label>
        </h3>
        <textarea
          placeholder="Enter text here"
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            fontSize: "30px",
            backgroundImage:
              props.mode ===
              "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
                ? " linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
                : " linear-gradient(to left, #34361a, #5c6320, #889421, #b6c81b, #e6ff00)",
            color:
              props.mode ===
              "linear-gradient(to left, #00ff25, #00fb96, #00f1da, #00e2fd, #00cfff)"
                ? "white"
                : "Black",
          }}
          id="myBox"
          rows="5"
        ></textarea>
      </div>
      <button onClick={handleUpClick}>
        <span class="button-content">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V24H0z" fill="none"></path>
            <path
              d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          Convert to Uppercase!
        </span>
      </button>
      <button onClick={handleLowClick}>
        <span class="button-content">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V24H0z" fill="none"></path>
            <path
              d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          Convert to Lowercase!
        </span>
      </button>
      <button onClick={handleclrClick}>
        <span class="button-content">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V24H0z" fill="none"></path>
            <path
              d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          Clear text area!
        </span>
      </button>
    </div>
  );
}
