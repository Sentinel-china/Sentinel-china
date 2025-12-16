import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import newsItems, { getSortedNewsItems } from '../lib/news' 

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold">{t('pages.news.title')}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">{t('pages.news.description')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {getSortedNewsItems().map((a) => (
          <Link key={a.id} to={`/news/${a.id}`} className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
            <img src={a.image} alt={t(a.titleKey)} className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{a.date}</div>
              <h2 className="text-xl font-semibold mb-2">{t(a.titleKey)}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t(a.excerptKey)}</p>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{t(a.contentKey)}</div>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <div className="text-yellow-400 font-medium">{t('pages.home.newsSeeAll')}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
