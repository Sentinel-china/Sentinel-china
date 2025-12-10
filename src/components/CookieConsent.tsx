import React, { useState } from 'react'
import { Button } from './ui/button'
import { Settings, ChevronDown, ChevronUp } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'

interface CookieConsentProps {
  onAcceptAll: () => void
  onAcceptNecessary: () => void
  onDecline: () => void
  isVisible: boolean
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAcceptAll,
  onAcceptNecessary,
  onDecline,
  isVisible
}) => {
  const [showDetails, setShowDetails] = useState(false)
  const { theme } = useTheme()
  const { t } = useLanguage()

  if (!isVisible) return null

  // 根据主题调整颜色
  const isDark = theme === 'dark'
  const bgColor = isDark ? 'bg-gray-900/95' : 'bg-white/95'
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900'
  const subTextColor = isDark ? 'text-gray-300' : 'text-gray-600'
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200'
  const cardBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50'
  const accentBgColor = isDark ? 'bg-blue-900/20' : 'bg-blue-50'

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${bgColor} backdrop-blur-sm border-t ${borderColor} shadow-2xl z-50 animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto`}>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col gap-4">
          {/* 主要内容 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-blue-900/50' : 'bg-blue-100'
                }`}>
                  <svg className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                    <path d="M10 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor} mb-1`}>
                    {t('cookie.title')}
                  </h3>
                  <p className={`text-sm md:text-base ${subTextColor} leading-relaxed`}>
                    {t('cookie.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={onDecline}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-gray-600 hover:bg-gray-800 hover:border-gray-500'
                    : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                {t('cookie.buttons.decline')}
              </Button>
              <Button
                variant="outline"
                onClick={onAcceptNecessary}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-blue-700 text-blue-400 hover:bg-blue-900/20'
                    : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t('cookie.buttons.acceptNecessary')}
              </Button>
              <Button
                onClick={onAcceptAll}
                className="px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
              >
                {t('cookie.buttons.acceptAll')}
              </Button>
            </div>
          </div>

          {/* 详细信息展开按钮 */}
          <div className={`border-t ${borderColor} pt-4`}>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`flex items-center gap-2 text-sm transition-colors ${
                isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>{t('cookie.manageSettings')}</span>
              {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* 详细信息 */}
          {showDetails && (
            <div className={`border-t ${borderColor} pt-4 space-y-4`}>
              <div className="grid gap-4 md:grid-cols-2">
                {/* 必要 Cookie */}
                <div className={`p-4 ${cardBgColor} rounded-lg`}>
                  <h4 className={`font-semibold ${textColor} mb-2`}>{t('cookie.categories.necessary.title')}</h4>
                  <p className={`text-sm ${subTextColor} mb-2`}>
                    {t('cookie.categories.necessary.description')}
                  </p>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('cookie.categories.necessary.features').split('\r\n').map((feature: string, index: number) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                  <div className={`mt-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded ${
                    isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
                  }`}>
                    {t('cookie.categories.necessary.alwaysEnabled')}
                  </div>
                </div>

                {/* 分析 Cookie */}
                <div className={`p-4 ${cardBgColor} rounded-lg`}>
                  <h4 className={`font-semibold ${textColor} mb-2`}>{t('cookie.categories.analytics.title')}</h4>
                  <p className={`text-sm ${subTextColor} mb-2`}>
                    {t('cookie.categories.analytics.description')}
                  </p>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('cookie.categories.analytics.features').split('\r\n').map((feature: string, index: number) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                </div>

                {/* 营销 Cookie */}
                <div className={`p-4 ${cardBgColor} rounded-lg`}>
                  <h4 className={`font-semibold ${textColor} mb-2`}>{t('cookie.categories.marketing.title')}</h4>
                  <p className={`text-sm ${subTextColor} mb-2`}>
                    {t('cookie.categories.marketing.description')}
                  </p>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('cookie.categories.marketing.features').split('\r\n').map((feature: string, index: number) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                </div>

                {/* 偏好 Cookie */}
                <div className={`p-4 ${cardBgColor} rounded-lg`}>
                  <h4 className={`font-semibold ${textColor} mb-2`}>{t('cookie.categories.preferences.title')}</h4>
                  <p className={`text-sm ${subTextColor} mb-2`}>
                    {t('cookie.categories.preferences.description')}
                  </p>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('cookie.categories.preferences.features').split('\r\n').map((feature: string, index: number) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`text-xs mt-4 p-3 rounded ${accentBgColor} ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  <strong>{t('cookie.privacy.title')}</strong> {t('cookie.privacy.description')}
                  <a href="/privacy-policy" className={`hover:underline ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('cookie.privacy.policyLink')}</a>。
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 装饰性边框 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
    </div>
  )
}

export default CookieConsent
