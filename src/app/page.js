"use client"

import frog from "@/assets/frog-worship.png";
import { useState } from "react";
import Image from 'next/image';

export default function Home() {

  const [showModal, setShowModal] = useState("");

  const A = ({ text }) => {
    return (
      <span 
        className="text-blue-600 hover:underline hover:cursor-pointer"
        onClick={() => setShowModal(text)}
      >
        {text}
      </span>
    )
  }

  const I = ({ img }) => {
    return (
      <div 
        className="flex items-center justify-center border border-black h-60 w-60 duration-300"
        onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${(randRotate())}deg)`}
        onMouseLeave={(e) => e.currentTarget.style.transform = ""}
      >
        <Image 
          src={img}
          height={150}
          width={150}
          alt={"a painting of a frog"}
        />
      </div>
    )
  }

  const randRotate = () => {
    return Math.floor(Math.random() * (345 - 15 + 1) + 15) * (Math.random() < 0.5 ? -1 : 1) ;
  }

  return (
    <>
    <main className="flex flex-col min-h-screen pt-20 pb-20">
      <div className="text-3xl font-bold pb-2 border-b border-black">Graham Carkner</div>
      <div className="mt-8 space-y-4 text-lg">
        <p>My first role as a developer was building the early stages of a interfacing software for the quantum spectrometer at <A text="HighQ Technologies" />. It was my early introduction into development process and tools.</p>
        <p>At school, I built a bunch of apps and websites with <A text="QTMA" /> including <A text="WOB" />, <A text="Loop" />, <A text="Casa" />, and <A text="Parki" />. I experienced firsthand taking an idea through the whole development lifecycle, and the process of collaborating with business interests. </p>
        <p>Casa became a pet project, and spun out into <A text="Homiis" />. I learned all about what it means to do a real life startup and owning a product.</p>
        <p>In the meantime, I worked for two different teams at <A text="Solace" />. I worked in an agile development team, experiences all of the rituals which that entailed, and my contributions were constantly deployed to the SaaS product through automated pipelines. Then I joined a CI/CD team, and got to work hands on with process automation tools.</p>
        <p>Now, I’m looking for something new so I can continue to build and learn.</p>
      </div>
      <div className="text-lg mt-20">
        <p className="mb-4">Some other interesting things:</p>
        <div className="flex flex-row flex-wrap gap-6">
          <I img={frog} />
          <I img={frog} />
          <I img={frog} />
        </div>
      </div>
    </main>

    { showModal ? <Modal content={showModal} close={() => setShowModal("")} /> : null }
    </>
  );
}

function Modal({ content, close }) {
  return (
    <div className="absolute border top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[60%] border-black bg-white p-6">
      <div className="flex flex-row items-center">
        <div className="text-3xl font-bold mr-8">{ content }</div>
        <div 
          className="text-2xl font-bold ml-auto text-red-600 hover:cursor-pointer"
          onClick={close}
        >
          X
        </div>
      </div>
    </div>
  )
}
