/**
 * About Us page component
 * Displays company introduction, team information, corporate culture and development history
 */
import { Target, Eye, Award, Users, Clock, MapPin } from 'lucide-react'
import { Timeline, TimelineItemData } from '../components/timeline/Timeline'
import { ImageModal, useImageModal } from '../components/ui/image-modal'
import { useLanguage } from '../context/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
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
      title: t('pages.about.timeline.2008.title'),
      content: t('pages.about.timeline.2008.content'),
      iconSrc: "/time1.png",
      images: ["/time1.png"]
    },
    {
      side: "left",
      tone: "blue",
      year: 2010,
      title: t('pages.about.timeline.2010.title'),
      content: t('pages.about.timeline.2010.content'),
      iconSrc: "/time2.png",
      images: ["/time2.png"]
    },
    {
      side: "right",
      tone: "green",
      year: 2013,
      title: t('pages.about.timeline.2013.title'),
      content: t('pages.about.timeline.2013.content'),
      iconSrc: "/time3.png",
      images: ["/time3.png"]
    },
    {
      side: "left",
      tone: "red",
      year: 2015,
      title: t('pages.about.timeline.2015.title'),
      content: t('pages.about.timeline.2015.content'),
      iconSrc: "/time4.png",
      images: ["/time4.png"]
    },
    {
      side: "right",
      tone: "purple",
      year: 2019,
      title: t('pages.about.timeline.2019.title'),
      content: t('pages.about.timeline.2019.content'),
      iconSrc: "/time5.png",
      images: ["/time5.png"]
    },
    {
      side: "left",
      tone: "orange",
      year: 2023,
      title: t('pages.about.timeline.2023.title'),
      content: t('pages.about.timeline.2023.content'),
      iconSrc: "/time6.png",
      images: ["/time6.png"]
    },
    {
      side: "right",
      tone: "gold",
      year: "2025 ～",
      title: t('pages.about.timeline.2025.title'),
      content: t('pages.about.timeline.2025.content'),
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
                {t('pages.about.title')}
                <span className="text-yellow-400"> {t('pages.about.brand')}</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('pages.about.intro')}
              </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                {t('pages.about.overviewTitle')},
                <span className="text-yellow-400"> {t('pages.about.brand')}</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                {t('pages.about.overviewP1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                {t('pages.about.overviewP2')}
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
                <h3 className="text-2xl font-bold">{t('pages.about.missionTitle')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                {t('pages.about.missionText')}
              </p>
            </div>

            <div className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <div className="flex items-center mb-6">
                <Eye className="text-yellow-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold">{t('pages.about.visionTitle')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
                {t('pages.about.visionText')}
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
              {t('pages.about.certTitle')}
              <span className="text-yellow-400"> {t('pages.about.brand')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('pages.about.certSubtitle')}
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
                        {t('pages.about.clickToZoom')}
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">{new Date().getFullYear() - 2008}+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">{t('pages.about.yearsExperiences')}</div>
            </div>
            
            <div className="text-center p-8 bg-[#f8f8f8] rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <Users className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">1600+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">{t('pages.about.customers')}</div>
            </div>
            
            <div className="text-center p-8 bg-[#f8f8f8] rounded-2xl border border-gray-700 dark:bg-gray-900/50">
              <MapPin className="text-yellow-400 mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold text-yellow-400 mb-2">170+</div>
              <div className="text-gray-600 dark:text-gray-300 mb-8">{t('pages.about.solutions')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#f8f8f8] dark:bg-gray-900/50 ">
          <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('pages.about.developmentTitle')}
            <span className="text-yellow-400"> {t('pages.about.developmentBrand')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t('pages.about.developmentSubtitle')}
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
