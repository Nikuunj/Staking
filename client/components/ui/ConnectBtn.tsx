"use client"
import { Connectors } from "@/components/ui/Connectors"
import { ReactNode, useState } from "react"

import Button from "./Button";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

function ConnectBtn({ children }: { children: ReactNode }) { 
   const [open, setOpen] = useState<boolean>(false);
   return (
      <div>
         <motion.button 
         whileTap={{ scale: 0.8 }}
         transition={{duration: 0.2}}
         className="cursor-pointer outline-0" onClick={() => setOpen(true)}>
            {children}
         </motion.button>
         { open &&
            <div className="flex justify-center fixed inset-0 items-center bg-black/35" onClick={() => setOpen(false)}>
               <section className="border border-emerald-800 bg-emerald-950/80  p-10 rounded-lg w-fit items-start flex flex-col" onClick={(e) => e.stopPropagation()}>
                  <Button varient='outline' size="sm" className=" rounded-lg mb-5" handleClick={() => setOpen(false)}>
                     <XIcon className="h-5 w-5 text-red-500"/>
                  </Button>
                  <Connectors handleClick={() => setOpen(false)}/> 
               </section>
            </div>
         }
      </div>
   )
}

export default ConnectBtn