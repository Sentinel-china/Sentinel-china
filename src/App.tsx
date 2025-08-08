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
// 导入传感器详情页面
import Sensor01 from './pages/products/Sensor/sensor01'
import Sensor02 from './pages/products/Sensor/sensor02'
import Sensor03 from './pages/products/Sensor/sensor03'
import Sensor04 from './pages/products/Sensor/sensor04'
import Sensor05 from './pages/products/Sensor/sensor05'
import Sensor06 from './pages/products/Sensor/sensor06'

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
            <Route path="/products/sensor/sensor01" element={<Sensor01 />} />
            <Route path="/products/sensor/sensor02" element={<Sensor02 />} />
            <Route path="/products/sensor/sensor03" element={<Sensor03 />} />
            <Route path="/products/sensor/sensor04" element={<Sensor04 />} />
            <Route path="/products/sensor/sensor05" element={<Sensor05 />} />
            <Route path="/products/sensor/sensor06" element={<Sensor06 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:solutionId" element={<SolutionsDetail />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
