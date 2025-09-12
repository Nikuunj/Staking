import { ReactNode } from "react";

interface BoxWorkProps {
   header: string;
   describe: string;
   icon: ReactNode;
}

function BoxWork({ header, describe, icon }: BoxWorkProps) {
   return (
      <div className={'border max-w-72 py-13 ps-11 pe-5 space-y-7 rounded-3xl  border-teal-900'}>
         <div className="flex gap-4 text-[18px] font-semibold capitalize items-center">
            {icon} {header}
         </div>
         <div className="break-words text-balance text-zinc-300/80">
            {describe}
         </div>
      </div>
   )
}

export default BoxWork