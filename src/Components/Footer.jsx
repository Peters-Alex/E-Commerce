import React from "react";
import { useState } from "react";
import "./styles/Footer.css"


 function Footer() {
    const [errorMsg, setError] = useState();
    const[formData, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });
    //function to handle form input changes
    const handleChange = (e) => {
      if (errorMsg) {
        setError(null);
    }
      const { name, value } = e.target;
        
        setFormdata(prevState => ({
          ...prevState,[name]: value, 
        }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // setFormdata({ name: "", email: "", message: "" });
    };
    
    const handleContactUs = () => {
      alert("Thank you for reaching out. Someone will follow up with you on the email listed.")
    };


    return (
        <footer className="footer">
          <div className="columna">
            <h3>Information</h3>
            <ul>About Us</ul>
            <ul>Careers</ul>
          </div>
          <div className="columnb">
            <h3>Contact</h3>
            <ul>Corportate Responsibility</ul>
            <ul>Events</ul>
            </div>
          <div className="columnc">
            <h3>Careers</h3>
            <ul>Track Order</ul>
            <ul>Privacy and Terms</ul>
            <ul>Return Policy</ul>
          </div>

            <form className="Form" onSubmit={handleSubmit}>
                <h3>Contact Us</h3>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              /><br></br>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              /><br></br>
              <textarea
                name="message"
                type="text"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              /><br></br>
              <button onClick={handleContactUs}>Submit</button>
            </form>
        </footer>
      );


}

export default Footer;