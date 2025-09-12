import { ArrowDownCircleIcon, CoinsIcon, LogInIcon, Wallet2Icon } from "lucide-react"
import BoxWork from "../ui/BoxWork"
import ShiningText from "../ui/ShiningText"

function HowToStacke() {
   return (
      <section className={`flex flex-col items-center gap-y-11  text-balance mb-22`}>
         <h1 className={`text-4xl font-semibold text-center`}>
            How {' '} <ShiningText text="stake" /> {' '} Ethereum ? 
         </h1>

         <div className="flex flex-wrap gap-10 max-w-2xl justify-center px-3">
            <BoxWork 
               header="Connect Wallet"
               icon={<LogInIcon className="text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />}
               describe="Start by securely connecting your Ethereum wallet to our platform."

            /> 
            <BoxWork 
               header="Stake ETH with Us"
               icon={<Wallet2Icon className="text-purple-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]" />}
               describe="Deposit your ETH into our staking system to begin earning."
            /> 
            <BoxWork 
               header="Earn Rewards"
               icon={<CoinsIcon className="text-yellow-500 drop-shadow-[0_0_6px_rgba(234,179,8,0.6)]" />}
               describe="Receive staking rewards based on the amount of ETH you staked."
            /> 
            <BoxWork 
               header="Unstake Anytime"
               icon={<ArrowDownCircleIcon className="text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]" />}
               describe="You're in control—unstake your ETH whenever you want, no lock-in."
            /> 
         </div>
      </section>
   )
}

export default HowToStacke