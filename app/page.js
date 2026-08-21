import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
    
      <nav className='h-[8vh] bg-transparent flex w-full'></nav>

    
      <section className="flex flex-col min-h-[92vh] justify-center items-center px-4 py-6 gap-6">
        
      
        <div className="relative w-full h-[35vh] md:h-[45vh] max-w-lg mx-auto">
          <Image 
            className="mix-blend-darken object-contain" 
            alt="an image of a vector" 
            src={"/startup.png"} 
            fill={true} 
            priority
          />
        </div>

      
        <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-black leading-tight mask-b-from-neutral-500">
            The best URL shortner SnapLink is here
          </p>

          <p className="text-sm sm:text-base text-gray-700 max-w-md ">
            We have the best product and very straightforward URL shortner
          </p>

        
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link href="/generate">
              <button className='cursor-pointer bg-purple-400 hover:bg-purple-500 transition-all shadow-lg py-2 px-5 rounded-lg font-medium text-sm md:text-base'>
                Try Now
              </button>
            </Link>
            
            <Link href="/">
              <button className='cursor-pointer bg-purple-400 hover:bg-purple-500 transition-all shadow-lg py-2 px-5 rounded-lg font-medium text-sm md:text-base'>
                GitHub
              </button>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}