import React from 'react'
import { Button } from './ui/button'
import { Settings } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import CookieSettingsModal from './CookieSettingsModal'

interface CookieConsentProps {
  onAcceptAll: () => void
  onAcceptNecessary: () => void
  isVisible: boolean
  policyChanged?: boolean
  onAcknowledgePolicyChange?: () => void
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAcceptAll,
  onAcceptNecessary,
  isVisible,
  policyChanged = false,
  onAcknowledgePolicyChange
}) => {
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
  const accentBgColor = isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${bgColor} backdrop-blur-sm border-t ${borderColor} shadow-2xl z-[9999] animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto`}>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col gap-4">
          {/* 主要内容 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-yellow-900/50' : 'bg-yellow-100'
                }`}>
                  <svg className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                    <path d="M10 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zm0 8a1 1 0 100 2 1 1 0 000-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor} mb-1`}>
                    {t('cookie.title')}
                  </h3>
                  <p className={`text-sm md:text-base ${subTextColor} leading-relaxed`}>
                    {policyChanged ? t('cookie.policyChanged', '我们的cookie政策已更新，请重新查看并同意使用条款。') : t('cookie.description')}
                  </p>
                  {policyChanged && (
                    <div className={`mt-2 inline-flex items-center px-2 py-1 text-xs font-medium rounded ${
                      isDark ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      📋 {t('cookie.policyUpdate', '政策已更新')}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={onAcceptNecessary}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-yellow-700 text-yellow-400 hover:bg-yellow-900/20'
                    : 'border-yellow-300 text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                {t('cookie.buttons.acceptNecessary')}
              </Button>
              <Button
                onClick={onAcceptAll}
                className="px-6 py-2 text-sm font-medium bg-yellow-400 hover:bg-yellow-300 text-black shadow-sm transition-colors"
              >
                {t('cookie.buttons.acceptAll')}
              </Button>
              <CookieSettingsModal
                trigger={
                  <Button
                    variant="outline"
                    size="sm"
                    className={`p-2 transition-colors ${
                      isDark
                        ? 'border-gray-600 hover:bg-gray-800 hover:border-gray-500'
                        : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                    aria-label={t('cookie.buttons.settings')}
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                }
              />
            </div>
          </div>

        </div>

        {/* 装饰性边框 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
      </div>
    </div>
  )
}

export default CookieConsent

