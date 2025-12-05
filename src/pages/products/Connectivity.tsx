/**
 * 商业智能分析详情页面
 * 展示商业智能分析的详细信息、技术优势和解决方案
 */
import { ArrowLeft, Settings, Shield, Cable, Plug, Users, Check, Phone, Mail, ArrowRight, Download, Play, Monitor, Cpu, ChevronLeft, ChevronRight, FileText, BarChart3, TrendingUp, Brain } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function BusinessIntelligenceDetail() {
  const { t } = useLanguage()
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
      title: t('pages.connectivity.features.customStandard.title'),
      description: t('pages.connectivity.features.customStandard.description')
    },
    {
      icon: Shield,
      title: t('pages.connectivity.features.harshEnvironments.title'),
      description: t('pages.connectivity.features.harshEnvironments.description')
    },
    {
      icon: Cable,
      title: t('pages.connectivity.features.diverseProducts.title'),
      description: t('pages.connectivity.features.diverseProducts.description')
    },
    {
      icon: Plug,
      title: t('pages.connectivity.features.costEfficient.title'),
      description: t('pages.connectivity.features.costEfficient.description')
    }
  ]

  const productSpecs = [
    { spec: "t('pages.connectivity.specs.productType')", value: "t('pages.connectivity.specs.productTypeValue')" }
  ]

  const downloads = [
    {
      title: t('pages.connectivity.downloads.sensorsOverview.title'),
      description: t('pages.connectivity.downloads.sensorsOverview.description'),
      image: "/fluid-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/2025052816087706.pdf"
    },
    {
      title: t('pages.connectivity.downloads.ioModuleOverview.title'),
      description: t('pages.connectivity.downloads.ioModuleOverview.description'),
      image: "/module-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/2025052816055141.pdf"
    },
    {
      title: t('pages.connectivity.downloads.ioLinkOverview.title'),
      description: t('pages.connectivity.downloads.ioLinkOverview.description'),
      image: "/IO-Link-download.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/5/20250528162236984.pdf"
    },
    {
      title: t('pages.connectivity.downloads.relayModuleOverview.title'),
      description: t('pages.connectivity.downloads.relayModuleOverview.description'),
      image: "/relay module.png",
      link: "https://www.sentinel-china.com/vancheerfile/files/2025/9/2025092816426200.pdf"
    }
  ]

  const cases = [
    {
      company: t('pages.connectivity.cases.connectors.company'),
      industry: t('pages.connectivity.cases.connectors.industry'),
      challenge: t('pages.connectivity.cases.connectors.challenge'),
      solution: "",
      result: "",
      image: "/connectivity.jpg",
      link: "https://www.sentinel-china.com/eproduct/index_100000020775492.html"
    },
    {
      company: t('pages.connectivity.cases.junctionBoxes.company'),
      industry: t('pages.connectivity.cases.junctionBoxes.industry'),
      challenge: t('pages.connectivity.cases.junctionBoxes.challenge'),
      solution: "",
      result: "",
      image: "/connectivity1.jpg",
      link: "https://www.sentinel-china.com/eproduct/index_100000020757332.html"
    },
    {
      company: t('pages.connectivity.cases.cordsets.company'),
      industry: t('pages.connectivity.cases.cordsets.industry'),
      challenge: t('pages.connectivity.cases.cordsets.challenge'),
      solution: "",
      result: "",
      image: "/connectivity2.jpg",
      link: "https://www.sentinel-china.com/eproduct/index_100000020749591.html"
    }
  ]

  const relatedProducts = [
    {
      title: t('pages.connectivity.relatedProducts.connectionTechnology'),
      description: "",
      image: "http://image.sentinel-china.com/202508121550233.png",
      link: "/products/connectivity/connectivity01"
    },
    {
      title: t('pages.connectivity.relatedProducts.ioLinkConverters'),
      description: t('pages.connectivity.relatedProducts.ioLinkConvertersDesc'),
      image: "http://image.sentinel-china.com/202508141650679.png",
      link: "/products/connectivity/connectivity02"
    },
    {
      title: t('pages.connectivity.relatedProducts.digitalSignals'),
      description: t('pages.connectivity.relatedProducts.digitalSignalsDesc'),
      image: "http://image.sentinel-china.com/202508111605823.png",
      link: "/products/connectivity/connectivity03"
    },
    {
      title: t('pages.connectivity.relatedProducts.onSiteAssembly'),
      description: t('pages.connectivity.relatedProducts.onSiteAssemblyDesc'),
      image: "http://image.sentinel-china.com/202508141656047.png",
      link: "/products/connectivity/connectivity04"
    },
    {
      title: t('pages.connectivity.relatedProducts.chinesePreferred'),
      description: t('pages.connectivity.relatedProducts.chinesePreferredDesc'),
      image: "http://image.sentinel-china.com/202508141702311.png",
      link: "/products/connectivity/connectivity05"
    },
    {
      title: t('pages.connectivity.relatedProducts.distributedModules'),
      description: t('pages.connectivity.relatedProducts.distributedModulesDesc'),
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
                    <span className="text-yellow-400">{t('pages.connectivity.banner.title')}</span>
                  </h1>
                  <p className="text-gray-400"></p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-justify">
                {t('pages.connectivity.banner.description')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.sentinel-china.com/eproduct/Iproduct_100000020715352.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  {t('pages.connectivity.banner.moreButton')}
                </a>
               <Link
                  to="/contact"
                  className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors"
>
                  {t('pages.connectivity.banner.contactButton')}
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
              {t('pages.connectivity.featuresSection.title')} <span className="text-yellow-400">{t('pages.connectivity.featuresSection.titleHighlight')}</span>
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
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
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
                {t('pages.connectivity.tabs.products')}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'specs'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('pages.connectivity.tabs.parameters')}
              </button>
              <button
                onClick={() => setActiveTab('downloads')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'downloads'
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('pages.connectivity.tabs.downloads')}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Product Description Tab */}
            {activeTab === 'description' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('pages.connectivity.description.introduction')}</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 text-justify mb-8">
                    <p>
                      {t('pages.connectivity.description.paragraph1')}
                    </p>
                    <p>
                      {t('pages.connectivity.description.paragraph2')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Cable className="text-yellow-400 mr-2" size={20} />
                        <span>{t('pages.connectivity.description.powerCable')}</span>
                      </div>
                      <div className="flex items-center">
                        <Cable className="text-yellow-400 mr-2" size={20} />
                        <span>{t('pages.connectivity.description.ethernetCable')}</span>
                      </div>
                      <div className="flex items-center">
                        <Plug className="text-yellow-400 mr-2" size={20} />
                        <span>{t('pages.connectivity.description.wireableConnectors')}</span>
                      </div>
                      <div className="flex items-center">
                        <Settings className="text-yellow-400 mr-2" size={20} />
                        <span>{t('pages.connectivity.description.junctionBoxes')}</span>
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
                  <p className="text-gray-400 text-center mt-4">{t('pages.connectivity.description.videoDescription')}</p>
                </div>
              </div>
            )}

            {/* Product Specs Tab */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">{t('pages.connectivity.specsSection.title')}</h3>
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          {t('pages.connectivity.specsSection.table.project')}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          {t('pages.connectivity.specsSection.table.parameter')}
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
                <h3 className="text-2xl font-bold mb-8 text-center">{t('pages.connectivity.downloadsSection.title')}</h3>
                <div className="grid md:grid-cols-4 gap-8">
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
                          {t('pages.connectivity.downloadsSection.downloadButton')}
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
              {t('pages.connectivity.casesSection.title')} <span className="text-yellow-400">{t('pages.connectivity.casesSection.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300"></p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <a 
                key={index} 
                href={case_.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-yellow-400/10 to-transparent dark:bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
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
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">{t('pages.connectivity.casesSection.introduction')}</h4>
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {t('pages.connectivity.relatedSection.title')} <span className="text-yellow-400">{t('pages.connectivity.relatedSection.titleHighlight')}</span>
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
              {t('pages.connectivity.cta.title')}<span className="text-yellow-400"> {t('pages.connectivity.cta.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('pages.connectivity.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-2 text-yellow-400" />
                {t('pages.connectivity.cta.email')}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact#send-message" className="inline-flex items-center border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                {t('pages.connectivity.cta.contactButton')}
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 