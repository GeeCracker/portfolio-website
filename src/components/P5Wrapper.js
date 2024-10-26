import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const p5ContainerRef = useRef();

  useEffect(() => {
    // Initialize p5 instance on the container div
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // Clean up p5 instance on component unmount
    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div ref={p5ContainerRef} />;
};

export default P5Wrapper;