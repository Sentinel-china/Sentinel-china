import { useState, useEffect } from 'react'

interface CookieConsents {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

type ConsentStatus = 'pending' | 'accepted' | 'declined'

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending')
  const [detailedConsents, setDetailedConsents] = useState<CookieConsents>({
    necessary: true, // 必要cookie始终为true
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    // 从localStorage读取cookie同意状态
    const savedConsent = localStorage.getItem('cookie-consent')
    const savedDetailed = localStorage.getItem('cookie-consents-detailed')

    if (savedConsent) {
      setConsentStatus(savedConsent as ConsentStatus)
    }

    if (savedDetailed) {
      try {
        const parsed = JSON.parse(savedDetailed)
        setDetailedConsents(parsed)
      } catch (e) {
        console.error('Failed to parse detailed consents:', e)
      }
    }
  }, [])

  const acceptAllCookies = () => {
    const newConsents = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setConsentStatus('accepted')
    setDetailedConsents(newConsents)
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consents-detailed', JSON.stringify(newConsents))

    // 更新Google Consent Mode
    updateGoogleConsent(newConsents)
  }

  const acceptNecessaryOnly = () => {
    const newConsents = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setConsentStatus('accepted')
    setDetailedConsents(newConsents)
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-consents-detailed', JSON.stringify(newConsents))

    // 更新Google Consent Mode
    updateGoogleConsent(newConsents)
  }

  const declineCookies = () => {
    const newConsents = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setConsentStatus('declined')
    setDetailedConsents(newConsents)
    localStorage.setItem('cookie-consent', 'declined')
    localStorage.setItem('cookie-consents-detailed', JSON.stringify(newConsents))

    // 更新Google Consent Mode
    updateGoogleConsent(newConsents)
  }

  const updateDetailedConsents = (newConsents: Partial<CookieConsents>) => {
    const updated = { ...detailedConsents, ...newConsents }
    setDetailedConsents(updated)
    localStorage.setItem('cookie-consents-detailed', JSON.stringify(updated))

    // 更新Google Consent Mode
    updateGoogleConsent(updated)
  }

  const resetConsent = () => {
    setConsentStatus('pending')
    const resetConsents = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setDetailedConsents(resetConsents)
    localStorage.removeItem('cookie-consent')
    localStorage.removeItem('cookie-consents-detailed')

    // 重置Google Consent Mode
    updateGoogleConsent(resetConsents)
  }

  // 更新Google Consent Mode
  const updateGoogleConsent = (consents: CookieConsents) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consents.analytics ? 'granted' : 'denied',
        ad_storage: consents.marketing ? 'granted' : 'denied',
        functionality_storage: consents.preferences ? 'granted' : 'denied',
        personalization_storage: consents.marketing ? 'granted' : 'denied',
        security_storage: 'granted' // 安全cookie始终允许
      })
    }
  }

  return {
    consentStatus,
    detailedConsents,
    acceptAllCookies,
    acceptNecessaryOnly,
    declineCookies,
    updateDetailedConsents,
    resetConsent,
    hasConsent: consentStatus === 'accepted',
    hasDeclined: consentStatus === 'declined',
    isPending: consentStatus === 'pending'
  }
}
