import { Link } from "react-router-dom"
function Hero() {
  return (
    <>
      <section className="bg-[url('/hero-bg.svg')] bg-no-repeat bg-cover bg-center font-Montserrat bg-[#02242A] " >
        <div className=" px-10 py-40 mx-auto space-y-6 md:m-0  md:px-40" >
          <h3 className="text-[#0FF1F6] text-2xl ">
            AI SDRs (aiDRs)
          </h3>
          <h1 className="text-white text-6xl md:text-7xl font-extrabold" >More <span className="font-semibold italic">leads</span>,<br /> Less <span className="font-semibold italic">people</span>. </h1>
          <p className="text-[#FFFFFF] font-light text-sm  w-[250px]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <button className="bg-[#0FF1F6] px-5 py-3.5 text-base text-[#002228] cursor-pointer transition-all hover:bg-[#0FF1F6]/90 flex items-center gap-3 font-semibold rounded-full w-full md:w-[15rem] justify-center">
           <Link to='/SignUpBeta'> Sign Up for the Beta</Link> <img src="/pointer.svg" alt="pointer" className="inline" />
          </button>
        </div>

      </section>
    </>
  )
}
export default Hero