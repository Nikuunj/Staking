import { ReactNode } from "react";

interface BoxWorkProps {
   header: string;
   describe: string;
   icon: ReactNode;
}

function BoxWork({ header, describe, icon }: BoxWorkProps) {
   return (
      <div className={'border max-w-64 py-13 px-11 space-y-6 rounded-3xl  border-teal-900'}>
         <div className="flex gap-2 items-center">
            {icon} {header}
         </div>
         <div className="break-words text-balance text-zinc-300/90">
            {describe}
         </div>
      </div>
   )
}

export default BoxWork