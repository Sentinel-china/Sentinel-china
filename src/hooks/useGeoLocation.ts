import { useState, useEffect } from 'react'

interface GeoLocationData {
  country: string
  countryCode: string
  region: string
  city: string
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // 使用ipapi.co获取地理位置信息
        const response = await fetch('https://ipapi.co/json/')
        if (!response.ok) {
          throw new Error('Failed to fetch location')
        }
        const data: GeoLocationData = await response.json()
        setLocation(data)
      } catch (err) {
        console.error('Error fetching location:', err)
        setError('Unable to determine location')
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  // 检查是否为欧洲或美国地区
  const isEUOrUS = () => {
    if (!location) return false

    // 欧洲国家代码列表
    const euCountries = [
      'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
      'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
      'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'UK'
    ]

    // 美国国家代码
    const usCountry = 'US'

    return euCountries.includes(location.countryCode) || location.countryCode === usCountry
  }

  return {
    location,
    loading,
    error,
    isEUOrUS: isEUOrUS()
  }
}
