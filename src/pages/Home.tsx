/**
 * 网站首页组件
 * 包含英雄区域、特色服务、统计数据和客户展示
 */
import { ArrowRight, Shield, Zap, Users, Award, TrendingUp, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

export default function HomePage() {
  // Banner轮播图数据
  const bannerImages = [
    {
      src: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/29ffd6fc-bab8-4572-aa93-70488e1033b6.jpg",
      alt: "Technology Office Environment"
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Modern Business Team"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      alt: "Digital Innovation"
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // 每4秒切换一张图片

    return () => clearInterval(interval)
  }, [bannerImages.length])

  // 手动切换图片
  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? bannerImages.length - 1 : currentImageIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === bannerImages.length - 1 ? 0 : currentImageIndex + 1
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Driving Enterprise
                  <span className="text-yellow-400 block">Digital Transformation</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Professional technical teams and cutting-edge solutions to create greater business value
                  for your enterprise, leading new trends in industry digital development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact#send-message"
                  className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 group"
                >
                  Contact Now
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-yellow font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  More Products
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* 轮播图容器 */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-96">
                  {/* 图片轮播 */}
                  {bannerImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* 导航按钮 */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* 指示器 */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {bannerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-yellow-400' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose
              <span className="text-yellow-400"> TechCorp</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are committed to providing customers with the most professional technical services and solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security guarantees to ensure your data and business security,
                with internationally certified security systems.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <Zap className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Efficient Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Using the latest technology stack to provide high-performance solutions,
                rapidly responding to market demands and helping enterprises maintain competitive advantages.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <Users className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Senior technical expert team with rich industry experience,
                providing 7x24 professional technical support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-yellow-400 mr-2" size={32} />
              </div>
              <div className="text-4xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-yellow-400 mr-2" size={32} />
              </div>
              <div className="text-4xl font-bold text-yellow-400">200+</div>
              <div className="text-gray-300">Partner Clients</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-yellow-400 mr-2" size={32} />
              </div>
              <div className="text-4xl font-bold text-yellow-400">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Globe className="text-yellow-400 mr-2" size={32} />
              </div>
              <div className="text-4xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl text-white font-bold mb-6">
            Ready to Start Your
            <span className="text-yellow-400"> Digital Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our professional team for customized solutions
          </p>
          <Link
            to="/contact#send-message"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg text-lg hover:bg-yellow-300 transition-colors duration-200 group"
          >
            Free Consultation
            <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
