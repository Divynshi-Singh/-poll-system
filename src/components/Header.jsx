import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <header className="flex justify-between items-center text-white py-7 px-6 sm:px-12 lg:px-20">
            <div className="text-2xl font-semibold">
                <Link to="/">
                    <img
                        src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/assets/images/global/zoosk-heart-logo.svg"
                        alt="Zoosk Logo"
                        className="w-auto h-[34px]"
                    />
                </Link>
            </div>
            <div className="flex items-center space-x-6">

                <Link
                    to={isSignUp ? "/" : "/signup"}
                    className="text-lg sm:text-xl lg:text-2xl text-[#374756] pr-6 sm:pr-8 md:pr-12 no-underline font-[system-ui]"
                    onClick={handleToggle}
                >
                    {isSignUp ? "Log In" : "Sign Up"}
                </Link>

                <div className="">
                    <FaBars className="text-2xl cursor-pointer w-[29px] h-[24px] text-[#374756]" />
                </div>
            </div>
        </header>
    );
}

export default Header;
