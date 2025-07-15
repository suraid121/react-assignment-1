import { useState } from "react";

function BookDemo() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        datetime: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation example (can expand)
        if (!form.name || !form.email || !form.datetime) {
            alert("Please fill in all required fields.");
            return;
        }
        // Here you’d usually send form data to backend or API
        setSubmitted(true);
    };

    return (
        <section className="bg-gradient-to-b from-[#051C24] to-[#06292F] py-16 px-6 text-white max-w-lg mx-auto rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Book a Demo</h2>

            {submitted ? (
                <p className="text-green-400 text-center text-lg">
                    Thank you! We’ll be in touch shortly to schedule your demo.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-semibold">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 font-semibold">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block mb-2 font-semibold">
                            Company
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="datetime" className="block mb-2 font-semibold">
                            Preferred Date & Time <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="datetime"
                            name="datetime"
                            type="datetime-local"
                            value={form.datetime}
                            onChange={handleChange}
                            className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0FF1F6] text-[#051C24] font-bold py-3 rounded-md hover:bg-[#09e0dc] transition"
                    >
                        Schedule My Demo
                    </button>
                </form>
            )}
        </section>
    );
}
export default BookDemo;