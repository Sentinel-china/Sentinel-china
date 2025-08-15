/**
 * 产品与服务页面组件
 * 展示公司的核心产品和服务项目
 */
import { Cog,  Droplet , PlugZap , MonitorCog ,Network, PackageCheck, ShieldUser, LaptopMinimalCheck } from 'lucide-react'
import { Link } from 'react-router'

export default function ProductsPage() {
  const products = [
    {
      icon: Droplet,
      title: "SENSOR",
      description: "Professional liquid monitoring sensor.",
      features: ["Temperature Sensor", "Pressure Sensor", "Thermal Flow Sensor", "Vortex Flow Sensor"],
      image: "/banner1.png",
      link: "/products/sensor"
    },
    {
      icon: Network,
      title: "I/O Module",
      description: "Equipment is installed nearby to reduce wiring costs",
      features: ["PROFINET", "CC-Link IE Field Basic", "EtherCAT" ,"Adaptive input/output"],
      image: "/banner3.png",
      link: "/products/io-module"
    },
    {
      icon: MonitorCog ,
      title: "IO-Link",
      description: "IO-Link enables communication between sensors and PLCs.",
      features: ["IO-Link Master", "IO-Link Hubs", "IO-Link Converter"],
      image: "/banner2.png",
      link: "/products/io-link"
    },
    {
      icon: PlugZap,
      title: "CONNECTIVITY",
      // description: "The connectivity system is an indispensable product for connecting field devices and control devices.",
      features: ["7/8\" POWER CABLE", "JUNCTION BOXES", "INDUSTRIAL ETHERNET CABLE", "CORDSETS"],
      image: "/banner4.png",
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
                      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
           We provide a full range of technical products and professional services to help factory automation transformation and upgrade, improve business efficiency and competitive advantage.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <Link to={product.link} className="block">
                  <div className="flex flex-col lg:flex-row w-full h-auto lg:h-64 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-yellow-400/10 to-transparent dark:bg-gray-800 group-hover:scale-[1.02] group-hover:border-2 group-hover:border-yellow-400/50 transition-all duration-300 border border-transparent">
                    <div className="w-full lg:w-3/5 h-48 lg:h-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-2/5 p-4 lg:p-6 flex flex-col justify-between">
                      <div className="flex items-center gap-2 mb-3">
                        <product.icon className="text-xl text-yellow-400" />
                        <strong className="text-lg text-gray-800 dark:text-white">{product.title}</strong>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="text-sm text-yellow-400">
                        <span>Classification:</span>
                        <ul className="pl-4 mt-2 space-y-1 list-disc">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Service
              <span className="text-yellow-400"> Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Standardized service processes to ensure product quality and delivery efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
              
                <LaptopMinimalCheck className="text-2xl font-bold text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Needs analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Deeply understand customer needs and formulate detailed product plans</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <Cog className="text-2xl font-bold text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Selection&customization</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Match products and customize solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
              <PackageCheck className="text-2xl font-bold text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Shipped on schedule</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
              <ShieldUser className="text-2xl font-bold text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">After-sales</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Provide excellent after-sales service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
