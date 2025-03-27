import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <header className="flex justify-between items-center  bg-gray-800 text-white" style={{ padding: '29px 75px' }}>
            <div className="text-2xl font-semibold">
                <Link to="/login/email">
                    <img
                        src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/assets/images/global/zoosk-heart-logo.svg"
                        alt="Zoosk Logo"
                        className=" w-auto h-[34px]"
                    />
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                <Link
                    to={isSignUp ? "/login/email" : "/login/registration"}
                    className="text-lg text-[20px] text-[#374756] pr-[50px] no-underline font-[system-ui] "
                    onClick={handleToggle}
                >
                    {isSignUp ? "Log In" : "Sign Up"}
                </Link>

                <div className="md:hidden">
                    <FaBars className="text-2xl cursor-pointer w-[29px] h-[24px]" />
                </div>
            </div>
        </header>
    );
}

export default Header;
