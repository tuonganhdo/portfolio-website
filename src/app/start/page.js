'use client';

// import Image from "next/Image"
import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

export default function Start() {
    const [typingStatusHead, setTypingStatusHead] = useState('Initializing');
    const [typingStatusBody, setTypingStatusBody] = useState('Initializing');
    const splitter = str => {
        return str.split(/(?= )/);
    }
    return(
        <main className="flex h-screen items-center place-items-center justify-center antialiased">
            <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

            {/* Text block */}
            <div className = "flex flex-auto relative place-items-center flex-col items-center h-fit font-normal">
                {/* "Hi, ...." block */}
                <div className="relative place-items-center text-left w-1/2">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('Hi,')
                            .pauseFor(500)
                            .typeString(' I\'m <a class="anh-do" href=#>Anh Do</a>')
                            .start();
                        }}
                        options={{
                            delay: 20,
                            wrapperClassName: "text-subheader font-bold antialiased overflow-visible",
                            cursorClassName: "opacity-0",
                        }}
                        />
                </div>

                {/* Bio block */}
                <div className="relative place-items-center text-left w-1/2">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(1000)
                            .typeString('<br/>I\'m a student at the <a class="uiuc" href=#>University of Illinois Urbana-Champaign</a> majoring in Computer Science and minoring in Statistics.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I like building <strong>things</strong> and try to make them accessible and human-centered.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I\'m currently doing research in the <strong>ACTION Lab</strong>, developing a mobile app for <strong>Illinois Solar Decathlon</strong>, and serving as <strong>Project: Code</strong>\'s president.')
                            .start();
                        }}
                        options={{
                            delay: 60,
                            wrapperClassName: "absolute inset-0 text-default antialiased",
                            cursorClassName: "opacity-0",
                            stringSplitter: splitter
                        }}
                    />
                    <div className="relative opacity-0">
                        <p><br/><br/>
                            I'm a student at the <strong>University of Illinois Urbana-Champaign</strong> majoring in Computer Science and minoring in Statistics.
                            <br/><br/>
                            I like building <strong>things</strong> and try to make them accessible and human-centered.
                            <br/><br/>
                            I'm currently doing research in the <strong>ACTION Lab</strong>, developing a mobile app for <strong>Illinois Solar Decathlon</strong>, and serving as <strong>Project: Code</strong>'s president.
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}