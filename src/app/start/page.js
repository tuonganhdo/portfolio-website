'use client';

import Image from "next/image"
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
                            .typeString(' I\'m <a class="anh-do">Anh Do</a>')
                            .start();
                        }}
                        options={{
                            delay: 15,
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
                            .typeString('<br/>I\'m a student at the <strong><a class="uiuc">University of Illinois Urbana-Champaign</a></strong> majoring in Computer Science and minoring in Statistics.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I like building <strong><a class="things" href=/projects>things</a></strong> and try to make them accessible and human-centered.<br/><br/>')
                            .pauseFor(100)
                            .typeString('I\'m currently doing research in the <strong><a class="action" href="https://jessiechinlab.ischool.illinois.edu">ACTION Lab</a></strong>, developing a mobile app for <strong><a class="isd" href="https://www.illinoissolardecathlon.com">Illinois Solar Decathlon</a></strong>, and serving as <strong><a class="pc" href="https://www.projectcodeuiuc.org">Project: Code</a></strong>\'s president.')
                            .start();
                        }}
                        options={{
                            delay: 50,
                            wrapperClassName: "text-default antialiased",
                            cursorClassName: "opacity-0",
                            stringSplitter: splitter
                        }}
                    />
                    {/* <div className="relative opacity-0">
                        <p><br/><br/>
                            I'm a student at the <strong>University of Illinois Urbana-Champaign</strong> majoring in Computer Science and minoring in Statistics.
                            <br/><br/>
                            I like building <strong>things</strong> and try to make them accessible and human-centered.
                            <br/><br/>
                            I'm currently doing research in the <strong>ACTION Lab</strong>, developing a mobile app for <strong>Illinois Solar Decathlon</strong>, and serving as <strong>Project: Code</strong>'s president.
                            <br/><br/>
                        </p>
                    </div> */}
                </div>
            </div>

            <div className="flex-col fixed mr-[42px] bg-blue right-0 space-y-[32px]">
                <Image src="/start/pfp-icon.png" width={16} height={16} />
                <div className="flex-col static bg-pink space-y-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" class="nav-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.38379C10.2091 8.38379 12 6.59293 12 4.38379C12 2.17465 10.2091 0.383789 8 0.383789C5.79086 0.383789 4 2.17465 4 4.38379C4 6.59293 5.79086 8.38379 8 8.38379ZM8 9.71721C3.33333 9.71721 0.844716 11.4075 0 16.3839H16C15.1553 11.4075 12.6667 9.71721 8 9.71721Z" fill="#1E1E1E"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon">
                        <path d="M1 6.33333V15H4.5V9.66667H8.7V15H15V6.33333L8 1L1 6.33333Z" fill="#1E1E1E" fill-opacity="0.17"/>
                        <path d="M0.848489 6.13448L0.75 6.20952V6.33333V15V15.25H1H4.5H4.75V15V9.91667H8.45V15V15.25H8.7H15H15.25V15V6.33333V6.20952L15.1515 6.13448L8.15151 0.801142L8 0.685705L7.84849 0.801142L0.848489 6.13448Z" stroke="#1E1E1E" stroke-opacity="0.17" stroke-width="0.5"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon">
                        <path d="M7.83673 16L0 8L7.83673 0L9.64043 1.8254L4.90573 6.65873H16V9.34127H4.90573L9.64043 14.1667L7.83673 16Z" fill="#1E1E1E" fill-opacity="0.17"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon">
                        <path d="M8.16327 8.54456e-07L16 8L8.16326 16L6.35957 14.1746L11.0943 9.34127L-1.59084e-06 9.34127L-1.35633e-06 6.65873L11.0943 6.65873L6.35957 1.83333L8.16327 8.54456e-07Z" fill="#1E1E1E" fill-opacity="0.17"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon">
                        <path d="M16 8.16327L8 16L-3.42555e-07 8.16327L1.8254 6.35957L6.65873 11.0943L6.65873 1.19505e-06L9.34127 1.0778e-06L9.34127 11.0943L14.1667 6.35957L16 8.16327Z" fill="#1E1E1E" fill-opacity="0.17"/>
                    </svg>
                </div>
            </div>
        </main>
    );
}