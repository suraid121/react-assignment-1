import { useState } from "react";

const feedbacks = [
    {
        quote:
            "Wizia has transformed the way our sales reps engage with leads. It's intuitive, efficient, and delivers results.",
        name: "John Doe",
        position: "Chief Strategy Officer @ SalesPro",
    },
    {
        quote:
            "Our ramp time decreased by weeks thanks to Wizia. It’s an essential part of our toolkit now.",
        name: "Jane Smith",
        position: "VP of Revenue @ Growthly",
    },
    {
        quote:
            "The results speak for themselves — higher open rates and more meetings booked.",
        name: "Ethan Ray",
        position: "Director of Sales @ PipelineAI",
    },
];

function Feedback() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % feedbacks.length);
            setFade(true);
        }, 200);
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
            setFade(true);
        }, 200);
    };

    const { quote, name, position } = feedbacks[current];

    return (
        <section className="flex flex-col gap-8 px-6 md:px-10 py-20 items-center bg-[#031c1f] font-work-san transition-all duration-500">

            <div className="bg-gray-800 p-3 rounded-full">
                <img src="/quotation.svg" alt="quotation" className="size-8" />
            </div>


            <div className="flex w-full justify-around mt-6 items-center max-w-4xl">

                <button onClick={prev} className="hidden md:block bg-gray-800  cursor-pointer hover:bg-gray-700 p-1.5 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="w-8 h-8">
                        <path
                            fillRule="evenodd"
                            d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>


                <p
                    className={`text-white text-2xl md:text-[18px] font-light text-center mx-4 max-w-[550px] transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {quote}
                </p>


                <button onClick={next} className="hidden md:block bg-gray-800 hover:bg-gray-700 p-1.5 rounded-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-8 h-8">
                        <path
                            fillRule="evenodd"
                            d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>


            <div className="text-center mt-4 transition-all duration-500">
                <p className="text-[#0FF1F6] text-lg">{name}</p>
                <span className="text-gray-100 font-light text-sm">{position}</span>
            </div>


            <div className="flex items-center gap-2 mt-4">
                {feedbacks.map(( _, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-[#0FF1F6]" : "bg-gray-700"
                            }`}
                    ></div>
                ))}
            </div>
            <div className="flex items-center gap-5 mt-4  md:hidden">
                <button onClick={prev} className="block md:hidden bg-gray-800  cursor-pointer hover:bg-gray-700 p-1.5 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="w-8 h-8">
                        <path
                            fillRule="evenodd"
                            d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <button onClick={next} className="block md:hidden bg-gray-800 hover:bg-gray-700 p-1.5 rounded-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-8 h-8">
                        <path
                            fillRule="evenodd"
                            d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Feedback;
