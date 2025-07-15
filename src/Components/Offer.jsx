import { Link } from "react-router-dom";

function Offer() {
  return (
    <section className="bg-[#07292F] text-white text-center py-20 px-4 font-Montserrat flex flex-col items-center gap-10">
      <h4 className="text-cyan-400 text-xl font-bold tracking-widest uppercase ">
        Get Started
      </h4>
      <h2 className="text-3xl md:text-4xl lg:5xl font-bold italic">
        <span className="italic font-medium">Embrace</span> the new era of <span className="italic font-medium">outbound</span>
      </h2>

      <p className="text-gray-300  text-lg">
        Wizia lets you train, activate, and optimize aiDRs.
        <br />
        Take your outbound to new levels of performance and efficiency.
      </p>
      <button className="bg-[#0FF1F6] px-5 py-3.5 text-base text-[#002228] cursor-pointer transition-all hover:bg-[#0FF1F6]/90 flex items-center gap-3 font-semibold rounded-full w-full md:w-[15rem] justify-center">
        <Link to='/SignUpBeta'> Sign Up for the Beta</Link> <img src="/pointer.svg" alt="pointer" className="inline" />
      </button>
    </section>
  );
}

export default Offer;
