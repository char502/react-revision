import React from "react";
// import styled from "styled-components";

function Columns() {
  const items = ["green", "blue", "brown"];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Charlotte</td>
    </React.Fragment>
  );
}

export default Columns;
