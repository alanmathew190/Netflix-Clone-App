import React, { useState } from "react";


function SIgnUp({isOpen,onClose}) {
    // if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Does not contain numbers";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // save email and password to localStorage
      localStorage.setItem("contactName", formData.name);
      localStorage.setItem("contactEmail", formData.email);
      localStorage.setItem("contactPassword", formData.password);

      alert("Form submitted! Email & password saved to localStorage.");
      // optionally clear the form
      setFormData({ name: "", email: "", password: "", message: "" });
    }
  };

  return (
    <div className=" h-screen z-200 top-0 fixed w-screen bg-[url(https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg)]">
      <img
        src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
        className="opacity-100 absolute"
        alt=""
      />
      <div className="backdrop-blur-lg absolute h-auto top-20 m-auto left-120 w-150 text-center p-20 z-50">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="mt-10 border-2 p-3"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="mt-10 border-2 p-3"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-10 border-2 p-3"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <br />
          <button
            className="bg-red-500 text-white font-bold p-2 mt-10"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SIgnUp;
