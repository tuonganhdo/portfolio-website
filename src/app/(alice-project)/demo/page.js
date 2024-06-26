'use client';

// import Image from "next/Image"
// import { useState } from "react";

export default function AliceProject() {
    
    return(
        <main className="flex flex-col h-screen items-center place-items-center justify-center antialiased">
            <div className="w-screen">
                <h1 className="opacity-100">Instructions</h1>
                <p className="opacity-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra, erat vel laoreet maximus, mi neque mattis metus, ut eleifend quam urna in lacus. Mauris at erat vitae purus mollis interdum. Integer faucibus orci justo, malesuada eleifend nibh interdum in. Proin lobortis viverra massa sed malesuada. Nulla commodo mollis ex sit amet tempor. Vestibulum congue metus eget porttitor iaculis. Nullam et odio feugiat, molestie felis id, posuere purus.</p>
            </div>
            <iframe className="resise w-[50%] h-[50%]" id="miniPaint" src="https://tuonganhdo.github.io/miniPaint-adapted/" allow="camera"></iframe>
        </main>
    );
}