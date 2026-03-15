import React, { useState } from "react";
import { Calendar } from "lucide-react"; // optional icon

type FormData = {
  name: string;
  date: string;
  time: string;
  message: string;
};

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `New Appointment Request:\n\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/759066754?text=${encodedMessage}`; // replace number if needed

    // Open WhatsApp in a new tab/window
    window.open(whatsappLink, "_blank");

    // Basic confirmation
    alert("Your appointment request has been sent via WhatsApp!");
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-50">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Schedule an Appointment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
            placeholder="John"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-4 bg-green-700 text-white font-medium rounded-xl hover:bg-green-800 transition-all hover:scale-105 shadow-lg shadow-green-700/20 flex items-center justify-center"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
