"use client"
import Button from "@/components/ui/Button";
import { Connectors } from "@/components/ui/Connectors";
import { stacking_abi, stacking_address } from "@/config/config";
import { CoinsIcon } from "lucide-react";
import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { formatEther } from "viem";

function page() {
   const { address } = useAccount();
   const { data: hash, writeContract } = useWriteContract();
   // console.log('1');
   
   const { status, data: balance, error } = useReadContract({
      abi: stacking_abi,
      address: stacking_address,
      functionName: 'balanceOf',
      args: [address]
   })

   const { data: rewards } = useReadContract({
      abi: stacking_abi,
      address: stacking_address,
      functionName: 'getRewards',
      args: [address]
   })

   function claimRewards() {
      writeContract({
         address: stacking_address,
         abi: stacking_abi,
         functionName: 'claimRewards',
         args: []
      })
   }
   if(!address) {
      return <div className="flex flex-col justify-center items-center min-h-screen">
         <Connectors handleClick={() => ''}/>
      </div>
   }
   return (
      <div className="relative top-20 flex flex-col justify-center items-center min-h-screen pb-5 px-6">
         <div className=" rounded-lg shadow-[0px_0px_20px] min-w-72 max-w-2xl w-full inset-shadow-[5px_5px_20px] inset-shadow-emerald-900/30
         bg-radial-[at_10%_150%] h-screen from-emerald-800/90 via-emerald-800/45 to-emerald-950
         shadow-emerald-900/30  flex flex-col justify-between px-5 sm:px-15 pb-10 pt-15">
            <div className="space-y-10">
               <div className="text-2xl font-semibold text-emerald-100 break-words space-y-4">
                  <p>
                     Account Address: 
                  </p>
                  <p className="text-emerald-300 text-lg">
                     {address}
                  </p>
               </div>

               <div className="text-2xl font-semibold text-emerald-100 break-words space-y-4">
                  <p>
                     Stake: 
                  </p>
                  <p className="text-emerald-300 ">
                     {balance ? formatEther(balance as bigint) : '0.000000000'} <span className="drop-shadow-[0px_0px_10px] drop-shadow-blue-400">ETH</span>
                  </p>
               </div>
               
               <div className="text-2xl font-semibold text-emerald-100 break-words space-y-4">
                  <p>
                     Rewards: 
                  </p>
                  <p className="text-emerald-300 flex items-center gap-3">
                     {rewards ? formatEther(rewards as bigint) : '0.000000000'} <CoinsIcon className="drop-shadow-[0px_0px_10px] drop-shadow-amber-500" />
                  </p>
               </div>
            </div>

            <div className="space-y-10 items-end flex flex-col">
               <Button varient="submit" size="md" className="rounded-md"
               handleClick={claimRewards}
               >
                  Claim Rewards
               </Button>
               <div className="text-base text-emerald-300">
                  Start staking with us
               </div>
            </div>
         </div>
      </div>
   )
}

export default page