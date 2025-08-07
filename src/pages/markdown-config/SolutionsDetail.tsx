/**
 * 解决方案详情页面组件
 * 动态加载markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft, Building2, ShoppingCart, Heart, GraduationCap, Factory, Banknote } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'

// 直接导入markdown文件
import solutions01Content from '../articles/markdown-solution/solutions01.md?raw'
import solutions02Content from '../articles/markdown-solution/solutions02.md?raw'
import solutions03Content from '../articles/markdown-solution/solutions03.md?raw'
import solutions04Content from '../articles/markdown-solution/solutions04.md?raw'
import solutions05Content from '../articles/markdown-solution/solutions05.md?raw'
import solutions06Content from '../articles/markdown-solution/solutions06.md?raw'



// 解决方案配置映射
const solutionConfig = {
  'solutions01': {
    icon: Building2,
    title: "Smart City Solutions",
    description: "Building intelligent city management platforms to improve urban governance efficiency and residents' quality of life.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/6ab63c35-f446-428e-bcdf-052e08cbbe82.jpg"
  },
  'solutions02': {
    icon: ShoppingCart,
    title: "New Retail Digital Platform",
    description: "Omni-channel retail management system integrating online and offline resources to improve retail business efficiency.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/8224106a-a7d3-48e1-ae54-3597b225d1ae.jpg"
  },
  'solutions03': {
    icon: Heart,
    title: "Smart Healthcare Solutions",
    description: "Medical information management system improving medical service quality and patient experience.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/a7b245d5-2bec-43c4-be53-81112e8b2eb6.jpg"
  },
  'solutions04': {
    icon: GraduationCap,
    title: "Smart Education Platform",
    description: "Modern education management system promoting teaching innovation and learning effectiveness improvement.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/14e6e88a-07a6-44a5-b221-323b77d43fc8.jpg"
  },
  'solutions05': {
    icon: Factory,
    title: "Industry 4.0 Smart Manufacturing",
    description: "Smart manufacturing solutions achieving digitalization and intelligent upgrade of production processes.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/b898b1b0-fbb8-4b0e-93e6-0929a9459bda.jpg"
  },
  'solutions06': {
    icon: Banknote,
    title: "Financial Technology Solutions",
    description: "Digital transformation solutions for the financial industry, improving financial service efficiency and security.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/da0e3a1a-11f1-43ac-abb5-cfabc4ee1c46.jpg"
  }
}

// markdown内容映射
const markdownContentMap = {
  'solutions01': solutions01Content,
  'solutions02': solutions02Content,
  'solutions03': solutions03Content,
  'solutions04': solutions04Content,
  'solutions05': solutions05Content,
  'solutions06': solutions06Content
}

export default function SolutionsDetail() {
  const { solutionId } = useParams<{ solutionId: string }>()
  const [solution, setSolution] = useState<any>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (solutionId && solutionConfig[solutionId as keyof typeof solutionConfig]) {
      setSolution(solutionConfig[solutionId as keyof typeof solutionConfig])
      
      // 直接加载markdown内容
      loadMarkdownContent(solutionId)
    }
  }, [solutionId])

  const loadMarkdownContent = async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('尝试加载markdown文件:', id)
      
      // 从markdown内容映射中获取内容
      const content = markdownContentMap[id as keyof typeof markdownContentMap]
      
      if (content) {
        console.log('加载的markdown内容长度:', content.length)
        console.log('内容预览:', content.substring(0, 200) + '...')
        setMarkdownContent(content)
      } else {
        console.log('未找到markdown文件:', id)
        // 如果文件不存在，显示默认内容
        setMarkdownContent(`# ${solutionConfig[id as keyof typeof solutionConfig]?.title || '解决方案详情'}

## 概述

该解决方案的详细文档正在准备中，请稍后再来查看。

## 功能特点

- 专业的解决方案设计
- 先进的技术架构
- 完善的实施服务
- 持续的运维支持

## 联系我们

如果您对该解决方案感兴趣，欢迎联系我们：

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

如果您对该解决方案感兴趣，欢迎联系我们：

- **电话**: 400-888-8888
- **邮箱**: info@example.com
- **地址**: 北京市朝阳区科技园区创新大厦`)
    } finally {
      setLoading(false)
    }
  }

  if (!solution) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">解决方案未找到</h1>
          <Link to="/solutions" className="text-yellow-400 hover:text-yellow-300">
            返回解决方案页面
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = solution.icon

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/solutions" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回解决方案
          </Link>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center">
              <IconComponent className="text-yellow-400" size={32} />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">{solution.title}</h1>
              <p className="text-lg text-gray-300 mt-2">{solution.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-300">加载中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4">{error}</p>
              <button 
                onClick={() => loadMarkdownContent(solutionId!)}
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                重试
              </button>
            </div>
          ) : (
            <div className="prose prose-invert prose-yellow max-w-none">
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
    // 图片渲染 - 必须在其他替换之前
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-lg my-4" />')
    
    // 标题渲染
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // 列表渲染
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    
    // 粗体文本
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // 斜体文本
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // 代码块
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>')
    
    // 行内代码
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
    
    // 链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-yellow-400 hover:text-yellow-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // 段落处理
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|p|li|ul|ol|img|pre|a])(.*$)/gim, '<p>$1</p>')
    
    // 清理空标签
    .replace(/<p><\/p>/g, '')
    .replace(/<p><\/p>/g, '')
    
    // 包装列表项
    .replace(/(<li>.*<\/li>)/gim, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
} 