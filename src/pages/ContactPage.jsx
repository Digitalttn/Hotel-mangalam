import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';
import emailjs from 'emailjs-com'

import hotel from '../assets/hotel1.jpeg';

const ContactPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9l72kpx', '_ejs-test-mail-service__', form.current, {
        publicKey: 'Bbi09dbc3l6yRXubj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <main className="mb-20 bg-[#f6f3f4]">
      <Helmet>
        <title>Contact Us | Reach Us</title>
        <meta name="description" content="Get in touch with us through our contact page. Find our address, email, and telephone details for any inquiries." />
        <meta name="keywords" content="contact, email, phone, address, inquiries" />
        <meta property="og:title" content="Contact Us | Your Business Name" />
        <meta property="og:description" content="Get in touch with us through our contact page. Find our address, email, and telephone details for any inquiries." />
        <meta property="og:image" content={hotel} />
       
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img src={hotel} alt="Hotel" className="w-full h-full object-cover filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
             Contact  <span className="text-[#706d6a]">Us</span>
          </h1>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto my-16 px-6">
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:order-2 bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
    <ul className="space-y-6">
      <li className="flex items-start space-x-4">
        <i className="bi bi-geo-alt text-3xl text-gray-600"></i>
        <div>
          <h4 className="text-xl font-semibold">Hotel Address</h4>
          <p className="text-gray-700">
            Near Badrish Lake, Badrinath<br />
            Temple Rd, Badrinath, Uttarakhand 246422
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <i className="bi bi-geo-alt text-3xl text-gray-600"></i>
        <div>
          <h4 className="text-xl font-semibold">Sales Office Address</h4>
          <p className="text-gray-700">
            Shop 2 & 3, Second Floor, Surya Complex, Ranipur More Haridwar, Uttarakhand<br />
            Pin Code – 249401
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <i className="bi bi-envelope-paper text-3xl text-gray-600"></i>
        <div>
          <h4 className="text-xl font-semibold">Email Address</h4>
          <p className="text-gray-700">
            <a href="mailto:salesinfo@traveltonirvana.com" className="text-blue-600">
              salesinfo@traveltonirvana.com
            </a>
          </p>
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <i className="bi bi-telephone text-3xl text-gray-600"></i>
        <div>
          <h4 className="text-xl font-semibold">Telephone</h4>
          <p className="text-gray-700">
            +91 9258126088, +91 9258126089, +91 9389301916<br />
            <small>Monday to Saturday 10am - 6pm</small>
          </p>
        </div>
      </li>
    </ul>
  </div>

  <div className="lg:col-span-2 p-8 rounded-lg" data-aos="fade-right">
    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
    <form ref={form} onSubmit={sendEmail} id="contactform" autoComplete="off">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="form-floating">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name_contact"
            placeholder="Name"
            name="name_contact"
            required
          />
          <label htmlFor="name_contact" className="form-label inline-block mb-2 text-gray-700">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="lastname_contact"
            placeholder="Last Name"
            name="lastname_contact"
            required
          />
          <label htmlFor="lastname_contact" className="form-label inline-block mb-2 text-gray-700">Last Name</label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="form-floating">
          <input
            type="email"
            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email_contact"
            placeholder="Email"
            name="email_contact"
            required
          />
          <label htmlFor="email_contact" className="form-label inline-block mb-2 text-gray-700">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="phone_contact"
            placeholder="Telephone"
            name="phone_contact"
            required
          />
          <label htmlFor="phone_contact" className="form-label inline-block mb-2 text-gray-700">Telephone</label>
        </div>
      </div>
      <div className="form-floating mb-4">
        <textarea
          className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="message_contact"
          name="message_contact"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <label htmlFor="message_contact" className="form-label inline-block mb-2 text-gray-700">Message</label>
      </div>
    
      <button
        type="submit"
        className="btn_1 outline lg:w-[20%] py-3 px-6 bg-[#847a70] text-white rounded-lg hover:bg-black transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

      </div>
    </main>
  );
};

export default ContactPage;
