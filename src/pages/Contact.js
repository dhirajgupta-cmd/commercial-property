import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-700 text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-red-200">We're here to help you find the perfect property</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Office</h4>
                  <p className="text-gray-500 text-sm">123, Business Hub, Bhopal,<br />Madhya Pradesh - 462001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-700">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-500 text-sm">info@propindia.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm">📍 Map will be here</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-16">
                <p className="text-6xl mb-4">✅</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500">We will contact you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property requirement..."
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 text-gray-700 resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;