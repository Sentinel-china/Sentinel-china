/**
 * Solutions page component
 * Displays customized solutions for different industries
 */
import { Building2, ShoppingCart, Heart, GraduationCap, Factory, Banknote } from 'lucide-react'
import { Link } from 'react-router'

export default function SolutionsPage() {
  const solutions = [
    {
      id: "smart-city",
      icon: Building2,
      title: "Smart City Solutions",
      description: "Building intelligent city management platforms to improve urban governance efficiency and residents' quality of life.",
      keyFeatures: [
        "Intelligent Traffic Management",
        "Environmental Monitoring System",
        "Public Safety Surveillance",
        "Government Service Platform"
      ],
      benefits: [
        "Improve City Management Efficiency",
        "Enhance Citizens' Living Experience",
        "Optimize Resource Allocation",
        "Strengthen Security Assurance"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/6ab63c35-f446-428e-bcdf-052e08cbbe82.jpg"
    },
    {
      id: "new-retail",
      icon: ShoppingCart,
      title: "New Retail Digital Platform",
      description: "Omni-channel retail management system integrating online and offline resources to improve retail business efficiency.",
      keyFeatures: [
        "Omni-channel Sales Management",
        "Intelligent Inventory Optimization",
        "Customer Relationship Management",
        "Data Analytics Insights"
      ],
      benefits: [
        "Increase Sales Conversion Rate",
        "Optimize Inventory Management",
        "Enhance Customer Experience",
        "Reduce Operating Costs"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/8224106a-a7d3-48e1-ae54-3597b225d1ae.jpg"
    },
    {
      id: "smart-healthcare",
      icon: Heart,
      title: "Smart Healthcare Solutions",
      description: "Medical information management system improving medical service quality and patient experience.",
      keyFeatures: [
        "Electronic Medical Records",
        "Intelligent Diagnostic Assistance",
        "Telemedicine Services",
        "Hospital Management Platform"
      ],
      benefits: [
        "Improve Medical Efficiency",
        "Enhance Patient Experience",
        "Reduce Medical Risks",
        "Optimize Resource Allocation"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/a7b245d5-2bec-43c4-be53-81112e8b2eb6.jpg"
    },
    {
      id: "smart-education",
      icon: GraduationCap,
      title: "Smart Education Platform",
      description: "Modern education management system promoting teaching innovation and learning effectiveness improvement.",
      keyFeatures: [
        "Online Learning Platform",
        "Intelligent Teaching Assistance",
        "Student Management System",
        "Educational Data Analytics"
      ],
      benefits: [
        "Improve Teaching Quality",
        "Personalized Learning",
        "Simplify Management Process",
        "Data-driven Decision Making"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/14e6e88a-07a6-44a5-b221-323b77d43fc8.jpg"
    },
    {
      id: "smart-manufacturing",
      icon: Factory,
      title: "Industry 4.0 Smart Manufacturing",
      description: "Smart manufacturing solutions achieving digitalization and intelligent upgrade of production processes.",
      keyFeatures: [
        "Production Process Automation",
        "Quality Monitoring System",
        "Predictive Equipment Maintenance",
        "Supply Chain Optimization"
      ],
      benefits: [
        "Improve Production Efficiency",
        "Ensure Product Quality",
        "Reduce Operating Costs",
        "Enhance Competitive Advantage"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/b898b1b0-fbb8-4b0e-93e6-0929a9459bda.jpg"
    },
    {
      id: "fintech",
      icon: Banknote,
      title: "Financial Technology Solutions",
      description: "Digital transformation solutions for the financial industry, improving financial service efficiency and security.",
      keyFeatures: [
        "Intelligent Risk Management System",
        "Mobile Payment Platform",
        "Customer Service Center",
        "Regulatory Compliance Management"
      ],
      benefits: [
        "Reduce Financial Risks",
        "Improve Service Efficiency",
        "Enhance Customer Experience",
        "Ensure Compliant Operations"
      ],
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/da0e3a1a-11f1-43ac-abb5-cfabc4ee1c46.jpg"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industry
            <span className="text-yellow-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Targeting the characteristics and needs of different industries, we provide customized technology solutions
            to help various industries achieve digital transformation and business innovation.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center">
                    <solution.icon className="text-yellow-400" size={32} />
                  </div>
                  <Link 
                    to={`/solutions/${solution.id}`}
                    className="text-3xl font-bold hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    {solution.title}
                  </Link>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Core Features</h3>
                    <ul className="space-y-2">
                      {solution.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Core Value</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Implementation
              <span className="text-yellow-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional project implementation process ensuring successful solution delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Analysis</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                In-depth understanding of industry characteristics and customer needs, conducting comprehensive business research and current status analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Solution Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Based on research results, design customized solutions that match industry characteristics
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation & Deployment</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                System development, testing and deployment implementation according to project plan
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Operation & Support</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Provide continuous operation support and system optimization to ensure stable solution operation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
