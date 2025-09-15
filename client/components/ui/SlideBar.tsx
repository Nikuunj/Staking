"use client"
import { ChevronLeft, PowerIcon, PowerOffIcon } from "lucide-react"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import Button from "./Button"
import { Disconnect } from "./Disconnect"
import { useAccount } from "wagmi"
import ConnectBtn from "./ConnectBtn"

function SlideBar({ closeOpen }: { closeOpen: Dispatch<SetStateAction<boolean>> }) {
   const { address }  = useAccount();
   return (
      <div className="fixed inset-0 grid grid-cols-5">
         <div className="bg-black/30 border-r border-emerald-800 w-full hidden sm:block col-span-3 lg:col-span-4" onClick={() => closeOpen(false)}>
            
         </div>
         <div className="bg-black/65 w-full py-16 px-10 flex flex-col gap-2 text-zinc-300 col-span-5 sm:col-span-2 lg:col-span-1">
            <Button varient='outline' size="sm" className=" absolute top-6 rounded-lg" handleClick={() => closeOpen(false)}>
               <ChevronLeft className="text-zinc-300"/>
            </Button>
            <Link href={'/stake'} className="w-fit outline-0">
               <div className="w-fit hover:bg-emerald-800/40 p-2 rounded-lg">Stake ETH</div>
            </Link>
            <Link href={'/unstake'} className="w-fit outline-0">
               <div className="w-fit hover:bg-emerald-800/40 p-2 rounded-lg">Withdraw ETH</div>
            </Link>
            <Link href={'/rewards'} className="w-fit outline-0">
               <div className="w-fit hover:bg-emerald-800/40 p-2 rounded-lg">Claim Reward</div>
            </Link>
            <div className="absolute bottom-15">
               {address ? 
               <Disconnect className="outline-0"><PowerOffIcon className="text-red-700"/></Disconnect> :
               <ConnectBtn><PowerIcon className="text-green-700"/></ConnectBtn>
               }
            </div>
         </div>

      </div>
   )
}

export default SlideBar