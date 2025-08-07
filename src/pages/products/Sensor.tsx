/**
 * 企业级数据平台详情页面
 * 展示数据平台的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Database, BarChart3, Shield, Zap, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText, TrendingUp } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function DataPlatformDetail() {
  const [activeTab, setActiveTab] = useState('description')
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(() => {
        const scrollLeft = scrollContainerRef.current?.scrollLeft || 0
        const cardWidth = 256 + 24 // 卡片宽度 + gap
        const newSlide = Math.round(scrollLeft / cardWidth)
        setCurrentSlide(Math.min(newSlide, totalSlides - 1))
      }, 300) // 等待滚动动画完成
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(() => {
        const scrollLeft = scrollContainerRef.current?.scrollLeft || 0
        const cardWidth = 256 + 24 // 卡片宽度 + gap
        const newSlide = Math.round(scrollLeft / cardWidth)
        setCurrentSlide(Math.min(newSlide, totalSlides - 1))
      }, 300) // 等待滚动动画完成
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = 256 + 24 // 卡片宽度 + gap
      const newSlide = Math.round(scrollLeft / cardWidth)
      setCurrentSlide(Math.min(newSlide, totalSlides - 1))
    }
  }

  // 初始化滚动监听器
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const features = [
    {
      icon: Database,
      title: "数据集成",
      description: "支持多种数据源接入，实现数据的统一采集和标准化处理"
    },
    {
      icon: BarChart3,
      title: "智能分析",
      description: "强大的数据分析引擎，支持实时查询和复杂业务分析"
    },
    {
      icon: Shield,
      title: "数据安全",
      description: "多层次数据安全防护，确保数据隐私和合规要求"
    },
    {
      icon: TrendingUp,
      title: "可视化展示",
      description: "丰富的图表组件，直观展示数据洞察和业务趋势"
    }
  ]

  const productSpecs = [
    { spec: "数据处理能力", value: "支持PB级数据存储和处理" },
    { spec: "实时处理", value: "毫秒级数据流处理，支持实时分析" },
    { spec: "数据源支持", value: "MySQL、Oracle、MongoDB、Kafka等" },
    { spec: "分析引擎", value: "Apache Spark、Flink、Hadoop生态" },
    { spec: "可视化组件", value: "50+图表类型，支持自定义仪表板" },
    { spec: "API接口", value: "RESTful API，支持SDK集成" },
    { spec: "安全认证", value: "ISO27001、GDPR、等保三级" },
    { spec: "部署方式", value: "私有云、公有云、混合云" },
    { spec: "SLA保障", value: "99.9% 服务可用性" },
    { spec: "技术支持", value: "7×24小时专业服务" }
  ]

  const downloads = [
    {
      title: "数据平台白皮书",
      description: "详细的技术架构和实施方案",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      link: "https://example.com/data-platform-whitepaper.pdf"
    },
    {
      title: "API文档",
      description: "完整的API接口文档和示例代码",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      link: "https://example.com/api-docs.pdf"
    },
    {
      title: "开发工具包",
      description: "SDK和开发工具包下载",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      link: "https://example.com/sdk.zip"
    }
  ]

  const cases = [
    {
      company: "某大型零售集团",
      industry: "零售业",
      challenge: "多门店数据分散，无法统一分析客户行为和销售趋势",
      solution: "构建统一数据平台，整合线上线下数据",
      result: "客户转化率提升35%，运营效率提升40%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/54fa4277-b18f-4eb2-8a01-f6982d338dca.jpg"
    },
    {
      company: "某金融机构",
      industry: "金融业",
      challenge: "需要实时监控风险，处理海量交易数据",
      solution: "部署实时数据处理平台，建立风险预警系统",
      result: "风险识别准确率提升至95%，处理效率提升60%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/58cd29dd-74ac-45e6-b4b1-0b6e67acf934.jpg"
    },
    {
      company: "某制造企业",
      industry: "制造业",
      challenge: "生产数据孤岛，无法实现智能制造决策",
      solution: "建立工业数据平台，实现生产全流程数字化",
      result: "生产效率提升25%，质量合格率提升15%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/f5ef549a-b4ff-4f70-b843-c738d033ebde.jpg"
    }
  ]

  const relatedProducts = [
    {
      title: "数据湖服务",
      description: "大规模数据存储和分析平台",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "实时流处理",
      description: "高性能实时数据处理引擎",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
    },
    {
      title: "数据可视化",
      description: "专业的数据可视化解决方案",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "数据治理",
      description: "企业级数据治理和质量管控",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    },
    {
      title: "机器学习平台",
      description: "AI驱动的数据分析平台",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "数据安全",
      description: "全方位数据安全防护方案",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
    }
  ]

  // 计算可滚动的产品数量
  const calculateVisibleProducts = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      const cardWidth = 256 + 24 // 卡片宽度 + gap
      const visibleCount = Math.floor(containerWidth / cardWidth)
      return Math.max(1, visibleCount) // 至少显示1个
    }
    return 3 // 默认值
  }

  // 计算总滚动位置数量
  const totalSlides = Math.max(1, relatedProducts.length - calculateVisibleProducts() + 1)

  return (
    <div className="min-h-screen pt-16">

      {/* Banner Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/474e050d-e958-4060-b0fc-282963347c69.jpg"
                alt="企业级数据平台"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-4">
                  <Database className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    企业级<span className="text-yellow-400">数据平台</span>
                  </h1>
                  <p className="text-gray-400">Enterprise Data Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                一站式数据管理平台，提供数据采集、存储、处理和分析的完整解决方案。
                支持多种数据源接入，实现数据的统一管理和智能分析。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('description')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  更多产品信息
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                  免费试用
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              核心<span className="text-yellow-400">优势</span>
            </h2>
            <p className="text-xl text-gray-300">专业的数据技术，为您的业务决策提供有力支撑</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <feature.icon className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Tab Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'description'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                产品描述
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                产品参数
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'downloads'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                下载中心
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Product Description Tab */}
            {activeTab === 'description' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">技术原理</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      我们的数据平台采用分布式架构设计，支持多种数据源的统一接入和管理。
                      通过数据湖技术实现海量数据的存储，结合实时流处理引擎提供毫秒级的数据分析能力。
                    </p>
                    <p>
                      采用微服务架构，支持弹性扩展，确保系统的高可用性和高性能。
                      内置机器学习算法，支持智能数据分析和预测，为企业决策提供数据支撑。
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Database className="text-yellow-400 mr-2" size={20} />
                        <span>数据集成</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="text-yellow-400 mr-2" size={20} />
                        <span>智能分析</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="text-yellow-400 mr-2" size={20} />
                        <span>数据安全</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="text-yellow-400 mr-2" size={20} />
                        <span>可视化</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                      alt="数据平台架构视频"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                        <Play className="text-black ml-1" size={24} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-center mt-4">点击播放产品演示视频</p>
                </div>
              </div>
            )}

            {/* Product Specs Tab */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">产品技术规格</h3>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          规格项目
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          参数详情
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {productSpecs.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-700/50 transition-colors">
                          <td className="px-6 py-4 text-gray-300 font-medium">
                            {item.spec}
                          </td>
                          <td className="px-6 py-4 text-white">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Downloads Tab */}
            {activeTab === 'downloads' && (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">资源下载</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {downloads.map((item, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group">
                      <div className="relative h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-300 mb-6">{item.description}</p>
                        
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-full justify-center group-hover:shadow-lg"
                        >
                          <Download size={20} className="mr-2" />
                          立即下载
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customer Cases */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              客户<span className="text-yellow-400">案例</span>
            </h2>
            <p className="text-xl text-gray-300">真实的成功案例，见证数据平台的价值</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={case_.image}
                    alt={case_.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-sm text-yellow-400 font-semibold">{case_.industry}</div>
                    <h3 className="text-lg font-bold">{case_.company}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">挑战</h4>
                    <p className="text-gray-300 text-sm">{case_.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">解决方案</h4>
                    <p className="text-gray-300 text-sm">{case_.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">成果</h4>
                    <p className="text-gray-300 text-sm font-semibold">{case_.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              相关<span className="text-yellow-400">产品</span>
            </h2>
            <p className="text-xl text-gray-300">与数据平台相辅相成的其他产品</p>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronLeft className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
            >
              <ChevronRight className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={24} />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide px-16"
              onScroll={handleScroll}
            >
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-64 h-48 object-cover rounded-2xl border-2 border-gray-700 hover:border-yellow-400 transition-colors duration-300"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white mb-1">{product.title}</h4>
                      <p className="text-gray-200 text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              准备开始您的<span className="text-yellow-400">数据平台</span>之旅？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              我们的专业团队将为您提供个性化的数据平台解决方案
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-2 text-yellow-400" />
                400-123-4567
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-2 text-yellow-400" />
                data@company.com
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact#send-message" className="inline-flex items-center border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                联系我们
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 