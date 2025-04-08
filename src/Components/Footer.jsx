import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#191A23] text-white px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h4 className="text-[#B9FF66] font-semibold mb-2">Contact us:</h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Subscribe + Social Icons */}
        <div>
          <h4 className="font-semibold mb-2">Subscribe</h4>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md text-white"
            />
            <button className="bg-[#B9FF66] text-black px-4 py-2 rounded-md font-medium">
              Subscribe to news
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4 text-2xl text-white">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FF66]">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FF66]">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FF66]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm text-center mt-8 text-[#F3F3F3]">
        © 2023 Positivus. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
