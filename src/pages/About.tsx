/**
 * About Us page component
 * Displays company introduction, team information, corporate culture and development history
 */
import { Target, Eye, Award, Users, Clock, MapPin } from 'lucide-react'
import { Timeline, TimelineItemData } from '../components/timeline/Timeline'
import { ImageModal, useImageModal } from '../components/ui/image-modal'

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

  // 提取所有认证证书图片用于模态框
  const certificationImages = certifications.map(cert => cert.image)
  const certImageModal = useImageModal(certificationImages)

  const timelineItems: TimelineItemData[] = [
    {
      side: "right",
      tone: "gold",
      year: 2008,
      title: "2008 Company Establishment",
      content: "Tianjin Sentinel was established in Tianjin Hi-Tech Zone in 2008. The company initially focused on the research and development and manufacturing of sensors and fieldbus equipment to meet the needs of industrial applications.",
      iconSrc: "/time1.png",
      images: ["/time1.png"]
    },
    {
      side: "left",
      tone: "blue",
      year: 2010,
      title: "2010 Product Development & Expansion",
      content: "In 2010, the company successfully developed and mass-produced inductive proximity switches, solidifying its position in the industrial sensor field. In 2011, it expanded production facilities to support future business growth.",
      iconSrc: "/time2.png",
      images: ["/time2.png"]
    },
    {
      side: "right",
      tone: "green",
      year: 2013,
      title: "Sensor Innovation",
      content: "In 2013, the company developed and mass-produced flow, temperature, and pressure sensors, expanding its product line.",
      iconSrc: "/time3.png",
      images: ["/time3.png"]
    },
    {
      side: "left",
      tone: "red",
      year: 2015,
      title: "Factory Intelligence Enhancement",
      content: "In 2015, the company further entered the field of fieldbus and industrial Ethernet by launching remote I/O modules. The application of this technology significantly enhanced the intelligence level of factory automation.",
      iconSrc: "/time4.png",
      images: ["/time4.png"]
    },
    {
      side: "right",
      tone: "purple",
      year: 2019,
      title: "IO-Link Technology Breakthrough",
      content: "In 2019, the company made a significant breakthrough in IO-Link technology by successfully launching IO-Link Master and Device products, achieving standardized data transmission and digital management from field sensors to the central control system.",
      iconSrc: "/time5.png",
      images: ["/time5.png"]
    },
    {
      side: "left",
      tone: "orange",
      year: 2023,
      title: "2023 Future Vision",
      content: "In 2023, the company further enhanced IO-Link technology by launching sensor products with IO-Link functionality, making them more efficient in industrial automation and equipment management. In the future, the company will continue to innovate in sensor and IO technologies, driving the development of Industry 4.0 and smart manufacturing.",
      iconSrc: "/time6.png",
      images: ["/time6.png"]
    },
    {
      side: "right",
      tone: "gold",
      year: "2025 ～",
      title: "New Era of Intelligence",
      content: "In this rapidly changing era, industrial automation and artificial intelligence are working hand in hand, driving the manufacturing industry into a new era of intelligence. Our mission is to bring intelligent solutions to every machine and production line, transforming factories from mere mechanical operations into a smart brain that adjusts, optimizes, and innovates in real time. We believe the intelligent future has arrived, and we are standing at the heart of this transformation, moving forward with the industry towards a new, efficient, and sustainable future.",
      iconSrc: "/time7.png",
      images: ["/time7.png"]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About
            <span className="text-yellow-400"> SENTINEL</span>
          </h1>
                          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
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
                <span className="text-yellow-400"> Trustworthy</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                SENTINEL provides industrial ethernet distributed I/O modules&IO-Link products, position sensors, process sensors, and connection accessories, etc. These productions have been widely used in a variety of industrial production sites, such as the automobile parts assembly industry, the machining industry, the metallurgical industry, etc. 
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                 As an R & D and manufacturing enterprise, SENTINEL adheres to the value concept of R & D and innovation and has reliable market application cases, perfect production capacity, efficient logistics transportation, Our team have sincere cooperation awareness to ensure high quality, which can provide you with reliable and sustainable service.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Kh6F_VjxRIw?si=OaIUtmyIHGipNiHb"
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
            <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <div className="flex items-center mb-6">
                <Target className="text-yellow-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                Pioneer industrial sensors and IO-LINK modules via relentless R&D. Deliver precise, reliable solutions to drive seamless automation, efficiency, and sustainable industrial growth.
              </p>
            </div>

            <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <div className="flex items-center mb-6">
                <Eye className="text-yellow-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                Become the global benchmark in industrial sensing and IO-LINK tech. Connect industrial ecosystems with innovative solutions, shaping a smarter, more interconnected manufacturing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our
              <span className="text-yellow-400"> Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional certifications and achievements
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {certifications.map((cert, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative group">
                    <img
                      src={cert.image}
                      alt={`Certification ${index + 1}`}
                      className="w-45 h-60 object-cover rounded-2xl border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 cursor-pointer hover:scale-105"
                      onClick={() => certImageModal.openModal(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          certImageModal.openModal(index);
                        }
                      }}
                    />
                    
                    {/* 悬停提示 */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl">
                      <div className="text-white text-sm font-medium bg-black/60 px-3 py-2 rounded-lg">
                        Click to Zoom
                      </div>
                    </div>
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#f8f8f8] rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <Award className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">17+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">Years Experiences</div>
            </div>
            
            <div className="text-center p-8 bg-[#f8f8f8] rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <Users className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">1600+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">Customers</div>
            </div>
            
            <div className="text-center p-8 bg-[#f8f8f8] rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <MapPin className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">170+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Development
            <span className="text-yellow-400"> History</span>
          </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Witness our growth journey
          </p>
        </div>

        <Timeline items={timelineItems} />
      </section>

      {/* 认证证书图片放大模态框 */}
      <ImageModal
        isOpen={certImageModal.isOpen}
        onClose={certImageModal.closeModal}
        currentImage={certImageModal.currentImage}
        images={certificationImages}
        currentIndex={certImageModal.currentIndex}
        onImageChange={certImageModal.changeImage}
      />
    </div>
  )
}
