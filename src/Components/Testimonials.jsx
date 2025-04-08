import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'John Smith',
        title: 'Marketing Director at XYZ Corp',
        quote:
            'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    },
    {
        name: 'Jane Doe',
        title: 'CEO at ABC Ltd',
        quote:
            'Positivus transformed our digital marketing strategy. We saw a dramatic rise in our online engagement. The results speak for themselves.',
    },
    {
        name: 'Michael Lee',
        title: 'Founder at Startify',
        quote:
            'From SEO to PPC, Positivus delivers excellence. Their personalized approach and insights have been invaluable for our business growth.',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div>
            <div className="bg-white text-black px-6 md:px-20 py-20 rounded-xl mb-10 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                    <span className="bg-[#B9FF66] px-3 py-1 rounded-md">Testimonials</span>
                </h2>
                <p className="text-gray-700 max-w-2xl text-sm md:text-base">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>
            </div>
            <section className="bg-[#191A23] text-white px-6 md:px-20 py-20 relative overflow-hidden">
                {/* Testimonials slider */}
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    {/* Left Arrow */}
                    <button onClick={handlePrev} className="text-xl text-[#F3F3F3] hover:text-white">
                        <FaArrowLeft />
                    </button>

                    {/* Testimonial Card */}
                    <div className="flex-1 bg-[#191A23] border border-[#B9FF66] rounded-xl p-6 md:p-10 shadow-lg relative">
                        <p className="text-base md:text-lg italic border-l-4 border-[#B9FF66] pl-4 leading-relaxed">
                            “{testimonials[currentIndex].quote}”
                        </p>
                        <div className="mt-6 text-[#B9FF66] font-semibold">{testimonials[currentIndex].name}</div>
                        <div className="text-sm text-[#F3F3F3]">{testimonials[currentIndex].title}</div>
                    </div>

                    {/* Right Arrow */}
                    <button onClick={handleNext} className="text-xl text-[#F3F3F3] hover:text-white">
                        <FaArrowRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
