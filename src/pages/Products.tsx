/**
 * 产品与服务页面组件
 * 展示公司的核心产品和服务项目
 */
import { Database, Cloud, Smartphone, BarChart3, Lock, Cog, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export default function ProductsPage() {
  const products = [
    {
      icon: Database,
      title: "SENSOR",
      description: "As a detection device, Sensors can sense the measured information, and can transform the sensed information into electrical signals or other required forms, so as to meet the requirements of information transmission, processing, storage, display, Records and controls, etc.",
      features: ["Temperature sensor", "Pressure sensor", "Thermal Flow sensor", "Vortex Flow sensor"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/474e050d-e958-4060-b0fc-282963347c69.jpg",
      link: "/products/sensor"
    },
    {
      icon: Cloud,
      title: "I/O Module",
      description: "As an upgrade to the traditional point-to-point connection, the Fieldbus module is now widely used in industrial fields. As a professional Fieldbus module manufacturer, SENTINEL provides factory automation with Fieldbus modules that support various protocols.",
      features: ["PROFINET", "CC-Link IE Field Basic", "EtherCAT"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/d2f01969-593b-4489-8017-ddc38d07a4bf.jpg",
      link: "/products/io-module"
    },
    {
      icon: Smartphone,
      title: "IO-Link",
      description: "IO-Link is the worlds first standardized IO technology for communication with sensors and actuators. Point-to-point communication is based on the well-established 3-wire sensor and actuator connection without additional requirements on cable materials.",
      features: ["IO-Link Master", "IO-Link Hubs", "IO-Link Converter"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/700dcd53-460f-4b45-b035-d500787386bd.jpg",
      link: "/products/io-link"
    },
    {
      icon: BarChart3,
      title: "CONNECTIVITY",
      description: "The connectivity system is an indispensable product for connecting field devices and control devices.Such as 7/8” POWER CABLE、JUNCTION BOXES、INDUSTRIAL ETHERNET CABLE、CORDSETS.The connectivity products make customer wiring systems low-cost and more efficient.",
      features: ["7/8” POWER CABLE", "JUNCTION BOXES", "INDUSTRIAL ETHERNET CABLE", "CORDSETS"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/2ff0493e-7d7d-4081-8f24-48e59e130899.jpg",
      link: "/products/connectivity"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            
            <span className="text-yellow-400">PRODUCTS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           We provide a full range of technical products and professional services to help factory automation transformation and upgrade, improve business efficiency and competitive advantage.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer">
                  <Link to={product.link} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="text-yellow-400" size={20} />
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors">
                          <product.icon className="text-yellow-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">{product.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-yellow-400 mb-3">Classification</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Service
              <span className="text-yellow-400">process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Standardized service processes to ensure product quality and delivery efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Needs analysis</h3>
              <p className="text-gray-300 text-sm">Deeply understand customer needs and formulate detailed product plans</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Selection&customization</h3>
              <p className="text-gray-300 text-sm">Match products and customize solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-300 text-sm">Shipped on schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">After-sales</h3>
              <p className="text-gray-300 text-sm">Provide excellent after-sales service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
