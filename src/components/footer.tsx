import { FC } from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-[#eff5ffb5] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        <div className="flex space-x-4 mb-8 md:mb-0">
          <Link href="#" aria-label="Twitter">
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Discord">
            <FaDiscord className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-auto">
          <div className="mb-8 md:mb-0 md:mr-16">
            <h3 className=" mb-2">Documentation</h3>
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
            <h3 className=" mb-2">Resources</h3>
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
            <h3 className=" mb-2">Company</h3>
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
            <h3 className=" mb-2">Legal</h3>
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
    </footer>
  );
};

export default Footer;
