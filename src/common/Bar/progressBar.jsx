import React, { useState, useEffect } from 'react';

const ProgressBarComp = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 1000);

    // Clear interval after 3 seconds
    setTimeout(() => {
      clearInterval(timer);
    }, 3000);

    return () => {
      clearInterval(timer); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBarComp;
