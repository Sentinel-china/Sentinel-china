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
      title: "企业级数据平台",
      description: "一站式数据管理平台，提供数据采集、存储、处理和分析的完整解决方案。",
      features: ["实时数据处理", "可视化分析", "数据安全保障", "API集成"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/474e050d-e958-4060-b0fc-282963347c69.jpg",
      link: "/products/data-platform"
    },
    {
      icon: Cloud,
      title: "云计算服务",
      description: "灵活可扩展的云基础设施服务，支持企业快速部署和管理应用程序。",
      features: ["弹性扩展", "高可用性", "成本优化", "多云管理"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/d2f01969-593b-4489-8017-ddc38d07a4bf.jpg",
      link: "/products/cloud-service"
    },
    {
      icon: Smartphone,
      title: "移动应用开发",
      description: "专业的移动应用开发服务，支持iOS、Android等多平台应用开发。",
      features: ["跨平台开发", "用户体验优化", "性能优化", "持续维护"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/700dcd53-460f-4b45-b035-d500787386bd.jpg",
      link: "/products/mobile-development"
    },
    {
      icon: BarChart3,
      title: "商业智能分析",
      description: "强大的商业智能工具，帮助企业从数据中获取有价值的商业洞察。",
      features: ["智能报表", "预测分析", "决策支持", "实时监控"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/2ff0493e-7d7d-4081-8f24-48e59e130899.jpg",
      link: "/products/business-intelligence"
    },
    {
      icon: Lock,
      title: "信息安全服务",
      description: "全方位的信息安全解决方案，保护企业数据和系统安全。",
      features: ["安全评估", "风险管控", "应急响应", "合规咨询"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/5ab15d0d-e868-427f-b801-5508d9829f2f.jpg",
      link: "/products/security-service"
    },
    {
      icon: Cog,
      title: "System Integration Services",
      description: "Professional system integration and operation services ensuring stable and efficient operation of enterprise IT systems.",
      features: ["System Integration", "Performance Optimization", "Operation Support", "Technology Upgrade"],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/d1af20c3-c441-4862-9238-16a001d77e53.jpg",
      link: "/products/system-integration"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            产品与
            <span className="text-yellow-400">服务</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            我们提供全方位的技术产品和专业服务，助力企业实现数字化转型升级，
            提升业务效率和竞争优势。
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
                        <h4 className="text-sm font-semibold text-yellow-400 mb-3">核心特性</h4>
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
              服务
              <span className="text-yellow-400">流程</span>
            </h2>
            <p className="text-xl text-gray-300">
              标准化的服务流程，确保项目质量和交付效率
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">需求分析</h3>
              <p className="text-gray-300 text-sm">深入了解客户需求，制定详细的项目方案</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">方案设计</h3>
              <p className="text-gray-300 text-sm">设计最优的技术架构和实施方案</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">开发实施</h3>
              <p className="text-gray-300 text-sm">专业团队按计划执行开发和部署</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400">
                <span className="text-2xl font-bold text-yellow-400">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">交付运维</h3>
              <p className="text-gray-300 text-sm">项目交付并提供持续的技术支持</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
