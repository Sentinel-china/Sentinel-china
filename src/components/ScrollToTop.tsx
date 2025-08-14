import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * 全局路由滚动复位组件
 * - 无 hash: 路由切换滚动到顶部
 * - 有 hash: 尝试滚动到对应元素，并考虑固定导航栏的高度偏移
 */
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const NAV_OFFSET = 80

    if (location.hash) {
      // 处理锚点定位，等待微任务后查询元素，确保页面完成渲染
      const id = location.hash.substring(1)
      const tryScrollToAnchor = () => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const y = rect.top + window.pageYOffset - NAV_OFFSET
          window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
          return true
        }
        return false
      }

      // 多次尝试，避免内容晚于路由渲染
      if (!tryScrollToAnchor()) {
        setTimeout(tryScrollToAnchor, 100)
        setTimeout(tryScrollToAnchor, 300)
      }
    } else {
      // 无锚点时回到顶部
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return null
}


