"use client"
import { useRef } from "react";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import { useAccount, useWriteContract } from "wagmi";
import { parseEther } from "viem";
import { stacking_abi, stacking_address } from "@/config/config";
import ConnectBtn from "../ui/ConnectBtn";

function StakeForm() {
   const ref = useRef<any>(Array(1).fill(0));
   const { address } = useAccount();
   const { data: hash, writeContract } = useWriteContract()

   const handleSubmit = () => {
      const amount = ref.current[0].value;
      if(!amount) {
         return;
      }
      const eth = parseEther(amount.toString());

      writeContract({
         address: stacking_address,
         abi: stacking_abi,
         functionName: 'stake',
         args: [],
         value: eth
      })
   }
   return (
      <section className="grid sm:grid-cols-2 md:grid-cols-5 p-3 bg-emerald-900/30 rounded-lg mx-5 relative top-20 md:top-0">
         <div className=" rounded-lg shadow-[0px_0px_20px]  inset-shadow-[5px_5px_20px] inset-shadow-emerald-900/30
         bg-radial-[at_10%_150%] min-h-96 from-emerald-800/80 via-emerald-800/30 to-emerald-950/90 
         shadow-emerald-900/30  col-span-2 md:col-span-3  flex flex-col justify-between px-10 py-5">
            <div className="text-2xl font-semibold text-emerald-100">
               Stake
            </div>
            <div className="text-base text-emerald-300">
               Start staking with us
            </div>
         </div>
         <div className="md:py-15 pt-15 md:px-15 col-span-2 flex flex-col gap-5">
            <div className="text-xl font-semibold text-emerald-200">
               Stake With US
            </div>
            <div className="flex flex-col gap-5 justify-center h-full relative -top-0 md:-top-2">
               <p className="text-emerald-300">Enter Amount</p>
               <InputBox refrence={(e) => ref.current[0] = e}
                  typeOfIn={'number'}
                  placeHolder={'eg. 1 ETH'}
               />
               <Button varient='submit' size="md" className="rounded-md w-full" handleClick={ address ? handleSubmit : () => ''}>{ !address ? <ConnectBtn>Connect</ConnectBtn> : 'Stake'}</Button>
            </div>
         </div>
      </section>
   )
}

export default StakeForm