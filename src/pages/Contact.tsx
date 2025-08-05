/**
 * Contact Us page component
 * Contains contact form, company information and map display
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const location = useLocation()

  // 处理锚点跳转
  useEffect(() => {
    if (location.hash) {
      // 延迟执行，确保页面已完全渲染
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1))
        if (element) {
          // 获取元素位置
          const elementTop = element.offsetTop
          // 考虑到固定导航栏的高度，减去一些偏移量
          const offset = 80 // 导航栏高度 + 一些额外空间
          window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth'
          })
        }
      }, 300) // 增加延迟时间，确保页面完全加载
    }
  }, [location])

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "400-123-4567",
      description: "Weekdays 9:00-18:00"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@techcorp.com",
      description: "Reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Beijing Chaoyang Technology Park",
      description: "Welcome to visit by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday to Friday 9:00-18:00",
      description: "Holiday duty service"
    }
  ]



  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact
            <span className="text-yellow-400"> Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We look forward to cooperating with you. Please contact us through the following methods,
            and our professional team will provide you with the highest quality services and solutions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-yellow-400 font-medium mb-1">{info.content}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-yellow-400 mr-3" size={28} />
                <h2 id="send-message" className="text-2xl font-bold">Send Message</h2>
              </div>
              
              <div className="w-full h-[500px]">
                <iframe
                  src="https://customer-form-sentinel.onrender.com/"
                  className="w-full h-full border-0 rounded-lg"
                  title="Contact Form"
                  allow="camera; microphone; geolocation"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Office Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Beijing Headquarters</p>
                      <p className="text-gray-300">15th Floor, Building A, Innovation Tower, Beijing Chaoyang Technology Park</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Shanghai Branch</p>
                      <p className="text-gray-300">Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Shenzhen Branch</p>
                      <p className="text-gray-300">Nanshan Technology Park South, Shenzhen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Location Navigation</h3>
                <div className="relative h-64 bg-gray-700/50 rounded-lg overflow-hidden">
                  <img
                    src="https://pub-cdn.sider.ai/u/U0D4XHG6Z0/web-coder/68902bc70cd2d7c5a266e9f7/resource/08a727ae-12ef-4ae2-85fd-f734f5c6e16e.jpg"
                    alt="Company Location Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">Beijing Chaoyang Technology Park</p>
                    <p className="text-gray-300 text-sm">Metro Line 10 Technology Park Station Exit B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Looking Forward to
            <span className="text-yellow-400"> Working with You</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us now to start your digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:400-123-4567"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <a
              href="mailto:contact@techcorp.com"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}
