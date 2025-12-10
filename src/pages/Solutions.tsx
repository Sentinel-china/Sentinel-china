/**
 * Solutions page component
 * Displays customized solutions for different industries
 */
import { Link } from 'react-router'
import { useLanguage } from '../context/LanguageContext'

export default function SolutionsPage() {
  const { t } = useLanguage()
  const solutions = [
    {
      id: 'solutions01',
      title: t('pages.solutions.list.solutions01.title'),
      description: t('pages.solutions.list.solutions01.description'),
      keyFeatures: t('pages.solutions.list.solutions01.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions01.benefits', { returnObjects: true }),
      image: '/Solutions1.png'
    },
    {
      id: 'solutions02',
      title: t('pages.solutions.list.solutions02.title'),
      description: t('pages.solutions.list.solutions02.description'),
      keyFeatures: t('pages.solutions.list.solutions02.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions02.benefits', { returnObjects: true }),
      image: '/Solutions2.png'
    },
    {
      id: 'solutions03',
      title: t('pages.solutions.list.solutions03.title'),
      description: t('pages.solutions.list.solutions03.description'),
      keyFeatures: t('pages.solutions.list.solutions03.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions03.benefits', { returnObjects: true }),
      image: '/Solutions3.png'
    },
    {
      id: 'solutions04',
      title: t('pages.solutions.list.solutions04.title'),
      description: t('pages.solutions.list.solutions04.description'),
      keyFeatures: t('pages.solutions.list.solutions04.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions04.benefits', { returnObjects: true }),
      image: '/Solutions4.png'
    },
    {
      id: 'solutions05',
      title: t('pages.solutions.list.solutions05.title'),
      description: t('pages.solutions.list.solutions05.description'),
      keyFeatures: t('pages.solutions.list.solutions05.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions05.benefits', { returnObjects: true }),
      image: '/Solutions5.png'
    },
    {
      id: 'solutions06',
      title: t('pages.solutions.list.solutions06.title'),
      description: t('pages.solutions.list.solutions06.description'),
      keyFeatures: t('pages.solutions.list.solutions06.keyFeatures', { returnObjects: true }),
      benefits: t('pages.solutions.list.solutions06.benefits', { returnObjects: true }),
      image: '/Solutions6.jpg'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('pages.solutions.title')}
            <span className="text-yellow-400"> SOLUTIONS</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('pages.solutions.subtitle')}
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
                
                <p className="text-lg text-gray-600 dark:text-gray-300 text-justify mb-8">
                  {solution.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">{t('pages.solutions.coreFeatures')}</h3>
                    <ul className="space-y-2">
                      {solution.keyFeatures.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">{t('pages.solutions.coreValue')}</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit: string, benefitIndex: number) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
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
              {t('pages.solutions.serviceProcessTitle')}
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
              <h3 className="text-xl font-semibold mb-3">{t('pages.solutions.communication')}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm ">
                {t('pages.solutions.communicationDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pages.solutions.productSelection')}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm ">
                {t('pages.solutions.productSelectionDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pages.solutions.delivery')}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm ">
                {t('pages.solutions.deliveryDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-400/20 transition-all duration-300">
                <span className="text-3xl font-bold text-yellow-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('pages.solutions.afterSales')}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm ">
                {t('pages.solutions.afterSalesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
