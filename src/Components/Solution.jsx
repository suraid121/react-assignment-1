


function Solution() {
    const solutions = [
        {
            id: 1,
            title: "AI-Powered Personalization",
            description:
                "Leverage machine learning trained on your ICP to deliver tailored sequences that resonate.",
        },
        {
            id: 2,
            title: "Dynamic Messaging Matrix",
            description:
                "Customize messages per persona and funnel stage, ensuring relevant and timely outreach.",
        },
        {
            id: 3,
            title: "Patch Activation Automation",
            description:
                "Trigger smart campaigns on specific segments or events for maximum impact and ROI.",
        },
        {
            id: 4,
            title: "Multi-Channel Engagement",
            description:
                "Engage leads via email, SMS, and in-app notifications—all orchestrated seamlessly.",
        },
        {
            id: 5,
            title: "Real-Time Analytics & Reporting",
            description:
                "Track AI performance and campaign effectiveness with detailed dashboards and insights.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#051C24] to-[#0A2E39] py-20 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Our Solutions</h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
                    {solutions.map(({ id, title, description }) => (
                        <div
                            key={id}
                            className="bg-[#093642] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-[#0FF1F6]">{title}</h3>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Solution