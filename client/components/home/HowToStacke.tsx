import ShiningText from "../ui/ShiningText"

function HowToStacke() {
   return (
      <section className={`flex flex-col items-center gap-y-7  text-balance mb-22`}>
         <h1 className={`text-4xl font-semibold text-center`}>
            How {' '} <ShiningText text="stake" /> {' '} Ethereum ? 
         </h1>
      </section>
   )
}

export default HowToStacke