/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from 'lucide-react'
import { useEffect } from 'react'

export default function Footer() {
  const openCookieSettings = () => {
    const banner = document.getElementById('cookieConsentBanner')
    if (banner) {
      banner.style.display = 'block'
      banner.style.transform = 'translateX(-50%)'
      banner.style.bottom = '70px'
    }
  }

  useEffect(() => {
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
    floatingBtn.innerHTML = 'contact us'
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
        <div style="float: left; font-weight: bold; font-size: 15px; color: #333;">Contact Us</div>
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
        This website uses cookies to enhance your browsing experience, and we will only enable non-essential cookies with your consent.
        <a href="/privacy-policy" target="_blank">More</a>
      </div>
      <div class="buttons">
        <button id="acceptAllBtn">Accept all Cookie</button>
        <button id="acceptNecessaryBtn" class="reject">Only accept necessary Cookie</button>
      </div>
    `
    document.body.appendChild(cookieBanner)

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


    }

    function initCookieBanner() {
      const banner = document.getElementById('cookieConsentBanner')
      const acceptAllBtn = document.getElementById('acceptAllBtn')
      const acceptNecessaryBtn = document.getElementById('acceptNecessaryBtn')
      if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', () => acceptCookies(true))
      }
      if (acceptNecessaryBtn) {
        acceptNecessaryBtn.addEventListener('click', () => acceptCookies(false))
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
            }
          } else {
            // 非 GDPR 国家直接接受，完全隐藏
            localStorage.setItem('cookieConsent', 'all')
            localStorage.setItem('cookieConsentGiven', 'true')
            if (banner) {
              banner.style.display = 'none'
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
  }, [])

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

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Products</h3>
            <div className="space-y-2">
              {/* Sensors with dropdown */}
              <div className="relative group">
                <Link to="/products/sensor" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                  Sensors
                </Link>
                {/* Dropdown menu */}
                <div className="absolute left-0 top-full mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <div className="p-3 space-y-2">
                    <Link to="/products/sensor/temperature-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Temperature Sensors
                    </Link>
                    <Link to="/products/sensor/thermal-flow-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Thermal Flow Sensors
                    </Link>
                    <Link to="/products/sensor/vortex-flow-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Vortex Flow Sensors
                    </Link>
                    <Link to="/products/sensor/pressure-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Pressure Sensors
                    </Link>
                    <Link to="/products/sensor/liquid-level-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Liquid Level Sensors
                    </Link>
                    <Link to="/products/sensor/inductive-proximity-sensor" className="block text-gray-300 hover:text-yellow-400 transition-colors text-xs py-1">
                      Inductive Proximity Sensors
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/products/io-module" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                I/O Modules
              </Link>
              <Link to="/products/io-link" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                IO-Link
              </Link>
              <Link to="/products/connectivity" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
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
          <button
            onClick={openCookieSettings}
            className="mt-3 text-gray-400 hover:text-yellow-400 text-sm underline"
            aria-label="Open cookie settings"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  )
}
