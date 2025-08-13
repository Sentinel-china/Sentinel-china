/**
 * 主应用路由组件
 * 配置网站的路由结构和页面导航
 */
import { HashRouter, Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import AboutPage from './pages/About'
import SolutionsPage from './pages/Solutions'
import ContactPage from './pages/Contact'
import IOModule from './pages/products/IOModule'
import Sensor from './pages/products/Sensor'
import IOLink from './pages/products/IOLink'
import Connectivity from './pages/products/Connectivity'
import NewPage1 from './pages/products/NewPage1'
import NewPage2 from './pages/products/NewPage2'
import SolutionsDetail from './pages/markdown-config/SolutionsDetail'
import ProductDetail from './pages/markdown-config/ProductDetail'
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

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/io-module" element={<IOModule />} />
            <Route path="/products/sensor" element={<Sensor />} />
            <Route path="/products/io-link" element={<IOLink />} />
            <Route path="/products/connectivity" element={<Connectivity />} />
            <Route path="/products/new-page1" element={<NewPage1 />} />
            <Route path="/products/new-page2" element={<NewPage2 />} />
            {/* 传感器详情页面路由 */}
            <Route path="/products/sensor/temperature-sensor" element={<TemperatureSensor />} />
            <Route path="/products/sensor/thermal-flow-sensor" element={<ThermalFlowSensor />} />
            <Route path="/products/sensor/vortex-flow-sensor" element={<VortexFlowSensor />} />
            <Route path="/products/sensor/pressure-sensor" element={<PressureSensor />} />
            <Route path="/products/sensor/liquid-level-sensor" element={<LiquidLevelSensor />} />
            <Route path="/products/sensor/inductive-proximity-sensor" element={<InductiveProximitySensor />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
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
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
