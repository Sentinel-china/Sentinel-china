/**
 * 产品案例详情页面组件
 * 动态加载产品案例markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft, Database, Cpu, Zap, Shield, BarChart3, Monitor } from 'lucide-react'
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
    icon: Database,
    title: "云数据库服务",
    description: "高性能、高可用的数据库解决方案",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop"
  },
  'io-module02': {
    icon: Cpu,
    title: "容器编排平台",
    description: "Kubernetes 原生容器管理平台",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
  },
  'io-module03': {
    icon: Zap,
    title: "CDN 加速服务",
    description: "全球内容分发网络，提升访问速度",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
  },
  'io-module04': {
    icon: Shield,
    title: "云安全防护",
    description: "多层次安全防护，保障数据安全",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  },
  'io-module05': {
    icon: BarChart3,
    title: "大数据分析平台",
    description: "实时数据处理和分析解决方案",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
  },
  'io-module06': {
    icon: Monitor,
    title: "AI 机器学习平台",
    description: "企业级人工智能开发平台",
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

  const IconComponent = product.icon

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
            返回产品页面
          </Link>
          
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-6">
              <IconComponent className="text-yellow-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                {product.title}
              </h1>
              <p className="text-xl text-gray-400">{product.description}</p>
            </div>
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
            <div 
              className="prose prose-invert prose-yellow max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(markdownContent) }}
            />
          )}
        </div>
      </section>
    </div>
  )
}

// 简单的markdown渲染函数
function renderMarkdown(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-yellow-400 mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-12 mb-6 border-b border-gray-700 pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-yellow-400">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
    .replace(/^- (.*$)/gim, '<li class="text-gray-300 mb-2">$1</li>')
    .replace(/^\| (.*) \|/gim, '<tr><td class="border border-gray-700 px-4 py-2">$1</td></tr>')
    .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4">')
    .replace(/^<p/, '<p class="text-gray-300 mb-4"')
    .replace(/<li/g, '<li class="text-gray-300 mb-2"')
    .replace(/<ul/g, '<ul class="list-disc list-inside mb-4 ml-4"')
    .replace(/<ol/g, '<ol class="list-decimal list-inside mb-4 ml-4"')
    .replace(/<table/g, '<table class="w-full border-collapse border border-gray-700 mb-6"')
    .replace(/<thead/g, '<thead class="bg-gray-800"')
    .replace(/<th/g, '<th class="border border-gray-700 px-4 py-2 text-left text-yellow-400"')
    .replace(/<td/g, '<td class="border border-gray-700 px-4 py-2 text-gray-300"')
}
