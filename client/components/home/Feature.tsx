import BoxFeature from "../ui/BoxFeature"
import ShiningText from "../ui/ShiningText"

function Feature() {
   return (
      <section className={`flex flex-col items-center gap-y-7  text-balance mb-22`}>
         <h1 className={`text-4xl font-semibold text-center`}>
            Why stake {' '} <ShiningText text="Ethereum" /> {' '}? 
         </h1>
         <div className="flex flex-wrap gap-9 justify-center">
            <BoxFeature               
               header="Without Staking" 
                points={[
                  "1 ETH today = 1 ETH tomorrow",
                  "No passive income earned",
                  "You're missing out on potential rewards"
               ]}
            />
            <BoxFeature 
               header="With Staking" 
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