import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    Trainings: "",
    Email: "",
    Name: "",
    Phone_no: "",
    Message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when user types
  };

  // ✅ Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.Trainings) newErrors.Trainings = "Please select a training.";
    if (!formData.Name.trim()) newErrors.Name = "Name is required.";
    else if (!/^[A-Za-z\s]+$/.test(formData.Name))
      newErrors.Name = "Name should only contain letters.";

    if (!formData.Email.trim()) newErrors.Email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email))
      newErrors.Email = "Enter a valid email address.";

    if (!formData.Phone_no.trim()) newErrors.Phone_no = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.Phone_no))
      newErrors.Phone_no = "Enter a valid 10-digit number.";

    if (!formData.Message.trim()) newErrors.Message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop submission if invalid

    setIsSubmitting(true);

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzLfqzgc7XudBBwhMdGjS1Irx-OCVFFhQHfvQwhw2eCDqCyYZ3tfuhBOZIA2hkf3yEjBA/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sheetName: "contact us",
        }),
      });

      alert("✅ Form submitted successfully!");
      setFormData({
        Trainings: "",
        Email: "",
        Name: "",
        Phone_no: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ContactSection">
      <div className="Container">
        <div className="text">
          <h1>Contact Us</h1>
        </div>
        <hr />

        <div className="form">
          <form onSubmit={handleSubmit} noValidate>
            <select
              name="Trainings"
              value={formData.Trainings}
              onChange={handleChange}
            >
              <option className= "options"  value="">Select the training</option>
              <option className= "options"  value="Senior level trainings">Senior level trainings</option>
              <option className= "options"  value="Mid level trainings">Mid level trainings</option>
              <option className= "options"  value="Junior level trainings">Junior level trainings</option>
              <option className= "options"  value="Internship level trainings">Intership level trainings</option>
            </select>
            {errors.Trainings && <p className="error">{errors.Trainings}</p>}

            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              value={formData.Name}
              onChange={handleChange}
            />
            {errors.Name && <p className="error">{errors.Name}</p>}

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
            />
            {errors.Email && <p className="error">{errors.Email}</p>}

            <div className="phoneInput">
              <div className="country">+91</div>
              <input
                type="tel"
                name="Phone_no"
                placeholder="Your Phone"
                value={formData.Phone_no}
                onChange={handleChange}
              />
            </div>
            {errors.Phone_no && <p className="error">{errors.Phone_no}</p>}

            <textarea
              name="Message"
              placeholder="Your Message"
              value={formData.Message}
              onChange={handleChange}
              rows="10"
            ></textarea>
            {errors.Message && <p className="error">{errors.Message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-button ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
