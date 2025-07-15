function Footer() {
    const Time = new Date();
    const Year = Time.getFullYear();

    return (
        <footer className="bg-[#123238] text-gray-400 py-8 px-4 font-Montserrat">
            <div className="max-w-6xl mx-auto flex md:justify-between md:flex-row items-center flex-col gap-5  ">
                <span className="text-xl font-semibold italic text-gray-300">
                    <img src="/footer-logo.svg" alt="" />
                </span>
                <span className="text-base">
                    Copyright © {Year} Wizia. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;