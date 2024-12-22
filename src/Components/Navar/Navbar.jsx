const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto px-4 py-8 flex items-center">
                <div className="mr-auto md:w-48 flex-shrink-0 flex items-center">
                    <img className="h-8 md:h-10" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Seal_of_BCIC_College.svg/1200px-Seal_of_BCIC_College.svg.png" alt="BCIC College Logo" />
                    <span className="ml-2 text-lg font-bold font-poppins">BCIC College</span> {/* Font weight set to bold */}
                </div>
                <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
                    <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4 font-poppins">
                        <option>Home</option>
                        <option>About Us</option>
                        <option>Services</option>
                        <option>Contact</option>
                    </select>
                    <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 font-poppins" type="text" placeholder="I'm searching for ..." />
                    <svg className="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
                    </svg>
                </div>

                <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
                    <span className="font-bold md:text-xl font-poppins">+880 130 910 8222</span> {/* Font weight set to bold */}
                    <span className="font-semibold text-sm text-gray-400 font-poppins">Support 24/7</span>
                </div>

                <nav className="contents">
                    <ul className="ml-4 xl:w-48 flex items-center justify-end">
                        <li className="ml-2 lg:ml-4 relative inline-block">
                            <a href="" className="flex items-center font-poppins font-bold"> {/* Font weight set to bold */}
                                <svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                </svg>
                                <span className="ml-2">Login</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
