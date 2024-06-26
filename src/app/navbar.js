'use client';

import Image from "next/image"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Navbar({ page }) {
    // const router = useRouter();

    // const colors = ['#9EDDF8', '#ADEC97', '#FBC9DD', '#FFD8AA', '#E0CCFF'];
    // var color = -1;
    // function nextColor() {
    //     color = (color + 1) % 5;
    //     document.getElementById("logo").style.fill = colors[color];
    // }
    
    return (
        <div class="flex flex-row h-[7%] w-screen bg-white text-black px-[5%] items-center fixed top-0 left-0 right-0 antialiased">
            <div class="relative flex flex-row h-fit space-x-0 justify-self-start">
                <Link href="#" class="text-sm font-bold text-blue">anh do</Link>
                { (page != 'about') && <Text class="text-sm font-normal">  ⏵  {page}</Text> }
            </div>
            <div class="grow"/>
            <div class="relative flex flex-row h-fit space-x-[20%] justify-end">
                <Link href="#contact" class="text-sm font-medium">contact</Link>
                <Link href="https://github.com/tuonganhdo" class="text-sm font-medium">github</Link>
                <Link href="/resume-anh-do.pdf" class="text-sm font-medium">resume</Link>
            </div>
        </div>
    );
  }