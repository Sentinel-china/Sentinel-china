/**
 * 液位传感器详情页面
 * 展示液位传感器的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Waves, Code, Zap, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function LiquidLevelSensorDetail() {
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
      title: "Double parameter monitoring",
      description: "Integrated liquid level and temperature dual monitoring."
    },
    {
      icon: Code,
      title: "IO-Link",
      description: "Supports the IO-Link protocol, making it easy to connect to various industrial control systems."
    },
    {
      icon: Zap,
      title: "Multiple output modes",
      description: "It includes analog, digital signals, etc., and supports NPN/PNP/push - pull as well as normally open/normally closed."
    },
    {
      icon: Users,
      title: "Safe and convenient",
      description: "Parameter locking function to prevent misoperation."
    }
  ]

  const productSpecs = [
    { spec: "Process connection", value: " | G1/2 external thread | G1/4 external thread | M18x1.5 internal thread | Split electronic compartment | " },
    { spec: "Output function", value: " | 2xPNP/NPN | 4...20mA+2xPNP/NPN | 0...10V+2xPNP/NPN | 4...20mA | 0...10V | switching;analogue current;IO-Link;(configurable) | analogue current;IO-Link | " },
    { spec: "Probe material", value: " | 304 Stainless steel | 316 Stainless steel | " },
    { spec: "Electrical connection", value: " | M12x1 connector | 2m cable | " },
    { spec: "Probe length", value: " | 250mm | 500mm | (Customizable) | " }
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
      company: "In beer production",
      industry: "liquid level Sensor",
      challenge: "liquid level sensors are used throughout brewing, fermentation, storage, and filling stages, effectively preventing overflows or dry runs, and enhancing production efficiency and hygiene safety.With hygienic design and high protection levels, SENTINEL sensors support CTP/CIP/SIP cleaning processes, ensuring reliable and stable food-grade production operations.",
      solution: "",
      result: "",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/54fa4277-b18f-4eb2-8a01-f6982d338dca.jpg"
    },
    {
      company: "Emulsion production enterprise",
      industry: "liquid level Sensor",
      challenge: "Since the emulsion has a certain viscosity, and some products have hygiene requirements for the contact materials, the enterprise has selected the liquid level sensor made of SENTINEL's food - grade materials. The sensor can accurately monitor the liquid level in the tank, and can also monitor the temperature of the emulsion, which is convenient for the enterprise to control the production process.",
      solution: "",
      result: "",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/58cd29dd-74ac-45e6-b4b1-0b6e67acf934.jpg"
    },
    {
      company: "Beverage production enterprises",
      industry: "liquid level Sensor",
      challenge: "Food and beverage production enterprises need to strictly control the liquid level of storage tanks during the storage of raw materials such as fruit juice and syrup. The enterprise selects SENTINEL's food - grade 304 stainless - steel liquid - level sensor. At the same time, the sensor can issue low - liquid - level warnings in a timely manner to avoid production line stoppages caused by the depletion of raw materials, and also prevent raw material spills when the liquid level is high, which can cause waste and pollution. It provides strong support for the continuity and safety of food and beverage production.",
      solution: "",
      result: "",
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
                    liquid level<span className="text-yellow-400"> Sensor</span>
                  </h1>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The SENTINEL liquid level sensor is a critical device designed for detecting and measuring the height of liquids, providing real-time monitoring of level changes in containers or tanks. It is widely used in industrial automation, environmental protection, chemical energy, oil storage and transportation, food processing, and medical equipment, helping enterprises enhance safety, automation, and management efficiency.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.location.href = 'https://www.sentinel-china.com/eproduct/index_100000020724378.html'}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  More
                </button>
                <Link
                  to="/contact"
                  className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors"
>
                  Contact us
                </Link>
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
              Core<span className="text-yellow-400"> Advantages</span>
            </h2>
            <p className="text-xl text-gray-300"></p>
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
                Product
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Parameters
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'downloads'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Downloads
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Product Description Tab */}
            {activeTab === 'description' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Introduction</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      IO-Link Smart liquid level/Temperature Sensor.4-digit large digital tube display, mirroring, semi-transparent design.The display panel adopts an integrated molded housing.
                    </p>
                    <p>
                      Standard 4-pin A-code M12 interface.Simple key operation,with key lock funcition.The upper part of the housing can be rotated 300°.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Waves className="text-yellow-400 mr-2" size={20} />
                        <span>Double parameter monitoring</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="text-yellow-400 mr-2" size={20} />
                        <span>IO-Link</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="text-yellow-400 mr-2" size={20} />
                        <span>Multiple output modes</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="text-yellow-400 mr-2" size={20} />
                        <span>Safe and convenient</span>
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
                  <p className="text-gray-400 text-center mt-4"></p>
                </div>
              </div>
            )}

            {/* Product Specs Tab */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">Product Technical Specifications</h3>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          PROJECT
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          PARAMETER
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
                <h3 className="text-2xl font-bold mb-8 text-center">Downloads</h3>
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
                          Download Immediately
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
              Application<span className="text-yellow-400"> Scenarios</span>
            </h2>
            <p className="text-xl text-gray-300">SENTINEL's level sensors are widely applied in food and beverage, emulsion, pharmaceutical, chemical, and water treatment industries, enabling precise level monitoring in various liquid tanks, reactors, and pipeline systems.</p>
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
                     <h4 className="text-sm font-semibold text-yellow-400 mb-2">Introduction</h4>
                     <p className="text-gray-300 text-sm">{case_.challenge}</p>
                   </div>
                   
                   <div className="mb-4">
                     <h4 className="text-sm font-semibold text-yellow-400 mb-2"></h4>
                     <p className="text-gray-300 text-sm">{case_.solution}</p>
                   </div>
                   
                   <div>
                     <h4 className="text-sm font-semibold text-yellow-400 mb-2"></h4>
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
               Related<span className="text-yellow-400"> Articles</span>
             </h2>
            <p className="text-xl text-gray-300"></p>

          </div>

          <div className="relative">
            {/* Left Arrow - 只在有多个产品时显示 */}
            {relatedProducts.length > 1 && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
              >
                <ChevronLeft className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={20} />
              </button>
            )}

            {/* Right Arrow - 只在有多个产品时显示 */}
            {relatedProducts.length > 1 && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
              >
                <ChevronRight className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={20} />
              </button>
            )}

            <div 
              ref={scrollContainerRef}
              className={`flex gap-4 sm:gap-6 pb-4 px-2 sm:px-4 ${
                relatedProducts.length === 1 
                  ? 'justify-center' 
                  : 'overflow-x-auto scrollbar-hide'
              }`}
              onScroll={handleScroll}
            >
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-56 h-40 sm:w-64 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-60 object-cover rounded-2xl border-2 border-gray-700 hover:border-yellow-400 transition-colors duration-300"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1">{product.title}</h4>
                      <p className="text-gray-200 text-xs sm:text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator - 只在有多个产品时显示 */}
            {relatedProducts.length > 1 && (
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="flex space-x-1 sm:space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
                     <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl border border-yellow-400/20 p-12 text-center">
             <h2 className="text-3xl font-bold mb-4">
               Get your<span className="text-yellow-400"> preferential</span> price
             </h2>
             <p className="text-xl text-gray-300 mb-8">
               Our professional team will provide you with personalized solutions.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
               <div className="flex items-center text-gray-300">
                 <Mail size={20} className="mr-2 text-yellow-400" />
                 export.sentinel@gmail.com
               </div>
             </div>
             
             <div className="flex flex-wrap gap-4 justify-center mt-8">
               <Link to="/contact#send-message" className="inline-flex items-center border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                 Contact us
                 <ArrowRight size={20} className="ml-2" />
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
