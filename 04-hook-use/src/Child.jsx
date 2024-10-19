import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const Child = ({ fun} ) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof fun === 'function') {
      setValue(fun());  
    }
  }, [fun]);

  console.log("Child rendered");

  return (
    <>
      <div>Sum: {value}</div>
    </>
  );
};

// Prop validation
Child.propTypes = {
  fun: PropTypes.func.isRequired,
};

export default React.memo(Child);

