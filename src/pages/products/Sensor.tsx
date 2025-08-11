/**
 * 传感器产品详情页面
 * 展示传感器产品的详细信息
 */
import { Database, Droplet, Thermometer, Gauge, Zap, Cpu, Shield, Activity } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

export default function SensorDetail() {
  const [activeTab, setActiveTab] = useState('description')

  const sensorProducts = [
    {
      icon: Thermometer,
      title: "Temperature sensor",
      description: "High-precision temperature monitor for industrial",
      features: ["-40°C to +125°C", "±0.1°C精度", "快速响应", "长期稳定性"],
      image: "https://image.sentinel-china.com/2025-08-11-temp.png",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Activity,
      title: " Thermal flow sensor",
      description: "Flow and temperature detection in one device",
      features: ["0-1000bar", "高精度测量", "防爆设计", "IP67防护"],
      image: "https://image.sentinel-china.com/2025-08-11-flow.png",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      title: "vortex flow sensor",
      description: "Reliable flow measurement for liquids and gases",
      features: ["热式流量计", "涡街流量计", "超声波流量计", "电磁流量计"],
      image: "https://image.sentinel-china.com/2025-08-11-vortex.png",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Gauge,
      title: "pressure sensor",
      description: "Precise pressure sensing for automation systems",
      features: ["加速度传感器", "速度传感器", "位移传感器", "无线传输"],
      image: "https://image.sentinel-china.com/2025-08-11-pressure.png",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Droplet,
      title: "liquid level sensor",
      description: "Safe and accurate fluid level detection",
      features: ["霍尔效应", "磁通门技术", "高精度测量", "隔离设计"],
      image: "https://image.sentinel-china.com/2025-08-11-level.png",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Shield,
      title: " inductive proximity sensor",
      description: "Detects metal objects without physical contact",
      features: ["安全光栅", "急停按钮", "安全门开关", "双手控制"],
      image: "https://image.sentinel-china.com/2025-08-11-inductive.png",
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ]

  return (
    <div className="min-h-screen pt-16">

      {/* Banner Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="banner1.png"
                alt="Sensor"
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
                     Industrial<span className="text-yellow-400"> Sensors</span>
                  </h1>
                  <p className="text-gray-400">industrial Sensors</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                As a detection device, Sensors can sense the measured information, and can transform the sensed information into electrical signals or other required forms, so as to meet the requirements of information transmission, processing, storage, display, Records and controls, etc.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                 onClick={() =>  window.location.href = 'https://www.sentinel-china.com/eproduct/Iproduct_100000020781551.html'}
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

      {/* Sensor Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sensor <span className="text-yellow-400">Products</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional industrial sensor solutions for reliable data acquisition for your automation systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sensorProducts.map((product, index) => {
              const sensorRoutes = [
                '/products/sensor/temperature-sensor',
                '/products/sensor/thermal-flow-sensor', 
                '/products/sensor/vortex-flow-sensor',
                '/products/sensor/pressure-sensor',
                '/products/sensor/liquid-level-sensor',
                '/products/sensor/inductive-proximity-sensor'
              ]
              return (
                <Link key={index} to={sensorRoutes[index]} className="group">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-800 group-hover:scale-[1.02] group-hover:border-2 group-hover:border-yellow-400/50 transition-all duration-300 border border-transparent cursor-pointer">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                          <product.icon className="text-yellow-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
} 