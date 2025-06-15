// src/pages/ContactUs.jsx
import React, { useEffect, useState } from 'react'; // Import useState
import { Mail, Phone, MapPin } from 'lucide-react'; // Example icons

const ContactUs = () => {
  const [submissionMessage, setSubmissionMessage] = useState(''); // State for submission message
  const [isSuccess, setIsSuccess] = useState(false); // State to track success/failure

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (browser's 'required' handles most of it)
    if (!e.target.checkValidity()) {
      setSubmissionMessage('Please fill in all required fields.');
      setIsSuccess(false);
      return;
    }

    // --- Instead of window.alert(), set state for inline message ---
    setSubmissionMessage('Message sent successfully! We\'ll get back to you soon.');
    setIsSuccess(true);

    e.target.reset(); // Clear the form

    // Optionally, clear the message after a few seconds
    setTimeout(() => {
      setSubmissionMessage('');
      setIsSuccess(false);
    }, 5000); // Message disappears after 5 seconds
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 text-center animate-slide-down">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Contact Information */}
        <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-md animate-slide-in-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-500 mr-3" />
              <span>info@skinsphere.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-3" />
              <span>+234 801 234 5678</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1" />
              <span>123 Glow Avenue, Lagos, Nigeria</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Our customer service team is available Monday - Friday, 9 AM - 5 PM WAT.
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md animate-slide-in-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="john.doe@example.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" className="form-input" placeholder="Inquiry about an order" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              {/* REMOVED 'rounded-full' or similar classes if they were there in form-input for textarea */}
              <textarea id="message" name="message" rows="3" className="form-input" placeholder="Your message here..." required></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold w-full sm:w-auto animate-pulse-subtle"
            >
              Send Message
            </button>

            {/* Submission Message Display */}
            {submissionMessage && (
              <p className={`mt-4 text-center font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'} animate-fade-in`}>
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;