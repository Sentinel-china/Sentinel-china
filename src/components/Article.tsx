import React from 'react'

interface ArticleProps {
  title: string
  date?: string
  image?: string
  htmlContent: string
}

export default function Article({ title, date, image, htmlContent }: ArticleProps) {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {image && (
        <div className="mb-6">
          <img src={image} alt={title} className="w-full h-72 object-cover rounded-md shadow" />
        </div>
      )}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {date && <div className="text-sm text-gray-500">{date}</div>}
      </header>
      <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  )
}
