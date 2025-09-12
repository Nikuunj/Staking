import { ReactNode } from "react";

interface BoxFeatueProps {
   header: string;
   points: string[];
   Icon: ReactNode
}


function BoxFeature({ header, points, Icon }: BoxFeatueProps) {
   return (
      <div className="flex flex-col min-w-64 sm:min-w-md border border-teal-900 rounded-xl py-13 px-12 gap-y-4.5">
         <h2 className="text-lg font-semibold capitalize  pb-3 h-full flex justify-start items-center gap-2">
           {Icon} {header}
         </h2>
         <div className="text-zinc-300/80">
            {points.map(point => (
               <p className="max-w-64 sm:max-w-md break-word  text-balance">{point}</p>
            ))}
         </div>
      </div>
   )
}

export default BoxFeature