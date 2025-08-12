/**
 * 解决方案详情页面组件
 * 动态加载markdown文档并应用统一样式
 */
import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
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
    title: "Application of IO-Link Smart Sensors in Hydraulic Systems",
    description: "In the fields of industrial automation and construction machinery, hydraulic systems are widely used in key equipment such as injection molding machines, hydraulic presses, lifting equipment, and construction vehicles due to their outstanding energy conversion efficiency and powerful driving capability.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/6ab63c35-f446-428e-bcdf-052e08cbbe82.jpg"
  },
  'solutions02': {
    title: "Split-Type Level Sensor Solves Foam Interference and Space Constraints in Dairy Tank Level Measurement",
    description: "In the dairy processing industry, accurate monitoring of tank liquid levels is not only linked to production efficiency but also directly impacts product quality and safety.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/8224106a-a7d3-48e1-ae54-3597b225d1ae.jpg"
  },
  'solutions03': {
    title: "IO-Link Smart Sensors in Wind Turbine Hydraulic Systems",
    description: "In the context of a global shift toward a green and low-carbon energy structure, wind power—an important part of renewable energy—is experiencing continuous and rapid growth.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/a7b245d5-2bec-43c4-be53-81112e8b2eb6.jpg"
  },
  'solutions04': {
    title: "Hot-Plug Mechanism Enables Rapid Modular Pallet Switching in Bus Welding Lines",
    description: "With the continuous advancement of smart manufacturing and Industry 4.0, coach welding lines are moving toward a new stage of higher automation, stronger flexibility, and deeper informatization.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/14e6e88a-07a6-44a5-b221-323b77d43fc8.jpg"
  },
  'solutions05': {
    title: "Dual Options of Vortex Flow Sensors and Flow Switches to Address Flow Monitoring Challenges",
    description: "In the field of industrial automation, accurate flow measurement and real-time monitoring are essential for ensuring production efficiency and equipment safety.",
    image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/b898b1b0-fbb8-4b0e-93e6-0929a9459bda.jpg"
  },
  'solutions06': {
    title: "SENTINEL Distributed I/O Modules in Photovoltaic Monocrystalline Silicon Production Lines",
    description: "With the global energy structure transforming, the photovoltaic industry, as a crucial part of clean energy, is rapidly developing.",
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
      
      console.log('Trying to load markdown file:', id)
      
      // 从markdown内容映射中获取内容
      const content = markdownContentMap[id as keyof typeof markdownContentMap]
      
      if (content) {
        console.log('Loaded markdown content length:', content.length)
        console.log('Content preview:', content.substring(0, 200) + '...')
        setMarkdownContent(content)
      } else {
        console.log('Markdown file not found:', id)
        // 如果文件不存在，显示默认内容
        setMarkdownContent(`# ${solutionConfig[id as keyof typeof solutionConfig]?.title || 'Solution Details'}

## Overview

The detailed documentation for this solution is being prepared, please check back later.

## Key Features

- Professional solution design
- Advanced technology architecture
- Comprehensive implementation services
- Continuous operational support

## Contact Us

If you are interested in this solution, please contact us:

- **Phone**: 400-888-8888
- **Email**: info@example.com
- **Address**: Innovation Building, Science Park, Chaoyang District, Beijing

We will provide professional consulting services and customized solutions for you.`)
      }
    } catch (err) {
      console.error('Failed to load markdown file:', err)
      setError('Document loading failed, please try again later')
      setMarkdownContent(`# Document Loading Failed

Sorry, an error occurred while loading the document, please try again later.

## Contact Us

If you are interested in this solution, please contact us:

- **Phone**: 400-888-8888
- **Email**: info@example.com
- **Address**: Innovation Building, Science Park, Chaoyang District, Beijing`)
    } finally {
      setLoading(false)
    }
  }

  if (!solution) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Solution Not Found</h1>
          <Link to="/solutions" className="text-yellow-400 hover:text-yellow-300">
            Back to Solutions Page
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
            to="/solutions" 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Solutions
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{solution.title}</h1>
            <p className="text-lg text-gray-300">{solution.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-300">Loading...</p>
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
                Retry
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
    // 移除HTML注释
    .replace(/<!--[\s\S]*?-->/g, '')
    
    // 图片渲染 - 必须在其他替换之前
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-lg my-4" />')
    
    // 分隔线处理
    .replace(/^---$/gim, '<hr class="border-gray-600 my-8" />')
    
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
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>$1</code></pre>')
    
    // 行内代码
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
    
    // 链接 - 改进版本，处理特殊格式
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-yellow-400 hover:text-yellow-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
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