import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-auto mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#0d0f1a]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          SpectraGen™
        </h1>
        <p className="text-[#c7c7c7] py-4">
          Futuristic solutions for the digital world. Augment your online
          experience with the cutting-edge.
        </p>
        <div className="text-[#00df9a] flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#c7c7c7]">Tech Solutions</h6>
          <ul>
            <li className="text-[#c7c7c7] py-2 text-sm">Data Analytics</li>
            <li className="text-[#c7c7c7] py-2 text-sm">
              AI & Machine Learning
            </li>
            <li className="text-[#c7c7c7] py-2 text-sm">Digital Commerce</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Cloud Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#c7c7c7]">Support</h6>
          <ul>
            <li className="text-[#c7c7c7] py-2 text-sm">Pricing</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Documentation</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Developer Guides</li>
            <li className="text-[#c7c7c7] py-2 text-sm">System Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#c7c7c7]">Company</h6>
          <ul>
            <li className="text-[#c7c7c7] py-2 text-sm">About Us</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Newsroom</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Careers</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Events</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#c7c7c7]">Legal</h6>
          <ul>
            <li className="text-[#c7c7c7] py-2 text-sm">Privacy Policy</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Terms of Service</li>
            <li className="text-[#c7c7c7] py-2 text-sm">Cookie Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
