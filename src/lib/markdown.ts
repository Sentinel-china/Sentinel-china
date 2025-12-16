import DOMPurify from 'dompurify'
import { marked } from 'marked'

export async function renderMarkdownToHtml(rawMd: string) {
  if (!rawMd) return ''
  const rendered = await Promise.resolve(marked.parse(rawMd))
  return DOMPurify.sanitize(rendered as string)
}
