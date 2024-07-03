'use client';

import React, { useRef, useState } from "react";
import Link from 'next/link';
import { useInView, InView } from "react-intersection-observer";
// import { useRouter } from 'next/navigation';

import About from "@/app/about";
import Projects from "@/app/projects";
import Experience from "@/app/experience";
import Contact from "@/app/contact";

export default function Home() {
    // jump links + updating menu

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    const sections = ['about', 'projects', 'experience', 'contact']
    var section = sections[0]
    
    // const viewThreshold = 0.2;
    // const { aboutRef, aboutInView, aboutEntry } = useInView({ initialInView: null, threshold: viewThreshold, });
    // const { projectsRef, projectsInView, projectsEntry } = useInView({ initialInView: null, threshold: viewThreshold, });
    // const { experienceRef, experienceInView, experienceEntry } = useInView({ initialInView: null, threshold: viewThreshold, });
    // const { contactRef, contactInView, contactEntry } = useInView({ initialInView: null, threshold: viewThreshold, });
    
    const [visibleSection, setVisibleSection] = useState(sections[0]);

    const setInView = (inView, entry) => {
        if (inView) {
            console.log(entry);
            setVisibleSection(entry.target.getAttribute("id"));
        }
    };

    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth'});
        }
    };

    return(
        <main class="h-screen w-fill bg-white snap-y snap-proximity snap-always overflow-y-scroll scroll-smooth antialiased">
            {/* Top navbar */}
            <div class="flex flex-row h-[7%] w-fill bg-white text-black px-[5%] items-center fixed top-0 left-0 right-0 opacity-0 transition-opacity ease-in-out hover:opacity-100 z-50">
                <div class="relative flex flex-row h-fit space-x-0 justify-self-start">
                    <Link href="#" class="text-small font-bold text-blue">anh do</Link>
                </div>
                <div class="grow"/>
                <div class="relative flex flex-row h-fit space-x-[20%] justify-end">
                    <button onClick={() => scrollTo(contactRef)} class="bg-transparent text-small font-medium">contact</button>
                    <Link href="https://github.com/tuonganhdo" class="text-small font-medium">github</Link>
                    <Link href="/resume-anh-do.pdf" class="text-small font-medium">resume</Link>
                </div>
            </div>

            {/* Corner menu */}
            <div id="menu" class="flex flex-col h-fit text-black fixed bottom-[7%] right-[5%] z-[100]">
                <div id="about" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-large font-bold text-blue ${ section ? 'visible' : 'invisible'}`}>⏵</p>
                    <button 
                        onClick={() => scrollTo(aboutRef)} 
                        class={`bg-transparent p-0 text-large ${ section ? 'font-bold text-blue' : 'font-normal text-black'}`}>about</button>
                </div>
                <div id="projects" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-large font-bold text-red ${ section ? 'visible' : 'invisible'}`}>⏵</p>
                    <button 
                        onClick={() => scrollTo(projectsRef)} 
                        class={`bg-transparent p-0 text-large ${ section ? 'font-bold text-red' : 'font-normal text-black'}`}>projects</button>
                </div>
                <div id="experience" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-large font-bold text-yellow ${ section ? 'visible' : 'invisible'}`}>⏵</p>
                    <button 
                        onClick={() => scrollTo(experienceRef)} 
                        class={`bg-transparent p-0 text-large ${ section ? 'font-bold text-yellow' : 'font-normal text-black'}`}>experience</button>
                </div>
                <div id="contact" class="flex flex-row space-x-[7%] pr-[7%]">
                    <p id="arrow" class={`text-large font-bold text-white ${ section ? 'visible' : 'invisible'}`}>⏵</p>
                    <button 
                        onClick={() => scrollTo(contactRef)} 
                        class={`bg-transparent p-0 text-large ${ section ? 'font-bold text-white' : 'font-normal text-black'}`}>contact</button>
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