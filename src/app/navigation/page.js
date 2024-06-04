'use client';

// import Image from "next/Image"
import { useState } from "react";
import Navbar from "@/app/navbar";
import { useRouter } from 'next/navigation';

export default function Navigation() {
    const router = useRouter()
    
    router.prefetch('/about');
    router.prefetch('/projects');
    router.prefetch('/experience');
    router.prefetch('/other');
    
    return(
        <main className="flex h-screen items-center place-items-center justify-center antialiased">
            <div class="pages-menu">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none" id="up">
                        <path d="M40.7002 19.5918L20.7002 8.74228e-07L0.700194 19.5918L5.26369 24.1011L17.347 12.2643L17.347 40L24.0534 40L24.0534 12.2643L36.1169 24.1011L40.7002 19.5918Z" fill="#FFD8AA"/>
                    </svg>
                    <a href="/about">About</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none" id="left">
                        <path d="M20.292 3.09265e-06L0.700199 20L20.292 40L24.8013 35.4365L12.9645 23.3532L40.7002 23.3532L40.7002 16.6468L12.9645 16.6468L24.8013 4.58334L20.292 3.09265e-06Z" fill="#9EDDF8"/>
                    </svg>
                    <a href="/projects">Projects</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none" id="right">
                        <path d="M21.1084 40L40.7002 20L21.1084 -1.71277e-06L16.5991 4.56349L28.4359 16.6468L0.700195 16.6468L0.700194 23.3532L28.4359 23.3532L16.5991 35.4167L21.1084 40Z" fill="#ADEC97"/>
                    </svg>
                    <a href="/experience">Experience</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" fill="none" id="down">
                        <path d="M0.700194 20.4082L20.7002 40L40.7002 20.4082L36.1367 15.8989L24.0534 27.7357L24.0534 1.39371e-06L17.347 1.68686e-06L17.347 27.7357L5.28353 15.8989L0.700194 20.4082Z" fill="#FBC9DD"/>
                    </svg>
                    <a href="/other">Other</a>
                </div>
            </div>

            <Navbar page="navigation"/>
        </main>
    );
}