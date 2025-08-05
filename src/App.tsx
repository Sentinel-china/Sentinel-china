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
import CloudServiceDetail from './pages/products/CloudServiceDetail'
import SolutionDetail from './pages/solutions/SolutionDetail'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/cloud-service" element={<CloudServiceDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
