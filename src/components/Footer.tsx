
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SmartSeva</h3>
            <p className="text-gray-300 mb-4">
              Your trusted neighborhood digital service center providing groceries, banking, government services, and document solutions.
            </p>
            <p className="text-gray-400 text-sm">
              Making digital services accessible to everyone in the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Digital Supermarket</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banking Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Document Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Orders</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">PAN Card Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LIC Premium Payment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bill Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Document Printing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Money Transfer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">📍 Address:</p>
                <p className="text-sm">123 Main Street, Local Area, City - 123456</p>
              </div>
              <div>
                <p className="font-medium">📞 Phone:</p>
                <p className="text-sm">+91 9876543210</p>
              </div>
              <div>
                <p className="font-medium">🕒 Hours:</p>
                <p className="text-sm">Mon-Sun: 8:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-medium">📧 Email:</p>
                <p className="text-sm">support@smartseva.com</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SmartSeva. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
