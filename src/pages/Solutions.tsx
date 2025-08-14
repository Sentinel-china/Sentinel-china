/**
 * Solutions page component
 * Displays customized solutions for different industries
 */
import { Link } from 'react-router'

export default function SolutionsPage() {
  const solutions = [
    {
      id: "solutions01",
      title: "Application of IO-Link Smart Sensors in Hydraulic Systems",
      description: "In the fields of industrial automation and construction machinery, hydraulic systems are widely used in key equipment such as injection molding machines, hydraulic presses, lifting equipment, and construction vehicles due to their outstanding energy conversion efficiency and powerful driving capability.",
      keyFeatures: [
        "SEH Series Pressure Sensors",
        "TBH Series Temperature Sensors",
        "LTH Series Liquid Level/Temperature Sensors",
        "FMV Series Flow Sensors"
      ],
      benefits: [
        "Remote parameter setting",
        "Automatic device recognition",
        "Real-time monitoring and data tracking",
        "Simplified wiring and high scalability"
      ],
      image: "http://image.sentinel-china.com/202508111332828.png"
    },
    {
      id: "solutions02",
      title: "Split-Type Level Sensor Solves Foam Interference and Space Constraints in Dairy Tank Level Measurement",
      description: "In the dairy processing industry, accurate monitoring of tank liquid levels is not only linked to production efficiency but also directly impacts product quality and safety.",
      keyFeatures: [
        "Bidirectional measurement capability",
        "Split-type custom solution",
        "Temperature monitoring integration",
        "Easy maintenance and cleaning"
      ],
      benefits: [
        "Avoid foam interference",
        "Solve space constraints",
        "Reduce installation complexity",
        "Improve hygiene management"
      ],
      image: "http://image.sentinel-china.com/202508111338007.png"
    },
    {
      id: "solutions03",
      title: "IO-Link Smart Sensors in Wind Turbine Hydraulic Systems",
      description: "In the context of a global shift toward a green and low-carbon energy structure, wind power—an important part of renewable energy—is experiencing continuous and rapid growth.",
      keyFeatures: [
        "Multi-dimensional sensors",
        "IO-Link communication protocol",
        "IP67 protection rating",
        "Real-time health analysis"
      ],
      benefits: [
        "Ensure wind turbine stability",
        "Improve system response speed",
        "Simplify control cabinet wiring",
        "Enable proactive maintenance"
      ],
      image: "http://image.sentinel-china.com/202508111348744.png"
    },
    {
      id: "solutions04",
      title: "Hot-Plug Mechanism Enables Rapid Modular Pallet Switching in Bus Welding Lines",
      description: "With the continuous advancement of smart manufacturing and Industry 4.0, coach welding lines are moving toward a new stage of higher automation, stronger flexibility, and deeper informatization.",
      keyFeatures: [
        "IO-Link flexible wiring",
        "Hot-swap mechanism",
        "Modular pallet system",
        "Centralized diagnostics"
      ],
      benefits: [
        "Simplify complex wiring",
        "Enable rapid module switching",
        "Improve deployment efficiency",
        "Enhance system adaptability"
      ],
      image: "http://image.sentinel-china.com/202508111354777.png"
    },
    {
      id: "solutions05",
      title: "Dual Options of Vortex Flow Sensors and Flow Switches to Address Flow Monitoring Challenges",
      description: "In the field of industrial automation, accurate flow measurement and real-time monitoring are essential for ensuring production efficiency and equipment safety.",
      keyFeatures: [
        "Vortex flow sensors",
        "Thermal dispersion flow switches",
        "High-precision measurement",
        "Real-time status monitoring"
      ],
      benefits: [
        "Accurate flow measurement",
        "Cost-effective monitoring",
        "Flexible application scenarios",
        "Comprehensive flow solutions"
      ],
      image: "http://image.sentinel-china.com/202508111358563.png"
    },
    {
      id: "solutions06",
      title: "SENTINEL Distributed I/O Modules in Photovoltaic Monocrystalline Silicon Production Lines",
      description: "With the global energy structure transforming, the photovoltaic industry, as a crucial part of clean energy, is rapidly developing.",
      keyFeatures: [
        "EL Series Remote I/O Modules",
        "CM Series Remote I/O Modules",
        "High installation flexibility",
        "Cost-effective solutions"
      ],
      benefits: [
        "Reduce installation costs",
        "Improve system stability",
        "Enable close signal collection",
        "Support photovoltaic industry development"
      ],
      image: "http://image.sentinel-china.com/202508111406692.jpg"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industry
            <span className="text-yellow-400"> SOLUTIONS</span>
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
                <div>
                  <Link 
                    to={`/solutions/${solution.id}`}
                    className="text-3xl font-bold hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    {solution.title}
                  </Link>
                </div>
                
                <p className="text-lg text-gray-300 text-justify">
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
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.3),0_5px_10px_rgba(0,0,0,0.2),0_2px_5px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.35),0_8px_15px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
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
            <p className="text-xl text-gray-300">
              
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Communication</h3>
              <p className="text-gray-300 text-sm text-justify">
                Understand customer needs and industry characteristics through in-depth communication and research
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Selection</h3>
              <p className="text-gray-300 text-sm text-justify">
                Provide customized product selection and solution design based on customer needs and industry characteristics
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deliver goods on time</h3>
              <p className="text-gray-300 text-sm text-justify">
                Ensure timely delivery of products and provide technical support to ensure smooth project progress
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">After-sales service</h3>
              <p className="text-gray-300 text-sm text-justify">
                Provide comprehensive after-sales service, including technical support, product maintenance, and upgrades
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
