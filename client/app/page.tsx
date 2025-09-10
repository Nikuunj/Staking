"use client"
import { Connectors } from "@/components/ui/Connectors";
import { Disconnect } from "@/components/ui/Disconnect";
import { useAccount, useBalance } from "wagmi";


export default function Home() {
    const { address } = useAccount()

    const balance = useBalance({
        address
    })

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
