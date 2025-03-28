import React from 'react';
import AppStore from '../assets/footer/appStore.webp';
import PlayStore from '../assets/footer/playStore.webp';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="w-full bg-white px-4 sm:px-10 lg:px-[70px]">
            <div className="flex justify-center gap-6 pt-5 flex-wrap">
                <img src={AppStore} className="h-[40px] w-[130px]" alt="App Store" />
                <img src={PlayStore} className="h-[50px] w-[130px]" alt="Play Store" />
            </div>
            <p className="mb-8 mt-8 text-2xl sm:text-3xl text-center text-gray-600">
                Over <span className="font-bold text-gray-700">30 million</span> downloads.
            </p>
            <div className="border-gray-300 border-[0.1px] mb-6"></div>
            <div className="grid grid-cols-1 gap-8 text-sm text-gray-700 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-5">
                    <h3 className="mb-6 font-bold">Zoosk Dating</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">iPhone Dating App</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Android Dating App</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Start Dating</a></li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <h3 className="mb-6 font-bold">Dating and Relationship Advice</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Dating Tips</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Online Dating Advice</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Relationship Advice</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Single Life</a></li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <h3 className="mb-6 font-bold">About Zoosk</h3>
                    <ul className="space-y-6 text-[16px] text-[#374756] leading-[20px]">
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">About Us</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Success Couples</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Careers</a></li>
                        <li className="mb-6"><a href="#" className="hover:text-gray-500">Help</a></li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <h3 className="mb-6 font-bold">Follow Zoosk</h3>
                    <ul className="flex gap-6 sm:gap-10 text-[#374756] cursor-pointer">
                        <li><FaFacebook className="text-[32px] sm:text-[40px] hover:text-gray-500" /></li>
                        <li><FaInstagramSquare className="text-[32px] sm:text-[40px] hover:text-gray-500" /></li>
                        <li><TbXboxXFilled className="text-[32px] sm:text-[40px] hover:text-gray-500" /></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 space-y-3 text-[15px] text-center text-[#374756] sm:flex-row sm:justify-between sm:space-y-0">
                <p>© 2007-2025 Zoosk, Inc. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    <a href="#" className="hover:text-gray-500">Accessibility</a> |
                    <a href="#" className="hover:text-gray-500">Safety</a> |
                    <a href="#" className="hover:text-gray-500">Terms of Service</a> |
                    <a href="#" className="hover:text-gray-500">Privacy</a> |
                    <a href="#" className="hover:text-gray-500">Imprint</a>
                </div>
            </div>
            <p className="mt-4 text-xs text-left text-gray-700  pb-20 leading-[17px]">
                <strong>ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR THE SUBSCRIBERS OF THIS WEBSITE.</strong>  <br />
                <strong>HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR </strong>
                <a href="#" className="text-blue-500">ONLINE DATING SAFETY TIPS</a>.
            </p>

        </div>
    );
};
export default Footer;
