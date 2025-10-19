// import React, { useState } from 'react';
// import './Footer.css';

// // ==> IMPORTANT: Update these paths to your actual icon files
// import address from '../../assets/images/address.png';
// import message from '../../assets/images/message.png';
// import location from '../../assets/images/location (3).png';
// import new_facebook from '../../assets/images/new_facebook.png';
// import new_instagram from '../../assets/images/new_instagram.png';
// import new_twitter from '../../assets/images/new_twitter.png';
// import newyoutube from '../../assets/images/newyoutube.png';

// const Footer = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
//         if (!formData.email.trim()) {
//             tempErrors.email = "Email is required.";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = "Email is not valid.";
//         }
//         if (!formData.phone.trim()) tempErrors.phone = "Phone number is required.";
//         if (!formData.message.trim()) tempErrors.message = "Message is required.";
        
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             console.log("Form Submitted:", formData);
//             alert("Message sent successfully!");
//             setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
//         }
//     };

//     const currentYear = new Date().getFullYear(); // For footer year

//     return (
//         <>
//             <div className="contact-container">
//                 {/* Left side: Form */}
//                 <div className="contact-form-wrapper">
//                     <form onSubmit={handleSubmit} noValidate>
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <input
//                                     type="text" name="fullName" placeholder="Full Name"
//                                     value={formData.fullName} onChange={handleChange}
//                                 />
//                                 {errors.fullName && <p className="error-text">{errors.fullName}</p>}
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="email" name="email" placeholder="Email"
//                                     value={formData.email} onChange={handleChange}
//                                 />
//                                 {errors.email && <p className="error-text">{errors.email}</p>}
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group1">
//                                 <input
//                                     type="tel" name="phone" placeholder="Phone No"
//                                     value={formData.phone} onChange={handleChange}
//                                 />
//                                  {errors.phone && <p className="error-text">{errors.phone}</p>}
//                             </div>
//                             <div className="form-group2">
//                                 <input
//                                     type="text" name="subject" placeholder="Subject"
//                                     value={formData.subject} onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group full-width">
//                             <textarea
//                                 name="message" placeholder="Message" rows="6"
//                                 value={formData.message} onChange={handleChange}
//                             ></textarea>
//                             {errors.message && <p className="error-text">{errors.message}</p>}
//                         </div>
//                         <button type="submit" className="send-button">Send Message</button>
//                     </form>
//                 </div>

//                 {/* Right side: Contact Info */}
//                 <div className="contact-info-wrapper">
//                     <h1>Get In Touch<br />with Us Today</h1>
//                     <div className="contact-details">
//                         <div className="contact-item">
//                             <img src={address} alt="" />
//                             <div>
//                                 <span>Send us an email</span>
//                                 <p>InfinovaConsultants@gmail.com</p>
//                             </div>
//                         </div>
//                         <div className="contact-item">
//                             <img src={message} alt="" />
//                             <div>
//                                 <span>Give us a call</span>
//                                 <p>+91 76848741494</p>
//                             </div>
//                         </div>
//                         <div className="contact-item">
//                             <img src={location} alt="" />
//                             <div>
//                                 <span>Visit Us</span>
//                                 <p>Head office address:<br/>Cidco,<br/>Chh. Sambhajinagar /<br/>Aurangabad,<br/>Maharashtra - 431001</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="social-icons">
//                         <a href="#"><img src={new_facebook} alt="Facebook" /></a>
//                         <a href="#"><img src={new_instagram} alt="Instagram" /></a>
//                         <a href="#"><img src={new_twitter} alt="Twitter" /></a>
//                         <a href="#"><img src={newyoutube} alt="YouTube" /></a>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <footer className="footer-container">
//                 <p>&copy; {currentYear} all rights belong to Infinova Consultants</p>
//             </footer>
//         </>
//     );
// };

// export default Footer;
import React, { useState } from 'react';
import './Footer.css';

import address from '../../assets/images/address.png';
import message from '../../assets/images/message.png';
import location from '../../assets/images/location (3).png';
import new_facebook from '../../assets/images/new_facebook.png';
import new_instagram from '../../assets/images/new_instagram.png';
import new_twitter from '../../assets/images/new_twitter.png';
import newyoutube from '../../assets/images/newyoutube.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="contact-container">
        {/* Left side: Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error-text">{errors.fullName}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right side: Contact Info */}
        <div className="contact-info-wrapper">
          <h1>
            Get In Touch
            <br />
            with Us Today
          </h1>
          <div className="contact-details">
            <div className="contact-item">
              <img src={address} alt="address icon" />
              <div>
                <span>Send us an email</span>
                <p>InfinovaConsultants@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={message} alt="message icon" />
              <div>
                <span>Give us a call</span>
                <p>+91 76848741494</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={location} alt="location icon" />
              <div>
                <span>Visit Us</span>
                <p>
                  Head office address:
                  <br />
                  Cidco,
                  <br />
                  Chh. Sambhajinagar /
                  <br />
                  Aurangabad,
                  <br />
                  Maharashtra - 431001
                </p>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href="#">
              <img src={new_facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={new_instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={new_twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={newyoutube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <p>&copy; {currentYear} all rights belong to Infinova Consultants</p>
      </footer>
    </>
  );
};

export default Footer;
