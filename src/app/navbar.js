'use client';

import Image from "next/image"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Navbar({ page }) {
    const router = useRouter()

    return (
        <div className="flex-col fixed mr-[42px] right-0 space-y-[32px]">
            <Image src="/start/pfp-icon.png" width={16} height={16} />
            <div className="flex-col static space-y-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" class="nav-icon" href="/about">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.38379C10.2091 8.38379 12 6.59293 12 4.38379C12 2.17465 10.2091 0.383789 8 0.383789C5.79086 0.383789 4 2.17465 4 4.38379C4 6.59293 5.79086 8.38379 8 8.38379ZM8 9.71721C3.33333 9.71721 0.844716 11.4075 0 16.3839H16C15.1553 11.4075 12.6667 9.71721 8 9.71721Z" fill="#1E1E1E" fillOpacity={ page === 'about' ? "1" : "0.17"}/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" href="/navigation">
                    <path d="M0.5 6V15.5H5V10H8.5V15.5H15.5V6L8 0.5L0.5 6Z" fill="#1E1E1E" fillOpacity={ page === 'navigation' ? "1" : "0.17"}/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon" href="/projects">
                    <path d="M7.83673 16L0 8L7.83673 0L9.64043 1.8254L4.90573 6.65873H16V9.34127H4.90573L9.64043 14.1667L7.83673 16Z" fill="#1E1E1E" fillOpacity={ page === 'projects' ? "1" : "0.17"}/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon" href="/experience">
                    <path d="M8.16327 8.54456e-07L16 8L8.16326 16L6.35957 14.1746L11.0943 9.34127L-1.59084e-06 9.34127L-1.35633e-06 6.65873L11.0943 6.65873L6.35957 1.83333L8.16327 8.54456e-07Z" fill="#1E1E1E" fillOpacity={ page === 'experience' ? "1" : "0.17"}/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon" href="/other">
                    <path d="M16 8.16327L8 16L-3.42555e-07 8.16327L1.8254 6.35957L6.65873 11.0943L6.65873 1.19505e-06L9.34127 1.0778e-06L9.34127 11.0943L14.1667 6.35957L16 8.16327Z" fill="#1E1E1E" fillOpacity={ page === 'other' ? "1" : "0.17"}/>
                </svg>
            </div>
            <div className="flex-col static space-y-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon" href="https://github.com/tuonganhdo">
                    <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z" fill="#1E1E1E" fillOpacity="0.17"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="nav-icon" href="#">
                    <path d="M10 0H1.5V16H14.5V4.5L10 0Z" fill="#1E1E1E" fillOpacity="0.17"/>
                </svg>

                <button onClick={() => {router.push("mailto:anhd2@illinois.edu")}} class="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" class="nav-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0H15.5V2.19531L8 5.125L0.5 2.19531V0ZM0.5 4.07031V10H15.5V4.07031L8 7L0.5 4.07031Z" fill="#1E1E1E" fillOpacity="0.17"/>
                </svg></button>
            </div>
        </div>
    );
  }