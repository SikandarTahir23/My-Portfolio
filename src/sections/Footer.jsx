import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-white py-8 mt-10 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex flex-wrap gap-2 text-sm text-gray-400 justify-center md:justify-start">
            <p className="cursor-pointer hover:text-blue-400 transition">Terms & Conditions</p>
            <span>|</span>
            <p className="cursor-pointer hover:text-blue-400 transition">Privacy Policy</p>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Sikandar Tahir. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-6 text-2xl justify-center md:justify-end w-full md:w-auto">
          <a
            href="https://github.com/SikandarTahir23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sikandar-tahir-356a56273/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mrr_sikki?igsh=MTBzMnVhMjB0MmZiMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Arain.Boyz380?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
