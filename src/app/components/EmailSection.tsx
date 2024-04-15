"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className='w-full mx-auto py-2 px-4'>
      <div className='flex items-center justify-center w-full mt-5 mb-5'>
        <h1 className='px-2 text-xl font-semibold text-gray-600 border-l-[4px] border-[#504e4d] sm:mt-4'>
          Contact Us
        </h1>
      </div>
      <div className='max-w-screen-xl bg-[#504e4d] mx-auto rounded-xl px-20'>
        <div
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative justify-self-center items-center"
        >
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              We are currently looking for new opportunities, our inbox is always
              open. Whether you have a question or just want to say hi, We&apos;ll
              try our best to get back to you!
            </p>
          </div>
          <div>
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-[#504e4d] text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com"
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
                    required
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-[#504e4d] text-sm rounded-lg block w-full p-2.5"
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
                    className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-[#504e4d] text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-500 text-[#504e4d] hover:text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;