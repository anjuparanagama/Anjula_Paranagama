import React, { useState } from 'react';
import { Calendar } from 'lucide-react'; // optional icon

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',  // Corrected 'ttime' to 'time'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message for the WhatsApp Click-to-Chat link
    const message = `
      New Appointment Request:

      Name: ${formData.name}
      Date: ${formData.date}
      Time: ${formData.time}
      Message: ${formData.message}
    `;

    // URL encode the message to ensure it's properly formatted
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp Click-to-Chat link
    const whatsappLink = `https://wa.me/759066754?text=${encodedMessage}`; // Your WhatsApp number // Replace with recipient's phone number

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');

    // Optionally, you can alert the user about the action
    alert('Your appointment request has been sent via WhatsApp!');
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-50">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule an Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time
            </label>
            <input
              type="time"  // Corrected from 'ttime' to 'time'
              id="time"    // Corrected from 'ttime' to 'time'
              name="time"  // Corrected from 'ttime' to 'time'
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center justify-center"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
