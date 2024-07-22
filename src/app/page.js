import Image from "next/image";
import frog from "@/assets/frog-worship.png"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div>Graham Carkner</div>
      <div className="flex flex-row space-x-4 mb-6">
        <a href="https://www.linkedin.com/in/gcarkner/" target="_blank">linkedin</a>
        <a href="https://github.com/GeeCracker" target="_blank">github</a>
      </div>

      <Image src={frog} height={400} />
      <i className="mt-2">'frog worship'</i>
    </main>
  );
}
