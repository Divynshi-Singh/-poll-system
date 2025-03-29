import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { Link } from 'react-router-dom';
import { FaFacebook, FaEye } from 'react-icons/fa'; // Only FaEye
import hCaptchaImg from '../assets/footer/hcapctha.jpg';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility
  const [iconColor, setIconColor] = useState('#7f8b96'); // Default color for the icon

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    let hasError = false;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError('Please enter your email.');
      hasError = true;
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email in the name@email.com format.');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Please enter your password.');
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError('Your password should be 8 characters or longer.');
      hasError = true;
    }
    if (hasError) {
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setIconColor(passwordVisible ? '#7f8b96' : '#19b7ea'); // Toggle icon color (blue when password is visible)
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[480px] relative mt-[-16px] sm:w-[100%] sm:px-4 lg:w-[480px]" style={{ filter: "drop-shadow(0px 4px 20px rgba(55, 71, 86, .15))" }}>
        <div className="top-0 left-0 w-full">
          <img src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg" alt="Form Border" className="w-full h-auto" />
        </div>
        <div className="bg-[white] pl-[40px] pr-[40px] rounded-lg shadow-lg relative z-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-[#5a6978] mb-[10px] pt-[40px] leading-[22px] font-sans text-[15px] font-medium">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className={`w-full h-[44px] font-sans border border-transparent bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none focus:ring-1 focus:ring-[#19b7ea] ${emailError ? 'border-red-500' : ''}`}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm text-[#5a6978]  mb-[12px] mt-[20px] font-sans text-[15px] font-medium">
                Password:
              </label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full h-[44px] border border-transparent bg-[#e8eaee] shadow-inner px-[20px] py-[10px] text-[17px] leading-[24px] font-medium rounded-[7px] text-[#374756] focus:outline-none focus:ring-1 font-sans focus:ring-[#19b7ea] ${passwordError ? 'border-red-500' : ''}`}
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-[65%] transform -translate-y-[50%]"
              >
                <FaEye size={21} className="text-[#7f8b96] w-7" style={{ color: iconColor }} /> {/* Dynamic color */}
              </button>
            </div>
            <div className="mb-6 text-center mb-[15px] mt-[19px]">
              <Link to="" className="text-sm no-underline text-[#5a6978] text-[15px] font-[600] font-sans">Forgot Password?</Link>
            </div>
            <div className="box-border w-[300px] h-auto p-0 m-0 border border-solid rounded-[4px] border-[#e0e0e0] bg-[#fafafa] cursor-pointer block mb-[7px]">
              <div className="flex flex-col items-center justify-center">
                {/* Captcha Checkbox and Image */}
                <div className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    className="peer mr-2 w-[28px] h-[28px] border border-solid border-[#919191] rounded-[4px] bg-[#fafafa] outline-[#00838f] mt-[20px] ml-[18px]"
                    onChange={() => setIsHuman(!isHuman)}
                    checked={isHuman}
                  />
                  <label htmlFor="captcha" className="text-sm text-[#374756] pr-20 pt-4">I am human</label>
                  <img src={hCaptchaImg} className="h-[43px] mr-[22px] mt-1" />
                </div>
                <div className="flex justify-center ml-48 mb-2 pt-1">
                  <a href="#" className="text-sm text-[#374756] text-[8px] hover:underline">Privacy-</a>
                  <a href="#" className="text-sm text-[#374756] text-[8px] hover:underline">Terms</a>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-[13px] px-0 leading-[26px] rounded-[250px] shadow-[0_5.83px_19.83px_rgba(8,46,81,.13)] ${isHuman ? 'bg-[#19b7ea] text-white' : 'bg-[#dadada] text-[#999]'} border-0 cursor-pointer text-[20px] mb-[20px]`}
              disabled={loading || !isHuman}
            >
              Log In
            </button>
          </form>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex items-center justify-evenly">
            <div className="border border-[#7f8b96] w-[100px]"></div>
            <span className="text-[#7f8b96] text-[13px]">Or</span>
            <div className="w-[100px] border border-[#7f8b96]"></div>
          </div>
          <div className="my-6 flex flex-col items-center justify-center space-x-4">
            <button
              className="flex w-full h-[45px] cursor-[pointer] items-center justify-center py-2 px-4 rounded-md mt-[10px] text-[15px] font-[500] text-[#1b3e85] bg-[white] rounded-[8px] mb-[15px]"
              style={{ border: "1px solid rgba(150, 159, 175, .7)" }}
            >
              <FaFacebook className="mr-2 w-[30px] h-[25px] text-[#1b3e85]" />
              Log in with Facebook*
            </button>

            <button
              className="flex w-full h-[45px] items-center justify-center py-2 px-4 rounded-md bg-[white] rounded-[8px] cursor-[pointer]"
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
          <p className="text-sm text-left text-[#7f8b96] text-[11px] leading-[20px] pb-[20px] mt-[-10px]">
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





