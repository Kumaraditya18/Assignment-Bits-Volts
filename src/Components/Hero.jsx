// src/components/HeroSection.jsx
import React from 'react';
import Microphone from './../assets/Microphone.png'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className="bg-white min-h-screen px-6 md:px-20 py-10">
            <Navbar />
            {/* Hero content */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Navigating the digital landscape for success
                    </h2>
                    <p className="text-black">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded hover:opacity-80 transition">
                        Book a consultation
                    </button>
                </div>
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <img
                        src={Microphone} // placeholder for your megaphone illustration
                        alt="Megaphone Illustration"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-25 mt-16">
                {[
                    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
                    { name: 'Dribbble', logo: 'https://logo.clearbit.com/dribbble.com' },
                    { name: 'HubSpot', logo: 'https://logo.clearbit.com/hubspot.com' },
                    { name: 'Notion', logo: 'https://logo.clearbit.com/notion.so' },
                    { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
                    { name: 'Zoom', logo: 'https://logo.clearbit.com/zoom.us' },
                ].map((brand, i) => (
                    <img
                        key={i}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-10"
                    />
                ))}
            </div>



        </div>
    );
};

export default Hero;
