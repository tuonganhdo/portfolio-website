'use client';

// experience descriptions
import experience from "../../public/experience.json"

export default function Experience() {
    const positions = experience["experience"]
    const colors = ["blue", "red", "yellow"]

    return(
        <main class="min-h-screen w-fill snap-start">
            <div class="relative flex flex-col h-fit">
                { positions.map((position, index) => (
                    <div key={`experience${index+1}`} class={`w-[72.5%] h-fit flex flex-row py-[5vh] px-[5vw] ${index % 2 == 0 ? "bg-gray" : "bg-white"} text-small text-black`}>
                        {/* time */}
                        <p class="font-normal w-1/5">{position["time"]}</p>

                        {/* position details */}
                        <div class="fled flex-col w-fill h-fit bg-blue">
                            <p class="font-bold">{position["title"]}</p>
                            <p class={`font-medium text-${ colors[index % 3] }`}>{position["organization"]} ⏵ {position["location"]}</p>
                            <p class="font-normal"></p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}