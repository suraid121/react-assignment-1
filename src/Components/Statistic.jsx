import React from "react";

const stats = [
    {
        value: "32%",
        label: "Improvement in Open Rates",
    },
    {
        value: "75%",
        label: "Improvement in Ramp Time",
    },
    {
        value: "35%",
        label: "Improvement in Meetings Booked",
    },
];

function Statistic() {
    return (
        <section className="bg-[url('/explanation-bg.svg')] bg-no-repeat bg-cover bg-start md:bg-center font-Montserrat md:mx-8 mx-4 rounded-2xl mb-10 bg-[#002228]">
            <div className=" lg:px-60 py-15 px-10 mx-auto space-y-10 md:px-20 max-w-[1280px] font-Montserrat">
                <h2 className="text-4xl md:5xl lg:6xl font-bold text-white">
                    Allocate effort where your reps <br /> make an impact.
                </h2>
                <p className="italic text-cyan-400 text-2xl mt-2">Let us handle the rest.</p>
                <p className="mt-4 text-gray-300 max-w-xl text-xl font-light  font-work-san">
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                </p>

                <div className="mt-10 flex flex-col md:flex-row gap-8">
                    {stats.map((item, index) => (
                        <div key={index} className="text-left">
                            <p className="text-4xl font-bold text-cyan-400">{item.value}</p>
                            <p className="text-white text-xl mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Statistic;
