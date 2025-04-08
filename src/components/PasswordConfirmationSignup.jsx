import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const PasswordConfirmationSignup = ({ password, confirmPassword, handleChange, errors }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible((prev) => !prev);
    };

    return (
        <div>
            {/* Password Input */}
            <div className="mb-4 relative">
                <label className="block text-[#374756] font-euclidBold">Password</label>
                <div className="relative flex items-center">
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-3 py-[10px] mt-1 border border-gray-400 rounded placeholder:text-[#374756] bg-[#f8f9fa] font-euclidRegular"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 flex items-center justify-center top-1/2 transform -translate-y-1/2"
                    >
                        <FaEye size={22} className={`${isPasswordVisible ? 'text-[#19b7ea]' : 'text-[#7f8b96]'}`} />
                    </button>
                </div>
                {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4 relative">
                <label className="block text-[#374756] font-euclidBold">Confirm Password</label>
                <div className="relative flex items-center">
                    <input
                        type={isConfirmPasswordVisible ? 'text' : 'password'}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className="w-full px-3 py-[10px] mt-1 border border-gray-400 rounded placeholder:text-[#374756] bg-[#f8f9fa] font-euclidRegular"
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-4 flex items-center justify-center top-1/2 transform -translate-y-1/2"
                    >
                        <FaEye size={22} className={`${isConfirmPasswordVisible ? 'text-[#19b7ea]' : 'text-[#7f8b96]'}`} />
                    </button>
                </div>
                {errors.confirmPassword && <div className="text-red-500 text-sm mt-2">{errors.confirmPassword}</div>}
            </div>
        </div>
    );
};

export default PasswordConfirmationSignup;
