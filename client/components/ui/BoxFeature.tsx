
interface BoxFeatueProps {
   header: string;
   points: string[]
}


function BoxFeature({ header, points }: BoxFeatueProps) {
   return (
      <div className="flex flex-col min-w-64 sm:min-w-md border border-zinc-600 rounded-lg text-center pt-4 pb-9 gap-y-3">
         <h2 className="text-2xl font-semibold capitalize border-b border-zinc-600 pb-2 h-full">
            {header}
         </h2>
         <div className="text-zinc-300/80 px-2 pt-3">
            {points.map(point => (
               <p className="max-w-64 sm:max-w-md break-word  text-balance">{point}</p>
            ))}
         </div>
      </div>
   )
}

export default BoxFeature