'use client';

// import Image from "next/Image"
import { useState } from "react";
import Navbar from "@/app/navbar";

export default function Experience() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar page="experience"/>
        </main>
    );
}