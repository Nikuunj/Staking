
function HeroBg() {
   return (
      <div className={`absolute inset-0 -z-20 flex justify-between`}>

         <div className={"min-w-52 md:min-w-64 bg-radial-[at_0%_0%] from-[#15803d] to-gray-950 to-68%"} />
         <div className={"min-w-52 md:min-w-64 hidden sm:block bg-radial-[at_100%_0%] from-[#15803d] to-gray-950 to-68%"} />
         
      </div>
   )
}

export default HeroBg