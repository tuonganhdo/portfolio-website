'use client';

import React, { useState } from "react";
import Navbar from "@/app/navbar";
import Typewriter from 'typewriter-effect';

export default function About() {
    const greetings = ["Hi! 👋", "Hey there! 👋", "Howdy 🤠", "Hey! 👋"]
    
    function chooseGreeting() {
        var num = Math.floor(Math.random() * greetings.length);
        document.getElementById("greeting").innerHTML = greetings[num];
    }
    
    
    const swiftUpElements = document.querySelectorAll('#greeting');
    swiftUpElements.forEach(elem => {
        const words = elem.textContent.split(' ');
        elem.innerHTML = '';

        words.forEach((el, index) => {
            words[index] = `<span><i>${words[index]}</i></span>`;
        });

        elem.innerHTML = words.join(' ');

        const children = document.querySelectorAll('span > i');
        children.forEach((node, index) => {
            node.style.animationDelay = `${index * .2}s`;
        });

    });

    return(
        // <main className="flex h-screen items-center place-items-center justify-center antialiased">
        //     {/* Text block */}
        //     <div className = "flex flex-auto relative place-items-center flex-col h-fit space-y-0">
        //         {/* "Hi, ...." block */}
        //         <div className="relative place-items-center text-left w-1/2 min-h-[60px]">
        //             <Typewriter
        //                 onInit={(typewriter) => {
        //                     typewriter
        //                     .typeString('Hi,')
        //                     .pauseFor(500)
        //                     .typeString(' I\'m Anh Do')
        //                     .start();
        //                 }}
        //                 options={{
        //                     delay: 20,
        //                     wrapperClassName: "text-subheader font-bold antialiased min-h-[49px]",
        //                     cursorClassName: "opacity-0",
        //                 }}
        //                 />
        //         </div>
        //         {/* <p className="text-subheader font-bold overflow-visible text-left w-1/2">Hi,  I'm <a class="anh-do">Anh Do</a></p> */}
        //         {/* animate-[slideFadeIn_0.4s_ease-in_forwards] */}
        //         {/* Bio block */}
        //         <div className="relative place-items-center text-left w-1/2">
        //             <div className="relative text-default">
        //                 {/* <p id="slide-fade-in"><br/>
        //                     I'm a student at the <strong><a class="uiuc">University of Illinois Urbana-Champaign</a></strong> majoring in Computer Science and minoring in Statistics.
        //                     <br/><br/>
        //                     I like building <strong><a class="things" href="/projects">things</a></strong> and try to make them accessible and human-centered.
        //                     <br/><br/>
        //                     I'm currently doing research in the <strong><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></strong>, developing a mobile app for <strong><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></strong>, and serving as <strong><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></strong>'s president.
        //                     <br/>
        //                 </p> */}
        //                 <p class="fade-up" id="p1">
        //                     <br/>
        //                     I'm a student at the <strong><a class="uiuc">University of Illinois Urbana-Champaign</a></strong> majoring in Computer Science and minoring in Statistics.
        //                 </p>
        //                 <p class="fade-up" id="p2">
        //                     <br/>
        //                     I like building <strong><a class="things" href="/projects">things</a></strong> and try to make them accessible and human-centered.
        //                 </p>
        //                 <p class="fade-up" id="p3">
        //                     <br/>
        //                     I'm currently doing research in the <strong><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></strong>, developing a mobile app for <strong><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></strong>, and serving as <strong><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></strong>'s president.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>

        //     <Navbar page="about"/>
        // </main>
        <main className="flex h-screen items-center place-items-center antialiased">
            <h1 className="text-subheader font-bold antialiased min-h-[49px]" id="greeting" onMouseEnter={() => chooseGreeting()}>Hi! 👋</h1>
        </main>
    );
}