/**
 * About Us page component
 * Displays company introduction, team information, corporate culture and development history
 */
import { Target, Eye, Award, Users, Clock, MapPin } from 'lucide-react'

export default function AboutPage() {
  const certifications = [
    {
      image: "/zhengshu1.jpg"
    },
    {
      image: "/zhengshu2.jpg"
    },
    {
      image: "/zhengshu3.jpg"
    },
    {
      image: "/zhengshu4.jpg"
    },
    {
      image: "/zhengshu5.jpg"
    },
    {
      image: "/zhengshu6.jpg"
    }
  ]

  const milestones = [
    { 
      year: "2018", 
      title: "Company Founded", 
      description: "TechCorp officially established, focusing on enterprise technology services",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/3cf2acfe-9363-4cd5-ab5d-6938a0526ba0.jpg"
    },
    { 
      year: "2019", 
      title: "Business Expansion", 
      description: "Served over 50 clients and established professional teams",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/7a0dee88-8b76-4051-a2f2-065e5b5804b8.jpg"
    },
    { 
      year: "2020", 
      title: "Technology Upgrade", 
      description: "Launched cloud computing and big data solutions",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/d9aac45d-9a89-4b6d-b0a0-1995b5b5b616.jpg"
    },
    { 
      year: "2021", 
      title: "Market Expansion", 
      description: "Business covered 20 cities with 98% customer satisfaction",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/1dc67d2b-8d3f-47b9-b497-f8c10cff3a3d.jpg"
    },
    { 
      year: "2022", 
      title: "Innovation Breakthrough", 
      description: "Released AI intelligent analysis platform, gaining industry recognition",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/3cf2acfe-9363-4cd5-ab5d-6938a0526ba0.jpg"
    },
    { 
      year: "2023", 
      title: "Continued Growth", 
      description: "Served over 200 clients, becoming an industry leader",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/7a0dee88-8b76-4051-a2f2-065e5b5804b8.jpg"
    },
    { 
      year: "2024", 
      title: "Future Planning", 
      description: "Continue to deepen technological innovation and help more enterprises with digital transformation",
      image: "https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/d9aac45d-9a89-4b6d-b0a0-1995b5b5b616.jpg"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About
            <span className="text-yellow-400">Sentinel</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tianjin Sentinel Electronics Co., Ltd is an innovative Scientific and technological enterprise integrating R&D, production, and sales.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Professional quality,
                <span className="text-yellow-400">Trustworthy</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                SENTINEL provides industrial ethernet distributed I/O modules&IO-Link products, position sensors, process sensors, and connection accessories, etc. These productions have been widely used in a variety of industrial production sites, such as the automobile parts assembly industry, the machining industry, the metallurgical industry, etc. 
              </p>
              <p className="text-gray-300 leading-relaxed">
                 As an R & D and manufacturing enterprise, SENTINEL adheres to the value concept of R & D and innovation and has reliable market application cases, perfect production capacity, efficient logistics transportation, Our team have sincere cooperation awareness to ensure high quality, which can provide you with reliable and sustainable service.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/hEzBE_r62Nk?si=B1VZUDJvGGOR_YJI"
                  title="Company Introduction Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <Target className="text-yellow-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pioneer industrial sensors and IO-LINK modules via relentless R&D. Deliver precise, reliable solutions to drive seamless automation, efficiency, and sustainable industrial growth.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <Eye className="text-yellow-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Become the global benchmark in industrial sensing and IO-LINK tech. Connect industrial ecosystems with innovative solutions, shaping a smarter, more interconnected manufacturing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our
              <span className="text-yellow-400">Certifications</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional certifications and achievements
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {certifications.map((cert, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={`Certification ${index + 1}`}
                      className="w-45 h-60 object-cover rounded-2xl border-2 border-gray-700 hover:border-yellow-400 transition-colors duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <Award className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">6+</div>
              <div className="text-gray-300">Years of Development</div>
            </div>
            
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <Users className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">80+</div>
              <div className="text-gray-300">Professional Team</div>
            </div>
            
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <MapPin className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Service Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Development
              <span className="text-yellow-400">History</span>
            </h2>
            <p className="text-xl text-gray-300">
              Witness our growth journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-950"></div>
                  
                  {/* Image positioned on alternating sides */}
                  <div className={`absolute ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 transform -translate-y-1/2`}>
                    <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-700">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
