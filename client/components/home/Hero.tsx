import Button from "../ui/Button"
import HeroBg from "../ui/HeroBg"
import ShiningText from "../ui/ShiningText"

function Hero() {
   return (
      <div className="relative">
         <section className={`min-h-screen flex flex-col justify-center items-center gap-y-5`}>
            <h1 className={`text-3xl/9  max-w-64 shadow-emerald-300 sm:max-w-80 md:max-w-lg lg:max-w-3xl sm:text-4xl/11 md:text-6xl/15 lg:text-8xl/23 text-center break-words font-bold `}>
               <span className="text-shadow-lg text-shadow-emerald-900">
                  Start {" "}
               </span>
               <ShiningText text={'Stacking'} />
               <span className="text-shadow-lg text-shadow-emerald-900">
                  {" "} With US
               </span>
            </h1>
            <Button size={'lg'} varient={'shine'} className={'rounded-md'}>Stack ETH</Button>
         </section>
         <HeroBg />
      </div>
   )
}

export default Hero