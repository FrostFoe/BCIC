
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                                   <li className="text-white font-fono"><a>Home</a></li>
                        
                        <li className="text-white font-fono"><a>About</a></li>
                        <li className="text-white font-fono"><a>Academic</a></li>
                        <li className="text-white font-fono"><a>Result</a></li>
                        <li className="text-white font-fono"><a>Admission </a></li>
                        </ul>
                    </div>
                    <a className=" w-16 rounded-xl text-xl">
                        <div className="w">
                        <img src="https://i.postimg.cc/Y9kr5bKD/bcic-logo-f-modified.png" alt="" />
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-white font-fono"><a>Home</a></li>
                        
                        <li className="text-white font-fono"><a>About</a></li>
                        <li className="text-white font-fono"><a>Academic</a></li>
                        <li className="text-white font-fono"><a>Result</a></li>
                        <li className="text-white font-fono"><a>Admission </a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white font-fono">Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;