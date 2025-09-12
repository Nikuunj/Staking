"use client"
import BoxFeature from "../ui/BoxFeature"
import ShiningText from "../ui/ShiningText"
import { Circle, CircleSlash2Icon } from 'lucide-react';

function Feature() {
   return (
      <section className={`flex flex-col items-center gap-y-7  text-balance mb-22`}>
         <h1 className={`text-4xl font-semibold text-center`}>
            Why stake {' '} <ShiningText text="Ethereum" /> {' '}? 
         </h1>
         <div className="flex flex-wrap gap-9 justify-center">
            <BoxFeature               
               header="Without Staking"
               Icon={<CircleSlash2Icon className="w-5 h-5 text-red-600 drop-shadow-[0_0_6px_rgba(220,38,38,0.8)]"/>}
                points={[
                  "1 ETH today = 1 ETH tomorrow",
                  "No passive income earned",
                  "You're missing out on potential rewards"
               ]}
            />
            <BoxFeature 
               header="With Staking" 
               Icon={<Circle className="w-5 h-5 text-green-700 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]" />}
               points={[
                  "1 ETH today = 1 ETH + staking rewards tomorrow",
                  "Earn passive income automatically",
                  "Help secure the Ethereum network"
               ]}
            />
         </div>
      </section>
   )
}

export default Feature