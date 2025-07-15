

function Pricing() {
    return (
        <section className="bg-gradient-to-b from-[#051C24] to-[#06292F] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Choose the Plan That Fits Your Growth
                </h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Whether you’re starting out or scaling up, our AI-powered platform
                    adapts to your needs — sending personalized sequences that convert.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Basic Plan */}
                    <div className="bg-[#093642] rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-[#0FF1F6]">Basic</h3>
                        <p className="text-gray-300 mb-6">Start training your AI with your ICP</p>
                        <p className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal">/mo</span></p>
                        <ul className="mb-8 space-y-3 text-gray-400 text-left">
                            <li>AI training on 1 ICP profile</li>
                            <li>Access to messaging matrix builder</li>
                            <li>Up to 5,000 contacts</li>
                            <li>Email & basic sequence automation</li>
                        </ul>
                        <button className="w-full cursor-pointer bg-[#0FF1F6] text-[#051C24] font-semibold py-3 rounded-lg hover:bg-[#09e0dc] transition">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#0FF1F6] rounded-2xl p-8 shadow-xl text-[#051C24] border-4 border-[#00d7d4] scale-105">
                        <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                        <p className="mb-6">Unlock full AI automation & segmentation</p>
                        <p className="text-4xl font-bold mb-6">$79<span className="text-lg font-normal">/mo</span></p>
                        <ul className="mb-8 space-y-3 text-left">
                            <li>AI training on up to 3 ICP profiles</li>
                            <li>Full messaging matrix customization</li>
                            <li>Up to 25,000 contacts</li>
                            <li>Multi-channel sequences (email, SMS, in-app)</li>
                            <li>Patch activation & analytics dashboard</li>
                        </ul>
                        <button className="w-full cursor-pointer bg-[#051C24] text-[#0FF1F6] font-semibold py-3 rounded-lg hover:bg-[#06292F] transition">
                            Upgrade Now
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-[#093642] rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-[#0FF1F6]">Enterprise</h3>
                        <p className="text-gray-300 mb-6">
                            Tailored AI solutions & dedicated support for scale-ups
                        </p>
                        <p className="text-4xl font-bold mb-6">Custom Pricing</p>
                        <ul className="mb-8 space-y-3 text-gray-400 text-left">
                            <li>Unlimited ICP profiles</li>
                            <li>Fully customizable messaging matrix</li>
                            <li>Unlimited contacts & sequences</li>
                            <li>Dedicated AI engineer & onboarding</li>
                            <li>SLA & 24/7 support</li>
                        </ul>
                        <button className="w-full border cursor-pointer border-[#0FF1F6] text-[#0FF1F6] font-semibold py-3 rounded-lg hover:bg-[#0FF1F6] hover:text-[#051C24] transition">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Pricing;