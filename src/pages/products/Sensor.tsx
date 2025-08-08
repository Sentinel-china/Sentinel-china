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
      title: "温度传感器",
      description: "高精度温度监测，适用于各种工业环境",
      features: ["-40°C to +125°C", "±0.1°C精度", "快速响应", "长期稳定性"],
      image: "/product-sensor.png",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Gauge,
      title: "压力传感器",
      description: "可靠的压力测量解决方案，支持多种压力范围",
      features: ["0-1000bar", "高精度测量", "防爆设计", "IP67防护"],
      image: "/product-sensor.png",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Droplet,
      title: "流量传感器",
      description: "精确的流量监测，适用于液体和气体测量",
      features: ["热式流量计", "涡街流量计", "超声波流量计", "电磁流量计"],
      image: "/product-sensor.png",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Activity,
      title: "振动传感器",
      description: "工业设备振动监测，预防性维护解决方案",
      features: ["加速度传感器", "速度传感器", "位移传感器", "无线传输"],
      image: "/product-sensor.png",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Zap,
      title: "电流传感器",
      description: "非接触式电流测量，安全可靠的电力监测",
      features: ["霍尔效应", "磁通门技术", "高精度测量", "隔离设计"],
      image: "/product-sensor.png",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Shield,
      title: "安全传感器",
      description: "工业安全监测，保护人员和设备安全",
      features: ["安全光栅", "急停按钮", "安全门开关", "双手控制"],
      image: "/product-sensor.png",
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
                src="https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/474e050d-e958-4060-b0fc-282963347c69.jpg"
                alt="传感器产品"
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
                    企业级<span className="text-yellow-400">数据平台</span>
                  </h1>
                  <p className="text-gray-400">Enterprise Data Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                一站式数据管理平台，提供数据采集、存储、处理和分析的完整解决方案。
                支持多种数据源接入，实现数据的统一管理和智能分析。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('description')}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  更多产品信息
                </button>
                <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
                  免费试用
                </button>
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
              传感器<span className="text-yellow-400">产品系列</span>
            </h2>
            <p className="text-xl text-gray-300">
              专业的工业传感器解决方案，为您的自动化系统提供可靠的数据采集
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sensorProducts.map((product, index) => (
              <Link key={index} to={`/products/sensor/sensor0${index + 1}`} className="group">
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
            ))}
          </div>
        </div>
      </section>

    </div>
  )
} 