/**
 * 产品案例详情页面组件
 * 动态加载产品案例markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'

// 导入产品案例markdown文件
import ioModule01Content from '../articles/markdown-cases/io-module01.md?raw'
import ioModule02Content from '../articles/markdown-cases/io-module02.md?raw'
import ioModule03Content from '../articles/markdown-cases/io-module03.md?raw'
import ioModule04Content from '../articles/markdown-cases/io-module04.md?raw'
import ioModule05Content from '../articles/markdown-cases/io-module05.md?raw'
import ioModule06Content from '../articles/markdown-cases/io-module06.md?raw'

// 产品案例配置映射
const productConfig = {
  'io-module01': {
    title: "Input/Output Adaptive Bus I/O Module",
    description: "Input-output adaptive bus I/O module with auto-detection wiring capabilities",
    image: "http://image.sentinel-china.com/202508111442770.png"
  },
  'io-module02': {
    title: "IO Module on TBR Tire Conveyor Lines",
    description: "IO module applications on TBR tire conveyor lines, simplifying wiring and improving efficiency",
    image: "http://image.sentinel-china.com/202508111459837.png"
  },
  'io-module03': {
    title: "From Fieldbus to Industrial Ethernet",
    description: "Technical evolution from fieldbus to industrial Ethernet",
    image: "http://image.sentinel-china.com/202508111511234.png"
  },
  'io-module04': {
    title: "Distributed Remote IO: Application Experience in the Pharmaceutical Packaging Industry",
    description: "Application experience of distributed remote IO in pharmaceutical packaging industry",
    image: "http://image.sentinel-china.com/202508111524012.png"
  },
  'io-module05': {
    title: "SENTINEL Products Empower the Powder Metallurgy Industry",
    description: "SENTINEL products empowering the powder metallurgy industry",
    image: "http://image.sentinel-china.com/202508111528078.png"
  },
  'io-module06': {
    title: "AI Machine Learning Platform",
    description: "Enterprise-level artificial intelligence development platform",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
  }
}

// markdown内容映射
const markdownContentMap = {
  'io-module01': ioModule01Content,
  'io-module02': ioModule02Content,
  'io-module03': ioModule03Content,
  'io-module04': ioModule04Content,
  'io-module05': ioModule05Content,
  'io-module06': ioModule06Content
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const [product, setProduct] = useState<any>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (productId && productConfig[productId as keyof typeof productConfig]) {
      setProduct(productConfig[productId as keyof typeof productConfig])
      
      // 直接加载markdown内容
      loadMarkdownContent(productId)
    }
  }, [productId])

  const loadMarkdownContent = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('尝试加载产品markdown文件:', id)
      
      // 从markdown内容映射中获取内容
      const content = markdownContentMap[id as keyof typeof markdownContentMap]
      
      if (content) {
        console.log('加载的markdown内容长度:', content.length)
        console.log('内容预览:', content.substring(0, 200) + '...')
        setMarkdownContent(content)
      } else {
        console.log('未找到markdown文件:', id)
        // 如果文件不存在，显示默认内容
        setMarkdownContent(`# ${productConfig[id as keyof typeof productConfig]?.title || '产品详情'}

## 概述

该产品的详细文档正在准备中，请稍后再来查看。

## 功能特点

- 专业的产品设计
- 先进的技术架构
- 完善的实施服务
- 持续的运维支持

## 联系我们

如果您对该产品感兴趣，欢迎联系我们：

- **电话**: 400-888-8888
- **邮箱**: info@example.com
- **地址**: 北京市朝阳区科技园区创新大厦

我们将为您提供专业的咨询服务和定制化解决方案。`)
      }
    } catch (err) {
      console.error('加载markdown文件失败:', err)
      setError('文档加载失败，请稍后重试')
      setMarkdownContent(`# 文档加载失败

抱歉，文档加载出现错误，请稍后重试。

## 联系我们

如果您对该产品感兴趣，欢迎联系我们：

- **电话**: 400-888-8888
- **邮箱**: info@example.com
- **地址**: 北京市朝阳区科技园区创新大厦`)
    } finally {
      setLoading(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">产品未找到</h1>
          <Link to="/products" className="text-yellow-400 hover:text-yellow-300">
            返回产品页面
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
             to="/products/io-module" 
             className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
           >
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Products
           </Link>
           
           <div className="mb-8">
             <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-white">
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

// 简化的markdown渲染函数
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
      const listItems = lines.filter(line => line.trim().match(/^[\-\*] (.*$)/))
      const orderedListItems = lines.filter(line => line.trim().match(/^\d+\. (.*$)/))
      
      if (listItems.length > 0) {
        // 无序列表
        const items = listItems.map(line => {
          const match = line.trim().match(/^[\-\*] (.*$)/)
          return match ? `<li>${match[1]}</li>` : ''
        }).join('')
        return `<ul class="space-y-2 my-4">${items}</ul>`
      } else if (orderedListItems.length > 0) {
        // 有序列表
        const items = orderedListItems.map(line => {
          const match = line.trim().match(/^\d+\. (.*$)/)
          return match ? `<li>${match[1]}</li>` : ''
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
