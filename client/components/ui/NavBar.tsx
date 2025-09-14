"use client"
import Link from "next/link"
import ShiningText from "./ShiningText"
import { GithubIcon, Grip } from "lucide-react"
import { useState } from "react"
import SlideBar from "./SlideBar"

function NavBar() {
   const [open, setOpen] = useState<boolean>(false);

   return (
      <div className={`fixed min-w-screen top-2.5 overflow-hidden z-50`}>
         <div className={`bg-emerald-800/30 inset-shadow-[0px_0px_5px] items-center  inset-shadow-black/90 mx-5 px-5 py-3 rounded-2xl flex justify-between`}>
            <h1 className="font-bold text-2xl">
               <ShiningText text="XStake" />
            </h1>
            <div className="flex gap-x-1">
               <Link href={'https://github.com/Nikuunj/staking'}>
                  <div className="hover:bg-emerald-700/40 p-1 rounded-md">
                     <GithubIcon className="text-emerald-200 w-5 h-5" />
                  </div>
               </Link>

               <div className="hover:bg-emerald-700/40 p-1 rounded-md" onClick={() => setOpen(true)}>
                  <Grip className="w-5 h-5" />
               </div>

               { open && <SlideBar closeOpen={setOpen} /> }
            </div>
         </div>
      </div>
   )
}

export default NavBar