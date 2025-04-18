// components/Footer.jsx
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative ">
      {/* Top wave divider - now with two waves for enhanced effect */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        {/* First wave (from previous design) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          style={{ transform: "rotateY(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          ></path>
        </svg>

        {/* Second wave (matching bottom design) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
          style={{ marginTop: "-1px" }} // Prevent gap between SVGs
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,31.43,512.34,55.08,583,72.08c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-gray-900"
            style={{ opacity: 0.85 }}
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 w-full pt-36 pb-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Velocity Interior
            </h2>
            <p className="text-gray-300 mb-4 italic">
              Where Speed Meets Design
            </p>
            <p className="text-gray-300 mb-6">
              Empowering your space with innovative design solutions since 2015.
            </p>
            <div className="flex space-x-4">
              {/* Enhanced social media icons with attractive hover effects */}
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={18} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={18} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={18} className="text-white" />
              </a>
              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaPinterest size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-teal-500 pl-3">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                ["Create free account", "/create-account"],
                ["Sign in", "/sign-in"],
                ["About", "/about"],
                ["Pricing", "/pricing"],
                ["Blog", "/blog"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-teal-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-500 pl-3">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                ["Community", "/community"],
                ["Become a Partner", "/partner"],
                ["Our Technology", "/technology"],
                ["Documentation", "/documentation"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-purple-500 pl-3">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                ["Contact Us", "/contact"],
                ["Terms of Use", "/terms"],
                ["Privacy Policy", "/privacy"],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle wave divider */}
        <div className="relative my-10">
          <div className="w-full h-px bg-gray-800"></div>
          <div className="absolute left-0 right-0 top-0 h-8 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute w-full h-24"
              style={{ top: "-12px" }}
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                className="fill-gray-900"
                style={{ opacity: 0.5 }}
              ></path>
            </svg>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Velocity Interior. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {[
              ["Sitemap", "/sitemap.xml"],
              ["Legal", "/legal"],
              ["Cookies", "/cookies"],
            ].map(([label, path]) => (
              <Link
                key={label}
                href={path}
                className="hover:text-teal-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative bg-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,31.43,512.34,55.08,583,72.08c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-gray-800"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
