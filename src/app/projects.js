'use client';

import Link from 'next/link';

// graphics
import Image from 'next/image';
import graphic1 from "../../public/graphic1.svg"
import graphic2 from "../../public/graphic2.svg"
import graphic3 from "../../public/graphic3.svg"
import triangle from "../../public/triangle.svg"

// project descriptions
import projects from "../../public/projects.json"

export default function Projects() {
    const { highlights, _ } = projects
    const tileOrder = ["order-1", "order-4", "order-5"]
    const colors = ["bg-blue", "bg-red", "bg-yellow"]

    return(
        <main class="flex min-h-screen w-fill snap-start mb-1/5">
            <div class="w-[72.5%] h-fit grid grid-cols-2 grid-rows-3 gap-0">
                {/* project tiles */}
                { highlights.map((project, index) => (
                    <div key={`projecttile${index+1}`} id="project-tile" class={`relative w-fill aspect-square place-items-center ${colors[index]} ${tileOrder[index]}`}>
                        <div id="bg" class="absolute w-[100%] aspect-square" />
                        <div class="relative flex flex-col w-fill aspect-square overflow-clip space-y-[8%] m-[12%] bg-transparent">
                            <p class="text-xl font-bold text-white">{project['title']}</p>
                            <p class="text-medium font-normal text-white">{project['description']}</p>
                            <div class="flex flex-row">
                                { (project['caption'] != "") && <p class="text-small font-normal text-white italic">{project['caption']}&nbsp;</p> }
                                { (project['link']['text'] != "") && <Link href={project['link']['address']} class="text-small font-normal text-white italic underline underline-offset-4">{project['link']['text']}</Link> }
                            </div>
                            <Image src={triangle} class="w-[8%] aspect-square absolute bottom-0 right-0 fill-white color-white text-white"/>
                        </div>
                    </div>
                ))}

                {/* graphic 1 */}
                <Image src={graphic1} class="w-fill aspect-square order-2"/>

                {/* graphic 2 */}
                <Image src={graphic2} class="w-fill aspect-square order-3"/>

                {/* graphic 3 */}
                <Image src={graphic3} class="w-fill aspect-square order-6"/>
            </div>

            <div class="grow"/>

            {/* title and all projects link */}
            <div class="text-black w-1/5 h-screen sticky top-0 justify-items-center">
                <p class="font-bold text-large pt-[7vh]">project highlights</p>
                <div class="flex flex-row">
                    <svg class="fill-blue w-[5%] aspect-square" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 22L0.499998 0.349367L0.499996 43.6506L38 22Z" fill="currentColor"/>
                    </svg>
                    <Link class="font-normal text-medium" href="#">see all</Link>
                </div>
            </div>
        </main>
    );
}