/**
 * Relay Module 产品案例详情（自包含实现）
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'

// 导入 Relay markdown 文件
import relay01Content from '../articles/markdown-cases/relay-module01.md?raw'
import relay02Content from '../articles/markdown-cases/relay-module02.md?raw'
import relay03Content from '../articles/markdown-cases/relay-module03.md?raw'
import relay04Content from '../articles/markdown-cases/relay-module04.md?raw'
import relay05Content from '../articles/markdown-cases/relay-module05.md?raw'
import relay06Content from '../articles/markdown-cases/relay-module06.md?raw'

const relayConfig = {
  'relay-module01': {
    title: 'New product launch：IO-Link relay module',
    description: 'with one wire, saves half the manpower of the control cabinet',
    image: 'http://image.sentinel-china.com/202510151643283.png'
  },
  'relay-module02': {
    title: 'What is IO-Link',
    description: 'Introduction to IO-Link protocol - open communication standard for sensors and actuators with 35+ million global nodes',
    image: 'http://image.sentinel-china.com/202508111615434.png'
  },
  'relay-module03': {
    title: 'Summary of IO-Link Devices Series',
    description: 'SENTINEL’s comprehensive IO-Link substation portfolio - IP20 and IP67 series for diverse industrial applications',
    image: 'http://image.sentinel-china.com/202508111618966.png'
  },
  'relay-module04': {
    title: 'IO-Link Remote RTD Module: Smart solution for industrial temperature control',
    description: 'High-precision temperature monitoring with IO-Link RTD modules - 8-channel Pt100/Pt1000 support with ±0.5°C accuracy',
    image: 'http://image.sentinel-china.com/202508111624189.png'
  },
  'relay-module05': {
    title: 'New IO-Link Substation Modules: Adaptive and Expandable',
    description: 'Intelligent adaptive IO-Link modules with automatic I/O switching and expandable architecture for flexible automation',
    image: 'http://image.sentinel-china.com/202508111629411.png'
  },
  'relay-module06': {
    title: 'The Use of Negative Pressure Sensors in Distillation Equipment',
    description: 'Food and pharmaceutical-grade negative pressure sensors with IO-Link integration for precise vacuum control',
    image: 'http://image.sentinel-china.com/202508111633019.png'
  }
}

const markdownContentMap = {
  'relay-module01': relay01Content,
  'relay-module02': relay02Content,
  'relay-module03': relay03Content,
  'relay-module04': relay04Content,
  'relay-module05': relay05Content,
  'relay-module06': relay06Content
}

export default function RelayModuleDetail() {
  const { productId } = useParams<{ productId: string }>()
  const [product, setProduct] = useState<any>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (productId && relayConfig[productId as keyof typeof relayConfig]) {
      setProduct(relayConfig[productId as keyof typeof relayConfig])
      loadMarkdownContent(productId)
    }
  }, [productId])

  const loadMarkdownContent = async (id: string) => {
    try {
      setLoading(true)
      setError(null)

      const content = markdownContentMap[id as keyof typeof markdownContentMap]
      if (content) {
        setMarkdownContent(content)
      } else {
        setMarkdownContent(`# ${relayConfig[id as keyof typeof relayConfig]?.title || '产品详情'}

## 概述

该产品的详细文档正在准备中，请稍后再来查看。

`)
      }
    } catch (err) {
      console.error('加载markdown文件失败:', err)
      setError('文档加载失败，请稍后重试')
      setMarkdownContent(`# 文档加载失败

抱歉，文档加载出现错误，请稍后重试。`)
    } finally {
      setLoading(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">产品未找到</h1>
          <Link to="/products/relay-module" className="text-yellow-400 hover:text-yellow-300">
            返回 Relay Module 页面
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
                     <Link 
             to="/products/relay-module" 
             className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
           >
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Relay Products
           </Link>
           
           <div className="mb-8">
             <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-gray-600 dark:text-gray-300">
               {product.title}
             </h1>
             <p className="text-xl text-gray-400">{product.description}</p>
           </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-400">加载中...</p>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-400 mb-4">加载失败</h2>
              <p className="text-gray-300">{error}</p>
            </div>
          ) : (
            <div className="prose prose-gray dark:prose-invert prose-yellow dark:prose-yellow max-w-none">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownContent) }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// 简化的markdown渲染函数（与 iolinkdetail 保持一致）
function renderMarkdown(markdown: string): string {
  return markdown
    // 移除HTML注释
    .replace(/<!--[\s\S]*?-->/g, '')
    
    // 图片渲染 - 必须在其他替换之前
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-lg my-4" />')
    
    // 分隔线处理
    .replace(/^---$/gim, '<hr class="border-gray-600 dark:border-gray-600 light:border-gray-300 my-8" />')
    
    // 标题渲染 - 必须在列表处理之前
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // 引用块处理
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    
    // 粗体文本
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // 斜体文本
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // 代码块
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="text-gray-800 dark:text-yellow-400">$1</code></pre>')
    
    // 行内代码
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-yellow-400 px-1 py-0.5 rounded text-sm">$1</code>')
    
    // 链接 - 改进版本，处理特殊格式
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-yellow-400 hover:text-blue-500 dark:hover:text-yellow-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // 处理强制换行（两个空格结尾）
    .replace(/  \n/g, '<br>')
    
    // 段落处理 - 改进版本
    .split(/\n\s*\n/)
    .map(block => {
      const trimmedBlock = block.trim()
      
      // 如果块是标题、图片、分隔线等，直接返回
      if (trimmedBlock.match(/^<(h[1-6]|img|hr|pre|blockquote)/)) {
        return block
      }
      
      // 如果块是空行，跳过
      if (trimmedBlock === '') {
        return ''
      }
      
      // 处理列表项
      const lines = trimmedBlock.split('\n').filter(line => line.trim() !== '')
      const listItems = lines.filter(line => line.trim().match(/^[\-\*] /))
      const orderedListItems = lines.filter(line => line.trim().match(/^\d+\. /))
      
      if (listItems.length > 0) {
        // 无序列表
        const items = listItems.map(line => {
          const content = line.trim().replace(/^[\-\*] /, '').replace(/  $/, '') // 移除末尾的两个空格
          return `<li>${content}</li>`
        }).join('')
        return `<ul class="space-y-2 my-4">${items}</ul>`
      } else if (orderedListItems.length > 0) {
        // 有序列表
        const items = orderedListItems.map(line => {
          const content = line.trim().replace(/^\d+\. /, '').replace(/  $/, '') // 移除末尾的两个空格
          return `<li>${content}</li>`
        }).join('')
        return `<ol class="space-y-2 my-4">${items}</ol>`
      }
      
      // 处理连续的段落文本
      if (lines.length > 1) {
        // 如果有多个非空行，每行作为一个段落
        return lines.map(line => `<p>${line.trim()}</p>`).join('')
      }
      
      // 其他情况包装在p标签中
      return `<p>${trimmedBlock}</p>`
    })
    .join('')
    
    // 清理空标签和多余的p标签
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<h[1-6]|img|hr|pre|blockquote|ul|ol)/g, '$1')
    .replace(/(<\/h[1-6]|<\/img>|<\/hr>|<\/pre>|<\/blockquote>|<\/ul>|<\/ol>)<\/p>/g, '$1')
    
    // 处理图片后的文本
    .replace(/(<\/img>)\s*([^<]+)/g, '$1<p>$2</p>')
    
    // 清理多余的空白和空行
    .replace(/\n\s*\n/g, '\n')
    .replace(/>\s+</g, '><')
    .trim()
}
