import { ReactNode } from "react";

interface BoxFeatueProps {
   header: string;
   points: string[];
   Icon: ReactNode
}


function BoxFeature({ header, points, Icon }: BoxFeatueProps) {
   return (
      <div className="flex flex-col min-w-64 sm:min-w-md border border-teal-900 rounded-md text-center pt-4 pb-9 gap-y-3">
         <h2 className="text-2xl font-semibold capitalize border-b border-teal-900 pb-3 h-full flex justify-center items-center gap-2">
           {Icon} {header}
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