"use client"
import { Connectors } from "@/components/ui/Connectors";
import { Disconnect } from "@/components/ui/Disconnect";
import { useAccount } from "wagmi";


export default function Home() {
    const { address } = useAccount()

    return (
        <div>
            <div>
                {!address ? <Connectors /> : <Disconnect />}
            </div>
            {address}
        </div>
    );
}
