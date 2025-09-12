import { ReactNode } from "react";

interface BoxWorkProps {
   header: string;
   describe: string;
   icon: ReactNode;
}

function BoxWork({ header, describe, icon }: BoxWorkProps) {
   return (
      <div>BoxWork</div>
   )
}

export default BoxWork