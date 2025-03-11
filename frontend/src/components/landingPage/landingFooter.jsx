import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

function DesktopFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-[10vw] pt-16 pb-12">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex justify-between items-start mb-16 border-b border-gray-800 pb-10">
          {/* Logo and Company Info */}
          <div className="max-w-sm">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">rojPagar</h2>
            </div>
            <p className="text-gray-400 mb-6 text-lg">Empowering businesses with cutting-edge solutions that drive growth and innovation.</p>
          </div>

          {/* Newsletter Subscription - Desktop Optimized */}
          <div className="w-96">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates, news and product offerings sent straight to your inbox.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section with Links - Desktop 5-Column Layout */}
        <div className="grid grid-cols-5 gap-8 mb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Company History</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Vision</a></li>
            </ul>
          </div>
          
          {/* Products Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Community</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Status Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Bug Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Feature Requests</a></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-800 pb-2">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="flex justify-between items-start border-t border-gray-800 pt-10">
          {/* Contact Information */}
          <div className="flex space-x-12">
            <div>
              <div className="flex items-center mb-4">
                <Mail className="mr-3 text-blue-400" size={20} />
                <span className="text-lg">contact@rojpagar.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-400" size={20} />
                <span className="text-lg">+1 (800) 123-4567</span>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="mr-3 text-blue-400 mt-1" size={20} />
                <span className="text-lg">123 Innovation Drive<br />Tech Valley, CA 94043</span>
              </div>
            </div>
          </div>

          {/* Social Media Links - Desktop Style */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
          <p className="text-gray-500">© 2024 rojPagar. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Cookies</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DesktopFooter;