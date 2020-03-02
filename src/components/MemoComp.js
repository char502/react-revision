import React from "react";

function MemoComp({ name }) {
  console.log("rendering memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
// Similar to pure components in class components
// memo is the equivalent in functional components
