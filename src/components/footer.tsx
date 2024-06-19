import { FC } from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-[#eff5ffb5] py-12 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6">
        <div className="flex space-x-6 mb-8 md:mb-0">
          <Link target="_blank" href="https://x.com/vcatalystweb?s=11" aria-label="Twitter">
            <FaTwitter className="h-6 w-6 hover:text-blue-500 transition-colors duration-300" />
          </Link>
         
          <Link target="_blank" href="https://www.linkedin.com/company/vcatalyst-web/" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-blue-700 transition-colors duration-300" />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/vcatalyst.web?igsh=YWZ6dDhncDVkYzBu&utm_source=qr" aria-label="Discord">
            <FaInstagram className="h-6 w-6 hover:text-indigo-500 transition-colors duration-300" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-auto">
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="mb-3 font-semibold">Documentation</h3>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  SDKs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="mb-3 font-semibold">Resources</h3>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className="mb-3 font-semibold">Company</h3>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Brand
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Legal</h3>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Acceptable Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 VentureCatalyst. All rights reserved.</p>
   
      </div>
    </footer>
  );
};

export default Footer;
