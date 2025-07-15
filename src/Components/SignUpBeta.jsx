import  { useState } from "react";

 function SignUpBeta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    // Send to backend or API here
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-[#051C24] to-[#06292F] py-16 px-6 max-w-md mx-auto rounded-lg shadow-lg text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Sign Up for Beta</h2>

      {submitted ? (
        <p className="text-green-400 text-lg">
          Thanks for signing up! We’ll notify you when the beta launches.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md px-4 py-3 bg-[#093642] border border-gray-600 focus:border-[#0FF1F6] focus:outline-none text-white"
            required
          />
          <button
            type="submit"
            className="bg-[#0FF1F6] text-[#051C24] font-bold py-3 rounded-md hover:bg-[#09e0dc] transition"
          >
            Join Beta
          </button>
        </form>
      )}
    </section>
  );
}
export default SignUpBeta;