 import React, { forwardRef ,useRef} from 'react';

// Child component using forwardRef to pass ref to input
const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Type something" />;
});

export default InputComponent;
