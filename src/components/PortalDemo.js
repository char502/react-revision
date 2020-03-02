import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
    // An event fired from insude a portal will propogate to ancestors in the containing react tree, event bubbling still works
  );
}

export default PortalDemo;
