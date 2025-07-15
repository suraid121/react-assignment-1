import control from "/control.svg"
import scalable from "/scalable.svg"
import flexible from "/flexible.svg"

function Feature() {
    const offerList = [
        {
            description:
                "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
            icon: control,
            title: "You’re in Control"
        },
        {
            description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
            icon: scalable,
            title: "Infinitely Scalable"
        },
        {
            description:
                "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
            icon: flexible,
            title: "Incredibly Flexible"
        },
    ];

    return (
        <>
            <section className="bg-[#002228] md:px-20 md:py-40 py-20 px-10 " >


                <div className='flex flex-col md:flex-row md:gap-40 gap-20 mx-auto'>
                    {offerList.map((item, i) => (
                        <div className='flex gap-4' key={i}>
                            <div className='flex flex-col gap-6'>
                                <img
                                    alt='icon'
                                    className='h-15 w-15'
                                    src={item.icon}
                                />
                                <h4 className='font-bold text-2xl font-Montserrat text-[#FFFFFF]'>{item.title}</h4>
                                <p className=' text-base font-work-san text-white font-light '>
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};
export default Feature;