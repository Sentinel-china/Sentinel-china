/** The file was corrupted by duplicate blocks; replace whole file below with clean version */

import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Mail, MapPin, Clock, MessageSquare, User } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactPage() {
  const location = useLocation()
  const { t } = useLanguage()

  const [emailRevealed, setEmailRevealed] = React.useState(false)
  const [euEmailRevealed, setEuEmailRevealed] = React.useState(false)

  const contactEmail = t('pages.contact.contactInfo.email.content')
  const euEmail = t('pages.contact.europeanEmail')

  function maskEmail(email: string) {
    if (!email || !email.includes('@')) return email
    const [local, domain] = email.split('@')
    if (local.length <= 1) return '***@' + domain
    return local[0] + '***@' + domain
  }

  async function revealAndCopy(email: string, setReveal: (v: boolean) => void) {
    setReveal(true)
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      }
    } catch (e) {
      // silent
    }
  }

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1))
        if (element) {
          const elementTop = element.offsetTop
          window.scrollTo({ top: elementTop - 80, behavior: 'smooth' })
        }
      }, 300)
    }
  }, [location])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const gclid = params.get('gclid') || document.cookie.split('; ').find(r => r.startsWith('gclid='))?.split('=')[1] || null
    const baseURL = 'https://customer-form-sentinel.onrender.com/'
    const finalURL = gclid ? `${baseURL}?gclid=${encodeURIComponent(gclid)}` : baseURL
    const iframe = document.getElementById('contact-form-iframe') as HTMLIFrameElement
    if (iframe) iframe.src = finalURL
  }, [])

  const contactInfo = [
    { icon: MessageSquare, title: t('pages.contact.contactInfo.whatsapp.title'), content: t('pages.contact.contactInfo.whatsapp.content'), description: t('pages.contact.contactInfo.whatsapp.description'), qrSrc: '/whatsapp-qr.png' },
    { icon: Mail, title: t('pages.contact.contactInfo.email.title'), content: t('pages.contact.contactInfo.email.content'), description: t('pages.contact.contactInfo.email.description') },
    { icon: MapPin, title: t('pages.contact.contactInfo.address.title'), content: t('pages.contact.contactInfo.address.content'), description: t('pages.contact.contactInfo.address.description') },
    { icon: Clock, title: t('pages.contact.contactInfo.hours.title'), content: t('pages.contact.contactInfo.hours.content'), description: t('pages.contact.contactInfo.hours.description') },
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('pages.contact.title')} <span className="text-yellow-400">{t('pages.contact.brand')}</span></h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">{t('pages.contact.intro')}</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-[#f8f8f8] p-6 rounded-2xl border border-gray-700 dark:bg-gray-900/50 text-center hover:border-yellow-400/50 transition-all duration-300 group relative">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4"><info.icon className="text-yellow-400" size={32} /></div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                {info.qrSrc ? (
                  <div className="relative">
                    <p className="text-yellow-400 font-medium mb-1">{info.content}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-white p-3 rounded-lg shadow-xl border-2 border-yellow-400">
                      <img src={info.qrSrc} alt={`${info.title} QR`} className="w-32 h-32 object-contain" />
                      <p className="text-gray-800 text-xs mt-2 text-center font-medium">{t('pages.contact.contactInfo.whatsapp.qrNote')}</p>
                    </div>
                  </div>
                ) : <p className="text-yellow-400 font-medium mb-1">{info.content}</p>}
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <div className="flex items-center mb-6"><MessageSquare className="text-yellow-400 mr-3" size={28} /><h2 id="send-message" className="text-2xl font-bold">{t('pages.contact.sendMessage')}</h2></div>
              <div className="w-full h-[500px]"><iframe id="contact-form-iframe" src="https://customer-form-sentinel.onrender.com/" className="w-full h-full border-0 rounded-lg" title="Contact Form" allow="camera; microphone; geolocation" style={{ minHeight: '500px' }} /></div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
                <h3 className="text-2xl font-bold mb-6">{t('pages.contact.headOfficeTitle')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">{t('pages.contact.tianjinHeadquarter')}</p>
                      <p className="text-gray-600 dark:text-gray-300">{t('pages.contact.tianjinAddress')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">{t('pages.contact.contactInfo.email.title')}</p>
                      <p className="mt-1">
                        {emailRevealed ? (
                          <span className="text-gray-600 dark:text-gray-300">{contactEmail}</span>
                        ) : (
                          <button
                            onClick={() => revealAndCopy(contactEmail, setEmailRevealed)}
                            className="text-xs px-2 py-0.5 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                            aria-label={t('footer.showFullEmail')}
                            title={t('footer.showFullEmail')}
                          >
                            {t('footer.showFullEmail')}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
                <h3 className="text-2xl font-bold mb-6">{t('pages.contact.europeanOfficeTitle')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">{t('pages.contact.europeanHeadquarter')}</p>
                      <p className="text-gray-600 dark:text-gray-300">{t('pages.contact.europeanAddress')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <User className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">{t('pages.contact.europeanContact')}</p>
                      <p className="text-gray-600 dark:text-gray-300">{t('common.contactPerson')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-yellow-400 mt-1 w-5 h-5 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">{t('pages.contact.contactInfo.email.title')}</p>
                      <p className="mt-1">
                        {euEmailRevealed ? (
                          <span className="text-gray-600 dark:text-gray-300">{euEmail}</span>
                        ) : (
                          <button
                            onClick={() => revealAndCopy(euEmail, setEuEmailRevealed)}
                            className="text-xs px-2 py-0.5 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                            aria-label={t('footer.showFullEmail')}
                            title={t('footer.showFullEmail')}
                          >
                            {t('footer.showFullEmail')}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
