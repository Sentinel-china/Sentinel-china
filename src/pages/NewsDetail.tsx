import { useParams, Link } from 'react-router'
import newsItems from '../lib/news'
import { useLanguage } from '../context/LanguageContext'
import { getArticleContent } from '../lib/newsContent'
import { renderMarkdownToHtml } from '../lib/markdown'
import { useEffect, useState } from 'react'
import Article from '../components/Article'

export default function NewsDetail() {
  const { id } = useParams()
  const { t, language } = useLanguage()

  const article = newsItems.find((n) => n.id === id)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">{t('pages.news.notFound')}</h2>
          <Link to="/news" className="text-yellow-400 hover:underline mt-4 block">
            {t('pages.news.backToList')}
          </Link>
        </div>
      </div>
    )
  }

  const rawMd = getArticleContent(id, language)
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    let mounted = true
    if (!rawMd) {
      setHtml('')
      return
    }

    renderMarkdownToHtml(rawMd).then((h) => {
      if (!mounted) return
      setHtml(h)
    })

    return () => {
      mounted = false
    }
  }, [rawMd])

  return (
    <div className="min-h-screen">
      <Article
        title={t(article.titleKey)}
        date={article.date}
        image={article.image}
        htmlContent={html}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/news" className="inline-block mt-4 text-yellow-400 hover:underline">
          {t('pages.news.backToList')}
        </Link>
      </div>
    </div>
  )
}
