/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import CookieSettingsModal from './CookieSettingsModal'

// Window interface extensions are now in src/types/global.d.ts

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const isDark = theme === 'dark'
    const existingBtn = document.getElementById('floating-form-btn')
    const existingBox = document.getElementById('floating-form-box')
    if (existingBtn) existingBtn.remove()
    if (existingBox) existingBox.remove()

    // 添加CSS样式
    const style = document.createElement('style')
    style.textContent = `
      #floating-form-btn {
        position: fixed;
        bottom: 130px;
        right: 20px;
        background-color: #374151;
        color: #FFD700;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        font-size: 16px;
        font-weight: bold;
        border: 2px solid #4B5563;
        transition: all 0.3s ease;
      }

      #floating-form-btn:hover {
        background-color: #FFD700;
        color: #000;
        border-color: #FFD700;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
      }

      /* 弹窗样式 */
      #cookieConsentBanner {
        display: none;
        position: fixed;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        padding: 20px 25px;
        border-radius: 12px;
        max-width: 600px;
        z-index: 9999;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        font-family: system-ui, sans-serif;
        transition: transform 0.5s ease, bottom 0.5s ease;
      }

      #cookieConsentBanner a {
        color: #FFD700;
        text-decoration: underline;
      }

      #cookieConsentBanner .buttons {
        margin-top: 15px;
        text-align: right;
      }

      #cookieConsentBanner button {
        background-color: #FFD700;
        border: none;
        color: black;
        padding: 8px 16px;
        margin-left: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
      }

      #cookieConsentBanner button.reject {
        background-color: #777;
      }


    `
    useEffect(() => {
      const existingBtn = document.getElementById('floating-form-btn')
      const existingBox = document.getElementById('floating-form-box')
      if (existingBtn) existingBtn.remove()
      if (existingBox) existingBox.remove()

      // 添加CSS样式
      const style = document.createElement('style')
      style.textContent = `
        #floating-form-btn {
          position: fixed;
          bottom: 130px;
          right: 20px;
          background-color: #374151;
          color: #FFD700;
          padding: 10px 15px;
          border-radius: 20px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          font-size: 16px;
          font-weight: bold;
          border: 2px solid #4B5563;
          transition: all 0.3s ease;
        }

        #floating-form-btn:hover {
          background-color: #FFD700;
          color: #000;
          border-color: #FFD700;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }

        /* 弹窗样式 */
        #cookieConsentBanner {
          display: none;
          position: fixed;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: #fff;
          padding: 20px 25px;
          border-radius: 12px;
          max-width: 600px;
          z-index: 9999;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          font-family: system-ui, sans-serif;
          transition: transform 0.5s ease, bottom 0.5s ease;
        }

        #cookieConsentBanner a {
          color: #FFD700;
          text-decoration: underline;
        }

        #cookieConsentBanner .buttons {
          margin-top: 15px;
          text-align: right;
        }

        #cookieConsentBanner button {
          background-color: #FFD700;
          border: none;
          color: black;
          padding: 8px 16px;
          margin-left: 10px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }

        #cookieConsentBanner button.reject {
          background-color: #777;
        }


      `
      document.head.appendChild(style)

      // 添加HTML结构
      const floatingBtn = document.createElement('div')
      floatingBtn.id = 'floating-form-btn'
      floatingBtn.innerHTML = t('footer.floatingContact')
      document.body.appendChild(floatingBtn)

      const floatingBox = document.createElement('div')
      floatingBox.id = 'floating-form-box'
      floatingBox.style.cssText = `
        position: fixed;
        bottom: 70px;
        right: 70px;
        width: 280px;
        height: 520px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: none;
        z-index: 9998;
        overflow: hidden;
      `
      floatingBox.innerHTML = `
        <div style="text-align: right; padding: 8px; background: #f5f5f5; border-bottom: 1px solid #ddd;">
          <div style="float: left; font-weight: bold; font-size: 15px; color: #333;">${t('footer.floatingTitle')}</div>
          <button onclick="document.getElementById('floating-form-box').style.display='none'" style="
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #333;
          ">
            ✕
          </button>
        </div>
        <iframe id="leadForm"
          width="100%"
          height="500px"
          style="border:none; background:white;"
          frameBorder="0">
        </iframe>
      `
      document.body.appendChild(floatingBox)

      // 添加Cookie横幅HTML结构
      const cookieBanner = document.createElement('div')
      cookieBanner.id = 'cookieConsentBanner'
      cookieBanner.innerHTML = `
        <div>
          ${t('footer.cookie.bannerText')} <a href="#/privacy-policy">${t('footer.cookie.privacyLinkText')}</a>
        </div>
        <div class="buttons">
          <button id="acceptAllBtn" onclick="window.cookieAcceptAll()">${t('footer.cookie.acceptAll')}</button>
          <button id="acceptNecessaryBtn" onclick="window.cookieAcceptNecessary()" class="reject">${t('footer.cookie.acceptNecessary')}</button>
        </div>
      `
      document.body.appendChild(cookieBanner)

      // 添加全局函数到 window 对象
      window.cookieAcceptAll = () => acceptCookies(true)
      window.cookieAcceptNecessary = () => acceptCookies(false)

      // 全局函数已在上面定义，现在按钮通过 onclick 属性调用


      // 取消悬浮Cookie按钮

      // JavaScript逻辑
      const btn = document.getElementById('floating-form-btn')
      const popup = document.getElementById('floating-form-box')

      if (btn && popup) {
        if (sessionStorage.getItem('popupClosed')) {
          popup.style.display = 'none'
          btn.style.display = 'block'
        } else {
          popup.style.display = 'block'
          btn.style.display = 'none'
        }

        btn.addEventListener('click', function () {
          if (btn && popup) {
            btn.style.display = 'none'
            popup.style.display = 'block'
          }
        })

        const closeButton = popup.querySelector('button')
        if (closeButton) {
          function handleClose() {
            if (popup && btn) {
              popup.style.display = 'none'
              btn.style.display = 'block'
              sessionStorage.setItem('popupClosed', 'true')
            }
          }
          closeButton.addEventListener('click', handleClose)
          closeButton.addEventListener('touchend', function (e) {
            e.preventDefault()
            handleClose()
          }, { passive: false })
        }

      }

      // 拖拽逻辑
      const header = popup?.querySelector('div[style*="text-align: right"]')
      if (header) {
        let isDragging = false
        let offsetX = 0
        let offsetY = 0

        function startDrag(e: any) {
          isDragging = true
          const rect = popup!.getBoundingClientRect()
          offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
          offsetY = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
          e.preventDefault()
        }

        function dragMove(e: any) {
          if (!isDragging) return
          const x = (e.touches ? e.touches[0].clientX : e.clientX) - offsetX
          const y = (e.touches ? e.touches[0].clientY : e.clientY) - offsetY
          popup!.style.left = x + 'px'
          popup!.style.top = y + 'px'
          popup!.style.right = 'auto'
          popup!.style.bottom = 'auto'
        }

        function stopDrag() {
          isDragging = false
        }

        header.addEventListener('mousedown', startDrag)
        document.addEventListener('mousemove', dragMove)
        document.addEventListener('mouseup', stopDrag)

        header.addEventListener('touchstart', startDrag, { passive: false })
        document.addEventListener('touchmove', dragMove, { passive: false })
        document.addEventListener('touchend', function (e: any) {
          const touch = e.changedTouches[0]
          const target = document.elementFromPoint(touch.clientX, touch.clientY)
          const closeButton = popup!.querySelector('button')

          if (target && closeButton?.contains(target)) {
            popup!.style.display = 'none'
            btn!.style.display = 'block'
          }

          stopDrag()
        }, { passive: false })
      }

      // GCLID处理
      function getGclidFromUrlOrCookie() {
        const params = new URLSearchParams(window.location.search)
        let gclid = params.get("gclid")

        if (gclid) {
          document.cookie = "gclid=" + gclid + "; path=/; max-age=2592000"
        } else {
          gclid = document.cookie
            .split("; ")
            .find(row => row.startsWith("gclid="))
            ?.split("=")[1] || null
        }
        return gclid
      }

      const gclid = getGclidFromUrlOrCookie()
      const baseURL = "https://customer-form-sentinel.onrender.com/"
      const finalURL = gclid ? `${baseURL}?gclid=${encodeURIComponent(gclid)}` : baseURL
      const leadForm = document.getElementById("leadForm") as HTMLIFrameElement
      if (leadForm) {
        leadForm.src = finalURL
      }

      // Cookie横幅逻辑
      const EU_COUNTRIES = [
        'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT',
        'LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','US'
      ]

      function showCookieBanner() {
        const banner = document.getElementById('cookieConsentBanner')
        if (banner) {
          banner.style.display = 'block'
          banner.style.transform = 'translateX(-50%)'
          banner.style.bottom = '70px'
        }
      }



      function acceptCookies(all: boolean) {
        localStorage.setItem('cookieConsent', all ? 'all' : 'necessary')
        localStorage.setItem('cookieConsentGiven', 'true')
        const banner = document.getElementById('cookieConsentBanner')
        if (banner) {
          banner.style.display = 'none'
        }

        // Google Consent Mode v2
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': all ? 'granted' : 'denied',
            'ad_storage': all ? 'granted' : 'denied',
            'functionality_storage': all ? 'granted' : 'denied',
            'personalization_storage': all ? 'granted' : 'denied',
            'security_storage': 'granted'
          })
        }
      }

      function initCookieBanner() {
        // Set default consent state (denied) for Google Consent Mode v2
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          })
        }


        // 获取国家判断是否显示
        fetch('https://ipinfo.io/json')
          .then(res => res.json())
          .then(data => {
            const country = data.country
            // 保存用户国家信息到localStorage
            localStorage.setItem('userCountry', country)
            const isGDPR = EU_COUNTRIES.includes(country)

            if (isGDPR) {
              // 如果用户尚未选择，才弹窗
              const consentGiven = localStorage.getItem('cookieConsentGiven')
              if (!consentGiven) {
                showCookieBanner()
              } else {
                // 如果已经有同意记录，恢复consent状态
                const consent = localStorage.getItem('cookieConsent')
                if (consent === 'all' && window.gtag) {
                  window.gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted',
                    'functionality_storage': 'granted',
                    'personalization_storage': 'granted',
                    'security_storage': 'granted'
                  })
                } else if (consent === 'custom') {
                  // 恢复自定义偏好设置
                  const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}')
                  if (window.gtag) {
                    window.gtag('consent', 'update', {
                      'analytics_storage': preferences.analytics ? 'granted' : 'denied',
                      'ad_storage': preferences.marketing ? 'granted' : 'denied',
                      'functionality_storage': preferences.functional ? 'granted' : 'denied',
                      'personalization_storage': preferences.functional ? 'granted' : 'denied',
                      'security_storage': 'granted'
                    })
                  }
                }
              }
            } else {
              // 非 GDPR 国家直接接受，完全隐藏
              localStorage.setItem('cookieConsent', 'all')
              localStorage.setItem('cookieConsentGiven', 'true')
              const banner = document.getElementById('cookieConsentBanner')
              if (banner) {
                banner.style.display = 'none'
              }
              // 设置Google Consent为granted
              if (window.gtag) {
                window.gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'functionality_storage': 'granted',
                  'personalization_storage': 'granted',
                  'security_storage': 'granted'
                })
              }
            }
          })
          .catch(err => {
            console.warn('IP 检测失败', err)
            // 获取失败默认弹出
            showCookieBanner()
          })
      }

      // 初始化Cookie横幅
      initCookieBanner()



      // 清理函数
      return () => {
        document.head.removeChild(style)
        if (floatingBtn.parentNode) {
          document.body.removeChild(floatingBtn)
        }
        if (floatingBox.parentNode) {
          document.body.removeChild(floatingBox)
        }
        if (cookieBanner.parentNode) {
          document.body.removeChild(cookieBanner)
        }
      }
    }, [t])

  return (
    <footer className={`border-t transition-all duration-500 ${
      isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-[#f8f8f8] border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="space-y-4">
                      <h3 className={`font-semibold transition-colors ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{t('footer.products.title')}</h3>
                      <div className="space-y-2">
                        <div className="relative group">
                          <Link to="/products/sensor" className={`block text-sm font-medium transition-colors ${
                            isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-400'
                          }`}>{t('nav.sensors')}</Link>
                          <div className={`absolute left-0 top-full mt-1 w-56 border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 ${
                            isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
                          }`}>
                            <div className="p-3 space-y-2">
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
                      src="/whatsapp-qr.png" // TODO: change to the actual QR code
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
