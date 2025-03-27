import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import hCaptchaImg from '../assets/h-cap.jpg';

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div
        className="w-full max-w-[450px] relative mt-[-23px] sm:w-full sm:px-4"
        style={{ filter: "drop-shadow(0px 4px 20px rgba(55, 71, 86, .15))" }}
      >
        <div className="top-0 left-0 w-full">
          <img
            src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
            alt="Form Border"
            className="w-full h-auto"
          />
        </div>
        <div className="bg-[white] pl-[40px] pr-[40px] rounded-lg shadow-lg relative z-10 sm:px-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-[#5a6978] font-medium mb-[10px] pt-[40px] text-[15px] leading-[22px]"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full h-[44px] border border-transparent bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none focus:ring-2 focus:ring-[blue]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-[#5a6978] font-medium mb-[10px] mt-[20px]"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full h-[44px] border border-transparent bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none focus:ring-2 focus:ring-[blue]"
            />
          </div>
          <div className="mb-6 text-center mb-[15px] mt-[20px]">
            <Link
              to=""
              className="text-sm no-underline text-[#5a6978] text-[14px] text-[600]"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="box-border w-[300px] h-[74px] p-0 m-0 border border-solid rounded-[4px] border-[#e0e0e0] bg-[#fafafa] cursor-pointer block mb-[10px]">
            <div className="flex items-center justify-between">
              <input
                type="checkbox"
                className="mr-2 appearance-none w-[28px] h-[28px] border border-solid border-[#919191] rounded-[4px] bg-[#fafafa] outline-[#00838f] mt-[20px] ml-[18px]"
              />
              <label htmlFor="captcha" className="text-sm text-[#374756]">I am human</label>
              <img src={hCaptchaImg} className="h-[30px] w-[30px]" />
            </div>
          </div>
          <button className="w-full py-[13px] px-0 leading-[26px] rounded-[250px] shadow-[0_5.83px_19.83px_rgba(8,46,81,.13)] bg-[#dadada!important] text-[#999] border-0 cursor-[pointer] text-[20px] mb-[20px]">
            Log In
          </button>

          <div className="flex items-center justify-evenly">
            <div className="border border-[#7f8b96] w-[100px]"></div>
            <span className="text-[#7f8b96] text-[13px]">Or</span>
            <div className="w-[100px] border border-[#7f8b96]"></div>
          </div>
          <div className="my-6 flex flex-col items-center justify-center space-x-4">
            <button
              className="flex w-full h-[45px] cursor-[pointer] items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-[20px] text-[15px] font-[500] text-[#1b3e85] bg-[white] rounded-[8px] mb-[20px]"
              style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
            >
              <FaFacebook className="mr-2 w-[30px] h-[25px] text-[#1b3e85]" />
              Log in with Facebook*
            </button>

            <button
              className="flex w-full h-[45px] items-center justify-center py-2 px-4 bg-red-600 rounded-md bg-[white] hover:bg-red-700 rounded-[8px] mb-[20px] cursor-[pointer]"
              style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
            >
              <img
                src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/google-logo.ef9bd4aeb1234ae290c7.svg"
                alt="Google"
                className="mr-2 w-[30px] h-[25px]"
              />
              Log in with Google*
            </button>
          </div>
          <p className="text-sm text-left text-[#7f8b96] text-[11px] leading-[20px] pb-[20px]">
            *By selecting "Log in with Facebook" or "Log in with Google", you agree to our{" "}
            <a href="https://docviewer.zoosk.com/legal-tos-en.html" className="text-[#7f8b96]" target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
            (including the mandatory arbitration of disputes) and consent to our{" "}
            <a href="https://docviewer.zoosk.com/legal-privacy-en.html" className="text-[#7f8b96]" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


