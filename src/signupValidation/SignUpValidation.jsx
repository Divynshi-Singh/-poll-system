

const SignUpValidation = ({ formData, captchaValidation, emailInUse }) => {
    const validateForm = () => {
      const newErrors = {};
      const firstName = formData.firstName.trim();
      const lastName = formData.lastName.trim();
  
      // First Name validation
      if (!firstName) {
        newErrors.firstName = "First Name is required";
      } else if (firstName.length < 4) {
        newErrors.firstName = "First Name must be at least 4 characters";
      }
  
      // Last Name validation
      if (!lastName) {
        newErrors.lastName = "Last Name is required";
      } else if (lastName.length < 4) {
        newErrors.lastName = "Last Name must be at least 4 characters";
      }
  
      // Email validation
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email in the name@email.com format.";
  
      // Password validation
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
        newErrors.password = "Password must be at least 8 characters long, contain a letter, a number, and a special character.";
      }
  
      // Confirm Password validation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm password is required";
      }
  
      // Role validation
      if (!formData.role) {
        newErrors.role = "Role is required";
      }
  
      // Captcha validation
      if (!captchaValidation) newErrors.captcha = "Please verify the captcha";
  
      return newErrors;
    };
  
    return { validateForm };
  };
  
  export default SignUpValidation;
  