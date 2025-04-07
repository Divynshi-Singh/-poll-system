import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../redux/roleSlice';
import Captcha from '../components/Captcha';
import SignUpValidation from '../signupValidation/SignUpValidation'; 
import { toast, ToastContainer } from "react-toastify";
import SignBgImg from '../assets/bg/signup-bg.png';
import { FaFacebook } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { signUpUser } from '../redux/signUpSlice';

const SignUpPage = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        role: '', 
    });

    const [captchaValidation, setCaptchaValidation] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { roles, loading: rolesLoading, error } = useSelector((state) => state.roles); 
    console.log("Fetched roles:", roles);
    const { loading: authLoading, error: authError } = useSelector((state) => state.auth); 

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRoleSelect = (role) => {
        setFormData((prevData) => ({
            ...prevData,
            role: role,
        }));
    };

    const handleSignup = async () => {
        const { validateForm } = SignUpValidation({ formData, captchaValidation });
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data before submitting:', formData);
            setLoading(true); 
            const userDetails = {
                email: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
                role: formData.role,
            };

            await dispatch(signUpUser(userDetails));
            setErrors({});
            setLoading(false); 
        } else {
            setErrors(validationErrors);
        }
    };

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    return (
        <div className="min-h-screen flex flex-col">
            <div
                style={{ background: `url(${SignBgImg}) center bottom no-repeat #F7F8FB`, margin: '0' }}
                className="flex-grow lg:flex lg:justify-between"
            >
               
                <div className="text-left px-10 pt-20 pl-[75px] width-2xl lg:max-w-4xl  hidden lg:block">
                    <h1 className="text-[50px] lg:text-5xl text-[#374756] leading-[1.2] font-eculidBold">
                        Your one in a million might be closer than you think.
                    </h1>
                    <p className="text-lg text-[#374756] mt-4 text-[30px]">
                        <span className="font-bold text-[#374756]">1.6 million</span> messages sent daily.
                    </p>
                </div>
               
                <div
                    className="w-full max-w-[480px] relative sm:w-[100%] sm:px-4 lg:w-[480px] sm:p-16 pb-27 p-2.5 sm:absolute sm:right-28 sm:top-10 sm:mt-0 "
                    style={{ filter: 'drop-shadow(0px 4px 20px rgba(55, 71, 86, .15))' }}
                >
                    <div className="top-0 left-0 w-full">
                        <img
                            src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
                            alt="Form Border"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-[white] pl-[40px] pr-[40px] rounded-b-2xl shadow-lg relative z-10 ">
                        <div className="flex mb-4 pt-8 space-x-2">
                            <button className="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100">
                                <FaFacebook className="mr-2 w-[30px] h-[25px] text-[#1b3e85]" />
                                Sign Up
                            </button>
                            <button className="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100">
                                <img
                                    src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/google-logo.ef9bd4aeb1234ae290c7.svg"
                                    alt="Google"
                                    className="mr-2 w-[30px] h-[25px]"
                                />
                                Sign Up
                            </button>
                        </div>

                        {/* Role Selection */}
                        <div className="mb-4">
                            <label className="block text-[#374756] font-eculidBold">Select Role</label>
                            <div className="flex mt-1 space-x-2">
                                {rolesLoading ? (
                                    <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto "></div>
                                ) : error ? (
                                    <div className="text-red-500">{error}</div>
                                ) : (
                                    roles.map((role) => (
                                        <button
                                            key={role.id}
                                            className={`flex-1 py-2 text-[#374756] transition-all duration-300 border-gray-400 border-1 rounded-3xl ${formData.role === role.name ? 'bg-cyan-100 border-cyan-600' : 'hover:bg-cyan-100 hover:border-cyan-600'}`}
                                            onClick={() => handleRoleSelect(role.name)}
                                        >
                                            {role.name}
                                        </button>
                                    ))
                                )}
                            </div>
                            {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>} 
                        </div>

                        {/* Name, Email, Password Inputs */}
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-[#374756] font-eculidBold">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 mt-1 text-[#374756] bg-transparent border border-gray-400 rounded"
                                />
                                {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-[#374756] font-eculidBold">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 mt-1 text-[#374756] bg-transparent border border-gray-400 rounded"
                                />
                                {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
                            </div>
                        </div>

                        {/* Other Inputs (Email, Password, Confirm Password) */}
                        <div className="mb-4">
                            <label className="block text-[#374756] font-eculidBold">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded text-[#374756]"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-[#374756] font-eculidBold">Password</label>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder="password"
                                className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded text-[#374756]"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                                <FaEye size={22} className="text-[#7f8b96]" style={{ color: isPasswordVisible ? '#19b7ea' : '#7f8b96' }} />
                            </button>
                            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#374756] font-eculidBold">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded text-[#374756]"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
                        </div>

                        <Captcha captchaValidation={captchaValidation} setCaptchaValidation={setCaptchaValidation} />
                        {errors.captcha && <div className="text-red-500 text-sm">{errors.captcha}</div>}

                        <button
                            type="button"
                            onClick={handleSignup}
                            className="w-full py-3 text-white text-[20px] leading-[26px] rounded-[40px] bg-[#19b7ea] hover:bg-cyan-400 cursor-pointer shadow-[0_5.83px_19.83px_rgba(8,_46,_81,_0.13)] font-euclidMedium"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto "></div>
                            ) : (
                                'Register'
                            )}
                        </button>

                        <p className="pt-3 text-left text-[#7f8b96] text-[11px] leading-[19px] font-euclidMedium pb-[20px]">
                            *By selecting "Sign up", you agree to our
                            <a href="#" className="underline">Terms Of Use</a> and have understood our
                            <a href="#" className="underline"> Privacy Notice</a>.
                        </p>
                    </div>
                </div>
                <ToastContainer position="top-center" />
            </div>
        </div>
    );
};

export default SignUpPage;
