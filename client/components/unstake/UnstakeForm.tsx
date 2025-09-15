   "use client"
   import { useRef } from "react";
   import InputBox from "../ui/InputBox";
   import Button from "../ui/Button";

   function UnStakeForm() {
      const ref = useRef<any>(Array(1).fill(0));
      return (
         <section className="grid sm:grid-cols-2 md:grid-cols-5 p-3 bg-emerald-900/30 rounded-lg mx-5 relative top-20 md:top-0">
            <div className="md:py-15 pt-15 md:px-15 col-span-2 flex flex-col gap-5">
               <div className="text-xl font-semibold text-emerald-200">
                  Withdraw you ETH
               </div>
               <div className="flex flex-col gap-5 justify-center h-full relative -top-0 md:-top-2">
                  <p className="text-emerald-300">Enter Amount</p>
                  <InputBox refrence={(e) => ref.current[0] = e}
                     typeOfIn={'number'}
                     placeHolder={'eg. 1 ETH'}
                  />
                  <Button varient='submit' size="md" className="rounded-md w-full">Unstake</Button>
               </div>
            </div>
            <div className=" rounded-lg shadow-[0px_0px_20px]  inset-shadow-[5px_5px_20px] inset-shadow-emerald-900/30
            bg-radial-[at_10%_150%] min-h-96 from-green-800/60 via-green-800/40 to-green-950/90 
            shadow-emerald-900/30  col-span-2 md:col-span-3  flex flex-col justify-between px-10 py-5">
               <div className="text-2xl font-semibold text-emerald-100">
                  UnStake
               </div>
               <div className="text-base text-emerald-300">
                  Unstake your ETH
               </div>
            </div>
         </section>
      )
   }

   export default UnStakeForm