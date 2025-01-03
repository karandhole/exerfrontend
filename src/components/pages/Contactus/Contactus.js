import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                'service_kzfrrxv', // Replace with your EmailJS Service ID
                'template_guh3td9', // Replace with your EmailJS Template ID
                formData,
                'aEq4l76o_32_IyLq4' // Replace with your EmailJS User ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send the message, please try again.');
                }
            );
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
    };
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div style={{ backgroundColor:'white', padding: '20px' }}>
            <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center' }}>Please Feel Free to Contact Us</h2>
                <div style={{ margin: '20px auto', width: '35%' }}>
                    <div
                        style={{
                            height: '5px',
                            backgroundColor: '#12a632',
                            position: 'relative',
                            borderRadius: '2px',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'green',
                                animation: 'progress 1s ease-in-out forwards',
                            }}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {/* Form Section */}
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                onMouseEnter={() => setIsHovered(true)} // Trigger when mouse enters
                                onMouseLeave={() => setIsHovered(false)} // Trigger when mouse leaves
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor:'gray',
                                    backgroundColor: isHovered ? 'green' : 'gray', // Change color on hover
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease', // Smooth transition
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.445187945385!2d73.77662707496488!3d18.59903548250983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90012d55835%3A0x3ec2450d7f489ba4!2sExerval%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1731302876856!5m2!1sen!2sin"
                            width="100%"
                            height="300px"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
