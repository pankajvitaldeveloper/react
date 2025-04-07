import React from 'react'

const UseCallbackChild = ({ onClick }) => {
  console.log("🟢 Child Component Rendered!"); // Logs every render

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default React.memo(UseCallbackChild); // Wrap in React.memo to prevent unnecessary re-renders
