import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    Trainings: "",
    Email: "",
    Phone_no: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation (optional)
    if (!formData.Trainings || !formData.Email || !formData.Phone_no || !formData.Message) {
      alert("❌ Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzLfqzgc7XudBBwhMdGjS1Irx-OCVFFhQHfvQwhw2eCDqCyYZ3tfuhBOZIA2hkf3yEjBA/exec"; // 🔗 Replace with your Google Apps Script Web App URL

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sheetName: "contact us", // matches your Apps Script sheet
        }),
      });

      alert("✅ Form submitted successfully!");
      setFormData({ Trainings: "", Email: "", Phone_no: "", Message: "" }); // clear form
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
        {/* Text Section */}
        <div className="text">
          <h1>Contact Us</h1>
        </div>
        <hr />

        {/* Form Section */}
        <div className="form">
          <form onSubmit={handleSubmit} noValidate>
            <select
              name="Trainings"
              value={formData.Trainings}
              onChange={handleChange}
              required
            >
              <option value="">Select the training</option>
              <option value="Senior level trainings">Senior level trainings</option>
              <option value="Mid level trainings">Mid level trainings</option>
              <option value="Junior level trainings">Junior level trainings</option>
              <option value="Internship level trainings">Internship level trainings</option>
            </select>

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />

            <div className="phoneInput">
              <div className="country">+91</div>
              <input
                type="tel"
                name="Phone_no"
                placeholder="Your Phone"
                value={formData.Phone_no}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="Message"
              placeholder="Your Message"
              value={formData.Message}
              onChange={handleChange}
              rows="10"
              required
            ></textarea>

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
