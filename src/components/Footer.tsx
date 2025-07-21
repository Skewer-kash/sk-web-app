import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Shield,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { copyRightNotice } from "@/utils/copyRightYear";
import Link from "next/link";
import TrustIndicators from "./footer UI/TrustIndicators";
import { footerLinks, servicesLinks, resourcesLinks } from "@/constants/links";

 const socialLinks = [
  {
      label: "Facebook",
      href: "https://facebook.com",
      icon: <Facebook className="w-7 h-7" />,
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: <Twitter className="w-7 h-7" />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-7 h-7" />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: <Instagram className="w-7 h-7"/>,
    },
];


export default function Footer() {
  return (
    <>
      {/* Main Footer Content */}
      <footer className="bg-finance-gradient text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold">Skewer</h3>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Empowering your financial future with innovative solutions,
                expert guidance, and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                     className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    {link.icon}
                  </Link>
                ))}
              
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Resources
              </h4>
              <ul className="space-y-3">
                {resourcesLinks.map((resource, index) => (
                  <li key={index}>
                    <Link
                      href={resource.href}
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {resource.label}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">
                Stay Updated
              </h4>
              <p className="text-purple-100 mb-4">
                Get the latest market insights and financial tips delivered to
                your inbox.
              </p>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-purple-200"
                  />
                  <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-r-lg font-medium transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <TrustIndicators />

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-6 text-sm text-purple-100">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="text-sm text-purple-100">
                <p>{copyRightNotice()} Skewer. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
