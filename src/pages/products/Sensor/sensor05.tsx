/**
 * 液位传感器详情页面
 * 展示液位传感器的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Waves, Code, Zap, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function LevelSensorDetail() {
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
      icon: Waves,
      title: "高精度检测",
      description: "采用超声波和雷达技术，提供高精度液位检测，测量范围0-20米"
    },
    {
      icon: Code,
      title: "连续监测",
      description: "支持连续液位监测，实时显示液位变化，提供报警功能"
    },
    {
      icon: Zap,
      title: "快速响应",
      description: "响应时间小于1秒，适合快速变化的液位监测应用"
    },
    {
      icon: Users,
      title: "防腐蚀设计",
      description: "316L不锈钢材质，适用于各种腐蚀性液体，防护等级IP68"
    }
  ]

  const productSpecs = [
    { spec: "测量范围", value: "0-20米" },
    { spec: "精度", value: "±0.1% FS" },
    { spec: "响应时间", value: "<1秒" },
    { spec: "输出信号", value: "4-20mA、0-10V、RS485" },
    { spec: "防护等级", value: "IP68" },
    { spec: "工作电压", value: "24V DC" },
    { spec: "长期稳定性", value: "±0.05%FS/年" },
    { spec: "温度系数", value: "±0.02%/°C" },
    { spec: "环境温度", value: "-40°C to +85°C" },
    { spec: "认证标准", value: "CE、RoHS、ATEX" }
  ]

  const downloads = [
    {
      title: "技术手册",
      description: "液位传感器详细技术规格和使用指南",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop",
      link: "https://example.com/level-sensor-manual.pdf"
    },
    {
      title: "安装指南",
      description: "液位传感器安装和调试指南",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      link: "https://example.com/level-sensor-installation.pdf"
    },
    {
      title: "应用案例",
      description: "液位传感器在不同行业的应用案例",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      link: "https://example.com/level-sensor-cases.pdf"
    }
  ]

  const cases = [
    {
      company: "某化工企业",
      industry: "化工行业",
      challenge: "需要监测储罐液位，确保安全生产和精确库存管理",
      solution: "安装液位传感器，实现24小时连续监测",
      result: "监测精度提升至99.9%，安全事故降低80%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/54fa4277-b18f-4eb2-8a01-f6982d338dca.jpg"
    },
    {
      company: "某水处理厂",
      industry: "水处理",
      challenge: "需要精确控制各处理池的液位，优化处理流程",
      solution: "安装液位传感器，精确控制处理池液位",
      result: "处理效率提升25%，能耗降低15%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/58cd29dd-74ac-45e6-b4b1-0b6e67acf934.jpg"
    },
    {
      company: "某石油储运企业",
      industry: "石油储运",
      challenge: "需要精确管理油罐液位，减少损耗",
      solution: "提供油罐液位管理系统，实现精确监控",
      result: "库存管理精度提升，损耗率降低50%",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/f5ef549a-b4ff-4f70-b843-c738d033ebde.jpg"
    }
  ]

  const relatedProducts = [
    {
      title: "温度传感器",
      description: "高精度温度测量解决方案",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "压力传感器",
      description: "高精度压力测量解决方案",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "振动传感器",
      description: "工业设备振动监测",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
    },
    {
      title: "气体传感器",
      description: "工业气体浓度监测",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "电流传感器",
      description: "非接触式电流测量",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    },
    {
      title: "IO模块",
      description: "工业自动化IO模块",
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
                src="https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/700dcd53-460f-4b45-b035-d500787386bd.jpg"
                alt="液位传感器"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-4">
                  <Waves className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    液位<span className="text-yellow-400">传感器</span>
                  </h1>
                  <p className="text-gray-400">Level Sensor</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                高精度液位传感器，采用超声波和雷达技术，提供0-20米测量范围的液位检测。
                内置智能校准算法，自动补偿环境因素影响，确保测量精度。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('description')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  更多产品信息
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                  免费咨询
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
            <p className="text-xl text-gray-300">专业的液位传感技术，为您的工业液体存储和处理提供可靠的液位监测</p>
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
                技术规格
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
            {/* Product Description Tab */}
            {activeTab === 'description' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">技术架构</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      我们的液位传感器采用超声波和雷达技术，结合精密电子电路设计，
                      实现高精度、快速响应的液位测量。传感器采用316L不锈钢外壳，具备优异的耐腐蚀性能。
                    </p>
                    <p>
                      内置信号调理电路，支持多种输出信号格式，包括4-20mA、0-10V和RS485数字信号。
                      采用IP68防护设计，适用于各种恶劣工业环境。
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Waves className="text-yellow-400 mr-2" size={20} />
                        <span>高精度检测</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="text-yellow-400 mr-2" size={20} />
                        <span>连续监测</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="text-yellow-400 mr-2" size={20} />
                        <span>快速响应</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="text-yellow-400 mr-2" size={20} />
                        <span>防腐蚀设计</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                      alt="液位传感器技术演示"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                        <Play className="text-black ml-1" size={24} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-center mt-4">点击播放技术演示</p>
                </div>
              </div>
            )}

            {/* Product Specs Tab */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">技术规格</h3>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          技术项目
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
            <p className="text-xl text-gray-300">真实的成功案例，见证液位传感器的价值</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48">
                  <img
                    src={case_.image}
                    alt={case_.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                                         <div className="text-sm text-yellow-400 font-semibold">{case_.industry}</div>
                     <h3 className="text-lg font-bold">{case_.company}</h3>
                   </div>
                   {/* 添加点击提示 */}
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <ArrowRight className="text-yellow-400" size={20} />
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
            <p className="text-xl text-gray-300">与液位传感器相辅相成的其他传感器产品</p>
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
               准备开始您的<span className="text-yellow-400">液位监测</span>项目？
             </h2>
             <p className="text-xl text-gray-300 mb-8">
               我们的专业团队将为您提供个性化的液位传感器解决方案
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <div className="flex items-center text-gray-300">
                 <Phone size={20} className="mr-2 text-yellow-400" />
                 400-123-4567
               </div>
               <div className="flex items-center text-gray-300">
                 <Mail size={20} className="mr-2 text-yellow-400" />
                 sensor@company.com
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
