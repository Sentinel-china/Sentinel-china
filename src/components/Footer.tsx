/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react'
// ... existing code ...

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="TechCorp Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-white"></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovation makes good products, 
              Focus makes better services
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/channel/UCShc5ytP9ZU4Ze6RBl6iDXw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Products
              </Link>
              <Link to="/solutions" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Solutions
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Products</h3>
                          <div className="space-y-2">
                <Link to="/products/sensor" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Sensors
                </Link>
                <Link to="/products/io-module" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  I/O Modules
                </Link>
                <Link to="/products/io-link" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  IO-Link
                </Link>
                <Link to="/products/connectivity" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Connectivity
                </Link>
              </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 relative group">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-400 text-sm cursor-pointer">WhatsApp</span>
                {/* QR Code Popup */}
                <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
                    <img 
                      src="/whatsapp-qr.png" // TODO: change to the actual QR code
                      alt="WhatsApp QR Code" 
                      className="w-32 h-32 object-cover"
                    />
                    <div className="text-center mt-1">
                      <p className="text-xs text-gray-600">Scan to contact</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-gray-400 text-sm">export.sentinel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-gray-400 text-sm">Tianjin Xiqing Technology Park</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2008 - {new Date().getFullYear()} SENTINEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
