'use client';

import Image from "next/image"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Navbar({ page }) {
    const router = useRouter();

    const colors = ['#9EDDF8', '#ADEC97', '#FBC9DD', '#FFD8AA', '#E0CCFF'];
    var color = -1;
    function nextColor() {
        color = (color + 1) % 5;
        document.getElementById("logo").style.fill = colors[color];
    }
    
    return (
        <div className="flex-col fixed mr-[42px] right-0 space-y-[32px] w-[16px] text-[0px] top-1/2 translate-y-[-50%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" onMouseEnter={() => nextColor()}>
                <path id="logo" fill-rule="evenodd" clip-rule="evenodd" d="M14.3907 1.91414C14.603 3.63015 14.496 5.20804 14.1565 6.62585C14.0601 8.61287 13.5398 11.0527 12.5207 13.9675C12.2402 14.7698 11.3603 15.1935 10.5555 14.9139C9.89538 14.6846 9.49073 14.0535 9.52121 13.3914C9.08702 13.6757 8.64374 13.9156 8.19999 14.1089C6.52571 14.8379 4.40123 15.0571 2.8872 13.7727C1.30785 12.4328 1.187 10.1581 1.97352 7.69734C2.77015 5.20495 4.08494 3.19047 5.58692 1.84752C7.03677 0.551186 8.9094 -0.315559 10.7233 0.108775C11.2535 0.232809 11.7213 0.450958 12.1275 0.747462C12.2914 0.659516 12.4742 0.599851 12.67 0.57577C13.516 0.471759 14.2863 1.07097 14.3907 1.91414ZM11.0332 5.00804C11.0751 5.35292 11.0938 5.74355 11.0841 6.18211C10.3592 8.84339 8.56125 10.5942 6.96426 11.2896C5.75097 11.818 5.08277 11.5953 4.88782 11.4299C4.75818 11.3199 4.25375 10.6984 4.91448 8.63123C5.56509 6.59573 6.60352 5.07154 7.648 4.13765C8.74462 3.15714 9.61169 3.00887 10.018 3.10392C10.2514 3.15851 10.8412 3.42593 11.0332 5.00804Z" fill="#9EDDF8"/>
            </svg>

            <div className="flex-col static space-y-[15px]">
                <button onClick={() => {router.push('/about')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" class={ page === 'about' ? "nav-icon-chosen" : "nav-icon" }>
                        <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M8 8.38379C10.2091 8.38379 12 6.59293 12 4.38379C12 2.17465 10.2091 0.383789 8 0.383789C5.79086 0.383789 4 2.17465 4 4.38379C4 6.59293 5.79086 8.38379 8 8.38379ZM8 9.71721C3.33333 9.71721 0.844716 11.4075 0 16.3839H16C15.1553 11.4075 12.6667 9.71721 8 9.71721Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('/navigation')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class={ page === 'navigation' ? "nav-icon-chosen" : "nav-icon" }>
                        <path class="icon" d="M0.5 6V15.5H5V10H8.5V15.5H15.5V6L8 0.5L0.5 6Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('/projects')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class={ page === 'projects' ? "nav-icon-chosen" : "nav-icon" }>
                        <path class="icon" d="M7.83673 16L0 8L7.83673 0L9.64043 1.8254L4.90573 6.65873H16V9.34127H4.90573L9.64043 14.1667L7.83673 16Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('/experience')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class={ page === 'experience' ? "nav-icon-chosen" : "nav-icon" }>
                        <path class="icon" d="M8.16327 8.54456e-07L16 8L8.16326 16L6.35957 14.1746L11.0943 9.34127L-1.59084e-06 9.34127L-1.35633e-06 6.65873L11.0943 6.65873L6.35957 1.83333L8.16327 8.54456e-07Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('/other')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class={ page === 'other' ? "nav-icon-chosen" : "nav-icon" }>
                        <path class="icon" d="M16 8.16327L8 16L-3.42555e-07 8.16327L1.8254 6.35957L6.65873 11.0943L6.65873 1.19505e-06L9.34127 1.0778e-06L9.34127 11.0943L14.1667 6.35957L16 8.16327Z"/>
                    </svg>
                </button>
            </div>
            <div className="flex-col static space-y-[15px]">
                <button onClick={() => {router.push('https://github.com/tuonganhdo')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="nav-icon">
                        <path class="icon" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('#')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="nav-icon">
                        <path class="icon" d="M10 0H1.5V16H14.5V4.5L10 0Z"/>
                    </svg>
                </button>

                <button onClick={() => {router.push('mailto:anhd2@illinois.edu')}} class="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" class="nav-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0H15.5V2.19531L8 5.125L0.5 2.19531V0ZM0.5 4.07031V10H15.5V4.07031L8 7L0.5 4.07031Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
  }