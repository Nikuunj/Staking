"use client"
import Link from "next/link"
import ShiningText from "./ShiningText"
import { GithubIcon, Grip } from "lucide-react"
import { useState } from "react"
import SlideBar from "./SlideBar"
import { motion } from "framer-motion"

function NavBar() {
   const [open, setOpen] = useState<boolean>(false);

   return (
      <div className={`fixed min-w-screen top-2.5 overflow-hidden z-50`}>
         <div className={`bg-emerald-800/30 inset-shadow-[0px_0px_5px] items-center  inset-shadow-black/50 mx-5 px-5 py-3 rounded-2xl flex justify-between`}>
            <h1 className="font-bold text-2xl">
               <ShiningText text="XStake" />
            </h1>
            <div className="flex gap-x-1">
               <motion.div
                  whileTap={{ scale: 0.8 }}
                  transition={{duration: 0.2}}
               >
                  <Link href={'https://github.com/Nikuunj/staking'} target="_blank">
                     <div className="hover:bg-emerald-700/40 p-1 rounded-md">
                        <GithubIcon className="text-emerald-200 w-5 h-5" />
                     </div>
                  </Link>
               </motion.div>

               <motion.div
                  whileTap={{ scale: 0.8 }}
                  transition={{duration: 0.2}}
                  className="hover:bg-emerald-700/40 p-1 rounded-md" onClick={() => setOpen(true)}
               >
                  <Grip className="w-5 h-5" />
               </motion.div>

               { open && <SlideBar closeOpen={setOpen} /> }
            </div>
         </div>
      </div>
   )
}

export default NavBar