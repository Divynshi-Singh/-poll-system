import React from "react";
import { IoMdClose } from "react-icons/io";
import AppStore from "../assets/footer/appStore.webp";
import PlayStore from "../assets/footer/googleplay.png";
import fbIcon from "../assets/footer/fb.svg";
import xicon from "../assets/footer/xicon.svg";
import instaIcon from "../assets/footer/instaicon.svg";

const HamburgerMenu = ({ isSidebarOpen, toggleSidebar, selectedLanguage, setSelectedLanguage, isDropdownOpen, toggleDropdown, languages }) => {
  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-30"
            style={{
              backgroundColor: "rgba(233, 241, 248, 0.8)",
            }}
          ></div>
          {/* Sidebar Content */}
          <div
            className="fixed top-0 right-0 z-50 bg-white shadow-lg w-full lg:w-[530px] p-5 md:p-9 transition-transform transform overflow-y-auto max-h-[100vh]"
            style={{
              transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
              backgroundImage: 'url("https://via.placeholder.com/1500x1500")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-between p-0">
              <img
                src="https://static3.zoosk.com/browser-bf2e74dc/touch/en-US/assets/images/svg/aes-heart-red.svg" 
                alt="Zoosk Logo"
                className="w-12 h-9"
              />
              <button
                onClick={toggleSidebar}
                className="text-gray-400 cursor-pointer hover:text-gray-300"
              >
                <IoMdClose className="w-10 h-14" />
              </button>
            </div>
            {/* Sidebar Navigation */}
            <nav className="flex flex-col pt-15 pl-4 space-y-3 text-base text-[18px] leading-[23px] font-sans font-[500] text-center lg:text-left ">
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                About Zoosk
              </a>
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-[#374756] hover:text-gray-400 pb-4"
              >
                Dating & Relationship
              </a>
              <a href="#" className="block text-[#374756] hover:text-gray-400">
                Press
              </a>
            </nav>

            <nav className="flex flex-col pt-10 pl-3 space-y-3 text-base font-sans font-[500] text-[18px] leading-[23px] text-center lg:text-left ">
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Privacy
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Safety
              </a>
              <a
                href="#"
                className="block text-gray-500 hover:text-gray-400 pb-3"
              >
                Terms of Use
              </a>
            </nav>
            <div className="flex flex-col mt-6 mb-10">
              <div className="flex gap-9 pt-5 flex-wrap lg:gap-8 justify-center lg:justify-start">
                <img
                  src={AppStore}
                  className="h-[40px] w-[120px]"
                  alt="App Store"
                />
                <img
                  src={PlayStore}
                  className="h-[40px] w-[135px]"
                  alt="Play Store"
                />
              </div>

              <div className="flex mt-16 gap-6 justify-center lg:justify-start">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fbIcon}
                    alt="Facebook"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={xicon}
                    alt="X (formerly Twitter)"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instaIcon}
                    alt="Instagram"
                    className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] hover:opacity-80"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-25 text-xs text-center text-gray-800 md:text-sm sm:gap-4 gap-10">
              <p className="text-[20px]">© 2025 Zoosk</p>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-50 p-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-lg"
                >
                  {selectedLanguage}
                  <span className="ml-2">
                    <i
                      className="fa-solid fa-v"
                      style={{ color: "#858585" }}
                    ></i>
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 z-10 w-40 overflow-y-auto bg-white border border-gray-400 rounded shadow-md bottom-full max-h-60">
                    <ul>
                      {languages.map((language, index) => (
                        <li
                          key={index}
                          onClick={() => setSelectedLanguage(language)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;