/**
 * 网站底部组件
 * 包含公司信息、快速链接和联系方式
 */
import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { Mail, Phone, MapPin, Youtube, User, Copy, Eye } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import CookieSettingsModal from './CookieSettingsModal'

const Footer = React.memo(() => {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  // 邮箱隐藏/显示与复制状态
  const [emailRevealed, setEmailRevealed] = React.useState(false)
  const [euEmailRevealed, setEuEmailRevealed] = React.useState(false)
  // 不再使用 toast：点击只需显示邮箱（复制为静默尝试）

  const isDark = theme === 'dark'

  // 提前获取翻译中的邮箱文本，便于标题行按钮访问
  const contactEmail = t('pages.contact.contactInfo.email.content')
  const euEmail = t('pages.contact.europeanEmail')

  // 更新悬浮按钮文本的函数
  const updateFloatingButtonText = React.useCallback(() => {
    const floatingBtn = document.getElementById('floating-form-btn')
    if (floatingBtn) {
      floatingBtn.innerHTML = t('footer.floatingContact')
    }

    const floatingBox = document.getElementById('floating-form-box')
    if (floatingBox) {
      const titleElement = floatingBox.querySelector('div[style*="text-align: right"] div')
      if (titleElement) {
        titleElement.textContent = t('footer.floatingTitle')
      }
    }
  }, [t, language]) // 添加language依赖，确保语言改变时重新执行

  useEffect(() => {
    // 清理之前的浮动元素
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

      /* 移动端按钮样式调整 */
      @media (max-width: 768px) {
        #floating-form-btn {
          bottom: 20px; /* 更小的底部边距 */
          right: 20px;
          font-size: 14px; /* 稍微小一点的字体 */
          padding: 8px 12px; /* 稍微小一点的内边距 */
        }
      }

      /* 弹窗样式 */
      #floating-form-box {
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
        cursor: grab;
        user-select: none;
      }

      /* 移动端响应式设计 */
      @media (max-width: 768px) {
        #floating-form-box {
          width: calc(100vw - 40px) !important; /* 全宽减去边距 */
          height: calc(100vh - 120px) !important; /* 全高减去顶部和底部边距 */
          max-width: 400px; /* 最大宽度限制 */
          max-height: 600px; /* 最大高度限制 */
          bottom: 20px !important;
          right: 20px !important;
          left: 20px !important; /* 水平居中 */
        }
      }

      @media (max-width: 480px) {
        #floating-form-box {
          width: calc(100vw - 20px) !important; /* 更小的边距 */
          height: calc(100vh - 100px) !important; /* 更小的顶部边距 */
          bottom: 10px !important;
          right: 10px !important;
          left: 10px !important;
        }

        #leadForm {
          height: calc(100vh - 140px) !important; /* 根据弹窗高度自适应 */
        }
      }

      /* 平板响应式 */
      @media (max-width: 768px) and (min-width: 481px) {
        #leadForm {
          height: calc(100vh - 160px) !important;
        }
      }

      #floating-form-box:active {
        cursor: grabbing;
      }

      /* 鼠标样式控制 */
      #floating-form-box {
        cursor: grab;
      }

      #floating-form-box:active {
        cursor: grabbing;
      }

      /* 特殊区域保持原有鼠标样式 */
      #floating-form-box button {
        cursor: pointer !important;
      }

      /* 标题文本区域也保持pointer样式，表示不可拖拽 */
      #floating-form-box div[style*="float: left"] {
        cursor: default !important;
        user-select: text; /* 允许选择文本 */
      }

      #floating-form-box iframe {
        cursor: default !important;
        pointer-events: auto;
      }

      #floating-form-box.dark-mode {
        background: #1f2937;
        border-color: #374151;
        color: #f9fafb;
      }
    `
    document.head.appendChild(style)

    // 添加HTML结构
    const floatingBtn = document.createElement('div')
    floatingBtn.id = 'floating-form-btn'
    floatingBtn.innerHTML = t('footer.floatingContact') // 移除默认中文文本
    document.body.appendChild(floatingBtn)

    const floatingBox = document.createElement('div')
    floatingBox.id = 'floating-form-box'
    floatingBox.innerHTML = `
      <div style="text-align: right; padding: 8px; background: #f5f5f5; border-bottom: 1px solid #ddd;">
        <div style="float: left; font-weight: bold; font-size: 15px; color: #333;">${t('footer.floatingTitle')}</div>
        <button onclick="document.getElementById('floating-form-box').style.display='none'" style="
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          padding: 0;
          margin: 0;
        ">×</button>
      </div>
      <iframe id="leadForm"
        width="100%"
        height="480px"
        style="border:none; background:white;"
        frameBorder="0">
      </iframe>
    `
    document.body.appendChild(floatingBox)

    // 确保初始文本使用当前语言
    // 注意：这里不需要手动调用，useEffect会处理

    // 按钮点击事件和弹窗逻辑
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

      // 拖拽逻辑 - 整个弹窗区域都可以拖拽
      if (popup) {
        let isDragging = false
        let offsetX = 0
        let offsetY = 0

        function startDrag(e: any) {
          // 检查是否点击在关闭按钮或文本内容上，如果是则不启动拖拽
          const target = e.target as HTMLElement
          const closeButton = popup!.querySelector('button')
          const titleDiv = popup!.querySelector('div[style*="float: left"]') // 标题文本div
          const iframe = popup!.querySelector('iframe')

          // 只有关闭按钮和标题文本区域不允许拖拽，其他区域都可以拖拽
          if (closeButton?.contains(target) || titleDiv?.contains(target)) {
            return // 不启动拖拽
          }

          // iframe区域也保持原有的交互，不启动拖拽
          if (iframe?.contains(target)) {
            return // 不启动拖拽
          }

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

        // 为整个弹窗添加拖拽事件
        popup.addEventListener('mousedown', startDrag)
        document.addEventListener('mousemove', dragMove)
        document.addEventListener('mouseup', stopDrag)

        popup.addEventListener('touchstart', startDrag, { passive: false })
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

    // 监听主题变化，更新弹窗样式
    const observer = new MutationObserver(() => {
      const box = document.getElementById('floating-form-box')
      if (box) {
        if (document.documentElement.classList.contains('dark')) {
          box.classList.add('dark-mode')
        } else {
          box.classList.remove('dark-mode')
        }
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    // 清理函数
    return () => {
      document.head.removeChild(style)
      if (floatingBtn.parentNode) {
        document.body.removeChild(floatingBtn)
      }
      if (floatingBox.parentNode) {
        document.body.removeChild(floatingBox)
      }
      // 清理拖拽事件监听器
      if (popup) {
        popup.removeEventListener('mousedown', startDrag)
        popup.removeEventListener('touchstart', startDrag)
        document.removeEventListener('mousemove', dragMove)
        document.removeEventListener('mouseup', stopDrag)
        document.removeEventListener('touchmove', dragMove)
        document.removeEventListener('touchend', () => {})
      }
      observer.disconnect()
    }
  }, [t])

  // 监听语言变化，更新悬浮按钮文本
  React.useEffect(() => {
    updateFloatingButtonText()
  }, [language, updateFloatingButtonText])

  // 组件挂载时也更新一次文本
  React.useEffect(() => {
    updateFloatingButtonText()
  }, []) // 只在组件挂载时执行一次

  // 邮箱掩码工具（简单保留首字母）
  function maskEmail(email: string) {
    if (!email || !email.includes('@')) return email
    const [local, domain] = email.split('@')
    if (local.length <= 1) return '***@' + domain
    return local[0] + '***@' + domain
  }

  async function revealAndCopy(email: string, setReveal: (v: boolean) => void) {
    // 先立即显示邮箱，保证用户看到变化
    setReveal(true)
    // 尝试静默复制到剪贴板（不弹提示）
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      }
    } catch (e) {
      // 静默失败，不影响用户体验
    }
  }

  return (
    <footer className={`border-t transition-all duration-500 ${
      isDark
        ? 'bg-gray-900/50 border-gray-700'
        : 'bg-[#f8f8f8] border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
            <h3 className={`font-semibold transition-colors flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('footer.contact.title')}
              <img
                src="/cn-flag-hd.png"
                alt="China flag"
                className="w-6 h-4 rounded-sm object-cover"
              />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 relative group">
                <Phone size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
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
                <Mail size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                <div>
                  <p className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('pages.contact.contactInfo.email.title')}
                  </p>
                  <p className="mt-1">
                    {emailRevealed ? (
                      <span className={`text-xs transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{contactEmail}</span>
                    ) : (
                      <button
                        onClick={() => revealAndCopy(contactEmail, setEmailRevealed)}
                        className={`text-xs underline text-yellow-400 hover:text-yellow-500 transition-colors`}
                        aria-label={t('footer.showFullEmail')}
                        title={t('footer.showFullEmail')}
                      >
                        {t('footer.showFullEmail')}
                      </button>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{t('pages.contact.contactInfo.address.content')}</span>
              </div>
            </div>
          </div>

          {/* European Office */}
          <div className="space-y-4">
            <h3 className={`font-semibold transition-colors flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('pages.contact.europeanOfficeTitle')}
              <svg
                width="24"
                height="16"
                viewBox="0 0 1000 600"
                className="rounded-sm object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1000" height="200" fill="#000000"/>
                <rect y="200" width="1000" height="200" fill="#DE0000"/>
                <rect y="400" width="1000" height="200" fill="#FFCC00"/>
              </svg>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Wolfgang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                <div>
                  <p className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('pages.contact.contactInfo.email.title')}
                  </p>
                  <p className="mt-1">
                    {euEmailRevealed ? (
                      <span className={`text-xs transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{euEmail}</span>
                    ) : (
                      <button
                        onClick={() => revealAndCopy(euEmail, setEuEmailRevealed)}
                        className={`text-xs underline text-yellow-400 hover:text-yellow-500 transition-colors`}
                        aria-label={t('footer.showFullEmail')}
                        title={t('footer.showFullEmail')}
                      >
                        {t('footer.showFullEmail')}
                      </button>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                <span className={`text-sm transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{t('pages.contact.europeanAddress')}</span>
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
})

Footer.displayName = 'Footer'

export default Footer
