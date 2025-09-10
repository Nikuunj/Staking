"use client"
import { Connectors } from "@/components/ui/Connectors";
import { Disconnect } from "@/components/ui/Disconnect";
import { useAccount, useBalance, useReadContract, useWriteContract } from "wagmi";
import { parseEther } from 'viem'   


export default function Home() {
    const { address } = useAccount()

    const balance = useBalance({
        address
    })

    const { data, error, writeContract } = useWriteContract()


    return (
        <div>
            <div>
                {!address ? <Connectors /> : <Disconnect />}
            </div>
            {address} 
            <br />
            {balance.data?.formatted}
        </div>
    );
}
