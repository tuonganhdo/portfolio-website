'use client';

import Image from "next/image"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Contents({ page }) {
    return (
        <div class="flex flex-col h-fit w-fit bg-transparent text-black fixed bottom-[7%] right-[5%] antialiased">
            <div id="about-link" class="flex flex-row space-x-[10%]">
                <p class={`text-lg font-bold text-blue ${ (page == 'about') ? 'visible' : 'invisible'}`}>⏵</p>
                <Link href="#about" class={`text-lg ${ (page == 'about') ? 'font-bold text-blue' : 'font-normal text-black'}`}>about</Link>
            </div>
            <div id="projects-link" class="flex flex-row space-x-[10%]">
                <p class={`text-lg font-bold text-red ${ (page == 'projects') ? 'visible' : 'invisible'}`}>⏵</p>
                <Link href="#projects" class={`text-lg ${ (page == 'projects') ? 'font-bold text-red' : 'font-normal text-black'}`}>projects</Link>
            </div>
            <div id="experience-link" class="flex flex-row space-x-[10%]">
                <p class={`text-lg font-bold text-yellow ${ (page == 'experience') ? 'visible' : 'invisible'}`}>⏵</p>
                <Link href="#experience" class={`text-lg ${ (page == 'experience') ? 'font-bold text-yellow' : 'font-normal text-black'}`}>about</Link>
            </div>
        </div>
    );
  }