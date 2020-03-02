import React from "react";

const heading = {
  textAlign: "center",
  fontSize: "72px",
  color: "blue"
};

function Inline() {
  return (
    <div>
      {/* Modules are locally scoped by default */}
      {/* this will not work because styles id not linked to this component */}
      {/* So cannot accidentally use a class that is deefined for some other component */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* // =================================================== */}
      {/* The CSS applies to every child component as well */}
      <h1 className="error">Error</h1>

      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
