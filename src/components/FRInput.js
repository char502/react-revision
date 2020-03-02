import React from "react";

// forwardRef takes a function as a parameter
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      {/* the ref is being forwarded from the parent to the native input element */}
    </div>
  );
});

export default FRInput;
