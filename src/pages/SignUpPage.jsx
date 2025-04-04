import React from 'react'
const SignUpPage = () => {
  return (
    <div>
      <h1>sign up page</h1>
    </div>
  )
}

export default SignUpPage;



// import React, { useState } from 'react';

// const SignUpPage = () => {
//   // const [facebookIcon, setFacebookIcon] = useState('/path/to/facebook/icon.png'); // Set your path here
//   // const [googleIcon, setGoogleIcon] = useState('/path/to/google/icon.png'); // Set your path here
//   // const [hCaptcha, setHCaptcha] = useState('/path/to/hcaptcha/image.png'); // Set your path here
//   const [formData, setFormData] = useState({
//     gender: '',
//     interestedIn: '',
//     birthday: { day: '', month: '', year: '' },
//     email: '',
//     password: '',
//     isHuman: false,
//   });

//   const handleGenderChange = (gender) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       gender,
//     }));
//   };

//   const handleInterestedInChange = (interest) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       interestedIn: interest,
//     }));
//   };

//   const handleBirthdayChange = (e, field) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       birthday: {
//         ...prevData.birthday,
//         [field]: e.target.value,
//       },
//     }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCaptchaChange = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       isHuman: !prevData.isHuman,
//     }));
//   };

//   const handleSignup = () => {
//     // Handle signup logic
//     console.log('Signup data:', formData);
//   };

//   return (
//     <div>

// <div
//       style={{
//         background:
//           "url(https://static3.zoosk.com/browser-86c22481/touch/en-GB/login-image-aes-v2-desktop.1bed4140b688bfc1e97a.png) center bottom no-repeat #F7F8FB",
//         margin: "0",
//       }}
//     >
//        <div class="relative w-full max-w-sm p-6 -mt-4 bg-white border-gray-400 shadow-2xl rounded-3xl sm:absolute sm:right-10 sm:top-10 sm:mt-0">
//        <div className="top-0 left-0 w-full">
//             <img
//               src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
//               alt="Form Border"
//               className="w-full h-auto"
//             />
//           </div>
//       <div className="flex mb-4 space-x-2">
//         <button
//           className="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100"
//         >
//           {/* <img src={facebookIcon} alt="Facebook" className="w-5 h-5 mr-2" /> */}
//           Sign up
//         </button>
//         <button
//           className="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100"
//         >
//           {/* <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" /> */}
//           Sign up
//         </button>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">I'm a:</label>
//         <div className="flex mt-1 space-x-2">
//           <button
//             className="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
//             onClick={() => handleGenderChange('Woman')}
//           >
//             Woman
//           </button>
//           <button
//             className="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
//             onClick={() => handleGenderChange('Man')}
//           >
//             Man
//           </button>
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">Interested in:</label>
//         <div className="flex mt-1 space-x-2">
//           <button
//             className="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
//             onClick={() => handleInterestedInChange('Women')}
//           >
//             Women
//           </button>
//           <button
//             className="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
//             onClick={() => handleInterestedInChange('Men')}
//           >
//             Men
//           </button>
//           <button
//             className="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
//             onClick={() => handleInterestedInChange('Both')}
//           >
//             Both
//           </button>
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">Birthday</label>
//         <div className="flex mt-1 space-x-2 text-gray-700">
//           <select
//             name="day"
//             value={formData.birthday.day}
//             onChange={(e) => handleBirthdayChange(e, 'day')}
//             className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded hover:border-cyan-600"
//           >
//             <option>Day</option>
//           </select>
//           <select
//             name="month"
//             value={formData.birthday.month}
//             onChange={(e) => handleBirthdayChange(e, 'month')}
//             className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-600"
//           >
//             <option>Month</option>
//           </select>
//           <select
//             name="year"
//             value={formData.birthday.year}
//             onChange={(e) => handleBirthdayChange(e, 'year')}
//             className="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-600"
//           >
//             <option>Year</option>
//           </select>
//         </div>
//       </div>

//       <div className="mb-4 text-gray-700">
//         <label className="block text-gray-700">Email Address</label>
//         <input
//           type="email"
//           placeholder="name@email.com"
//           className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="mb-4 text-gray-700">
//         <label className="block text-gray-700">Password</label>
//         <input
//           placeholder="password"
//           className="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div className="flex items-center p-2 mb-4 text-gray-700 border border-gray-400 rounded">
//         <input
//           type="checkbox"
//           className="mr-2"
//           checked={formData.isHuman}
//           onChange={handleCaptchaChange}
//         />
//         I am human
//         {/* <img src={hCaptcha} alt="hCaptcha" className="w-10 h-10 ml-28" /> */}
//       </div>

//       <button
//         onClick={handleSignup}
//         className="w-full py-3 text-white rounded-[40px] bg-cyan-500"
//       >
//         View Singles
//       </button>

//       <p className="pt-3 text-left text-gray-400 text-[11px] leading-loose font-normal">
//         *By selecting "Sign up", you agree to our
//         <a href="#" className="underline">Terms</a> (including the mandatory arbitration of disputes) and have understood our
//         <a href="#" className="underline">Privacy Notice</a>.
//       </p>
//     </div>
//     </div>
//   </div>
//   );
// };

// export default SignUpPage;
