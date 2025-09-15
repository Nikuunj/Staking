"use client"
import { Connectors } from "@/components/ui/Connectors"
import { useState } from "react"

import Button from "./Button";
import { XIcon } from "lucide-react";

function ConnectBtn() { 
   const [open, setOpen] = useState<boolean>(false);
   return (
      <div>
         <div onClick={() => setOpen(true)}>
            BTN
         </div>
         { open &&
            <div className="flex justify-center fixed inset-0 items-center bg-black/35" onClick={() => setOpen(false)}>
               <section className="border border-emerald-800 bg-emerald-950/80  p-10 rounded-lg w-fit" onClick={(e) => e.stopPropagation()}>
                  <Button varient='outline' size="sm" className=" relative -top-5 -left-5  rounded-lg" handleClick={() => setOpen(false)}>
                     <XIcon className=" h-5 w-5 text-red-500"/>
                  </Button>
                  <Connectors handleClick={() => setOpen(false)}/> 
               </section>
            </div>
         }
      </div>
   )
}

export default ConnectBtn