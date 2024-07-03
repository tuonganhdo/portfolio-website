'use client';

// project descriptions
import projects from "../../../public/projects.json"

export default function AllProjects() {
    const { _, all } = projects

    return (
        <main class="h-screen w-fill bg-white scroll-smooth antialiased flex flex-row">
            {/* list of projects */}
            <div class="absolute top-[7%] left-[5%] w-[35%] h-[93%] flex flex-col overflow-y-scroll py-[5%] text-large text-black font-normal">
                { all.map((project, index) => (
                    <div key={`project${index+1}`} class="flex flex-row space-x-[7%] pr-[7%] pb-[5%]">
                        {/* <p>⏵</p> */}
                        <button class="bg-transparent p-0">{project["title"]}</button>
                    </div>
                ))}
            </div>

            {/* project description */}
            <div class="absolute top-[7%] right-0 w-[60%] h-[93%] flex flex-col overflow-y-scroll text-white bg-blue">

            </div>
        </main>
    );
}