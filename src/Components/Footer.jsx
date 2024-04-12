import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useState} from "react";
import "./styles/Footer.css"


 function Footer() {
    const[formData, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    })
    //function to handle form input changes
    const handleChange = (e) => {
        const { name, value } =e.targert;
        setFormdata({...formData,[name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);

        setFormdata({ name: "", email: "", message: "" });
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
                type="text"
                name="name"
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
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              /><br></br>
              <button type="submit">Submit</button>
            </form>
        </footer>
      );


}

export default Footer;