"use client";

import dynamic from 'next/dynamic';


const P5Wrapper = dynamic(() => import('../components/P5Wrapper'), { ssr: false });

const size = {h: window.innerHeight, w: window.innerWidth};

export const basicSketch = (p) => {
  p.setup = () => {
    p.createCanvas(size.w, size.h);
    p.background(220);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

export default function Home() {
  return (
    <div>
      <P5Wrapper sketch={basicSketch} />
    </div>
  );
}
