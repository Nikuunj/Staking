import { ReactNode } from "react";

interface BoxFeatueProps {
   header: string;
   points: string[];
   Icon: ReactNode
}


function BoxFeature({ header, points, Icon }: BoxFeatueProps) {
   return (
      <div className="flex flex-col min-w-56 sm:min-w-md border border-teal-900 rounded-xl py-13 ps-12 pe-3 gap-y-4.5">
         <h2 className="text-lg font-semibold capitalize  pb-3 h-full flex justify-start items-center gap-4">
           {Icon} {header}
         </h2>
         <div className="text-zinc-300/80">
            {points.map((point, idx) => (
               <p key={point + idx} className="max-w-56 sm:min-w-md text-balance break-words">{point}</p>
            ))}
         </div>
      </div>
   )
}

export default BoxFeature