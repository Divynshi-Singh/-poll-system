const SignUpValidation = ({ formData, captchaValidation }) => {
    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email in the name@email.com format.";
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, contain a letter, a number, and a special character.";
        }
      
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.role) {
            newErrors.role = "Role is required";
        }
        if (!captchaValidation) newErrors.captcha = "Please verify the captcha";

        return newErrors;
    };

    return  {validateForm };
};

export default SignUpValidation;

