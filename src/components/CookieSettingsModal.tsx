import React, { useState } from 'react'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Switch } from './ui/switch'
import { Settings } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import { useCookieConsent } from '../hooks/useCookieConsent'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'

interface CookieSettingsModalProps {
  trigger?: React.ReactNode
}

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ trigger }) => {
  const { detailedConsents, updateDetailedConsents, acceptAllCookies, acceptNecessaryOnly, resetConsent } = useCookieConsent()
  const [tempConsents, setTempConsents] = useState(detailedConsents)
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const { t } = useLanguage()

  const isDark = theme === 'dark'
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900'
  const subTextColor = isDark ? 'text-gray-300' : 'text-gray-600'
  const cardBgColor = isDark ? 'bg-gray-800' : 'bg-gray-50'
  const accentBgColor = isDark ? 'bg-blue-900/20' : 'bg-blue-50'

  const handleSave = () => {
    updateDetailedConsents(tempConsents)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempConsents(detailedConsents)
    setIsOpen(false)
  }

  const updateTempConsent = (key: keyof typeof tempConsents, value: boolean) => {
    setTempConsents(prev => ({ ...prev, [key]: value }))
  }

  const defaultTrigger = (
    <button className={`flex items-center gap-2 text-sm transition-colors ${
      isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
    }`}>
      <Settings className="w-4 h-4" />
      {t('footer.cookie.settings')}
    </button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className={`max-w-2xl max-h-[90vh] overflow-y-auto ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white'
      }`}>
        <DialogHeader>
          <DialogTitle className={textColor}>{t('cookie.title')}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* 必要 Cookie */}
          <div className={`p-4 ${cardBgColor} rounded-lg`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-semibold ${textColor}`}>{t('cookie.categories.necessary.title')}</h4>
              <div className={`text-xs px-2 py-1 rounded font-medium ${
                isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
              }`}>
                {t('cookie.categories.necessary.alwaysEnabled')}
              </div>
            </div>
            <p className={`text-sm ${subTextColor} mb-2`}>
              {t('cookie.categories.necessary.description')}
            </p>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('cookie.categories.necessary.features').split('\r\n').map((feature: string, index: number) => (
                <div key={index}>• {feature}</div>
              ))}
            </div>
          </div>

          {/* 分析 Cookie */}
          <div className={`p-4 border rounded-lg ${
            isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-semibold ${textColor}`}>{t('cookie.categories.analytics.title')}</h4>
              <Switch
                checked={tempConsents.analytics}
                onCheckedChange={(checked) => updateTempConsent('analytics', checked)}
                disabled={false}
              />
            </div>
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
          <div className={`p-4 border rounded-lg ${
            isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-semibold ${textColor}`}>{t('cookie.categories.marketing.title')}</h4>
              <Switch
                checked={tempConsents.marketing}
                onCheckedChange={(checked) => updateTempConsent('marketing', checked)}
                disabled={false}
              />
            </div>
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
          <div className={`p-4 border rounded-lg ${
            isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-semibold ${textColor}`}>{t('cookie.categories.preferences.title')}</h4>
              <Switch
                checked={tempConsents.preferences}
                onCheckedChange={(checked) => updateTempConsent('preferences', checked)}
                disabled={false}
              />
            </div>
            <p className={`text-sm ${subTextColor} mb-2`}>
              {t('cookie.categories.preferences.description')}
            </p>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('cookie.categories.preferences.features').split('\r\n').map((feature: string, index: number) => (
                <div key={index}>• {feature}</div>
              ))}
            </div>
          </div>

          {/* 快速操作 */}
          <div className={`border-t pt-4 ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h5 className={`font-medium mb-3 ${textColor}`}>{t('cookie.quickActions')}</h5>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setTempConsents({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                  preferences: false
                })}
                className="flex-1"
              >
                {t('cookie.buttons.acceptNecessary')}
              </Button>
              <Button
                onClick={() => setTempConsents({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  preferences: true
                })}
                className="flex-1"
              >
                {t('cookie.buttons.acceptAll')}
              </Button>
            </div>
          </div>

          {/* 隐私信息 */}
          <div className={`text-xs p-3 rounded border ${accentBgColor} ${
            isDark ? 'text-gray-300 border-blue-800' : 'text-gray-700 border-blue-200'
          }`}>
            <p className="mb-2">
              <strong>{t('cookie.privacy.title')}</strong> {t('cookie.privacy.description')}
              <Link to="/privacy-policy" className={`hover:underline ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>{t('cookie.privacy.policyLink')}</Link>。
            </p>
          </div>
        </div>

        <div className={`flex flex-col gap-4 border-t pt-4 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          {/* 撤销同意部分 */}
          <div className={`p-4 border rounded-lg ${
            isDark ? 'border-red-800 bg-red-900/20' : 'border-red-200 bg-red-50'
          }`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-red-300' : 'text-red-800'}`}>
              {t('cookie.revoke.title', { defaultValue: '撤销同意' })}
            </h4>
            <p className={`text-sm mb-3 ${isDark ? 'text-red-200' : 'text-red-700'}`}>
              {t('cookie.revoke.description', { defaultValue: '撤销所有cookie同意设置，将重置为仅使用必要cookie。您可以随时重新启用其他cookie。' })}
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className={`border-red-600 text-red-600 hover:bg-red-600 hover:text-white ${
                  isDark ? 'border-red-500 text-red-400 hover:bg-red-500' : ''
                }`}>
                  {t('cookie.revoke.button', { defaultValue: '撤销所有同意' })}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className={isDark ? 'bg-gray-900 border-gray-700' : ''}>
                <AlertDialogHeader>
                  <AlertDialogTitle className={isDark ? 'text-gray-100' : ''}>
                    {t('cookie.revoke.confirmTitle', { defaultValue: '确认撤销同意' })}
                  </AlertDialogTitle>
                  <AlertDialogDescription className={isDark ? 'text-gray-300' : ''}>
                    {t('cookie.revoke.confirmDescription', { defaultValue: '这将撤销您对所有非必要cookie的同意。网站将仅使用必要cookie。您确定要继续吗？' })}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className={isDark ? 'border-gray-600 text-gray-300' : ''}>
                    {t('common.cancel')}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      resetConsent()
                      setIsOpen(false)
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    {t('cookie.revoke.confirmButton', { defaultValue: '确认撤销' })}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={handleCancel}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleSave}>
              {t('cookie.save')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CookieSettingsModal
