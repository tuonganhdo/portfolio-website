'use client';

import React, { useRef } from "react";
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// import Navbar from "@/app/navbar";
// import Contents from "@/app/contents";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Experience from "@/app/experience/page";
import Contact from "@/app/contact/page";

export default function Start() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    var section = 'projects';

    const scrollTo = (ref, toSection) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth'});
        }
        section = toSection;
    };

    return(
        <main class="h-screen w-fill bg-white snap-y snap-mandatory snap-always overflow-y-scroll">
            {/* Top navbar */}
            <div class="flex flex-row h-[7%] w-screen bg-white text-black px-[5%] items-center fixed top-0 left-0 right-0 antialiased">
                <div class="relative flex flex-row h-fit space-x-0 justify-self-start">
                    <Link href="#" class="text-sm font-bold text-blue">anh do</Link>
                </div>
                <div class="grow"/>
                <div class="relative flex flex-row h-fit space-x-[20%] justify-end">
                    <button onClick={() => scrollTo(contactRef, 'contact')} class="bg-transparent text-sm font-medium">contact</button>
                    <Link href="https://github.com/tuonganhdo" class="text-sm font-medium">github</Link>
                    <Link href="/resume-anh-do.pdf" class="text-sm font-medium">resume</Link>
                </div>
            </div>

            {/* Corner menu */}
            <div id="menu" class="flex flex-col h-fit bg-transparent text-black fixed bottom-[7%] right-[5%] antialiased">
                <div id="about" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-lg font-bold text-blue ${ (section == 'about') ? 'visible' : 'invisible'}`}>⏵</p>
                    <button onClick={() => scrollTo(aboutRef, 'about')} class={`bg-transparent p-0 text-lg ${ (section == 'about') ? 'font-bold text-blue' : 'font-normal text-black'}`}>about</button>
                </div>
                <div id="projects" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-lg font-bold text-red ${ (section == 'projects') ? 'visible' : 'invisible'}`}>⏵</p>
                    <button onClick={() => scrollTo(projectsRef, 'projects')} class={`bg-transparent p-0 text-lg ${ (section == 'projects') ? 'font-bold text-red' : 'font-normal text-black'}`}>projects</button>
                </div>
                <div id="experience" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`bg-blue text-lg font-bold text-yellow ${ (section == 'experience') ? 'visible' : 'invisible'}`}>⏵</p>
                    <button onClick={() => scrollTo(experienceRef, 'experience')} class={`bg-transparent p-0 text-lg ${ (section == 'experience') ? 'font-bold text-yellow' : 'font-normal text-black'}`}>experience</button>
                </div>
            </div>

            {/* Content */}
            <div ref={aboutRef}/>
            <About/>
            <div ref={projectsRef}/>
            <Projects/>
            <div ref={experienceRef}/>
            <Experience/>
            <div ref={contactRef}/>
            <Contact/>
        </main>
    );
}