"use client"
import { Connectors } from "@/components/ui/Connectors";
import { Disconnect } from "@/components/ui/Disconnect";
import { useAccount, useBalance, useReadContract, useWriteContract } from "wagmi";
import { parseEther } from 'viem'   
import Hero from "@/components/Hero";

export default function Home() {

    return (
        <div>
            <Hero />
        </div>
    );
}
