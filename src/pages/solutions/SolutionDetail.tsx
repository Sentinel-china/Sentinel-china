/**
 * 解决方案详情页面组件
 * 动态加载markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft, Building2, ShoppingCart, Heart, GraduationCap, Factory, Banknote } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'
import { markdownContent } from './markdown-content'

// 解决方案配置映射
const solutionConfig = {
  'smart-city': {
    icon: Building2,
    title: "Smart City Solutions",
    description: "Building intelligent city management platforms to improve urban governance efficiency and residents' quality of life.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/6ab63c35-f446-428e-bcdf-052e08cbbe82.jpg"
  },
  'new-retail': {
    icon: ShoppingCart,
    title: "New Retail Digital Platform",
    description: "Omni-channel retail management system integrating online and offline resources to improve retail business efficiency.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/8224106a-a7d3-48e1-ae54-3597b225d1ae.jpg"
  },
  'smart-healthcare': {
    icon: Heart,
    title: "Smart Healthcare Solutions",
    description: "Medical information management system improving medical service quality and patient experience.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/a7b245d5-2bec-43c4-be53-81112e8b2eb6.jpg"
  },
  'smart-education': {
    icon: GraduationCap,
    title: "Smart Education Platform",
    description: "Modern education management system promoting teaching innovation and learning effectiveness improvement.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/14e6e88a-07a6-44a5-b221-323b77d43fc8.jpg"
  },
  'smart-manufacturing': {
    icon: Factory,
    title: "Industry 4.0 Smart Manufacturing",
    description: "Smart manufacturing solutions achieving digitalization and intelligent upgrade of production processes.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/b898b1b0-fbb8-4b0e-93e6-0929a9459bda.jpg"
  },
  'fintech': {
    icon: Banknote,
    title: "Financial Technology Solutions",
    description: "Digital transformation solutions for the financial industry, improving financial service efficiency and security.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/da0e3a1a-11f1-43ac-abb5-cfabc4ee1c46.jpg"
  }
}

export default function SolutionDetail() {
  const { solutionId } = useParams<{ solutionId: string }>()
  const [solution, setSolution] = useState<any>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (solutionId && solutionConfig[solutionId as keyof typeof solutionConfig]) {
      setSolution(solutionConfig[solutionId as keyof typeof solutionConfig])
      
      // 从静态内容中获取markdown
      const content = markdownContent[solutionId as keyof typeof markdownContent]
      if (content && typeof content === 'string') {
        setMarkdownContent(content)
      } else {
        setMarkdownContent('# 文档加载中...\n\n该解决方案的详细文档正在准备中，请稍后再来查看。')
      }
      setLoading(false)
    }
  }, [solutionId])

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
    // 标题渲染
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // 列表渲染
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    
    // 粗体文本
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // 段落处理
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|p|li|ul|ol])(.*$)/gim, '<p>$1</p>')
    
    // 清理空标签
    .replace(/<p><\/p>/g, '')
    .replace(/<p><\/p>/g, '')
    
    // 包装列表项
    .replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>')
} 