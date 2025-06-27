import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

init("kOUzF7nQjwSxOAz2I");

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    subject: "",
    message: "",
    contact_number: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "ea187bfc-9820-4222-ba84-5c5fd2f9cb69",
          from_name: formData.from_name,
          email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
          contact_number: formData.contact_number,
          botcheck: false,
          replyto: formData.user_email,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          from_name: "",
          user_email: "",
          subject: "",
          message: "",
          contact_number: "",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-500 mt-20">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <div className="w-16 h-0.5 bg-red-400 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                Failed to send message. Please try again or contact directly via
                email.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              value="ea187bfc-9820-4222-ba84-5c5fd2f9cb69"
            >
              {/* Your existing form fields - update 'name' attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter a name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter an email"
                    required
                  />
                </div>
              </div>

              {/* Add this new div for contact number */}
              <div className="mb-6">
                <label
                  htmlFor="contact_number"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter a number"
                />
              </div>

              {/* Rest of your form fields - make sure to update 'name' attributes */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-md hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Opening Email...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9837889206</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">moeenali0124@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    Bilaspur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/moeen-ali01/"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com/moeenali123"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                {/* <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/oyemoeen_/"
                  target="_blank"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
