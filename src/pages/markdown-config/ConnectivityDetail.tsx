/**
 * Connectivity产品案例详情页面组件
 * 动态加载Connectivity产品案例markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'

// 导入Connectivity产品案例markdown文件
import connectivity01Content from '../articles/markdown-cases/connectivity01.md?raw'
import connectivity02Content from '../articles/markdown-cases/connectivity02.md?raw'
import connectivity03Content from '../articles/markdown-cases/connectivity03.md?raw'
import connectivity04Content from '../articles/markdown-cases/connectivity04.md?raw'
import connectivity05Content from '../articles/markdown-cases/connectivity05.md?raw'
import connectivity06Content from '../articles/markdown-cases/connectivity06.md?raw'

// Connectivity产品案例配置映射
const connectivityConfig = {
  'connectivity01': {
    title: "Connection Technology",
    description: "Learn their features, applications, and how to select the right connector and cable for reliable power, signal, and data transmission in industrial environments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
  },
  'connectivity02': {
    title: "Output-Type IO-Link Converters",
    description: "Discover SENTINEL’s new CIOL-1AO-SC and CIOL-2VO-SC IO-Link converters—smart solutions for integrating analog actuators into modern IO-Link systems with precision and efficiency.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop"
  },
  'connectivity03': {
    title: "Differences Between Digital Signals, Analog Signals, and IO-Link",
    description: "Comprehensive comparison of signal types in industrial automation - from basic digital to intelligent IO-Link communication",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop"
  },
  'connectivity04': {
    title: "one-to-two on-site assembly connector",
    description: "SENTINEL's M12 one-to-two field assembly connector offers efficient wiring, clear pin assignments, and a dual-hole waterproof design. Ideal for modern industrial needs, it ensures precision, stability, and space-saving solutions in complex environments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
  },
  'connectivity05': {
    title: "A Chinese Preferred Choice for Quality, Technology, and Support",
    description: "Explore the remarkable experience of a satisfied customer using SENTINEL products. Discover the superior craftsmanship, zero-failure reliability, and impressive product range that solidify SENTINEL's status as a quality domestic brand in industrial automation solutions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  },
  'connectivity06': {
    title: "SENTINEL Distributed I/O Modules in Photovoltaic Monocrystalline Silicon Production Lines",
    description: "With the global energy structure transforming, the photovoltaic industry, as a crucial part of clean energy, is rapidly developing.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
  }
}

// markdown内容映射
const markdownContentMap = {
  'connectivity01': connectivity01Content,
  'connectivity02': connectivity02Content,
  'connectivity03': connectivity03Content,
  'connectivity04': connectivity04Content,
  'connectivity05': connectivity05Content,
  'connectivity06': connectivity06Content
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

export default function ConnectivityDetail() {
  const { productId } = useParams<{ productId: string }>()
  const [product, setProduct] = useState<any>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (productId && connectivityConfig[productId as keyof typeof connectivityConfig]) {
      setProduct(connectivityConfig[productId as keyof typeof connectivityConfig])
      
      // 直接加载markdown内容
      loadMarkdownContent(productId)
    }
  }, [productId])

  const loadMarkdownContent = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('尝试加载Connectivity产品markdown文件:', id)
      
      // 从markdown内容映射中获取内容
      const content = markdownContentMap[id as keyof typeof markdownContentMap]
      
      if (content) {
        console.log('加载的markdown内容长度:', content.length)
        console.log('内容预览:', content.substring(0, 200) + '...')
        setMarkdownContent(content)
      } else {
        console.log('未找到markdown文件:', id)
        // 如果文件不存在，显示默认内容
        const defaultContent = `# ${connectivityConfig[id as keyof typeof connectivityConfig]?.title || 'Connectivity产品详情'}

## 概述

该Connectivity产品的详细文档正在准备中，请稍后再来查看。

## 产品特点

- 高质量连接器
- 多种接口标准
- 工业级防护
- 灵活安装方式

## 技术规格

- 防护等级：IP67/IP20
- 接口类型：M8/M12/M16/7/8"
- 信号类型：数字/模拟
- 工作温度：-40°C ~ +85°C

## 应用领域

- 工业自动化
- 机械设备
- 传感器连接
- 控制系统`
        
        setMarkdownContent(defaultContent)
      }
    } catch (err) {
      console.error('加载markdown文件失败:', err)
      setError('加载文档失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">产品未找到</h1>
            <p className="text-gray-300 mb-8">抱歉，您访问的产品不存在。</p>
            <Link 
              to="/products/connectivity" 
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              返回Connectivity产品页面
            </Link>
          </div>
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
            to="/products/connectivity" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Connectivity Products
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
              <p className="text-gray-400">Loading...</p>
            </div>
          ) : error ? (
            <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-400 mb-4">Loading Failed</h2>
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
