"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };
  // &apos;

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/* Ensure the paths to the images are correct */}
          <Link href="https://github.com/allonnam96">
            <img
              src="/_util/iconSvg/icons8-github-64.png"
              alt="GitHub"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/allonnam/">
            <img
              src="/_util/iconSvg/icons8-linkedin-64.png"
              alt="LinkedIn"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <form
        className="flex flex-col"
        method="post"
        action="mailto:allonhnam@gmail.com"
        encType="text/plain"
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="text"
            id="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="example@email.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-gradient-to-br from-blue-400 to-green-300 hover:bg-slate-200 text-white font-medium rounded-full w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default EmailSection;
