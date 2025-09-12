"use client"

import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import HowToStacke from "@/components/home/HowToStacke";
import TechnicalInfo from "@/components/home/TechnicalInfo";

export default function Home() {

    return (
        <div>   
            <Hero />
            <Feature />
            <HowToStacke />
            <TechnicalInfo />
        </div>
    );
}

