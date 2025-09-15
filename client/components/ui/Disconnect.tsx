"use client"
import { ReactNode } from "react";
import { useDisconnect } from "wagmi";

export function Disconnect({ children, className }: { children: ReactNode, className?: string }) {
   const {disconnect} = useDisconnect();
    
   return <div>
      <button className={`${className} cursor-pointer`} onClick={() => disconnect()}>
         {children}
      </button>
   </div>
}