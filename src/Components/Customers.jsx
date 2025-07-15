function Customers() {
  const customers = [
    "Acme Corp",
    "Globex",
    "Initech",
    "Umbrella",
    "Cyberdyne",
  ];

  return (
    <section className="bg-[#06292F] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Trusted by Leading Innovators
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          Our AI platform drives measurable results for companies across industries,
          enabling hyper-personalized outreach at scale.
        </p>

        <ul className="flex flex-wrap justify-center gap-10 text-lg font-semibold text-[#0FF1F6]">
          {customers.map((name, index) => (
            <li key={index} className="hover:text-white cursor-default transition">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Customers;
