import React, { useState, useRef } from 'react';
import { TbMailForward } from 'react-icons/tb';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ email: false, required: false });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSendMail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError({ ...error, required: true });
      return;
    }

    if (!isValidEmail(email)) {
      setError({ ...error, email: true });
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_g0ko73d",
        "template_qq43csh",
        form.current,
        "i4wWuhkl1Vu-z_ktm"
      );
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <form
        ref={form}
        onSubmit={handleSendMail}
        className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5"
      >
        <p className="text-sm text-[#d3d8e8] mb-6">
          If you have any questions or opportunities, feel free to reach out. I’m open to work and collaboration.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              name="from_name"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              name="from_email"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              name="message"
              rows="4"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              required
            />
          </div>

          {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
          {error.email && <p className="text-sm text-red-400">Please enter a valid email!</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 text-white hover:gap-3"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : <>Send Message <TbMailForward size={20} /></>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;