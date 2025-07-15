

 function AboutUs() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-[#051C24] to-[#06292F] text-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          About <span className="text-[#0FF1F6]">Our AI Mission</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          We're not just automating marketing — we're personalizing it at scale.
          By training our AI on your ICP and messaging matrix, we create smarter,
          hyper-targeted sequences that speak directly to each contact.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#093642] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#0FF1F6] mb-2">
               Built Around Your ICP
            </h4>
            <p className="text-gray-300">
              We train our AI on your Ideal Customer Profiles, adapting tone,
              goals, and objections for every segment.
            </p>
          </div>

          <div className="bg-[#093642] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#0FF1F6] mb-2">
               Messaging Matrix Learning
            </h4>
            <p className="text-gray-300">
              Our engine digests your messaging per persona and funnel stage —
              from awareness to decision — ensuring relevance at every touchpoint.
            </p>
          </div>

          <div className="bg-[#093642] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-[#0FF1F6] mb-2">
               Smart Patch Activation
            </h4>
            <p className="text-gray-300">
              Activate the AI on specific patches (audiences or events). It
              launches personalized outreach automatically — emails, in-app
              nudges, or sales triggers.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Why We Exist
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            In a world overwhelmed with generic automation, we help brands speak with
            precision. Our mission is to help you build trust faster, close smarter, and
            scale without losing your voice.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;