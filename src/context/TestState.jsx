import React, { useState } from 'react';
import TestContext from './TestContext';

const TestState = (props) => {
  // ✅ Add 'const' here!
  const [testcount, setTestCounter] = useState(0);
  const test = 1000;

  return (
    <TestContext.Provider value={{ test, testcount, setTestCounter }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestState;
