'use client';

import React, { useState } from "react";
import Navbar from "@/app/navbar";
import Typewriter from 'typewriter-effect';

export default function About() {
    const greetings = ["Hi! 👋", "Hey there! 👋", "Howdy 🤠"]
    var greeting = 0;
    
    function chooseGreeting() {
        greeting = (greeting + 1) % greetings.length;
        
        var words = greetings[greeting].split(' ');
        words.forEach((el, index) => { words[index] = `<span id='greeting-word'>${words[index]}</span>`; });

        document.getElementById("greeting").innerHTML = words.join(' ');
    }

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
        //                     I'm a student at the <i><a class="uiuc">University of Illinois Urbana-Champaign</a></i> majoring in Computer Science and minoring in Statistics.
        //                     <br/><br/>
        //                     I like building <i><a class="things" href="/projects">things</a></i> and try to make them accessible and human-centered.
        //                     <br/><br/>
        //                     I'm currently doing research in the <i><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></i>, developing a mobile app for <i><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></i>, and serving as <i><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></i>'s president.
        //                     <br/>
        //                 </p> */}
        //                 <p class="fade-up" id="p1">
        //                     <br/>
        //                     I'm a student at the <i><a class="uiuc">University of Illinois Urbana-Champaign</a></i> majoring in Computer Science and minoring in Statistics.
        //                 </p>
        //                 <p class="fade-up" id="p2">
        //                     <br/>
        //                     I like building <i><a class="things" href="/projects">things</a></i> and try to make them accessible and human-centered.
        //                 </p>
        //                 <p class="fade-up" id="p3">
        //                     <br/>
        //                     I'm currently doing research in the <i><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></i>, developing a mobile app for <i><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></i>, and serving as <i><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></i>'s president.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>

        //     <Navbar page="about"/>
        // </main>
        <main className="flex h-screen place-items-center center-items antialiased">
            <div className="flex flex-col h-fit justify-left w-full pl-[10%] pt-[10%]">
                <i><h1 id="greeting" className="text-subheader antialiased" onMouseEnter={() => chooseGreeting()}><span>Hi! 👋</span></h1></i>
                <p className="w-1/2 text-default antialiased"><br/>
                    I'm <i>Anh Do</i>, a Computer Science student at the University of Illinois Urbana-Champaign. I like building <i><a class="things" href="/projects">things</a></i> and try to make them accessible and human-centered.
                    <br/><br/>
                    I'm currently doing research in the <i><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></i>, developing a mobile app for <i><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></i>, and serving as <i><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></i>'s president.
                    <br/>                
                </p>
            </div>
        </main>
    );
}