import React, { useState } from 'react';
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaRupeeSign, FaUserTie, FaCheck } from 'react-icons/fa';

// Sample data
const jobData = {
  id: "1",
  title: "Senior Electrician for Commercial Project",
  shortDescription: "Looking for an experienced electrician for a 3-month commercial building project in South Delhi",
  images: [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ],
  description: "We are looking for a skilled electrician to join our team for a major commercial building project. The electrician will be responsible for installing, maintaining, and repairing electrical systems, equipment, and fixtures. Must have experience with commercial electrical work, reading blueprints, and troubleshooting electrical issues.",
  requirements: [
    "Minimum 5 years of experience in commercial electrical work",
    "Valid electrician license",
    "Knowledge of national and local electrical codes",
    "Ability to read and interpret electrical schematics and blueprints",
    "Experience with both high and low voltage systems",
    "Problem-solving skills and attention to detail"
  ],
  workHours: "8 AM - 5 PM, Monday to Saturday",
  timeline: "3 months (April 15 - July 15, 2025)",
  salary: "₹35,000 - ₹45,000 per month based on experience",
  recruiter: {
    id: "101",
    name: "Raj Construction Co.",
    profileImage: "/api/placeholder/150/150",
    location: "South Delhi, New Delhi",
    rating: 4.7,
    totalReviews: 28,
    contactNumber: "+91 98765 43210"
  }
};

const JobDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slider navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === jobData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? jobData.images.length - 1 : prevIndex - 1
    );
  };

  // Render stars for rating
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-[#F4F2EC] min-h-screen pb-10">
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column (Job Details) */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image Slider */}
              <div className="relative h-64 md:h-96">
                <img 
                  src={jobData.images[currentImageIndex]} 
                  alt={`Job image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                >
                  <FaChevronRight />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {jobData.images.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Job Title and Short Description */}
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobData.title}</h1>
                <p className="text-gray-600 text-lg mb-6">{jobData.shortDescription}</p>

                {/* Detailed Job Information */}
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Job Description</h2>
                    <p className="text-gray-700 leading-relaxed">{jobData.description}</p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Project Timeline</h2>
                    <div className="flex items-center text-gray-700">
                      <FaCalendarAlt className="mr-2 text-black" />
                      <span>{jobData.timeline}</span>
                    </div>
                  </div>

                  {/* Work Hours */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Work Hours</h2>
                    <div className="flex items-center text-gray-700">
                      <FaClock className="mr-2 text-black" />
                      <span>{jobData.workHours}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Requirements</h2>
                    <ul className="list-none space-y-2">
                      {jobData.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Salary */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Compensation</h2>
                    <div className="flex items-center text-gray-700">
                      <FaRupeeSign className="mr-2 text-black" />
                      <span>{jobData.salary}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
              <button className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 w-full md:w-auto">
                Apply for this Job
              </button>
              
            </div>
          </div>

          {/* Right Column (Recruiter Info) */}
          <div className="lg:w-1/3 ">
            <div className="bg-white rounded-lg shadow-md p-6 sticky  top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-black pb-2">Recruiter Details</h2>
              
              {/* Recruiter Card */}
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={jobData.recruiter.profileImage} 
                  alt={jobData.recruiter.name} 
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">{jobData.recruiter.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mt-2 mb-1">
                  <div className="flex mr-2">
                    {renderRatingStars(jobData.recruiter.rating)}
                  </div>
                  <span className="text-gray-600">
                    {jobData.recruiter.rating} ({jobData.recruiter.totalReviews} reviews)
                  </span>
                </div>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mt-2">
                  <FaMapMarkerAlt className="mr-1 text-red-500" />
                  <span>{jobData.recruiter.location}</span>
                </div>
              </div>
              
              {/* Contact Button */}
              <div className="flex flex-col space-y-3 mt-6">
                <button className="bg-green-600 text-white py-2 px-4 rounded-full font-medium hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  <FaUserTie className="mr-2" /> Contact Recruiter
                </button>
                <p className="text-center text-gray-600 text-sm mt-2">Or call directly: {jobData.recruiter.contactNumber}</p>
              </div>
              
              {/* Similar Jobs */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-black pb-2">Similar Jobs</h3>
                <div className="space-y-3">
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-[#F4F2EC] transition cursor-pointer">
                    <h4 className="font-medium text-gray-900">Electrician for Residential Project</h4>
                    <p className="text-sm text-gray-600">East Delhi • ₹30,000/month</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-[#F4F2EC] transition cursor-pointer">
                    <h4 className="font-medium text-gray-900">Commercial Wiring Specialist</h4>
                    <p className="text-sm text-gray-600">Noida • ₹42,000/month</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg hover:bg-[#F4F2EC] transition cursor-pointer">
                    <h4 className="font-medium text-gray-900">Electrical Maintenance Lead</h4>
                    <p className="text-sm text-gray-600">Gurgaon • ₹38,000/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;