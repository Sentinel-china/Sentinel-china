/**
 * 商业智能分析详情页面
 * 展示商业智能分析的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Settings, Shield, Cable, Plug, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText, BarChart3, TrendingUp, Brain } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function BusinessIntelligenceDetail() {
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
      icon: Settings,
      title: "Custom & standard options",
      description: "Offers both to meet various needs"
    },
    {
      icon: Shield,
      title: "Fits harsh environments",
      description: "Works stably in tough industrial settings"
    },
    {
      icon: Cable,
      title: "Diverse products",
      description: "Includes connectors, cables and more"
    },
    {
      icon: Plug,
      title: "Cost-saving & efficient",
      description: "Optimizes wiring for lower cost and higher efficiency"
    }
  ]

  const productSpecs = [
    { spec: "Product type", value: " | 7/8” POWER CABLE | Industrial Ethernet Cable | Field-Wireable Connectors | Cordsets | Junction Boxes |" }
  ]

  const downloads = [
    {
      title: "Sensors Overview",
      description: "Technical parameters",
      image: "/fluid-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/2025052816087706.pdf"
    },
    {
      title: "I/O Module Overview",
      description: "Technical parameters",
      image: "/module-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/2025052816055141.pdf"
    },
    {
      title: "IO-Link Overview",
      description: "Technical parameters",
      image: "/IO-Link-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/20250528162236984.pdf"
    }
  ]

  const cases = [
    {
      company: "JUNCTION BOXES",
      industry: "CONNECTIVITY",
      challenge: "M12 and M8 standard interfaces can be provided, as well as 4-channel and 8-channel interface channels. Each channel can be divided into single-signal output and dual-signal output.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-14-30.jpg"
    },
    {
      company: "CORDSETS",
      industry: "CONNECTIVITY",
      challenge: "SENTINEL- sensor/actuator connector system covers prefabricated connectors with M8, M12, M16 and 7/8\" standard connection sizes.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-14-32.jpg"
    },
    {
      company: "CONNECTORS",
      industry: "CONNECTIVITY",
      challenge: "SENTINEL- field wiring connector, which covers M8, M12 and M16 standard connector sizes, and has straight-line and right-angle connections. Field connector allows customers to connect with their own cables.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-14-31.jpg"
    }
  ]

  const relatedProducts = [
    {
      title: "",
      description: "",
      image: "http://image.sentinel-china.com/202508121550233.png",
      link: "/products/connectivity/connectivity01"
    },
    {
      title: "",
      description: "SENTINEL sensor/actuator connector system with M8, M12, M16 standards",
      image: "http://image.sentinel-china.com/202508141650679.png",
      link: "/products/connectivity/connectivity02"
    },
    {
      title: "",
      description: "Standard 7/8\" power connector for SENTINEL bus module products",
      image: "http://image.sentinel-china.com/202508111605823.png",
      link: "/products/connectivity/connectivity03"
    },
    {
      title: "",
      description: "High-performance industrial Ethernet connectivity solutions",
      image: "http://image.sentinel-china.com/202508141656047.png",
      link: "/products/connectivity/connectivity04"
    },
    {
      title: "",
      description: "Flexible field installation connector solutions",
      image: "http://image.sentinel-china.com/202508141702311.png",
      link: "/products/connectivity/connectivity05"
    },
    {
      title: "",
      description: "Tailored connectivity solutions for specific applications",
      image: "http://image.sentinel-china.com/202508111406692.jpg",
      link: "/products/connectivity/connectivity06"
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 dark:bg-gradient-to-r dark:from-gray-900 dark:to-black bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/banner4.png"
                alt="CONNECTIVITY"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    <span className="text-yellow-400">CONNECTIVITY</span>
                  </h1>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 mb-8 leading-relaxed text-justify">
                SENTINEL offers a wide variety of products are available, including male-female connectors, pre-cast connectors, junction boxes, as well as cables, and accessories. we can provide standard products and customized products to customer needs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.location.href = 'https://www.sentinel-china.com/eproduct/Iproduct_100000020715352.html'}
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Core <span className="text-yellow-400">Advantages</span>
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
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
                Products
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
                  <div className="space-y-4 text-gray-300 text-justify  dark:text-gray-300 text-gray-600 mb-8">
                    <p>
                      The connectivity system is an indispensable product for connecting field devices and control devices.
                    </p>
                    <p>
                      The connectivity products make customer wiring systems low-cost and more efficient.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Cable className="text-yellow-400 mr-2" size={20} />
                        <span>7/8" POWER CABLE</span>
                      </div>
                      <div className="flex items-center">
                        <Cable className="text-yellow-400 mr-2" size={20} />
                        <span>INDUSTRIAL ETHERNET CABLE</span>
                      </div>
                      <div className="flex items-center">
                        <Plug className="text-yellow-400 mr-2" size={20} />
                        <span>FIELD-WIREABLE CONNECTORS</span>
                      </div>
                      <div className="flex items-center">
                        <Settings className="text-yellow-400 mr-2" size={20} />
                        <span>JUNCTION BOXES</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/3DkxYNJJ9u4?si=L35NiEgG4ut406v0"
                      title="Connectivity Technology Demonstration"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-400 text-center mt-4">Connectivity Technology Overview</p>
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
                          Project
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          Parameter
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
                <h3 className="text-2xl font-bold mb-8 text-center">Resource Download</h3>
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Product <span className="text-yellow-400">Type</span>
            </h2>
            <p className="text-xl text-gray-300"></p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-yellow-400/10 to-transparent dark:bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  // 根据不同的案例跳转到不同的页面
                  switch(case_.company) {
                    case 'CONNECTORS':
                      window.location.href = 'https://www.sentinel-china.com/eproduct/index_100000020775492.html'; 
                      break;
                    case 'JUNCTION BOXES':
                      window.location.href = 'https://www.sentinel-china.com/eproduct/index_100000020757332.html'; 
                      break;
                    case 'CORDSETS':
                      window.location.href = 'https://www.sentinel-china.com/eproduct/index_100000020749591.html'; 
                      break;
                    default:
                      break;
                  }
                }}
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
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{case_.company}</h3>
                  </div>
                  {/* 添加点击提示 */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-yellow-400" size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Introduction</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-justify">{case_.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2"></h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{case_.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2"></h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">{case_.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Related <span className="text-yellow-400">Articles</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300"></p>
          </div>

          <div className="relative">
            {/* Left Arrow - 只在需要滚动时显示 */}
            {relatedProducts.length > calculateVisibleProducts() && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 hover:bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 group"
              >
                <ChevronLeft className="text-gray-300 group-hover:text-yellow-400 transition-colors" size={20} />
              </button>
            )}

            {/* Right Arrow - 只在需要滚动时显示 */}
            {relatedProducts.length > calculateVisibleProducts() && (
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
                relatedProducts.length <= calculateVisibleProducts() 
                  ? 'justify-center' 
                  : 'overflow-x-auto scrollbar-hide'
              }`}
              onScroll={handleScroll}
            >
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0">
                  <Link to={product.link} className="block">
                    <div className="group cursor-pointer">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-56 h-40 sm:w-64 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-60 object-cover rounded-2xl border-2 border-gray-700 group-hover:border-yellow-400 transition-colors duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="text-yellow-400" size={20} />
                        </div>
                      </div>
                      <div className="mt-3 px-2">
                        <h4 className="text-sm font-normal text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                          {product.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator - 只在需要滚动时显示 */}
            {relatedProducts.length > calculateVisibleProducts() && (
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
              Get your <span className="text-yellow-400">preferential </span>price
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