import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../redux/roleSlice';
import Captcha from '../components/Captcha';
import SignUpValidation from '../signupValidation/SignUpValidation';
import { toast, ToastContainer } from "react-toastify";
import SignBgImg from '../assets/bg/signup-bg.png';
import { FaFacebook } from 'react-icons/fa';
import { signUpUser } from '../redux/signUpSlice';
import { useNavigate } from 'react-router-dom';
import PasswordConfirmationSignup from '../components/PasswordConfirmationSignup';
const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
    const { success, loading: authLoading, error: authError, validationErrors,  } = useSelector((state) => state.auth);
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
    const handleRoleSelect = (roleId) => {
        console.log("Selected role ID:", roleId);
        setFormData({
            ...formData,
            role: roleId
        });
    };
    const handleSignup = async () => {

        const { validateForm } = SignUpValidation({ formData, captchaValidation });
        const validationErrors = validateForm();
        console.log('Validation Errors:', validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data before submitting:', formData);
            setLoading(true);
            const userDetails = {
                email: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName,
                roleId: formData.role,
            }
            await dispatch(signUpUser(userDetails));
            setErrors({});
            setLoading(false);
            setTimeout(() => {
                navigate('/'); 
                window.scrollTo(0, 0); 
              }, 1000);
           
        } else {
            setErrors(validationErrors);
        }
    };
    useEffect(() => {
        dispatch(fetchRoles());

    }, [dispatch]);
    return (
        <div
            className=" flex flex-col">
            <div
                style={{
                    background: `url(${SignBgImg}) center bottom no-repeat #F7F8FB`, margin: '0',
                    backgroundSize:"100%",
                    //   height: '120vh', 
                }}
                className="min-h-screen flex-grow lg:flex lg:justify-between"
            >

                <div className=" sign text-left px-10 pt-20 pl-[75px] w-[800px]  hidden lg:block">
                    <h1 className=" left-text text-[50px] lg:text-5xl text-[#374756] leading-[1.2] font-euclidBold">
                        Your one in a million might be  closer than you think.
                    </h1>
                    <p className="text-lg text-[#374756] mt-4 text-[30px]">
                        <span className="font-bold text-[#374756]">1.6 million</span> messages sent daily.
                    </p>
                </div>

                <div
                    className="relative  w-full max-w-[480px] sm:w-[100%] sm:px-4 lg:w-[480px] sm:p-16 pb-27 p-2.5 sm:absolute login sm:right-28 sm:top-10 sm:mt-0 rounded-b-2xl"
                    style={{ filter: 'drop-shadow(0px 4px 20px rgba(55, 71, 86, .15))' }}
                >
                    <div className=" top-0 left-0 w-full" >
                        <img
                            src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
                            alt="Form Border"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-[white] pl-[40px] pr-[40px] rounded-b-2xl shadow-lg relative z-10 ">
                        <div className="flex mb-3 pt-8 space-x-4">
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
                        <div className="mb-5">
                        <label className="block text-[#374756] font-euclidBold">Select Role</label>
                         <div className="flex mt-1 space-x-2">
                                {rolesLoading ? (
                                   <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto "></div> 
                                ) : error ? (
                                    <div className="w-full bg-[#f8f9fa] text-center py-3 border-2 border-gray-400 rounded-3xl">
                                    <h1 className="text-blue-500">Loading...</h1>
                                  </div>
                                ) : (
                                    roles.map((role) => (
                                        <button
                                            key={role.id}
                                            className={`flex-1 py-[10px] text-[#374756] text-[15px] bg-[#f8f9fa] transition-all duration-300 border-gray-400 border-1 font-euclidRegular rounded-3xl ${formData.role === role.id ? 'bg-cyan-100 border-cyan-600' : 'hover:bg-cyan-100 hover:border-cyan-600'}`}
                                            onClick={() => handleRoleSelect(role.id)}  // Pass role.id instead of role.name
                                        >
                                            {role.name}
                                        </button>
                                    ))
                                )}
                            </div>
                            {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>}

                        </div>

                        <div className="mb-5 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-[#374756] font-euclidBold">First Name</label>
                                <input
                                    placeholder='First Name'
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 pl-5 py-3 mt-1  border border-gray-400 rounded text-[15px]  placeholder:text-[#374756] bg-[#f8f9fa] font-euclidRegular focus:outline-none"
                                />
                                
                                {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-[#374756] font-euclidBold">Last Name</label>
                                <input
                                    placeholder='Last Name'
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-3  pl-5 py-3 mt-1  border border-gray-400 rounded text-[15px] placeholder:text-[#374756] bg-[#f8f9fa] font-euclidRegular focus:outline-none"
                                />
                                {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-[#374756] font-euclidBold">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full px-3 py-3  pl-5 mt-1 border border-gray-400 rounded placeholder:text-[#374756] bg-[#f8f9fa] font-euclidRegular focus:outline-none text-[15px]"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>} 
                           
                        </div>
                        <PasswordConfirmationSignup
                            password={formData.password}
                            confirmPassword={formData.confirmPassword}
                            handleChange={handleInputChange}
                            errors={errors}
                        />

                        <Captcha captchaValidation={captchaValidation} setCaptchaValidation={setCaptchaValidation} />
                        {errors.captcha && <div className="text-red-500 text-sm">{errors.captcha}</div>}

                        <button
                            type="button"
                            onClick={handleSignup}
                            className="w-full py-3  text-white text-[20px] leading-[26px] rounded-[40px] bg-[#19b7ea] hover:bg-cyan-400 cursor-pointer shadow-[0_5.83px_19.83px_rgba(8,_46,_81,_0.13)] font-euclidMedium"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto "></div>
                            ) : (
                                'Register'
                            )}
                        </button>
                        <p className="pt-3 text-left text-[#7f8b96] text-[11px] leading-[19px] font-euclidLight pb-[20px]">
                            *By selecting "Register" or "Sign up", you agree to our
                            <a href="#" className="underline">Terms of use</a> (including the mandatory
                            arbitration of disputes) and our
                            <a href="#" className="underline"> Online Dating Safety Policy.</a>.
                            You also understand our
                            <a href="#" className="underline">Privacy Notice</a>.
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};
export default SignUpPage;