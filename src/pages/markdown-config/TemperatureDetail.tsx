/**
 * Temperature产品案例详情页面组件
 * 动态加载Temperature产品案例markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import './markdown-styles.css'

// 导入Temperature产品案例markdown文件
import temperature01Content from '../articles/markdown-cases/temperature01.md?raw'
import temperature02Content from '../articles/markdown-cases/temperature02.md?raw'
import temperature03Content from '../articles/markdown-cases/temperature03.md?raw'
import temperature04Content from '../articles/markdown-cases/temperature04.md?raw'
import temperature05Content from '../articles/markdown-cases/temperature05.md?raw'
import temperature06Content from '../articles/markdown-cases/temperature06.md?raw'

// Temperature产品案例配置映射
const temperatureConfig = {
  'temperature01': {
    title: "Application of IO-Link Smart Sensors in Hydraulic Systems",
    description: "In the fields of industrial automation and construction machinery, hydraulic systems are widely used in key equipment such as injection molding machines, hydraulic presses, lifting equipment, and construction vehicles due to their outstanding energy conversion efficiency and powerful driving capability.",
    image: "http://image.sentinel-china.com/202508111332828.png"
  },
  'temperature02': {
    title: "How IO-Link temperature sensors work",
    description: "IO-Link Integrated Smart Industrial Temperature Monitoring Solution",
    image: "http://image.sentinel-china.com/202508131023283.png"
  },
  'temperature03': {
    title: "SENTINEL Products Empower the Powder Metallurgy Industry",
    description: "SENTINEL products empowering the powder metallurgy industry",
    image: "http://image.sentinel-china.com/202508111528078.png"
  },
  'temperature04': {
    title: "IO-Link Temperature Transmitter",
    description: "IO-Link smart communication, and 4-20mA output, ideal for food, pharmaceutical, and chemical industries.",
    image: "http://image.sentinel-china.com/202508141552680.png"
  },
  'temperature05': {
    title: "Precision Control · Efficient Production: SENTINEL IO-Link Sensors Empower the Beer Industry",
    description: "Enhance beer brewing automation with SENTINEL IO-Link Smart Sensor Series, including temperature, pressure, and flow sensors plus IO-Link master stations.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  },
  'temperature06': {
    title: "Vortex flow sensor on mold temperature controller",
    description: "Discover how SENTINEL vortex flow sensors enhance mold temperature controllers in plastic and die-casting industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
  }
}

// markdown内容映射
const markdownContentMap = {
  'temperature01': temperature01Content,
  'temperature02': temperature02Content,
  'temperature03': temperature03Content,
  'temperature04': temperature04Content,
  'temperature05': temperature05Content,
  'temperature06': temperature06Content
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
    
    // 无序列表 - 改进版本，处理多级嵌套
    .replace(/^(\s*)-\s+(.*$)/gim, function(match, spaces, content) {
      const level = Math.floor(spaces.length / 2)
      const indent = '  '.repeat(level)
      return `${indent}<li>${content}</li>`
    })
    
    // 有序列表
    .replace(/^(\s*)\d+\.\s+(.*$)/gim, function(match, spaces, content) {
      const level = Math.floor(spaces.length / 2)
      const indent = '  '.repeat(level)
      return `${indent}<li>${content}</li>`
    })
    
    // 将连续的li标签包装在ul/ol中
    .replace(/(<li>[\s\S]*?<\/li>)/g, function(match) {
      const items = match.match(/<li>[\s\S]*?<\/li>/g)
      if (items) {
        return `<ul class="list-disc list-inside space-y-2 my-4">${items.join('')}</ul>`
      }
      return match
    })
    
    // 段落处理 - 将连续的非空行包装在p标签中
    .replace(/^([^<>\n].*?)$/gm, '<p class="mb-4 leading-relaxed">$1</p>')
    
    // 清理多余的p标签
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/<p>\s*(<h[1-6]>.*?<\/h[1-6]>)\s*<\/p>/g, '$1')
    .replace(/<p>\s*(<ul>.*?<\/ul>)\s*<\/p>/g, '$1')
    .replace(/<p>\s*(<ol>.*?<\/ol>)\s*<\/p>/g, '$1')
    .replace(/<p>\s*(<blockquote>.*?<\/blockquote>)\s*<\/p>/g, '$1')
    .replace(/<p>\s*(<pre>.*?<\/pre>)\s*<\/p>/g, '$1')
    .replace(/<p>\s*(<img.*?\/>)\s*<\/p>/g, '$1')
    
    // 清理多余的空白
    .replace(/\n\s*\n/g, '\n')
    .trim()
}

export default function TemperatureDetail() {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState<string>('')
  const [config, setConfig] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const markdownContent = markdownContentMap[id as keyof typeof markdownContentMap]
      const configData = temperatureConfig[id as keyof typeof temperatureConfig]
      
      if (markdownContent && configData) {
        const renderedContent = renderMarkdown(markdownContent)
        setContent(renderedContent)
        setConfig(configData)
      } else {
        setContent('<p class="text-red-400">Content not found</p>')
        setConfig({ title: 'Not Found', description: 'The requested content could not be found.' })
      }
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-300">加载中...</p>
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
            to="/products/sensor/temperature-sensor" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Temperature Sensor
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-white">
              {config?.title || 'Temperature Sensor'}
            </h1>
            <p className="text-xl text-gray-400">{config?.description || 'Temperature sensor product details'}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-300">加载中...</p>
            </div>
          ) : (
            <div className="prose prose-gray dark:prose-invert prose-yellow dark:prose-yellow max-w-none">
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          )}
        </div>
      </section>

      
    </div>
  )
}
