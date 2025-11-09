import React, { useState } from 'react'
import header from "../assets/contact/header.png"
import footer from "../assets/contact/Footer.png"
import bgImage from "../assets/HeroBg/BG.png"
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
function Contact() {
    const [form, setform] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate = () => {
        let isValid = true;

        if (!form.name.trim()) {
            toast.error("Name is required");
            isValid = false;
        }
        if (!form.email.trim()) {
            toast.error("Email is required");
            isValid = false;

        }
        if (!emailRegex.test(form.email)) {
            toast.error("Invalid email format");
            isValid = false;
        }

        if (!form.phone.trim()) {
            toast.error("Phone is required");
            isValid = false;

        }
        if (!form.message.trim()) {
            toast.error("Message is required");
            isValid = false;
        }

        return isValid;
    };

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;
        toast.info("Submitting your message...", { autoClose: 1000 });
        try {
            const res = await axios.post(
                "https://vernanbackend.ezlab.in/api/contact-us/",
                form,
                {timeout:5000}
            );
            console.log("request received")
            if (res.status === 201) {
                toast.success("Form Submitted");
                setform({ name: "", email: "", phone: "", message: "" });
            }
            else{
                toast.warn("Unexpected response, Please try again");
            }
        } catch (err) {
            console.log(err);
            toast.error("Server error, Please try again later!");
        }
    };
    return (
        <div
            className="relative w-full h-auto bg-cover bg-center overflow-hidden flex flex-col items-center justify-center px-4"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Top Right Header Image */}
            <img
                src={header}
                alt="header"
                className="absolute top-0 right-0 w-32 sm:w-48 md:w-56 lg:w-72 opacity-90"
            />

            {/* Center Content */}
            <div className='w-full flex flex-col md:flex-row items-center justify-around px-4 py-3'>
                <p className='w-60'>
                    Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.Let’s catch up over coffee.Great stories always begin with a good conversation
                </p>
                <div className="flex flex-col items-center justify-center text-center gap-8 py-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 p-4">Join the Story</h2>
                        <p className="text-gray-600">Ready to bring your vision to life? Let’s talk</p>
                    </div>

                    {/* Input Fields */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full h-10 p-3 rounded-md  bg-white focus:outline-none focus:border-[#F15D2B]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full h-10 p-3 rounded-md  bg-white focus:outline-none focus:border-[#F15D2B]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={form.phone}
                            onChange={handleChange}
                            pattern='[0-9]{10}'
                            maxLength="10"
                            className="w-full h-10 p-3 rounded-md bg-white focus:outline-none focus:border-[#F15D2B]"
                        />

                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-3 h-24 rounded-md bg-white  focus:outline-none focus:border-[#F15D2B]"
                        />

                        <button type='submit' className="w-30 bg-[#F15D2B] hover:bg-green-700 cursor-pointer text-white rounded-full px-8 py-2 text-lg font-medium transition duration-200">
                            Submit
                        </button>
                    </form>

                    <span className="text-[#F15D2B] text-sm md:text-base mt-2">
                        vernita@varnanfilms.co.in | +91 98736 84567
                    </span>
                </div>
            </div>

            {/* Bottom Left Footer Image */}
            <img
                src={footer}
                alt="footer"
                className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-56 lg:w-72 opacity-90"
            />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    )
}

export default Contact;
