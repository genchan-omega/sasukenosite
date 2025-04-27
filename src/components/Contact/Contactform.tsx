// /src/components/Contact/Contactform.tsx

"use client";

import { useState } from "react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(res.ok){
      setStatus("Complete!");
      setFormData({ name: "", email: "", message: "" });
    }
    else{
      setStatus("Failed, please try again.");
    }
  };
  
  return (
    <div className="flex flex-col flex-1 items-center pt-30">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-10 border-4 p-2 rounded text-black backdrop-blur-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Mail Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-10 border-4 p-2 rounded text-black backdrop-blur-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-30 border-4 p-2 rounded text-black backdrop-blur-sm"
          required
        />
        <button type="submit" className="w-full text-xl font-bold border-4 border-rose-300 bg-rose-100 text-black hover:bg-rose-200 hover:cursor-pointer shadow-md px-4 py-2 rounded transition duration-500 backdrop-blur-sm">
          Submit
        </button>
        <p className="text-black text-center backdrop-blur-sm">
          {status}
        </p>
      </form>
    </div>
  );
}
