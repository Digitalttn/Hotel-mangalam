import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported
import review from '../assets/review.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.png';

const testimonials = [
  {
    name: "Vedant Bhatt",
    role: "Business Traveler",
    photo: review,
    feedback: "My stay at Hotel Mangalam was nothing short of exceptional. The staff was incredibly welcoming, the rooms were immaculately clean, and the amenities exceeded my expectations. I highly recommend this hotel for both comfort and leisure stays.",
  },
  {
    name: "Advik Sharma",
    role: "Vacationer",
    photo: review2,
    feedback: "Hotel Mangalam provided a perfect retreat during our family vacation. The spacious rooms and beautiful surroundings made our stay memorable. The staff was friendly and attentive, making sure we had everything we needed. We'll definitely return!",
  },
  {
    name: "Aditi",
    role: "Family",
    photo: review3,
    feedback: 'Our stay at Hotel Mangalam was a truly spiritual experience. The serene environment and peaceful ambiance offered a perfect sanctuary for reflection and relaxation. The location’s tranquility and the attentive service made our visit exceptionally rejuvenating. Ideal for those seeking spiritual solace and a serene escape.',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        
        <meta name="description" content="Read the testimonials from our guests at Hotel Mangalam. Discover why travelers love our exceptional service, comfortable rooms, and serene ambiance." />
        <meta name="keywords" content="hotel testimonials, guest reviews, Hotel Mangalam, customer feedback" />
        <link rel="canonical" href="https://yourwebsite.com/testimonials" />
      </Helmet>

      <section className="py-16 bg-gray-100" aria-labelledby="testimonials-heading">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-8">
          <TbArrowLeftCircle className="text-[#706d6a] text-2xl" />
          <CgShapeRhombus className="text-[#706d6a] text-2xl mx-2" />
          <p className="text-lg md:text-xl font-semibold text-gray-800">Guest Testimonials</p>
          <CgShapeRhombus className="text-[#706d6a] text-2xl mx-2" />
          <TbArrowRightCircle className="text-[#706d6a] text-2xl" />
        </div>

        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-800">
            What <span className="text-[#706d6a]">Our Guests</span> <span className="text-gray-800">Say</span>
          </h1>
        </div>

        {/* Testimonials Section */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={`Photo of ${testimonial.name}, ${testimonial.role}`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#706d6a]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.feedback}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
