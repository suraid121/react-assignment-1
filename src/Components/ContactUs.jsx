import React, { useState } from "react";

 function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    // Send to backend here
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-[#051C24] to-[#06292F] py-16 px-6 max-w-lg mx-auto rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      {submitted ? (
        <p className="text-green-400 text-center text-lg">
          Thanks for reaching out! We’ll get back to you shortly.
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
              className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
              placeholder="Your full name"
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
              className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none"
              placeholder="Write your message here"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0FF1F6] text-[#051C24] font-bold py-3 rounded-md hover:bg-[#09e0dc] transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
export default ContactUs;