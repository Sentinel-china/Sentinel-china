export interface NewsItem {
  id: string
  image: string
  date: string
  titleKey: string
  excerptKey: string
  contentKey: string
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    image: 'http://image.sentinel-china.com/20251202140243471.png',
    date: '2025-11-12',
    titleKey: 'pages.news.articles.article1.title',
    excerptKey: 'pages.news.articles.article1.excerpt',
    contentKey: 'pages.news.articles.article1.content'
  },
  {
    id: '2',
    image: 'http://image.sentinel-china.com/202510151643283.png',
    date: '2025-10-15',
    titleKey: 'pages.news.articles.article2.title',
    excerptKey: 'pages.news.articles.article2.excerpt',
    contentKey: 'pages.news.articles.article2.content'
  },
  {
    id: '3',
    image: 'http://image.sentinel-china.com/202508111633019.png',
    date: '2025-05-08',
    titleKey: 'pages.news.articles.article3.title',
    excerptKey: 'pages.news.articles.article3.excerpt',
    contentKey: 'pages.news.articles.article3.content'
  },
 {
    id: '4',
    image: 'http://image.sentinel-china.com/1544149.png',
    date: '2025-12-12',
    titleKey: 'pages.news.articles.article4.title',
    excerptKey: 'pages.news.articles.article4.excerpt',
    contentKey: 'pages.news.articles.article4.content'
  }
]

export function getSortedNewsItems(): NewsItem[] {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date))
}

export default newsItems
