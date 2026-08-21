import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className='h-[8vh] bg-transparent flex w-full -z-10'></nav>
      <section className="grid grid-row-2 h-[92vh]">
        <div className="flex relative w-full h-[50vh] justify-center">
          <Image className="mix-blend-darken object-contain" alt="an image of a vector" src={"/startup.png"} fill={true}  />
        </div>
        <div className="flex flex-col gap-5 items-center top-0 pb-40">
          <p className="font-bold font-stretch-50% mask-b-from-neutral-500 text-4xl">
            The best URL shortner SnapLink is here
          </p>
          <p>
            we have the best product and very straightforward URL shortner
          </p>
          <div className="flex justify-center items-center gap-3">
            <Link href="/generate"><button className='cursor-pointer bg-purple-400 shadow-lg py-0.5 rounded-lg px-2.5 font-medium'>Try Now</button></Link>
             <Link href="/"><button className='cursor-pointer bg-purple-400 shadow-lg py-0.5 rounded-lg px-2.5 font-medium'>GitHub</button></Link>
        </div>
          </div>
      </section>
    </main>
  );
}
