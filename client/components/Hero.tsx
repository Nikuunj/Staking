import Button from "./ui/Button"
import HeroBg from "./ui/HeroBg"
import ShiningText from "./ui/ShiningText"

function Hero() {
   return (
      <div className="relative">
         <section className={`min-h-screen flex flex-col justify-center items-center gap-y-5`}>
            <h1 className={`text-3xl/9 max-w-64 sm:max-w-80 md:max-w-lg lg:max-w-3xl sm:text-4xl/11 md:text-6xl/15 lg:text-8xl/23 text-center break-words font-bold `}>Start {" "}
               <ShiningText text={'Stacking'} />
               {" "} With US
            </h1>
            <Button size={'sm'} varient={'default'}>Button</Button>
            <Button size={'md'} varient={'default'}>Button</Button>
            <Button size={'lg'} varient={'default'}>Button</Button>
         </section>
         <HeroBg />
      </div>
   )
}

export default Hero