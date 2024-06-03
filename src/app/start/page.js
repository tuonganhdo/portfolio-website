'use client';

import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';
import Navbar from "@/app/navbar";

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

export default function Start() {
    const splitter = str => {
        return str.split(/(?= )/);
    }
    const router = useRouter()

    function showNavbar() {
        document.getElementById("start-navbar").id = "start-navbar-show";
    }

    return(
        <main className="flex h-screen items-center place-items-center justify-center antialiased">
            <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

            <div id="start-navbar">
                <Navbar page="about"/>
            </div>

            {/* Text block */}
            <div className = "flex flex-auto relative place-items-center flex-col items-center h-fit font-normal">
                {/* "Hi, ...." block */}
                <div className="relative place-items-center text-left w-1/2">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .callFunction(() => { router.prefetch('/about'); })
                            .typeString('Hi,')
                            .pauseFor(500)
                            .typeString(' I\'m Anh Do')
                            .start();
                        }}
                        options={{
                            delay: 20,
                            wrapperClassName: "text-subheader font-bold antialiased",
                            cursorClassName: "opacity-0",
                        }}
                        />
                </div>

                {/* Bio block */}
                <div className="relative place-items-center text-left w-1/2">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(1500)
                            .typeString('<br/>I\'m a student at the <strong>University of Illinois Urbana-Champaign</strong> majoring in Computer Science and minoring in Statistics.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I like building <strong>things</strong> and try to make them accessible and human-centered.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I\'m currently doing research in the <strong>ACTION Lab</strong>, developing a mobile app for <strong>Illinois Solar Decathlon</strong>, and serving as <strong>Project: Code</strong>\'s president.')
                            .pauseFor(500)
                            .callFunction(() => showNavbar())
                            .pauseFor(500)
                            .callFunction(() => { router.replace('/about'); })
                            .start();
                        }}
                        options={{
                            delay: 55,
                            wrapperClassName: "text-default antialiased",
                            cursorClassName: "opacity-0",
                            stringSplitter: splitter
                        }}
                    />
                </div>
            </div>
        </main>
    );
}