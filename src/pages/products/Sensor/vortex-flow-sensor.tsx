/**
 * 涡街流量传感器详情页面
 * 展示涡街流量传感器的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Zap, Link2, Split, BarChart3, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText, Clock, TrendingUp } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'

export default function VortexFlowSensorDetail() {
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
      icon: Zap,
      title: "Principle and function",
      description: "Adopting the von Kármán vortex street principle, it supports the output and dual display of both flow rate and temperature signals."
    },
    {
      icon: Link2,
      title: "IO-Link",
      description: "There are various output methods, and it is compatible with IO-Link function."
    },
    {
      icon: Split,
      title: "Flexible signals",
      description: "The switch signal supports various types such as NPN/PNP/push - pull."
    },
    {
      icon: BarChart3,
      title: "Data record",
      description: "The cumulative traffic recording function is convenient for statistical analysis."
    }
  ]

  const productSpecs = [
    { spec: "Output function", value: " | Two 4-20mA outputs | Two-way switching IO-Link | Two 0-10V outputs |" },
    { spec: "Range", value: " | 2-16L/min | 5-40L/min | 10-100L/min | " },
    { spec: "Interface thread", value: " | RC3/4 | RC1 | G1 | G1/2 | G3/8 | NPT1 | RC1/2 | RC3/8 | NPT3/8 | NPT3/4 | NPT1/2 | G3/4 |" },
    { spec: "Electrical connection", value: " | M12x1 connector | 2m PVC cable | " },
    { spec: "Communication Interface", value: " | IO-Link | " },
    { spec: "Temperature range", value: " | 0-100℃ | " },
    { spec: "Working principle", value: " | von Kármán |" }
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
      company: "two 4-20mA outputs",
      industry: "Vortex flow sensor",
      challenge: "Real-time monitoring of medium flow rate and temperature ensures precise and stable mold temperature control, enhancing both production efficiency and product quality.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-13-18.jpg"
    },
    {
      company: "two 0-10V outputs",
      industry: "Vortex flow sensor",
      challenge: "Its independence from fluid conductivity allows for stable and accurate flow measurement of low-conductivity industrial pure water, addressing the instability issues of electromagnetic flowmeters in such applications.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-13-18.jpg"
    },
    {
      company: "2-way switching IO-Link",
      industry: "Vortex flow sensor",
      challenge: "The sensor monitors coolant flow conditions to prevent equipment damage due to cooling failure, ensuring safe and reliable system operation.",
      solution: "",
      result: "",
      image: "https://image.sentinel-china.com/2025-08-13-17.jpg"
    }
  ]

  const relatedProducts = [
    {
      title: "Advanced Vortex Flow Technology",
      description: "",
      image: "http://image.sentinel-china.com/202508111332828.png",
      link: "/products/vortex/vortex01"
    },
    {
      title: "Industrial Vortex Flow Meters",
      description: "",
      image: "http://image.sentinel-china.com/202508111358563.png",
      link: "/products/vortex/vortex02"
    },
    {
      title: "High-Performance Flow Measurement",
      description: "",
      image: "http://image.sentinel-china.com/202508131504988.png",
      link: "/products/vortex/vortex03"
    },
    {
      title: "Smart Vortex Sensor Solutions",
      description: "",
      image: "http://image.sentinel-china.com/202508131437599.png",
      link: "/products/vortex/vortex04"
    },
    {
      title: "",
      description: "",
      image: "http://image.sentinel-china.com/202508141557934.png",
      link: "/products/vortex/vortex05"
    },
    {
      title: "",
      description: "",
      image: "http://image.sentinel-china.com/202508141617155.png",
      link: "/products/vortex/vortex06"
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://image.sentinel-china.com/2025-08-11-vortex.png"
                alt="Vortex Flow Sensor"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    vortex flow<span className="text-yellow-400"> Sensor</span>
                  </h1>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                In the field of modern industrial automation, accurate flow measurement is crucial for ensuring the efficiency and quality of the production process. Vortex flow sensors play an indispensable role in many application scenarios due to their high precision, stability, and reliability.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.location.href = 'https://www.sentinel-china.com/eproduct/index_100000020775522.html'}
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
                      Von Kaman vortex principle.Flow,temperature dual switching signal output,dual display. High-resolution lPS display.Four viewing directions can be switched.Cumulative flow recording function.Analog or switch output,compatible with lO-Link protocol.
                    </p>
                    <p>
                      Switching signal NONC,NPN/PNP/push-pull optional.Units can be selected,simple button menu operation.Various thread specifications,suitable for different installation requirements.Compact size,takes up little space.Standard 4-pin M12 electrical interface.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Zap className="text-yellow-400 mr-2" size={20} />
                        <span>Principle and function</span>
                      </div>
                      <div className="flex items-center">
                        <Link2 className="text-yellow-400 mr-2" size={20} />
                        <span>IO-Link</span>
                      </div>
                      <div className="flex items-center">
                        <Split className="text-yellow-400 mr-2" size={20} />
                        <span>Flexible signals</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="text-yellow-400 mr-2" size={20} />
                        <span>Data record</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/fK7JNBXE2Ig?si=9lSnUZblAXLG63lB"
                      title="Vortex Flow Sensor Technology Demonstration"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-gray-400 text-center mt-4">Vortex Flow Sensor Technology Overview</p>
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
              Application<span className="text-yellow-400"> Scenarios</span>
            </h2>
            <p className="text-xl text-gray-300">Vortex flow sensors are widely used in industrial pure water monitoring, flow and temperature management in mold temperature machines, cooling water monitoring, the food and beverage industry, etc.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-yellow-400/10 to-transparent dark:bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                  // 根据不同的协议跳转到不同的页面
                  switch(case_.company) {
                    case 'Mold temperature controllers (MTCs)':
                      window.location.href = 'https://www.sentinel-china.com/eInformation/1157.html'; 
                      break;
                    case 'Industrial pure water monitoring':
                      window.location.href = ''; 
                      break;
                    case 'Cooling systems':
                      window.location.href = ''; 
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
                    <h3 className="text-lg font-bold  text-gray-800 dark:text-white">{case_.company}</h3>
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

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Related<span className="text-yellow-400"> Articles</span>
            </h2>
            <p className="text-xl text-gray-300"></p>

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
              Get your <span className="text-yellow-400">preferential</span> price
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
