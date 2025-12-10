/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Youtube } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import CookieSettingsModal from './CookieSettingsModal'

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <footer className={`border-t transition-all duration-500 ${
      isDark
        ? 'bg-gray-900/50 border-gray-700'
        : 'bg-[#f8f8f8] border-gray-200'
    }`}>
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
              <span className={`font-bold text-xl transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}></span>
            </div>
            <p className={`text-sm leading-relaxed transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>{t('footer.company.tagline')}</p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/channel/UCShc5ytP9ZU4Ze6RBl6iDXw" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'
              }`}>
                <Youtube size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-semibold transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('footer.quickLinks.title')}</h3>
              <div className="space-y-2">
                <Link to="/products" className={`block text-sm transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                }`}>{t('nav.products')}</Link>
                <Link to="/solutions" className={`block text-sm transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                }`}>{t('nav.solutions')}</Link>
                <Link to="/about" className={`block text-sm transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                }`}>{t('nav.about')}</Link>
                <Link to="/contact" className={`block text-sm transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                }`}>{t('nav.contact')}</Link>
              </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className={`font-semibold transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('footer.products.title')}</h3>
            <div className="space-y-2">
              {/* Sensors with dropdown */}
              <div className="relative group">
                <Link to="/products/sensor" className={`block text-sm font-medium transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                }`}>{t('nav.sensors')}</Link>
                {/* Dropdown menu */}
                <div className={`absolute left-0 top-full mt-1 w-56 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 ${
                  isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
                }`}>
                  <div className="p-3 space-y-2">
                    <Link to="/products/sensor/temperature-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('nav.temperatureSensors')}</Link>
                    <Link to="/products/sensor/thermal-flow-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('footer.products.thermalFlow')}</Link>
                    <Link to="/products/sensor/vortex-flow-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('nav.vortexFlowSensors')}</Link>
                    <Link to="/products/sensor/pressure-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('nav.pressureSensors')}</Link>
                    <Link to="/products/sensor/liquid-level-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('nav.levelSensors')}</Link>
                    <Link to="/products/sensor/inductive-proximity-sensor" className={`block text-xs py-1 transition-colors ${
                      isDark ? 'text-gray-200 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                    }`}>{t('nav.inductiveSensors')}</Link>
                  </div>
                </div>
              </div>
              <Link to="/products/io-module" className={`block text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
              }`}>{t('nav.ioModule')}</Link>
              <Link to="/products/io-link" className={`block text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
              }`}>{t('nav.ioLink')}</Link>
              <Link to="/products/connectivity" className={`block text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
              }`}>{t('nav.connectivity')}</Link>
              <Link to="/products/relay-module" className={`block text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
              }`}>{t('nav.relayModule')}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`font-semibold transition-colors ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('footer.contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 relative group">
                <Phone size={16} className="text-yellow-400" />
                <span className={`text-sm cursor-pointer transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{t('pages.contact.contactInfo.whatsapp.title')}</span>
                {/* QR Code Popup */}
                <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className={`p-2 rounded-lg shadow-lg border ${
                    isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                  }`}>
                    <img
                      src="/whatsapp-qr.png"
                      alt="WhatsApp QR Code"
                      className="w-32 h-32 object-cover"
                    />
                    <div className="text-center mt-1">
                      <p className={`text-xs ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{t('footer.contact.scanNote')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400" />
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{t('pages.contact.contactInfo.email.content')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400" />
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{t('pages.contact.contactInfo.address.content')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-8 text-center transition-colors ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <p className={`text-sm transition-colors ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="mt-3">
            <CookieSettingsModal
              trigger={
                <button className={`text-sm underline transition-colors ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-400'
                }`} aria-label="Open cookie settings">
                  {t('footer.cookie.settings')}
                </button>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
