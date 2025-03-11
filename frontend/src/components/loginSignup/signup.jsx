import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

function Signup() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Form state for all inputs
  const [formData, setFormData] = useState({
    fullName: '',
    aadharCard: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    location: '',
    userType: '',
    profilePicture: null,
    profilePicturePreview: '',
    preferredJobs: []
  });

  // Error handling state
  const [errors, setErrors] = useState({});
  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Handle user type selection with custom UI
  const handleUserTypeChange = (type) => {
    setFormData({
      ...formData,
      userType: type
    });

    // Clear error
    if (errors.userType) {
      setErrors({
        ...errors,
        userType: null
      });
    }
  };

  // Handle job preference selection with custom UI
  const handleJobToggle = (job) => {
    if (formData.preferredJobs.includes(job)) {
      // Remove job
      setFormData({
        ...formData,
        preferredJobs: formData.preferredJobs.filter(j => j !== job)
      });
    } else {
      // Add job
      setFormData({
        ...formData,
        preferredJobs: [...formData.preferredJobs, job]
      });
    }

    // Clear error
    if (errors.preferredJobs) {
      setErrors({
        ...errors,
        preferredJobs: null
      });
    }
  };

  // Handle file input change for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);

      setFormData({
        ...formData,
        profilePicture: file,
        profilePicturePreview: previewUrl
      });
    }
  };

  // Trigger file input click
  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.aadharCard.trim()) newErrors.aadharCard = 'Aadhar card number is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.userType) newErrors.userType = 'Please select a user type';

    // Phone number validation
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Aadhar card validation (assuming 12 digits)
    if (formData.aadharCard && !/^\d{12}$/.test(formData.aadharCard)) {
      newErrors.aadharCard = 'Aadhar card must be 12 digits';
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // If applicant, preferredJobs is required
    if (formData.userType === 'Applicant' && formData.preferredJobs.length === 0) {
      newErrors.preferredJobs = 'Please select at least one job preference';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Start loading
    setIsSubmitting(true);

    try {
      // Here you would normally send the data to your API
      console.log('Form data submitted:', formData);

      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to login page on success
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        form: 'Failed to create account. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#F4F2EC] w-screen h-screen relative">
        <img src={logo} alt="Logo" className='logo absolute w-[10vw] top-5 left-2' />

        <div className="w-full h-full items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-xl shadow-md overflow-y-auto max-h-[90vh]">
            <h1 className="w-full text-center text-[2vw] uppercase mb-8 font-bold">Create Account</h1>

            {errors.form && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {errors.form}
              </div>
            )}

            <div className="flex flex-col md:flex-row h-full gap-10 w-[6vw]">
              <div className="flex flex-col gap-3 justify-center">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder='Full Name'
                    className={`border rounded-full px-5 w-full md:w-[25vw] py-1 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-3">{errors.fullName}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="aadharCard"
                    value={formData.aadharCard}
                    onChange={handleInputChange}
                    placeholder='Aadhar Card'
                    className={`border rounded-full px-5 py-1 w-full ${errors.aadharCard ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.aadharCard && <p className="text-red-500 text-xs mt-1 ml-3">{errors.aadharCard}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    className={`border rounded-full px-5 py-1 w-full ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 ml-3">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder='Password'
                    className={`border rounded-full px-5 py-1 w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1 ml-3">{errors.password}</p>}
                </div>

                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder='Confirm Password'
                    className={`border rounded-full px-5 py-1 w-full ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-3">{errors.confirmPassword}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder='Location'
                    className={`border rounded-full px-5 py-1 w-full ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.location && <p className="text-red-500 text-xs mt-1 ml-3">{errors.location}</p>}
                </div>
              </div>

              <div className="flex flex-wrap gap-10">
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Upload Image
                  </label>

                  <div
                    onClick={handleImageUploadClick}
                    className="cursor-pointer border border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {formData.profilePicturePreview ? (
                      <div className="mt-2">
                        <img
                          src={formData.profilePicturePreview}
                          alt="Profile Preview"
                          className="mx-auto h-32 w-32 object-cover rounded-md"
                        />
                      </div>
                    ) : (
                      <div className="py-8">
                        <p className="text-gray-500">Click to upload profile picture</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="userType mb-6">
                    <h2 className="font-medium mb-2">Sign In As</h2>
                    <div className='flex gap-4'>
                      <div
                        onClick={() => handleUserTypeChange('Applicant')}
                        className={`cursor-pointer px-4 py-2 rounded-full border transition-all duration-200 ${formData.userType === 'Applicant'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                          }`}
                      >
                        Applicant
                      </div>
                      <div
                        onClick={() => handleUserTypeChange('Recruiter')}
                        className={`cursor-pointer px-4 py-2 rounded-full border transition-all duration-200 ${formData.userType === 'Recruiter'
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                          }`}
                      >
                        Recruiter
                      </div>
                    </div>
                    {errors.userType && <p className="text-red-500 text-xs mt-1">{errors.userType}</p>}
                  </div>

                  <div className="preferredJobs">
                    <h2 className="font-medium mb-2">Preferred Jobs</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {['Painter', 'Plumber', 'Labourer', 'Electrician'].map(job => (
                        <div
                          key={job}
                          onClick={() => handleJobToggle(job)}
                          className={`cursor-pointer px-3 py-2 rounded-md border transition-all duration-200 ${formData.preferredJobs.includes(job)
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                          {job}
                        </div>
                      ))}
                    </div>
                    {errors.preferredJobs && <p className="text-red-500 text-xs mt-1">{errors.preferredJobs}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-7 py-2 rounded-full text-lg hover:bg-gray-800 transition duration-200 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Sign Up'}
              </button>
            </div>

            <div className="haveAccount mt-4 text-center">
              <p className="text-gray-600 inline mr-2">Already have an account?</p>
              <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;