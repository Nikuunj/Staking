"use client"

import { motion } from "framer-motion"

function HeroBg() {
   return (
      <motion.div 
         initial={{ opacity: 0,  height: 0 }}
         whileInView={{ opacity: 1, height: "100vh" }}
         transition={{ duration: 0.3 }}
         viewport={{ once: true }}
         className={`absolute inset-0 -z-10 flex justify-between`}
      >

         <div className={"min-w-52 md:min-w-64 bg-radial-[at_0%_0%] from-[#15803d] to-gray-950 to-68%"} />
         <div className={"min-w-52 md:min-w-64 hidden sm:block bg-radial-[at_100%_0%] from-[#15803d] to-gray-950 to-68%"} />
         
      </motion.div>
   )
}

export default HeroBg