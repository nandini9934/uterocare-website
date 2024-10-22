// app/contact-us/page.js
"use client";
import React, { useState } from 'react';
import Navbar from '../_sections/navbar';
import axios from "axios";


const ContactUs = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [disease, setDisease] = useState('');
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    try {
      axios
        .post("/api/contactus", {
          name, age, phone, disease, description
        })
        .then(function (response) {
          alert("Request send successfully.");
          setDescription("");
          setDisease("");
          setPhone("");
          setAge("");
          setName("");
          setDisabled(false);
        })
        .catch(function (error) {
          alert("Form submission failed. Please try again later.");
          setDescription("");
          setDisease("");
          setPhone("");
          setAge("");
          setName("");
          setDisabled(false);
        });
    } catch (error) {
      console.error("Error during form submission", error);
      alert("Form submission failed. Please try again later.");
      setDisabled(false);
    }
  };


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-700">Contact Us</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">

          {/* Name */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2 text-pink-500">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2 text-pink-500">Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2 text-pink-500">Phone No.</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Disease */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2 text-pink-500">Disease</label>
            <select
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              className="w-full px-4 lg:py-2 py-3 border rounded-lg bg-white"
              required
            >
              <option value="">Select a type</option>
              <option value="Tube Blokage">Tube Blokage</option>
              <option value="Urine Infection">Urine Infection</option>
              <option value="UTI">UTI</option>
              <option value="PID">PID</option>
              <option value="Leucorrhoea">Leucorrhoea</option>
              <option value="Hormonal Disorder">Hormonal Disorder</option>
              <option value="Cervicitis">Cervicitis</option>
              <option value="              Polycystic Ovary Syndrome (PCOS)
">              Polycystic Ovary Syndrome (PCOS)
              </option>
              <option value="Ovarian Cysts">Ovarian Cysts</option>
              <option value="Polycystic ovary desease (PCOD)">Polycystic ovary desease (PCOD)</option>
              <option value="Ovarian cancer">Ovarian cancer</option>
              <option value="Endometriosis">Endometriosis</option>
              <option value="Infertility">Infertility</option>
              <option value="Others">Others</option>
            </select>
          </div>



          {/* Description */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2 text-pink-500">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button disabled={disabled} type="submit" className={`w-full ${disabled ? "bg-pink-300" : "bg-pink-500"} text-white font-bold py-2 px-4 mb-10 rounded-lg`} onClick={handleSubmit}>
            Submit
          </button>

        </form>
      </div>

    </>
  );
}

export default ContactUs;