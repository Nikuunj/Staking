import { CircleSlash2Icon, LinkIcon, SettingsIcon } from "lucide-react"
import BoxFeature from "../ui/BoxFeature"
import ShiningText from "../ui/ShiningText"
import { stacking_address } from "@/config/config"

function TechnicalInfo() {
   return (
      <section className={`flex flex-col items-center gap-y-11  text-balance mb-22`}>
         <h1 className={`text-4xl font-semibold text-center`}> 
            Technical Information about {' '} <ShiningText text="Contract" />
         </h1>
         <div className="flex flex-wrap gap-10 justify-center max-w-6xl px-3">
            <BoxFeature               
               header="Staking Rewards"
               Icon={<SettingsIcon className="w-5 h-5 text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]" />}
               points={[
                  "Earn ~2 tokens per 1 ETH staked per hour",
                  "Rewards scale over time",
                  "Claimable anytime after staking"
               ]}
            />
            
            <BoxFeature               
               header="How It Works"
               Icon={<SettingsIcon className="w-5 h-5 text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />}
               points={[
                  "Stake ETH via smart contract",
                  "Rewards accrue hourly",
                  "Unstake to withdraw ETH + tokens"
               ]}
            />

            <BoxFeature               
               header="Contract Address"
               Icon={<LinkIcon className="w-5 h-5 text-yellow-600 drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]" />}
               points={[
                  "Deployed at: " + stacking_address,
                  "View on Sepoliascan",
                  "Fully open-source & verified"
               ]}
            />
         </div>
      </section>
   )
}

export default TechnicalInfo