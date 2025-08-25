// app/components/Contact.tsx
"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center text-black bg-[#f9f5f1] px-4 md:px-6 py-12"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-2xl md:text-3xl font-light mb-10 font-mar">
          Enquire now to start <em>your</em> journey with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm text-black">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Mobile Number*
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Address Line 1*
              </label>
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                City*
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-xs tracking-wider mb-1">
                Postcode*
              </label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Enquiry */}
          <div className="flex flex-col">
            <label className="uppercase text-xs tracking-wider mb-1">
              Enquiry*
            </label>
            <textarea
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              rows={4}
              className="border border-black/30 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* reCAPTCHA placeholder */}
          <div className="flex items-center gap-3">
            <input type="checkbox" id="captcha" required />
            <label htmlFor="captcha" className="text-xs text-black">
              I'm not a robot
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#12362a] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
