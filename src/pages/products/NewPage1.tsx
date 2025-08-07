/**
 * 信息安全服务详情页面
 * 展示信息安全服务的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Shield, Lock, Zap, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText, Eye } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function SecurityServiceDetail() {
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
      icon: Shield,
      title: "安全评估",
      description: "全面的安全风险评估，识别系统漏洞和潜在威胁"
    },
    {
      icon: Lock,
      title: "风险管控",
      description: "多层次安全防护体系，建立完善的风险管控机制"
    },
    {
      icon: Zap,
      title: "应急响应",
      description: "7×24小时安全监控，快速响应安全事件和威胁"
    },
    {
      icon: Eye,
      title: "合规咨询",
      description: "专业的安全合规咨询服务，确保符合行业标准"
    }
  ]

  const productSpecs = [
    { spec: "安全评估范围", value: "网络、应用、数据、物理安全全面评估" },
    { spec: "漏洞扫描", value: "自动化漏洞扫描，支持1000+漏洞检测" },
    { spec: "渗透测试", value: "专业渗透测试团队，模拟真实攻击场景" },
    { spec: "安全监控", value: "7×24小时实时监控，威胁检测准确率99%" },
    { spec: "应急响应", value: "15分钟内响应，2小时内到达现场" },
    { spec: "合规标准", value: "ISO27001、等保三级、GDPR、PCI DSS" },
    { spec: "安全认证", value: "CISSP、CISM、CEH等专业认证" },
    { spec: "服务范围", value: "企业级、政府、金融、医疗等行业" },
    { spec: "SLA保障", value: "99.99% 服务可用性" },
    { spec: "技术支持", value: "7×24小时专家服务" }
  ]

  const downloads = [
    {
      title: "安全服务白皮书",
      description: "详细的信息安全服务方案和技术架构",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      link: "https://example.com/security-service-whitepaper.pdf"
    },
    {
      title: "安全评估报告模板",
      description: "标准化的安全评估报告模板和指南",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      link: "https://example.com/security-assessment-template.pdf"
    },
    {
      title: "安全工具包",
      description: "专业的安全检测和防护工具包",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      link: "https://example.com/security-toolkit.zip"
    }
  ]

  const cases = [
    {
      company: "某大型银行",
      industry: "金融业",
      challenge: "需要满足严格的金融监管要求，保护客户资金和数据安全",
      solution: "建立多层次安全防护体系，实施全面的安全评估和监控",
      result: "通过等保三级认证，安全事件响应时间缩短80%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/54fa4277-b18f-4eb2-8a01-f6982d338dca.jpg"
    },
    {
      company: "某政府机构",
      industry: "政府部门",
      challenge: "需要保护敏感政务数据，防止网络攻击和数据泄露",
      solution: "部署专业安全防护系统，建立完善的安全管理制度",
      result: "成功防御99%的网络攻击，数据安全等级提升至最高级别",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/58cd29dd-74ac-45e6-b4b1-0b6e67acf934.jpg"
    },
    {
      company: "某医疗集团",
      industry: "医疗健康",
      challenge: "需要保护患者隐私数据，符合医疗行业安全标准",
      solution: "实施数据加密和访问控制，建立医疗数据安全防护体系",
      result: "通过HIPAA认证，患者数据安全事件零发生",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/f5ef549a-b4ff-4f70-b843-c738d033ebde.jpg"
    }
  ]

  const relatedProducts = [
    {
      title: "网络安全防护",
      description: "企业级网络安全防护解决方案",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "数据加密服务",
      description: "全方位数据加密和保护服务",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
    },
    {
      title: "身份认证系统",
      description: "多因素身份认证和访问控制",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "安全运营中心",
      description: "7×24小时安全监控和响应服务",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    },
    {
      title: "合规咨询服务",
      description: "专业的安全合规咨询和认证服务",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "安全培训服务",
      description: "企业员工安全意识培训服务",
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
                src="https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/5ab15d0d-e868-427f-b801-5508d9829f2f.jpg"
                alt="信息安全服务"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-4">
                  <Shield className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    信息安全<span className="text-yellow-400">服务</span>
                  </h1>
                  <p className="text-gray-400">Information Security Services</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                全方位的信息安全解决方案，保护企业数据和系统安全。
                提供安全评估、风险管控、应急响应和合规咨询等专业服务。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('description')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  更多服务信息
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                  免费评估
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
              核心<span className="text-yellow-400">服务</span>
            </h2>
            <p className="text-xl text-gray-300">专业的信息安全技术，为您的业务保驾护航</p>
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
                服务描述
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                服务规格
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'downloads'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                资源下载
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Service Description Tab */}
            {activeTab === 'description' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">服务架构</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      我们的信息安全服务采用多层次防护架构，从网络边界到数据核心，
                      建立全方位的安全防护体系。通过先进的安全技术和专业团队，
                      确保企业信息资产的安全。
                    </p>
                    <p>
                      提供7×24小时安全监控和应急响应服务，建立完善的安全管理制度。
                      结合行业最佳实践，帮助企业建立符合标准的信息安全管理体系。
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Shield className="text-yellow-400 mr-2" size={20} />
                        <span>安全评估</span>
                      </div>
                      <div className="flex items-center">
                        <Lock className="text-yellow-400 mr-2" size={20} />
                        <span>风险管控</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="text-yellow-400 mr-2" size={20} />
                        <span>应急响应</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="text-yellow-400 mr-2" size={20} />
                        <span>合规咨询</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                      alt="安全服务架构视频"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                        <Play className="text-black ml-1" size={24} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-center mt-4">点击播放服务介绍视频</p>
                </div>
              </div>
            )}

            {/* Service Specs Tab */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">服务规格</h3>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          服务项目
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          规格详情
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
            <p className="text-xl text-gray-300">真实的成功案例，见证信息安全服务的价值</p>
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
              相关<span className="text-yellow-400">服务</span>
            </h2>
            <p className="text-xl text-gray-300">与信息安全相辅相成的其他服务</p>
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
              准备开始您的<span className="text-yellow-400">信息安全</span>防护？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              我们的专业团队将为您提供个性化的信息安全解决方案
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <Phone size={20} className="mr-2 text-yellow-400" />
                400-123-4567
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-2 text-yellow-400" />
                security@company.com
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