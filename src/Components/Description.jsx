function Description() {
    const Des = [
        {
            name: "Quick to ramp"
        },
        {
            name: "Quick to scale up"
        },
        {
            name: "Easy to optimize"
        }, {
            name: "Works with all your existing tools"
        }
    ]
    return (
        <>
            <section className="bg-[url('/description-bg.svg')] bg-no-repeat bg-cover bg-start md:bg-center font-Montserrat md:mx-8 mx-4 rounded-2xl  ">
                <div className=" lg:px-60 py-15 px-10 mx-auto space-y-10 md:px-20 max-w-[1280px]">
                    <h3 className="text-4xl md:text-6xl text-white font-bold">Train your aiDR on your... <br /> <span className="text-[#0FF1F6] italic font-semibold"> prefered email st| </span> </h3>
                    <p className="font-light font-work-san text-xl  text-white max-w-[350px]">You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
                    <div className="flex flex-col flex-wrap md:items-center md:flex-row gap-5  max-w-[500px]">
                        {
                            Des.map((items, i) => (
                                <p key={i} className="text-[#14BCB2]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg> {items.name}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
};

export default Description;