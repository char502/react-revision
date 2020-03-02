import React from "react";
import MyStyles from "./MyStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
      {/* There is a library called classnames which makes this cleaner/easier */}
    </div>
  );
}

export default Stylesheet;
