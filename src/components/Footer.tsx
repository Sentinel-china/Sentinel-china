/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
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
              <span className="font-bold text-xl text-white">Sentinel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovation makes good products, 
              Focus makes better services
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Github size={20} />
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
            <h3 className="text-white font-semibold">Core Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Software Development</p>
              <p className="text-gray-400 text-sm">System Integration</p>
              <p className="text-gray-400 text-sm">Data Analytics</p>
              <p className="text-gray-400 text-sm">Cloud Computing</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-gray-400 text-sm">022-83726917</span>
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
            © 2024 TechCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
