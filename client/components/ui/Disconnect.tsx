"use client"
import { useDisconnect } from "wagmi";

export function Disconnect() {
   const {disconnect} = useDisconnect();
    
   return <div>
      <button className='mx-2 border rounded p-2 cursor-pointer' onClick={() => disconnect()}>
         Disconnect wallet
      </button>
   </div>
}