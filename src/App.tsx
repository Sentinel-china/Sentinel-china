/**
 * 主应用路由组件
 * 配置网站的路由结构和页面导航
 */
import { HashRouter, Route, Routes } from 'react-router'
import { useEffect } from 'react'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import { useGeoLocation } from './hooks/useGeoLocation'
import { useCookieConsent } from './hooks/useCookieConsent'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import AboutPage from './pages/About'
import SolutionsPage from './pages/Solutions'
import ContactPage from './pages/Contact'
import NewsPage from './pages/News'
import NewsDetail from './pages/NewsDetail'
import IOModule from './pages/products/IOModule'
import Sensor from './pages/products/Sensor'
import IOLink from './pages/products/IOLink'
import Connectivity from './pages/products/Connectivity'
import NewPage1 from './pages/products/NewPage1'
import RelayModule from './pages/products/Relay-Module'
import SolutionsDetail from './pages/markdown-config/SolutionsDetail'
import ProductDetail from './pages/markdown-config/ProductDetail'
import RelayModuleDetail from './pages/markdown-config/relaymoduledetail'
import IOLinkDetail from './pages/markdown-config/iolinkdetail'
import ConnectivityDetail from './pages/markdown-config/ConnectivityDetail'
import PressureDetail from './pages/markdown-config/PressureDetail'
import VortexDetail from './pages/markdown-config/VortexDetail'
import TemperatureDetail from './pages/markdown-config/TemperatureDetail'
import ThermalDetail from './pages/markdown-config/ThermalDetail'
import LiquidDetail from './pages/markdown-config/LiquidDetail'
import InductiveDetail from './pages/markdown-config/InductiveDetail'
// 导入传感器详情页面
import TemperatureSensor from './pages/products/Sensor/temperature-sensor'
import ThermalFlowSensor from './pages/products/Sensor/thermal-flow-sensor'
import VortexFlowSensor from './pages/products/Sensor/vortex-flow-sensor'
import PressureSensor from './pages/products/Sensor/pressure-sensor'
import LiquidLevelSensor from './pages/products/Sensor/liquid-level-sensor'
import InductiveProximitySensor from './pages/products/Sensor/inductive-proximity-sensor'
import PrivacyPolicyPage from './pages/PrivacyPolicy'

function AppContent() {
  const { isEUOrUS, loading, location } = useGeoLocation()
  const { acceptAllCookies, acceptNecessaryOnly, isPending, policyChanged, acknowledgePolicyChange } = useCookieConsent()

  // 配置选项：是否启用地理位置检测
  const ENABLE_GEO_LOCATION = true // 设置为true时，根据IP决定是否显示弹窗

  // 显示cookie弹窗的逻辑：
  // - 如果禁用地理位置检测：所有用户自动同意，不显示弹窗
  // - 如果启用地理位置检测：
  //   * 地理位置加载中：不显示弹窗
  //   * 地理位置加载完成且用户还未做出选择：
  //     * 欧洲或美国用户：显示弹窗
  //     * 地理位置获取成功且非欧洲/美国用户：自动同意，不显示弹窗
  //     * 地理位置获取失败：显示弹窗（保守处理，确保合规）
  const shouldShowCookieConsent = ENABLE_GEO_LOCATION
    ? (!loading && isPending && (isEUOrUS || location === null))
    : false // 禁用时不显示弹窗

  // 对于非欧洲/美国用户，自动同意所有cookie
  useEffect(() => {
    if (!ENABLE_GEO_LOCATION) {
      // 如果禁用地理位置检测，所有用户自动同意cookie
      if (isPending) {
        console.log('地理位置检测已禁用，自动同意所有cookie')
        acceptAllCookies()
        acknowledgePolicyChange()
      }
      return
    }

    if (!loading && !isPending && !isEUOrUS && location !== null) {
      // 用户已同意cookie，不需要额外操作
      return
    }

    if (!loading && isPending && !isEUOrUS && location !== null) {
      // 非欧洲/美国用户自动同意所有cookie
      console.log('非欧盟/美国用户，自动同意所有cookie')
      acceptAllCookies()
      acknowledgePolicyChange()
    }
  }, [loading, isPending, isEUOrUS, location, acceptAllCookies, acknowledgePolicyChange, ENABLE_GEO_LOCATION])


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/io-module" element={<IOModule />} />
          <Route path="/products/sensor" element={<Sensor />} />
          <Route path="/products/io-link" element={<IOLink />} />
          <Route path="/products/connectivity" element={<Connectivity />} />
          <Route path="/products/new-page1" element={<NewPage1 />} />
          <Route path="/products/relay-module" element={<RelayModule />} />
          {/* 传感器详情页面路由 */}
          <Route path="/products/sensor/temperature-sensor" element={<TemperatureSensor />} />
          <Route path="/products/sensor/thermal-flow-sensor" element={<ThermalFlowSensor />} />
          <Route path="/products/sensor/vortex-flow-sensor" element={<VortexFlowSensor />} />
          <Route path="/products/sensor/pressure-sensor" element={<PressureSensor />} />
          <Route path="/products/sensor/liquid-level-sensor" element={<LiquidLevelSensor />} />
          <Route path="/products/sensor/inductive-proximity-sensor" element={<InductiveProximitySensor />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/solutions/:solutionId" element={<SolutionsDetail />} />
          <Route path="/products/io-link/:productId" element={<IOLinkDetail />} />
          <Route path="/products/connectivity/:productId" element={<ConnectivityDetail />} />
          <Route path="/products/inductive-proximity/:productId" element={<InductiveDetail />} />
          <Route path="/products/pressure/:productId" element={<PressureDetail />} />
          <Route path="/products/vortex/:productId" element={<VortexDetail />} />
          <Route path="/products/thermal/:productId" element={<ThermalDetail />} />
          <Route path="/markdown-config/liquid/:productId" element={<LiquidDetail />} />
          <Route path="/markdown-config/:id" element={<TemperatureDetail />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
           <Route path="/products/relay-module/:productId" element={<RelayModuleDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />


      <CookieConsent
        isVisible={shouldShowCookieConsent}
        onAcceptAll={() => {
          acceptAllCookies()
          acknowledgePolicyChange()
        }}
        onAcceptNecessary={() => {
          acceptNecessaryOnly()
          acknowledgePolicyChange()
        }}
        policyChanged={policyChanged}
        onAcknowledgePolicyChange={acknowledgePolicyChange}
      />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
