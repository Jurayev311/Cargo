import React from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
    const sendMessage = (e) => {
        e.preventDefault();
        const token = '7723739609:AAGuNd7ZTYiNc0iH2Mxt0wUBp19CEFg8jbk';
        const chat_id = 5432334027;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const role = document.querySelector('input[name="role"]:checked')?.value || 'Nomaʼlum';
    
        const text = `✉️ Yangi Xabar
    👤 Ism: ${firstName} ${lastName}
    👩‍💻 Rol: ${role}
    📞 Telefon: ${phone}
    📧 Email: ${email}
    📝 Xabar: ${message}`;
    
        axios.post(url, {
            chat_id: chat_id,
            text: text,
        }).then(() => {
            document.getElementById("contact-form").reset();
            toast.success("Xabaringiz yuborildi!");
        }).catch((error) => {
            console.error("Xatolik yuz berdi: ", error);
            toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
        });
    };
    

    return (
        <section className="p-6 bg-[#0D1B2A] text-white">
            <Toaster position="top-center" />
            <div className="container mx-auto flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
                    <p className="mb-4">Select your role:</p>
                    <div className="flex items-center gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="role" value="Owner" className="accent-blue-500" /> Owner
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="role" value="Company" className="accent-blue-500" /> Company
                        </label>
                    </div>
                    <form id="contact-form" onSubmit={sendMessage} className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" id="firstName" placeholder="Your first name" className="p-3 rounded bg-gray-800 text-white" required />
                            <input type="text" id="lastName" placeholder="Your last name" className="p-3 rounded bg-gray-800 text-white" required />
                        </div>
                        <input type="number" id="phone" placeholder="+1" className="p-3 rounded bg-gray-800 text-white" required />
                        <input type="email" id="email" placeholder="Your e-mail" className="p-3 rounded bg-gray-800 text-white" required />
                        <textarea id="message" placeholder="Message" className="p-3 rounded bg-gray-800 text-white h-32" required></textarea>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-semibold">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="md:w-1/2">
                    <iframe
                        title="Google Map"
                        className="w-full h-full rounded"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.768429635972!2d-86.69314582467478!3d35.7884547724701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f1541cfd1b3b%3A0x8f27d1a252e899e6!2s8331%20Horton%20Hwy%2C%20College%20Grove%2C%20TN%2037046%2C%20USA!5e0!3m2!1sen!2s!4v1712345678901"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
